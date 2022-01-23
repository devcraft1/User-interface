import { useMoralis, useNativeBalance } from "react-moralis";
import Image from "next/image";

function NativeBalance(props) {
  const { data: balance } = useNativeBalance(props);
  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return null;

  return (
    <div className="flex flex-row justify-evenly items-center p-2 text-teal-300 bg-black opacity-95 mt-4 mb-4 w-48 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
      <Image
        height={25}
        width={25}
        className="rounded-full pl-2 pr-2"
        src="/Avax_logo.png"
      />
      <div className="items-center justify-between space-x-2">
        {balance.formatted}
      </div>
    </div>
  );
}

export default NativeBalance;
