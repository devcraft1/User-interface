import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Main/Header';
import Main from '../components/Main/Main';
import Sidebar from '../components/Main/Sidebar';
import { useEffect } from 'react';


export default function Home() {

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  



  if(!isAuthenticated) return <Login />;

  return (
    <div className="bg-gradient-to-b from-black to-gray-500/5 h-screen overflow-hidden"> 
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
      <main className='flex overflow-y-scroll h-screen scrollbar-hide overflow-hidden"'>
        <Sidebar />
        <Main />
        </main>
    </div>
  )
}



// overflow-auto scrollbar-hide for head div