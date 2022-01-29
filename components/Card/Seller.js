import {
  DownloadIcon,
  MusicNoteIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Seller(props) {
  function handleClick() {
    const walletAddress = props.userProfile.get("ethAddress");
    navigator.clipboard.writeText(walletAddress);
  }

  const [download, setDownload] = useState(true);

  function showTicket() {
    setDownload(false);
  }
  function showDownload() {
    setDownload(true);
  }

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-500/[0.5] rounded-full mx-2 pl-2 pr-2">
      <div>
        {download ? (
          <MusicNoteIcon
            onClick={showTicket}
            className="h-4 w-4 text-white "
            alt="digital download"
          />
        ) : (
          <TicketIcon onClick={showDownload} className="h-4 w-4 text-white" />
        )}
        {/* <DownloadIcon className="h-4 w-4 text-white hover:text-red-600" alt="digital download"/> */}
      </div>
      <p
        className="font-bold text-sm text-white hover:text-teal-300 hover:cursor-pointer"
        onClick={handleClick}
      >
        {props.userProfile ? props.userProfile.get("username") : ""}
      </p>
    </div>
  );
}

export default Seller;
