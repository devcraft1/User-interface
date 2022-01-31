import { HeartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Seller from "./Seller";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import {
  MarketplaceABI,
  marketplaceAddress,
} from "../../contracts/MarketplaceContract";

function CardOnSale(props) {
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

  async function contractCallPurchase() {
    const web3Provider = await Moralis.enableWeb3();
    const ethers = Moralis.web3Library;
    // const option = { value: (props.data.recordPrice ** 18).toString() };
    const options = {
      value: ethers.utils.parseEther(props.data.recordPrice.toString()),
    };
    console.log(options);

    const contract = new ethers.Contract(
      marketplaceAddress,
      MarketplaceABI,
      web3Provider.getSigner()
    );
    contract
      .purchaseToken(props.data.listing_id, "1", options)
      .then((result) => {
        alert("transaction successful");
      });
  }

  function purchaseAlbum() {
    console.log(props.data.recordPrice.toString());
    contractCallPurchase();
  }

  return (
    <div className="w-64 h-96 flex flex-col items-center border-r border-b-2 rounded-xl shadow-xl mr-4 ml-4 mb-4 mt-4">
      <div className="border-b w-48 flex justify-between items-center p-2">
        <h1 className="tracking-wider text-gray-800">
          {props.data.recordTitle}
        </h1>
        {!isLiked ? (
          <HeartIcon
            onClick={likeItem}
            className="h-5 w-5 hover:cursor-pointer text-gray-400"
          />
        ) : (
          <HeartIcon
            className="h-5 w-5 hover:cursor-pointer text-red-600"
            onClick={dislikeItem}
          />
        )}
      </div>
      <div className="flex items-center my-2 pt-1">
        <Image
          width={175}
          height={175}
          src={props.data.recordCover || "/avso.png"}
          // src={"/avso.png"}
          alt="Item"
          className="rounded-xl shadow-xl"
        />
      </div>
      <div className="flex flex-col w-64 py-1">
        <Seller userProfile={props.data.username} />

        <div className="py-4 flex flex-col text-sm">
          <div className="flex flex-row justify-between mb-2">
            <h1 className="pl-4 font-semibold text-white">
              {props.data.recordArtist}
            </h1>
            <p className="pl-4 text-white text-xs mr-4 items-center justify-center">
              {props.data.recordCount} Records
            </p>
          </div>
          <div className="pl-4 text-white">{props.data.tracksIncluded}</div>
        </div>
        <div className="flex items-center justify-between rounded-full mx-2 pl-4 pr-4">
          <div className="flex items-center justify-items-center space-x-2">
            <div className="flex flex-row items-center pr-2">
              {props.data.recordPrice} AVAX
            </div>
            <Image
              width={15}
              height={15}
              src={"/avax1.png"}
              // src={props.data.recordCover}
              alt="Item"
              className="rounded-xl shadow-xl"
            />
          </div>
          <button
            className="text-sm text-black bg-teal-300 rounded-full px-2 hover:shadow-xl 
                                active:text-white active:border-b-2 active:border-teal-300 active:bg-teal-700 border-b-2 border-black"
            onClick={() => purchaseAlbum(props.data)}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOnSale;
