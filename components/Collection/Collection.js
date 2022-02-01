import Card from "../Card/Card";
import CardPurchased from "../Card/CardPurchased";
import Header from "../Main/Header";
import Sidebar from "../Main/Sidebar";
import { MoralisContext, useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { TokenAddress } from "../../contracts/TokenContract";
import Bottom from "../Main/Bottom";

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
  const [items, setItems] = useState([]);
  const [purchased, setPurchased] = useState([]);

  const [openCreated, setOpenCreated] = useState(true);
  const [openPurchased, setOpenPurchased] = useState(false);

  function openBought() {
    setOpenPurchased(true);
    setOpenCreated(false);
  }

  function openMinted() {
    setOpenCreated(true);
    setOpenPurchased(false);
  }

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (user) {
      setUserProfile(user);

      const Album = Moralis.Object.extend("Album");
      const query = new Moralis.Query(Album);
      query.equalTo("owner", user.get("ethAddress"));

      if (openCreated) {
        query.find().then((results) => {
          setItems(results);
        });
      } else {
        // setItems([]);
        Moralis.Cloud.run("getDownloadTokensPurchased", {
          owner: user.get("ethAddress"),
          token_address: TokenAddress.toLowerCase(),
        }).then((results) => {
          setPurchased(results);
        });
      }
    }
  }, [isAuthenticated, isWeb3Enabled, user, openCreated, openPurchased]);

  return (
    <div className="bg-gradient-to-b from-white to-teal-600 h-screen overflow-hidden">
      <Header />
      <main className='flex overflow-y-scroll h-screen scrollbar-hide overflow-hidden"'>
        <Sidebar />

        <div className="flex flex-col w-full items-center p-12 mx-auto">
          <section className="sticky flex w-8/12 flex-col justify-center items-center space-x-8 bg-transparent h-12 mx-48 border-b border-teal-600 text-gray-800 padding-4 mb-8">
            <h1 className="text-lg mb-8">User Collection</h1>
          </section>

          <div className="flex flex-row space-x-8 items-center justify-content">
            {!openCreated ? (
              <button
                className="text-sm w-24 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
              active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                onClick={openMinted}
              >
                Created
              </button>
            ) : (
              <button
                className="text-sm w-24 mt-4 items-center text-black rounded-full px-2 py-1 hover:shadow-xl 
            active:text-white active:border-b border-teal-300 bg-teal-500 mb-4 border-b-2"
                onClick={openMinted}
              >
                Created
              </button>
            )}
            {!openPurchased ? (
              <button
                className="text-sm w-24 mt-4 items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
              active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4 border-b-2 border-black"
                onClick={openBought}
              >
                Purchased
              </button>
            ) : (
              <button
                className="text-sm w-24 mt-4 items-center text-black rounded-full px-2 py-1 hover:shadow-xl 
            active:text-white active:border-b border-teal-300 bg-teal-500 mb-4 border-b-2"
                onClick={openMinted}
              >
                Purchased
              </button>
            )}
          </div>

          {openCreated && (
            <div className="flex w-9/12 flex-wrap justify-center mt-10">
              {items.map((data, index) => (
                <Card data={data} key={index} />
              ))}
            </div>
          )}
          {openPurchased && (
            <div className="flex w-9/12 flex-wrap justify-center mt-10">
              {purchased.map((data, index) => (
                <CardPurchased data={data} key={index} />
              ))}
            </div>
          )}
          <Bottom />
        </div>
      </main>
    </div>
  );
}

export default Collection;
