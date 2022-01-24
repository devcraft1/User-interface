import { ByMoralis } from "react-moralis";
import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="border-t-2 border-blue-300 my-10"> */}
      <div className="border-t-2 border-teal-300 my-10">
        <h1 className="text-3xl mt-10 flex flex-start">
          Decentralized Music Marketplace
        </h1>
      </div>
      <p className="border-b-2 border-teal-300 mb-2 mt-2">
        A one stop music distribution service on avalanche.
      </p>
      <p className="border-b-2 border-teal-300 mb-2 mt-2">
        For record labels, musicians and fans alike.
      </p>
      <div>
        <div className="p-8 text-white">
          <p>Moralis x Avalanche Hackathon 2021/22</p>
        </div>
      </div>
      <div className="my-2 flex flex-row">
        {" "}
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Image
          width={115}
          height={50}
          src="/avax2.png"
          alt="Item"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default About;
