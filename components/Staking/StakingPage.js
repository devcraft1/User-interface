

function StakingPage() {


    return (
    <div className="flex w-full flex-col justify-center">
        <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
            <div className="mt-2 mb-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
                Supply Liquidity
            </div>
            <div className="flex flex-col  justify-center items-center w-full">
                <div className="flex flex-row w-full items-center justify-center space-x-8">
                    <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
                        AVAX / USDC
                    </div>
                    <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <button className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300">Deposit</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-row w-full items-center justify-center space-x-8">
                    <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
                        AVAX / AVS
                    </div>
                    <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <button className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300">Deposit</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full mb-8">
                <div className="flex flex-row w-full items-center justify-center space-x-8">
                    <div className=" text-white flex flex-col items-center bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full">
                        AVAX / WETH
                    </div>
                    <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <button className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300">Deposit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default StakingPage