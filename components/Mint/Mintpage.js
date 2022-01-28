import { useState } from "react";
import { useMoralisFile, useMoralis } from "react-moralis";
import { TokenABI, TokenAddress } from "../../contracts/TokenContract";

function Mintpage() {
  const { saveFile } = useMoralisFile();
  const { account, Moralis, user } = useMoralis();
  let nftContractAddress = TokenAddress;

  const [isUploading, setIsUploading] = useState(false);
  const [coverDone, setCoverDone] = useState(false);
  const [musicDone, setMusicDone] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);

  async function contractCall(object) {
    const web3Provider = await Moralis.enableWeb3();
    const ethers = Moralis.web3Library;

    const contract = new ethers.Contract(
      TokenAddress,
      TokenABI,
      web3Provider.getSigner()
    );
    console.log(contract);
    contract
      .createAlbum(
        object.id,
        object.get("recordCount"),
        "4",
        object.get("recordPrice"),
        object.get("royaltyPrice")
      )
      .then((result) => {
        alert("successfull");
        setUploadDone(true);
      });
    setUploadDone(false);
  }

  // Take input from the user and create a new record
  async function createRecord() {
    setIsUploading(true);

    console.log(TokenABI, TokenAddress);
    console.log(user.get("ethAddress"));

    // Get the values from the inputs
    const recordTitle = document.getElementById("recordTitle").value;
    const recordArtist = document.getElementById("recordArtist").value;
    const recordCover = document.getElementById("recordCover").files[0];
    const recordCount = document.getElementById("recordCount").value;
    const recordPrice = document.getElementById("recordPrice").value;
    const recordFiles = document.getElementById("recordFiles").files[0];
    const royaltyPrice = document.getElementById("royaltyPrice").value;

    let ipfsCover = "";
    let ipfsFiles = "";
    if (recordCover) {
      console.log("uploading cover");
      await saveFile("cover", recordCover, { saveIPFS: true }).then(
        async (hash) => {
          console.log(hash);
          ipfsCover = hash._ipfs;
        }
      );
      console.log("cover done, now uploading files");
      setIsUploading(false);
    }
    setCoverDone(true);
    if (recordFiles) {
      await saveFile("recordFiles", recordFiles, { saveIPFS: true }).then(
        async (hash) => {
          console.log(hash);
          ipfsFiles = hash._ipfs;
        }
      );
      console.log("done uploading");
      setCoverDone(false);
    }
    setMusicDone(true);

    const metadata = {
      name: recordTitle,
      image: ipfsCover,
      description: {
        artist: recordArtist,
        count: recordCount,
        price: recordPrice,
        royaltyprice: royaltyPrice,
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
    setMusicDone(false);

    const Album = new Moralis.Object.extend("Album");
    const album = new Album();
    album.set("recordTitle", recordTitle);
    album.set("recordArtist", recordArtist);
    album.set("recordCover", ipfsCover);
    album.set("recordCount", parseInt(recordCount));
    album.set("recordPrice", parseFloat(recordPrice));
    album.set("recordFiles", ipfsFiles);
    album.set("royaltyPrice", parseFloat(royaltyPrice));
    album.save().then((object) => {
      contractCall(object);
    });
    // use the metadata URI to mint a new record
    // write the smart contract which takes in the metadata URI
    // and call it after the upload is successful

    // Loading Screen
  }

  return (
    <div className="flex w-full flex-col justify-center text-gray-800">
      <div className="flex flex-col items-center just w-full  border-r border-b-2 rounded-xl shadow-xl">
        <div className="mt-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-gray-800 border-b border-teal-600 ">
          Upload Record
        </div>
        <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
          <div className=" w-9/12 flex flex-row justify-evenly">
            <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
              <p>Record Information</p>

              {/* METADATA ZIP INPUTS BELOW  */}

              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="recordTitle"
                  id="recordTitle"
                  type="text"
                  placeholder="Record Title"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="recordArtist"
                  id="recordArtist"
                  type="text"
                  placeholder="Artist Name"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="mt-4"></div>
              <p>Upload Cover Artwork</p>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  type="file"
                  name="recordCover"
                  id="recordCover"
                  placeholder="Cover Art"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
            </div>
            {/* BLOCKCHAIN & METADATA ZIP INPUT BELOW  */}
            <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
              <p>Record Economics</p>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  type="n"
                  name="recordCount"
                  id="recordCount"
                  placeholder="Number of Records"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="recordPrice"
                  id="recordPrice"
                  type="n"
                  placeholder="Price in AVAX"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="royaltyPrice"
                  id="royaltyPrice"
                  type="n"
                  placeholder="Royalty Price"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="mt-4"></div>

              <p>Upload MP3 & WAV files (ZIP)</p>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="recordFiles"
                  id="recordFiles"
                  type="file"
                  placeholder="Cover Art"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-11/12 py-1 border-b border-teal-600"></div>

          {/* SONG TITLE INPUTS BELOW */}

          {/* not yet functional with IPFS inputs */}

          {/* <div className="flex flex-col w-6/12 items-center justify-around">
            <p className="mt-2 mb-2">Tracks included in this record</p>

            <div className="flex p-4 flex-row space-x-12 justify-between">
              <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataSongTitle1"
                  id="metadataSongTitle1"
                  type="n"
                  placeholder="Track 1"
                  className="bg-transparent outline:none focus:outline-none text-white"
                />
              </div>
              <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataSongTitle2"
                  id="metadataSongTitle2"
                  type="n"
                  placeholder="Track 2"
                  className="bg-transparent outline:none focus:outline-none text-white"
                />
              </div>
            </div>
            <div className="flex flex-row space-x-12 justify-between">
              <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataSongTitle3"
                  id="metadataSongTitle3"
                  type="n"
                  placeholder="Track 3"
                  className="bg-transparent outline:none focus:outline-none text-white"
                />
              </div>
              <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataSongTitle4"
                  id="metadataSongTitle4"
                  type="n"
                  placeholder="Track 4"
                  className="bg-transparent outline:none focus:outline-none text-white"
                />
              </div>
            </div>
          </div> */}
          <div className="flex flex-col w-full justify-center text-white items-center space-y-4">
            <div className="flex flex-col bg-black opacity-95 py-1 mt-4 mb-2 w-2/12 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
              <button
                onClick={createRecord}
                className="bg-transparent outline:none focus:outline-none text-gray-400 hover:text-teal-300"
              >
                Mint Items
              </button>
            </div>
            {isUploading && <div>Upload started</div>}
            {coverDone && <div>Cover uploaded</div>}
            {musicDone && <div>Music uploaded</div>}
            {uploadDone && <div>Upload successful</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mintpage;
