import Header from "../components/Main/Header";
import Sidebar from "../components/Main/Sidebar";
import StakingPage from "../components/Staking/StakingPage";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function minter() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <div className="bg-gradient-to-b from-black to-gray-500/5 h-screen overflow-y-scroll">
      <Head>
        <title>AVAS Staking</title>
        <link rel="icon" href="/Avax_logo.png" />
      </Head>

      <Header />
      <main className="flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden">
        <Sidebar />
        <div className="flex flex-col items-center mx-auto w-full">
          <section
            className={`sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-white`}
          >
            <div className="flex justify-center items-center mb-4">
              {/* <h1>STAKING</h1> */}
            </div>
          </section>
          <div className="w-6/12">
            <StakingPage />
          </div>
        </div>
      </main>
    </div>
  );
}

export default minter;
