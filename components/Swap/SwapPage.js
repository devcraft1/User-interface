import { ChevronDownIcon } from "@heroicons/react/outline";

function SwapPage() {
  async function executeSwap(e) {
    e.preventDefault();
    alert("successfully swapped");
  }

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
        <div className="mt-2 mb-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
          ASSET SWAP
        </div>
        <div className="flex flex-col  justify-center items-center w-full mb-4">
          {/* First Token Line */}
          <div className="flex flex-row w-full items-center justify-evenly">
            <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-6/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
              <p className="flex flex-row items-center justify-center">
                Token A
                <ChevronDownIcon className="h-5 w-5" />
              </p>
            </div>
            <input
              className="text-white flex flex-col justify-center items-center bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full text-center"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col  justify-center items-center w-full mb-4">
            {/* Second Token Line */}
            <div className="flex flex-row w-full items-center justify-evenly">
              <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-6/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
                <p className="flex flex-row items-center justify-center">
                  Token B
                  <ChevronDownIcon className="h-5 w-5" />
                </p>
              </div>
              <input
                className="text-white flex flex-col justify-center items-center bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full text-center"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-evenly items-center">
            <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
              <button
                onClick={executeSwap}
                className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300"
              >
                Swap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapPage;
