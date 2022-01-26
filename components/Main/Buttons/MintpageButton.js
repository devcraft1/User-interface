import { useRouter } from "next/router";
import { PlusCircleIcon } from "@heroicons/react/outline";

function MintpageButton() {
  const router = useRouter();

  function openMintpage() {
    router.push(`/minter`);
  }

  return (
    <button
      className="flex items-center space-x-2 hover:text-white active:text-teal-300"
      onClick={openMintpage}
    >
      <PlusCircleIcon className="h-5 w-5 " />
      <p>Mint Record</p>
    </button>
  );
}

export default MintpageButton;
