import { DownloadIcon, TicketIcon } from "@heroicons/react/outline"

function Seller(props) {


    function handleClick() {
        const walletAddress = props.userProfile.get("ethAddress");
        navigator.clipboard.writeText(walletAddress);
}

    return (
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-500/[0.5] rounded-full mx-2 pl-2 pr-2">
            <div>
{/* TODO: download ? ticket */}
            <DownloadIcon className="h-4 w-4 text-white hover:text-red-600" alt="digital download"/>
            {/* <TicketIcon className="h-4 w-4 text-white"/> */}
            </div>
                <p className="font-bold text-sm text-white hover:text-teal-300 hover:cursor-pointer"
                    onClick={handleClick}
                    >{props.userProfile ? props.userProfile.get("username") : ""}</p>
        </div>
     
    )
}

export default Seller
