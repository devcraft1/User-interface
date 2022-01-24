import GeneralInputs from "./GeneralInputs";
import TokenInputs from "./TokenInputs";
import SongName from "./SongName";
import Web3 from "web3";
import { useMoralisFile, useMoralis } from "react-moralis";

function Mintpage() {
  const { saveFile } = useMoralisFile();
  const { Moralis, account } = useMoralis();

  let nftContractAddress = "0x351bbee7C6E9268A1BF741B098448477E08A0a53";

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

  async function saveFileToIPFS(file, filename) {
    await saveFile(filename, file, { saveIPFS: true }).then(async (hash) => {
      console.log(hash);
      return hash._ipfs;
      //   ipfsCover = hash._ipfs;
    });
  }

  // Take input from the user and create a new record
  async function createRecord() {
    // Get the values from the inputs
    const recordTitle = document.getElementById("recordTitle").value;
    const recordArtist = document.getElementById("recordArtist").value;
    const recordCover = document.getElementById("recordCover").files[0];
    const recordCount = document.getElementById("recordCount").value;
    const recordPrice = document.getElementById("recordPrice").value;
    const recordFiles = document.getElementById("recordFiles").files[0];

    // upload the cover art to ipfs
    // let ipfsCover = async () => {
    //   await saveFileToIPFS(recordCover, "cover");
    // };
    // console.log("almost there");
    // let ipfsFiles = async () => {
    //   await saveFileToIPFS(recordFiles, "files");
    // };
    let ipfsCover = "";
    let ipfsFiles = "";
    if (recordCover) {
      console.log("uploading");
      await saveFile("cover", recordCover, { saveIPFS: true }).then(
        async (hash) => {
          console.log(hash);
          ipfsCover = hash._ipfs;
        }
      );
      console.log("almost there");
    }

    if (recordFiles) {
      await saveFile("recordFiles", recordFiles, { saveIPFS: true }).then(
        async (hash) => {
          console.log(hash);
          ipfsFiles = hash._ipfs;
        }
      );
      console.log("done uploading");
    }

    // const metadata = {
    //   title: recordTitle,
    //   artist: recordArtist,
    //   cover: ipfsCover,
    //   count: recordCount,
    //   price: recordPrice,
    //   files: ipfsFiles,
    // };
    const metadata = {
      name: recordTitle,
      image: ipfsCover,
      description: {
        artist: recordArtist,
        count: recordCount,
        price: recordPrice,
        files: ipfsFiles,
      },
    };

    console.log(metadata);
    const metadataFile = new Moralis.File("metadata.json", {
      base64: btoa(JSON.stringify(metadata)),
    });
    await metadataFile.saveIPFS();
    const metadataURI = metadataFile.ipfs();
    console.log(metadataURI);
    alert("Upload successful");

    // minting

    // use the metadata URI to mint a new record
    // write the smart contract which takes in the metadata URI
    // and call it after the upload is successful
  }

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
                onClick={createRecord}
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
