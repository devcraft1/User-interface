import GeneralInputs from "./GeneralInputs";
import TokenInputs from "./TokenInputs";
import SongName from "./SongName";
import { useEffect } from "react";
import Moralis from "moralis/types";

function Mintpage() {
  // // UPLOAD FILES
  // async function uploadFiles() {

  //     const data = fileInput.files[0]
  //     const file = new Moralis.File(data.name, data)
  //     await file.saveIPFS();
  // }
  // // UPLOAD METADATA
  // async function uploadMetadata() {
  //     const object = {
  //         "key" : "value"
  //     }
  //     const file = new Moralis.File("file.json", {base64 : btoa(JSON.stringify(object))});
  //     await file.saveIPFS();
  // }

  // HARSH's PROPOSAL for IPFS IMPLEMENTATION BELOW

  useEffect(() => {
    if (!chainId) return null;
    // AVAX CHAIN ID below
    if (chainId === "0xa86a") {
      setNftContractAddress("insert address here");
      console.log("contract address changed");
    } else if (chainId === "0x61") {
      setNftContractAddress("insert address here");
      console.log("contract address has been changed");
    } else if (chainId === "0x13881") {
      setNftContractAddress("insert addy");
      console.log("contract addy changed");
    }
  }, [chainId]);

  const createRecord = async () => {
    // STORING COVER ARTWORK
    const fileInput = document.getElementById("file");
    const data = fileInput.files[0];
    const imageFile = new Moralis.File(data.name, data);
    await imageFile.saveIPFS();

    // storing Metadata

    const imageURI = imageFile.ipfs();
    const metadata = {
      name: document.getElementById("metadataRecordName").value,
      description: document.getElementById("metadataDescription").value,
      image: imageURI,
    };

    const metadataFile = new Moralis.File("metadata.json", {
      base64: btoa(JSON.stringify(metadata)),
    });
    await metadataFile.saveIPFS();
    const metadataURI = metadataFile.ipfs();
    console.log(metadataURI);
    alert("Upload successfull");

    // minting

    const txt = await mintToken(metadataURI).then((result) => {
      console.log(result);
      alert("Token minted");
    });
  };

  // explanation:

  // metadata Name = Record Title Name
  // metadata Image = Cover Artwork
  // metadata ArtistName = Artistname -- missing -
  // metadata description should include 1-4 song titles and potentially the artist name if its not possible to store that in an additional metadata name tag solution array of minimum 2 items, max 5 ?
  // metadata songfiles = a zip file including WAV & MP3 song files

  async function createAlbum(e) {
    e.preventDefault();
    alert("successfully minted");
  }

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
        <div className="mt-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
          Create Record
        </div>
        <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
          <div className=" w-9/12 flex flex-row justify-evenly">
            <GeneralInputs />
            <TokenInputs />
          </div>
          <div className="flex flex-col w-11/12 py-2 border-b"></div>
          <SongName />
          <div className="flex flex-row w-full justify-evenly items-center">
            <div className="flex flex-col bg-black opacity-95 py-1 mt-8 w-4/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
              <button
                onClick={createAlbum}
                className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300"
              >
                Mint Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mintpage;
