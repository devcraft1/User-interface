import { FireIcon, HeartIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Seller from "./Seller";
import Description from "./Description";
import Purchase from "./Purchase";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";

function Card() {
  const {
    user,
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

  return (
    <div className="w-64 h-96 flex flex-col items-center border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
      <div className="border-b w-48 flex justify-between items-center p-2">
        <h1 className="tracking-wider text-white">Record Title</h1>
        {/* <HeartIcon className="h-5 w-5 hover:text-red-700 hover:cursor-pointer"/> */}
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
          src="/Avatar.png"
          alt="Item"
          className="rounded-xl shadow-xl"
        />
      </div>
      <div className="flex flex-col w-64 py-1">
        <Seller userProfile={userProfile} />
        <Description />
        <Purchase />
      </div>
    </div>
  );
}

export default Card;
