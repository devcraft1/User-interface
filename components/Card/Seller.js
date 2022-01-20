import { DownloadIcon, TicketIcon } from "@heroicons/react/outline"
import { useMoralis } from "react-moralis"


function Seller() {

    const { user } = useMoralis();

    // const username = user.getUsername() ;
    const Seller = "seller"
    // const walletAddress = user.get("ethAddress");

    function handleClick() {
        navigator.clipboard.writeText(walletAddress);
}


    return (
        
        <div className="flex items-center justify-between bg-gradient-to-r from-gray-500/[0.5] rounded-full mx-2 pl-2 pr-2">
            <div>
{/* Type NFT */}
{/* TODO: download ? ticket */}
            <DownloadIcon className="h-4 w-4 text-white hover:text-red-600" alt="digital download"/>
            {/* <TicketIcon className="h-4 w-4 text-white"/> */}
            </div>
                <p className="font-bold text-sm text-white hover:text-teal-300 hover:cursor-pointer"
                    onClick={() => {handleClick}}
                    >{Seller}</p>
        </div>
     
    )
}

export default Seller
