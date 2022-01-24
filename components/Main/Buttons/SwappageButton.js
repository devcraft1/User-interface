import { useRouter } from "next/router";
import { CashIcon } from "@heroicons/react/outline";

function SwappageButton() {
  const router = useRouter();

  function openSwap() {
    router.push(`/wallet`);
  }

  return (
    <button
      className="flex items-center space-x-2 hover:text-white active:text-teal-300"
      onClick={openSwap}
    >
      <CashIcon className="h-5 w-5 " />
      <p>Wallet</p>
    </button>
  );
}

export default SwappageButton;
