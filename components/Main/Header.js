import { CreditCardIcon } from "@heroicons/react/outline";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Chains from "../Chains/Chains";

export default function Header(user) {
  const router = useRouter();

  const { isAuthenticated, authenticate, logout } = useMoralis();

  function userLogout() {
    logout();
    router.push(`/`);
  }

  return (
    // <div className="sticky top-0  h-28 px-10 rounded-l-full bg-gradient-to-b from-gray-900/5 border-b-2 border-red-300 shadow-lg to-red-700 text-white flex items-center justify-between">
    <div className="sticky top-0  h-28 px-10 rounded-l-full bg-gradient-to-b from-gray-900/5 border-b-2 border-teal-300 shadow-lg to-teal-700 text-white flex items-center justify-between">
      <h1 className="">A V A S O U N D</h1>
      <div className="flex flex-row justify-between space-x-2">
        {/* <Chains /> */}
        <button
          //   className="text-sm text-black bg-red-300 rounded-full py-2 px-6
          //                     hover:shadow-xl active:text-white
          //                     active:border-b-2 active:border-red-300 active:bg-red-700
          //                     flex flex-row items-center"
          className="text-sm text-black bg-teal-300 rounded-full py-2 px-6
          hover:shadow-xl active:text-white
          active:border-b-2 active:border-teal-300 active:bg-teal-700
          flex flex-row items-center"
          onClick={!isAuthenticated ? authenticate : userLogout}
        >
          <CreditCardIcon className="h-7 w-7 pr-2" />
          {isAuthenticated ? "Disconnect" : "Connect Wallet"}
          {/* {isAuthenticated ? "Connected" : "Connect Wallet"} */}
        </button>
      </div>
    </div>
  );
}
