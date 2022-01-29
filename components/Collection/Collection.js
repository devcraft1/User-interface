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
    Moralis,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  const [userProfile, setUserProfile] = useState();
  const [albums, setAlbums] = useState([]);
  // console.log(user.get("ethAddress"));

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (user) {
      setUserProfile(user);

      const Album = Moralis.Object.extend("Album");
      const query = new Moralis.Query(Album);
      // query.notEqualTo("owner", "notactive");
      query.equalTo("owner", user.get("ethAddress"));
      query.find().then((results) => {
        // store results in state variable;
        setAlbums(results);
      });
    }
  }, [isAuthenticated, isWeb3Enabled, user]);

  return (
    // <div className="bg-gradient-to-b from-black to-teal-600 h-screen overflow-hidden">
    <div className="bg-gradient-to-b from-white to-teal-600 h-screen overflow-hidden">
      <Header />
      <main className='flex overflow-y-scroll h-screen scrollbar-hide overflow-hidden"'>
        <Sidebar />

        <div className="flex flex-col w-full items-center p-12 mx-auto">
          {/* <section className={`flex items-end space-x-7 bg-gradient-to-l to-black ${color} h-40 border-b text-white padding-8`}> */}
          <section
            className={`sticky flex w-8/12 flex-col justify-center items-center space-x-8 bg-transparent h-12 mx-48 border-b border-teal-600 text-gray-800 padding-4 mb-8`}
          >
            <h1 className="text-lg mb-8">User Collection</h1>
          </section>

          <div className="flex w-9/12 flex-wrap justify-center mt-10">
            {albums.map((data) => (
              <Card data={data} />
            ))}
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
