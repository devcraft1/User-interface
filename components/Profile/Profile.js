import ChangeUsername from "./ChangeUsername"
import { CollectionIcon, PlusCircleIcon, LightningBoltIcon } from "@heroicons/react/outline"
import CollectionButton from "../Main/Buttons/CollectionButton"
import MintpageButton from "../Main/Buttons/MintpageButton";
import StakingpageButton from "../Main/Buttons/StakingpageButton"



function Profile() {
            // FIX USER ID PROP WITH MORALIS


// Button functions
    function openMintpage() { 
        router.push(`/minter/`);
    }
  
   
    return (
        <div className="w-full">
        <div className="flex flex-col right-0 border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl px-2">
                <div className="py-2 mb-6 flex flex-col items-center">
                    <ChangeUsername />  
                </div>
                    <hr className="border-t-[0.1px] border-teal-300"/>
                        <div className="flex flex-row justify-between py-2 ">
                            <div className="w-48  text-white flex flex-col items-center">
                            <MintpageButton />
                            </div>
                            <div className="w-48 text-white flex flex-col items-center">
                                <CollectionButton />
                            </div>
                            <div className="w-48 text-white flex flex-col items-center">
                                <StakingpageButton />
                            </div>
                        </div> 
                </div>
        </div>

       
    )
}

export default Profile






