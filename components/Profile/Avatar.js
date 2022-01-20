import Image from "next/image"
import { useMoralis } from "react-moralis"



function Avatar({ username, logOutOnPress}) {

    const { user, logout } = useMoralis();

    return (
        <div>
            <Image width={125} height={125} src="/FP.png" alt="Item" className="rounded-full" />
            {/* <Image width={125} height={125} src={`https://avatars.dicebear.com/api/identicon/${user ? (username || user.get("username")) : "default" }.svg `} alt="Item" className="rounded-full" /> */}
        </div>
    )
}

export default Avatar
