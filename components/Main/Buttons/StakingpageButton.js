import { useRouter } from "next/router"
import { LightningBoltIcon } from "@heroicons/react/outline"


function StakingpageButton() {

    const router = useRouter();  

    function openStaking() {
        router.push(`/staking`);
    }

    return(
        <button className="flex items-center space-x-2 hover:text-white active:text-teal-300"
                onClick={openStaking}>
                    <LightningBoltIcon className="h-5 w-5 "/>
                    <p >Staking</p>
        </button>
    )
}

export default StakingpageButton