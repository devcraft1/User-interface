import { HeartIcon } from "@heroicons/react/solid";
import {
  CheckCircleIcon,
  DownloadIcon,
  MusicNoteIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Seller from "./Seller";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
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

  return (
    <div className="w-64 h-96 flex flex-col items-center border-r border-b-2 rounded-xl shadow-xl mr-4 ml-4 mb-4 mt-4">
      <div className="border-b w-48 flex justify-between items-center p-2">
        <h1 className="tracking-wider text-gray-800">
          {props.data.get("recordTitle")}
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
          // src={props.data.get("recordCover") || "/avso.png"}
          src={"/avso.png"}
          alt="Item"
          className="rounded-xl shadow-xl"
        />
      </div>
      <div className="flex flex-col w-64 py-1">
        <Seller userProfile={userProfile} />

        <div className="py-4 text-sm">
          <h1 className="pl-4 font-semibold text-white">
            {props.data.get("recordArtist")}
          </h1>
          <p className="pl-4 justify-between text-white">
            {props.data.get("tracksIncluded")}
          </p>
        </div>
        <div className="text-gray-800 items-center mx-2 mt-4 pl-2 pr-4">
          <div className="flex flex-row items-center justify-between">
            <p className="flex items-center justify-items-center space-x-2">
              {/* <div className="flex flex-row items-center pr-2">
                {props.data.get("recordPrice")} AVAX
              </div> */}
              <Image
                width={15}
                height={15}
                src={"/avax1.png"}
                alt="Item"
                className="rounded-xl shadow-xl"
              />
            </p>
            {!downloaded ? (
              <DownloadIcon
                onClick={downloadItems}
                className="h-5 w-5 hover:cursor-pointer hover:text-teal-400"
              />
            ) : (
              <CheckCircleIcon onClick={downloadItems} className="h-5 w-5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
