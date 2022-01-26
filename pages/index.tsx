import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Main/Header";
import Main from "../components/Main/Main";
import Sidebar from "../components/Main/Sidebar";
import { useEffect } from "react";

export default function Home() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  if (!isAuthenticated) return <Login />;

  return (
    <div className="bg-gradient-to-b from-black to-teal-600 h-screen overflow-hidden">
      <Head>
        <title>AVASOUND</title>
        <link rel="icon" href="/Avax_logo.png" />
      </Head>
      <Header />
      <main className='flex overflow-y-scroll h-screen scrollbar-hide overflow-hidden"'>
        <Sidebar />
        <Main />
      </main>
    </div>
  );
}
