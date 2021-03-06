import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Main/Sidebar";
import Header from "../components/Main/Header";
import { BadgeCheckIcon, DuplicateIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useEffect } from "react";
import Avatar from "../components/Profile/Avatar";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

const userprofile = (props) => {
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    user,
  } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const walletAddress = user ? user.get("ethAddress") : "";
  const username = user ? user.getUsername() : walletAddress;

  function copyAddress() {
    navigator.clipboard.writeText(walletAddress);
  }

  return (
    <div className="bg-gradient-to-b from-white to-teal-600 h-screen overflow-hidden">
      <Head>
        <title>Avasound Profile</title>
        <link rel="icon" href="/avso.png" />
      </Head>

      <Header />
      <main className="flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden">
        <Sidebar />
        <div className="flex flex-col items-center w-full">
          <section className="sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-gray-800">
            <div className="flex justify-center items-center mb-4">
              <Avatar />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center mb-2">
                <h1 className="text-lg flex flex-row ">
                  {username}
                  <BadgeCheckIcon className="h-4 w-4 ml-2 text-black" />
                </h1>
              </div>
              <div
                onClick={copyAddress}
                className="text-xs hover:cursor-pointer active:text-white flex flex-row items-center"
              >
                <DuplicateIcon className="h-3 w-3 mr-1" />
                {walletAddress}
              </div>
            </div>
          </section>
          <div className="w-6/12">
            <Profile />
          </div>
        </div>
      </main>
    </div>
  );
};

export default userprofile;
