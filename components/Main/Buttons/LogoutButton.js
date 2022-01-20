import { useRouter } from "next/router"
import { LogoutIcon } from "@heroicons/react/outline"
import { useMoralis } from "react-moralis";



function LogoutButton() {

    const router = useRouter();  
    const { logout } = useMoralis();


    function userLogout() {
        logout();
        router.push(`/`);
    }

    return(
        <button className="flex items-center space-x-2 hover:text-white active:text-teal-300">
                    <LogoutIcon className="h-5 w-5 "/>
                    <p onClick={userLogout}>Logout</p>
        </button>
    )
}

export default LogoutButton