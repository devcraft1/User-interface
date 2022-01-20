import Image from "next/image";
import { useMoralis } from "react-moralis"

function Avatar({username, logoutOnPress}) {

    const {user, logout} = useMoralis();
    return (
        <div 
        className="relative h-12 w-12 mx-auto">
            <Image
                src="/Avatar.png"
                // src={`https://avatars.dicebear.com/api/identicon/${username || user.get("username")}.svg`}
                layout="fill" 
                objectFit="cover"
                className="rounded-full rotate-180 cursor-pointer hover:opacity-75" 
                onClick={() => logoutOnPress && logout()}
            />
        </div>
            
        
    )
}

export default Avatar
