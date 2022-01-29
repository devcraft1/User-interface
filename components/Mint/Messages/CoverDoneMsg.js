import { RefreshIcon } from "@heroicons/react/outline";

function CoverDoneMsg() {
  return (
    <div className="flex flex-row items-center justify-center space-x-1">
      <div>Cover done, uploading music...</div>
      <RefreshIcon className="h-4 w-4" />
    </div>
  );
}

export default CoverDoneMsg;
