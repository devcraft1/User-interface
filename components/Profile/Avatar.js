import Image from "next/image";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

function Avatar() {
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    user,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  // const avatar = user.get("file");

  return (
    <div>
      <Image
        width={125}
        height={125}
        src="/avax1.png"
        alt="Item"
        className="rounded-full"
      />
      {/* <Image
        width={125}
        height={125}
        src={`https://avatars.dicebear.com/api/identicon/felix.svg `}
        alt="Item"
        className="rounded-full"
      /> */}
    </div>
  );
}

export default Avatar;
