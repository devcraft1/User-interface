
import { HomeIcon, LibraryIcon, UserCircleIcon, PlusCircleIcon, LightningBoltIcon, LogoutIcon, SwitchHorizontalIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useMoralis } from "react-moralis";
import CollectionButton from "../../components/Main/Buttons/CollectionButton"
import MintpageButton from "../../components/Main/Buttons/MintpageButton"
import StakingpageButton from "../../components/Main/Buttons/StakingpageButton"
import SwappageButton from "../../components/Main/Buttons/SwappageButton"
import LogoutButton from "../../components/Main/Buttons/LogoutButton"


export default function Sidebar() {

    const router = useRouter();
    const { isAuthenticated, logout, user } = useMoralis();

    const userId = user ? user.get("objectId") : "peflex"              // FIX USER ID PROP WITH MORALIS
    
    function openProfile() {
        router.push(`/profile/${userId}`)
    }
    function openMarketplace() {
        router.push(`/`)
    }

    // function openMintpage() {
        
    //     router.push(`/minter/`);
    // }


    return (
        <div className="fixed left-0 z-50 text-gray-300 px-8 text-sm border-r border-b rounded-xl shadow-xl mt-8">
            <div className="space-y-8 mt-8 mb-8 ">
                {/* <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-5 w-5 "/>
                    <p>Home</p>
                </button> */}
                <button className="flex items-center space-x-2 hover:text-white active:text-teal-300">
                    <LibraryIcon className="h-5 w-5 "/>
                    <p onClick={openMarketplace}>Market</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-white active:text-teal-300">
                    <UserCircleIcon className="h-5 w-5 "/>
                    <p onClick={openProfile}>Profile</p>
                </button>

                <CollectionButton />


                <hr className="border-t-[0.1px] border-teal-300"/>

                <MintpageButton />

                <StakingpageButton />

                <SwappageButton />

                {/* <button className="flex items-center space-x-2 hover:text-white">
                    <SwitchHorizontalIcon className="h-5 w-5 "/>
                    <p>Swap</p>
                </button> */}

                <hr className="border-t-[0.1px] border-teal-300"/>

                {/* <button 
                    onClick={logout}
                    className="flex items-center space-x-2 hover:text-white active:text-teal-300">
                    <LogoutIcon className="h-5 w-5"/>
                    <p>Logout</p>
                </button> */}

                <LogoutButton />

            </div>
        </div>
    )
}
