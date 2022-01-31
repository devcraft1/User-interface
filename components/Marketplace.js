import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import CardOnSale from "./Card/CardOnSale";
import Bottom from "./Main/Bottom";
import Sponsors from "./Main/Sponsors";

function Marketplace() {
  const {
    user,
    Moralis,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    const Album = Moralis.Object.extend("Album");
    const query = new Moralis.Query(Album);
    query.notEqualTo("owner", "notactive");
    // query.equalTo("owner", user.get("ethAddress"));

    Moralis.Cloud.run("getDownloadTokens", {
      token_id: "0x7595656ba326543413e5288e6aAef08b60699A17",
    }).then((results) => {
      setAlbums(results);
    });
  }, [isAuthenticated, isWeb3Enabled, user]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-9/12 flex-wrap justify-center mt-10">
        {albums.map((data, index) => (
          <CardOnSale data={data} key={index} />
        ))}
      </div>

      <Bottom />
      <Sponsors />

      <div className="m-12 flex flex-col text-black">A V A S O U N D</div>
    </div>
  );
}

export default Marketplace;
