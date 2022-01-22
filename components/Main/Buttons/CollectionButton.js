import { useRouter } from "next/router"
import { useMoralis } from "react-moralis";
import { CollectionIcon } from "@heroicons/react/outline"


function CollectionButton() {

    const router = useRouter();
    const { user } = useMoralis();
    const userId = user ? user.get("objectId") : ""      

    function openUsercollection() {
        router.push(`/collection/${userId}`);
    }

    return(
        <button className="flex items-center space-x-2 hover:text-white active:text-teal-300"
        onClick={openUsercollection}>
            <CollectionIcon className="h-5 w-5 "/>
            <p >Collection</p>
        </button>
    )
}

export default CollectionButton