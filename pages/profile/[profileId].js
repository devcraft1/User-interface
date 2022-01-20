import Profile from "../../components/Profile/Profile"
import Sidebar from "../../components/Main/Sidebar"
import Header from "../../components/Main/Header"
import { BadgeCheckIcon, DuplicateIcon } from "@heroicons/react/outline"
import Image from "next/image"



import { useRouter } from "next/router";
import Avatar from "../../components/Profile/Avatar"
import { useMoralis } from "react-moralis"


//  import Hooks from Moralis to get Picture, Address, Username & Collection items

function Userprofile() {

    const router = useRouter();
    const { isAuthenticated, isInitialized } = useMoralis(); 
    const { user } = useMoralis();
    
    
    const walletAddress = user ? user.get("ethAddress") : "";
    const username = user ? user.getUsername() : walletAddress;
    const profileId = router.query.profileId;

    

    function copyAddress() {
        navigator.clipboard.writeText(walletAddress)
    }

    return (
            <div className="bg-gradient-to-b from-black to-gray-500/5 h-screen overflow-hidden">
                    <Header />
                <main className='flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden'>
                    <Sidebar />
                    <div className="flex flex-col items-center w-full">
                        <section className={`sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-white`}>
                            <div className="flex justify-center items-center mb-4">
                            {/* <Image width={125} height={125} src="/FP.png" alt="Item" className="rounded-full" /> */}
                            <Avatar/>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-row items-center mb-2">
                                    <h1 className="text-lg flex flex-row ">{username}
                                    <BadgeCheckIcon className="h-4 w-4 ml-2 text-teal-300"/>
                                    </h1>
                                </div>
                                <div onClick={copyAddress} className="text-xs hover:cursor-pointer active:text-teal-300 flex flex-row items-center"> 
                                    <DuplicateIcon className="h-3 w-3 mr-1"/>{walletAddress}
                                </div>
                            </div>
                            
                        </section> 
                        <div className="w-6/12">
                            <Profile />
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default Userprofile;

