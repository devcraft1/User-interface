import { useRouter } from "next/router"
import { SwitchHorizontalIcon } from "@heroicons/react/outline"


function SwappageButton() {

    const router = useRouter();  

    function openSwap() {
        router.push(`/swap`);
    }

    return(
        <button className="flex items-center space-x-2 hover:text-white active:text-teal-300"
                onClick={openSwap}>
                    <SwitchHorizontalIcon className="h-5 w-5 "/>
                    <p >Swap</p>
        </button>
    )
}

export default SwappageButton