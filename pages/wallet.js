import Header from "../components/Main/Header";
import Sidebar from "../components/Main/Sidebar";
import SwapPage from "../components/Swap/SwapPage";
import ERC20Balance from "../components/MoralisComp/ERC20Balance";
import ERC20Balances from "../hooks/useERC20Balances";
import NativeBalance from "../components/MoralisComp/NativeBalance";
import Head from "next/head";
import Bottom from "../components/Main/Bottom";

function swap() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-500/5 h-screen overflow-hidden">
      <Head>
        <title>AVAS Wallet</title>
        <link rel="icon" href="/Avax_logo.png" />
      </Head>

      <Header />
      <main className="flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden">
        <Sidebar />
        <div className="flex flex-col items-center mx-auto w-full">
          <section
            className={`sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-white`}
          >
            <div className="flex w-full flex-col justify-center">
              <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
                <div className="mt-2 mb-2 py-2 w-96 mx-2 items-center font-bold text-lg text-center text-white border-b ">
                  WALLET
                </div>
                <div className="flex flex-col items-center justify-center">
                  <NativeBalance />
                  <ERC20Balances />
                </div>
              </div>
            </div>
          </section>
          <div className="w-6/12">
            {/* <ERC20Balance /> */}
            {/* <SwapPage /> */}
            <Bottom />
          </div>
        </div>
      </main>
    </div>
  );
}

export default swap;
