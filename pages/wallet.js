import Header from "../components/Main/Header";
import Sidebar from "../components/Main/Sidebar";
import SwapPage from "../components/Swap/SwapPage";
import ERC20Balance from "../components/MoralisComp/ERC20Balance";
import ERC20Balances from "../hooks/useERC20Balances";
import NativeBalance from "../components/MoralisComp/NativeBalance";
import Head from "next/head";
import Bottom from "../components/Main/Bottom";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ModalSwap } from "../components/Swap/ModalSwap";
import { ModalSend } from "../components/Swap/ModalSend";
import Sponsors from "../components/Main/Sponsors";
import { XIcon } from "@heroicons/react/outline";

function swap() {
  // const { isAuthenticated } = useMoralis;
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [openModal, setOpenModal] = useState(false);
  const [openSend, setOpenSend] = useState(false);

  function handleClick() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  function handleOpenSend() {
    setOpenSend(true);
  }
  function closeSend() {
    setOpenSend(false);
  }

  return (
    <div className="bg-gradient-to-b from-white to-teal-600 h-screen overflow-hidden">
      <Head>
        <title>Avasound Wallet</title>
        <link rel="icon" href="/avso.png" />
      </Head>

      <Header />
      <main className="flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden">
        <Sidebar />
        <div className="flex flex-col items-center mx-auto w-full">
          <section
            className={`sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-gray-800 `}
          >
            <div className="flex w-full flex-col justify-center">
              <div className="flex flex-col items-center just w-full  border-r border-b-2 rounded-xl shadow-xl">
                <div className="mt-2 mb-2 py-2 w-96 mx-2 items-center font-bold text-lg text-center text-gray-800 border-b border-teal-600">
                  WALLET
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NativeBalance />
                  <ERC20Balances />
                </div>
              </div>
            </div>
          </section>
          <div className="w-9/12 flex flex-col items-center justify-evenly">
            <div className="flex flex-row space-x-4">
              {!openModal && !openSend && (
                <button
                  className="text-sm w-24 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                  onClick={handleClick}
                >
                  Swap
                </button>
              )}
              {!openSend && !openModal && (
                <button
                  className="text-sm w-24 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                  active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                  onClick={handleOpenSend}
                >
                  Send
                </button>
              )}
            </div>
            {openModal && <ModalSwap />}
            {openModal && (
              <button
                className="text-sm w-9 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
              active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                onClick={closeModal}
              >
                <XIcon className="h-5 w-5" />
              </button>
            )}
            {openSend && <ModalSend />}
            {openSend && (
              <button
                className="text-sm w-9 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                onClick={closeSend}
              >
                <XIcon className="h-5 w-5" />
              </button>
            )}
            <Bottom />
            {/* <Sponsors /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default swap;
