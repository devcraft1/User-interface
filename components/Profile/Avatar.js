import Image from "next/image";
import { userInfo } from "os";
import { useMoralis } from "react-moralis";

function Avatar() {
  // const { user } = useMoralis();

  // username = user.get("username");

  return (
    <div>
      <Image
        width={125}
        height={125}
        src="/FP.png"
        alt="Item"
        className="rounded-full"
      />
      {/* <Image width={125} height={125} src={`https://avatars.dicebear.com/api/identicon/felix.svg `} alt="Item" className="rounded-full" /> */}
    </div>
  );
}

export default Avatar;
