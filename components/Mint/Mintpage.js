import { PlusCircleIcon, UserAddIcon } from "@heroicons/react/outline"
import { MoralisContext, useMoralis } from "react-moralis"
import GeneralInputs from "./GeneralInputs"
import TokenInputs from "./TokenInputs"
import SongName from "./SongName"

function Mintpage() {


const { user , isAuthenticated, Moralis} = useMoralis();

// const getData = () => {
//     const Albums = Moralis.Object.extend("Albums");
//     const query = new Moralis.Query(User);
//   }; 

async function createAlbum(e) {
    // e.preventDefault();
    const web3Provider = await Moralis.enableWeb3();
}


    return (
        <div className="flex w-full flex-col justify-center">
            <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
                <div className="mt-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
                    Create Record
                </div>
                <form className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
                    <div className=" w-9/12 flex flex-row justify-evenly">
{/*  General Inputs */}
                    <GeneralInputs />
                    
{/* TokenSpecific Inputs */}
                    <TokenInputs />
                    </div>
                    {/* <div className="w-4/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <input type="file" placeholder="Cover Art" className="bg-transparent outline:none focus:outline-none text-white text-center"/>
                    </div>
                    <div className="w-4/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        Cover Art^
                    </div> */}
                    <div className="flex flex-col w-11/12 py-2 border-b">   
                        
                        {/* TO BE IMPLEMENTED ON SEPARATE WINDOW */}
                        {/* <div className="flex flex-row justify-around items-center">
                            <div className="w-11/12 flex flex-row bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                                <input type="text" placeholder="Artist Address" className="bg-transparent outline:none focus:outline-none text-white"/>
                            </div>
                            <div className="w-2/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                                <input type="%" placeholder="%" className="text-center bg-transparent outline:none focus:outline-none text-white"/>
                            </div>
                            <div className="w-2/12 flex flex-col bg-black opacity-95 px-4 py-1.5 max-w-2xl shadow-xl border-2  border-teal-300/50 z-50 rounded-full hover:bg-black hover:border-teal-200 hover:text-teal-300">
                                <button className="flex flex-col bg-transparent outline:none focus:outline-none items-center text-gray-400 hover:text-white">
                                    <PlusCircleIcon className="h-5 w-5 "/>
                                </button>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="flex flex-col w-6/12 pb-4 border-b justify-evenly">   */}
                    <SongName />
                      
                            {/* <div className="w-2/12 flex flex-col bg-black opacity-95 px-4 py-1.5 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:bg-black hover:border-teal-200 hover:text-teal-300">
                                <button className="flex flex-col bg-transparent outline:none focus:outline-none items-center text-gray-400 hover:text-white">
                                    <PlusCircleIcon className="h-5 w-5"/>
                                </button>
                            </div>
                            <div className="w-2/12 flex flex-col bg-black opacity-95 px-4 py-1.5 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:bg-black hover:border-teal-200 hover:text-teal-300">
                                <button className="flex flex-col bg-transparent outline:none focus:outline-none items-center text-gray-400 hover:text-white">
                                    <PlusCircleIcon className="h-5 w-5"/>
                                </button>
                            </div> */}
                    {/* </div> */}

                    {/*  */}
                    {/* <div className="flex flex-col w-11/12 py-2 border-b">   
                        <div className="flex flex-row justify-evenly items-center">
                    <div className="w-11/12 flex flex-col bg-black opacity-95  py-1  shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <input type="n" placeholder="Number of Download Tokens" className="text-center bg-transparent outline:none focus:outline-none text-white"/>
                    </div>
                    <div className=" w-11/12 flex flex-col bg-black opacity-95  py-1  shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                        <input type="n" placeholder="Price" className="text-center bg-transparent outline:none focus:outline-none text-white"/>
                    </div>
                    </div>
                    </div> */}
                    <div className="flex flex-row w-full justify-evenly items-center">
                        {/* <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                            <button className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300">Save Draft</button>
                        </div> */}
                        <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                            <button 
                            onClick={createAlbum}
                            className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300">Mint Items</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Mintpage


