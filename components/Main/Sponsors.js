import Image from "next/image";
import { ByMoralis } from "react-moralis";

function Sponsors() {
  return (
    <div className="my-2 flex flex-row justify-center">
      {" "}
      <ByMoralis
        variant="dark"
        // style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Image
        width={115}
        height={50}
        src="/avax2.png"
        alt="Item"
        className="rounded-full"
      />
    </div>
  );
}

export default Sponsors;
