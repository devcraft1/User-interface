import { ChevronDownIcon } from "@heroicons/react/outline";

function SwapPage() {
  async function executeSwap(e) {
    e.preventDefault();
    alert("successfully sent assets");
  }

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col items-center justify-center w-full  border-r border-b-2 border-black bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
        <div className="mt-2 mb-2 py-2 w-6/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
          SEND ASSETS
        </div>
        <div className="flex flex-col justify-center items-center w-full mb-4">
          {/* First Token Line */}
          <div className="flex flex-col w-full items-center justify-evenly">
            <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
              <p className="flex flex-row items-center justify-evenly space-x-4">
                Token
                <ChevronDownIcon className="h-5 w-5" />
              </p>
            </div>
            <input
              className="text-white flex flex-col mt-8 justify-center items-center bg-black opacity-95 py-1 w-6/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full text-center"
              placeholder="Recipient address"
            />
          </div>
          <div className="flex flex-col  justify-center items-center w-full mb-4">
            {/* Second Token Line */}
          </div>
          <div className="flex flex-row w-full justify-evenly items-center">
            <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
              <button
                onClick={executeSwap}
                className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPage;
