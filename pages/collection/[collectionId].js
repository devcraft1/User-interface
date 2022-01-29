import Collection from "../../components/Collection/Collection";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

function Usercollection() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <div>
      <Head>
        <title>Avasound Collection</title>
        <link rel="icon" href="/avso.png" />
      </Head>
      <Collection />
    </div>
  );
}

export default Usercollection;
