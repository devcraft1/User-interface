import {
  CheckCircleIcon,
  DownloadIcon,
  TagIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Seller from "./Seller";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import {
  MarketplaceABI,
  marketplaceAddress,
} from "../../contracts/MarketplaceContract";
import { TokenABI, TokenAddress } from "../../contracts/TokenContract";
// import Moralis from "moralis/types";
// import Description from "./Description";
// import Purchase from "./Purchase";
// import NFTBalance from "../MoralisComp/NFTBalance";

function Card(props) {
  const {
    user,
    Moralis,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  const [userProfile, setUserProfile] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [downloaded, setDownloaded] = useState();
  const [download, setDownload] = useState(true);
  const [isListed, setIsListed] = useState(props.data.get("listed"));

  const songFiles = props.data.get("recordFiles");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (user) {
      setUserProfile(user);
    }
  }, [isAuthenticated, isWeb3Enabled, user]);

  function likeItem() {
    setIsLiked(true);
  }
  function dislikeItem() {
    setIsLiked(false);
  }

  function downloadItems() {
    window.open(songFiles);
    setDownloaded(true);
  }

  async function contractCallListItem() {
    const web3Provider = await Moralis.enableWeb3();
    const ethers = Moralis.web3Library;

    const contract = new ethers.Contract(
      marketplaceAddress,
      MarketplaceABI,
      web3Provider.getSigner()
    );

    const price = ethers.utils.parseEther(
      props.data.get("recordPrice").toString()
    );
    contract
      .listToken(
        TokenAddress,
        props.data.get("token_id"),
        props.data.get("recordCount"),
        // props.data.get("recordPrice")
        price
      )
      .then((result) => {
        props.data.set("listed", true);
        props.data.save();
        alert("successfully listed on the marketplace.");
        setIsListed(true);
      });
  }

  function listItem() {
    contractCallListItem();
  }

  return (
    <div className="w-64 h-96 flex flex-col items-center border-r border-b-2 rounded-xl shadow-xl mr-4 ml-4 mb-4 mt-4">
      <div className="border-b w-48 flex justify-between items-center p-2">
        <h1 className="tracking-wider text-gray-800">
          {props.data.get("recordTitle")}
        </h1>
        <TagIcon className="h-5 w-5" />
      </div>
      <div className="flex items-center my-2 pt-1">
        <Image
          width={175}
          height={175}
          src={props.data.get("recordCover") || "/avso.png"}
          // src={"/avso.png"}
          alt="Item"
          className="rounded-xl shadow-xl"
        />
      </div>
      <div className="flex flex-col w-64 py-1">
        <Seller userProfile={user.getUsername()} />

        <div className="py-4 text-sm">
          <h1 className="pl-4 font-semibold text-white">
            {props.data.get("recordArtist")}
          </h1>
          <p className="pl-4 justify-between text-white">
            {props.data.get("tracksIncluded")}
          </p>
        </div>
        <div className="text-gray-800 items-center mx-2 mt-4 pl-2 pr-2">
          <div className="flex flex-row items-center justify-between">
            {!downloaded ? (
              <DownloadIcon
                onClick={downloadItems}
                className="h-5 w-5 hover:cursor-pointer hover:text-teal-400"
              />
            ) : (
              <CheckCircleIcon onClick={downloadItems} className="h-5 w-5" />
            )}
            {!isListed ? (
              <button
                className="text-sm text-black bg-teal-300 rounded-full px-2 hover:shadow-xl 
              active:text-white active:border-b-2 active:border-teal-300 active:bg-teal-700 border-b-2 border-black"
                onClick={listItem}
              >
                List
              </button>
            ) : (
              <div className="flex flex-row items-center justify-center space-x-2">
                <p className="text-sm">listed</p>
                <CheckCircleIcon className="h-4 w-4 ml-2 " />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
