import Card from "../Card/Card";
import Header from "../Main/Header";
import Sidebar from "../Main/Sidebar";
import Bottom from "../Main/Bottom";
import { MoralisContext, useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import NFTBalance from "../MoralisComp/NFTBalance";

function Collection() {
  const {
    user,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (user) {
      setUserProfile(user);
    }
  }, [isAuthenticated, isWeb3Enabled, user]);
  return (
    <div className="bg-gradient-to-b from-black to-teal-600 h-screen overflow-hidden">
      <Header />
      <main className='flex overflow-y-scroll h-screen scrollbar-hide overflow-hidden"'>
        <Sidebar />

        <div className="flex flex-col items-center p-12 mx-auto">
          {/* <section className={`flex items-end space-x-7 bg-gradient-to-l to-black ${color} h-40 border-b text-white padding-8`}> */}
          <section
            className={`sticky flex flex-col justify-center items-center space-x-8 bg-transparent h-12 mx-48 border-b text-white padding-4 mb-8`}
          >
            <h1 className="text-lg mb-8">User Collection</h1>
          </section>

          <div className="flex flex-wrap justify-evenly mx-auto space-x-16 mt-10">
            <Card />
            <Card />
            <Card />
          </div>

          {/* <Bottom/>     */}
          {/* <div className="m-12 flex flex-col text-black">
            Collection</div> */}
        </div>
      </main>
    </div>
  );
}

export default Collection;
