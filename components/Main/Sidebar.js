import { LibraryIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import CollectionButton from "../../components/Main/Buttons/CollectionButton";
import MintpageButton from "../../components/Main/Buttons/MintpageButton";
import StakingpageButton from "../../components/Main/Buttons/StakingpageButton";
import SwappageButton from "../../components/Main/Buttons/SwappageButton";
import LogoutButton from "../../components/Main/Buttons/LogoutButton";

export default function Sidebar() {
  const router = useRouter();
  const { isAuthenticated, logout, user } = useMoralis();

  const userId = user ? user.get("username") : "undefined"; // FIX USER ID PROP WITH MORALIS

  function openProfile() {
    router.push(`/profile/${userId}`);
  }
  function openMarketplace() {
    router.push(`/`);
  }

  return (
    <div className="fixed left-0 z-50 text-gray-300 px-8 text-sm border-r border-b rounded-xl shadow-xl mt-16">
      <div className="space-y-8 mt-8 mb-8 ">
        <button
          className="flex items-center space-x-2 hover:text-white active:text-teal-300"
          onClick={openMarketplace}
        >
          <LibraryIcon className="h-5 w-5 " />
          <p>Market</p>
        </button>

        <button
          className="flex items-center space-x-2 hover:text-white active:text-teal-300"
          onClick={openProfile}
        >
          <UserCircleIcon className="h-5 w-5 " />
          <p>Profile</p>
        </button>

        <CollectionButton />

        {/* <hr className="border-t-[0.1px] border-red-300" /> */}
        <hr className="border-t-[0.1px] border-teal-300" />

        <MintpageButton />

        <StakingpageButton />

        <SwappageButton />

        {/* <hr className="border-t-[0.1px] border-red-300" /> */}
        <hr className="border-t-[0.1px] border-teal-300" />

        <LogoutButton />
      </div>
    </div>
  );
}
