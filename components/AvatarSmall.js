import Image from "next/image";
import { useMoralis } from "react-moralis"

function Avatar({username, logoutOnPress}) {

    const {user, logout} = useMoralis();
    return (
        <div 
        className="relative h-8 w-8 p-2 mx-auto">
            <Image
                src="/Avatar.png"
                // src={`https://avatars.dicebear.com/api/identicon/${username || user.get("username")}.svg`}
                layout="fill" 
                objectFit="cover"
                className="rounded-full rotate-180" 
                onClick={() => logoutOnPress && logout()}
            />
        </div>
            
        
    )
}

export default Avatar