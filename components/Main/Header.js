import { CreditCardIcon } from "@heroicons/react/outline";
import { useMoralis } from "react-moralis";


export default function Header( user ) {

    // const { authenticate } = useMoralis();

    const isAuthenticated = useMoralis();
    
   


 

    return (
        <div className="sticky top-0  h-28 px-10 rounded-l-full bg-gradient-to-b from-gray-900/5 border-b-2 border-teal-300 shadow-lg to-teal-700 text-white flex items-center justify-between">
           <h1 className="">A V A S O U N D</h1>
            <div className="flex justify-between space-x-2">
            <button className="text-sm text-black bg-teal-300 rounded-full py-2 px-6 
                            hover:shadow-xl active:text-white 
                            active:border-b-2 active:border-teal-300 active:bg-teal-700
                            flex flex-row items-center"> 
                            <CreditCardIcon className="h-7 w-7 pr-2" 
                            // onClick={authenticate}
                            /> 
                            {!isAuthenticated ? "Connected" : "Connect Wallet" }
                            {/* {isAuthenticated ? "Connected" : "Connect Wallet"} */}
                            </button>
            </div>

        </div>
    )
}
