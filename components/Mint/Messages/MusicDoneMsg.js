import { RefreshIcon } from "@heroicons/react/outline";

function MusicDoneMsg() {
  return (
    <div className="flex flex-row items-center justify-center space-x-1">
      <div>Music done, confirming...</div>
      <RefreshIcon className="h-4 w-4" />
    </div>
  );
}

export default MusicDoneMsg;
