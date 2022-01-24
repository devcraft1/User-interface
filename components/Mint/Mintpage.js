import { useEffect } from "react";
// import Moralis from "moralis/types"; -- says module not found

function Mintpage() {
  // use effect needs to be fixed

  // useEffect(() => {
  //   if (!chainId) return null;
  //   // AVAX CHAIN ID below
  //   if (chainId === "0xa86a") {
  //     setNftContractAddress("insert address here");
  //     console.log("contract address changed");
  //   } else if (chainId === "0x61") {
  //     setNftContractAddress("insert address here");
  //     console.log("contract address has been changed");
  //   } else if (chainId === "0x13881") {
  //     setNftContractAddress("insert addy");
  //     console.log("contract addy changed");
  //   }
  // }, [chainId]);

  const createRecord = async () => {
    // STORING COVER ARTWORK
    const fileInput = document.getElementById("coverArtwork");
    const data = fileInput.files[0];
    const imageFile = new Moralis.File(data.name, data);
    await imageFile.saveIPFS();

    // storing Metadata

    const imageURI = imageFile.ipfs();
    const metadata = {
      name: document.getElementById("metadataRecordName").value,
      description: document.getElementById(
        "metadataArtistName",
        "metadataSongTitle1",
        "metadataSongTitle2",
        "metadataSongTitle3",
        "metadataSongTitle4"
      ).value, // description includes Artistname & up to 4 song titles. May be better to split up?! requires at least artist name + 1 songtitle
      image: imageURI,
      file: document.getElementById("metadataTrackZIP"), // ZIP includes MP3&WAV of Song Titles - has to be encrypted so only tokenholders will be able to view & download
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

  //Walkthrough
  // Record Title
  // Description - taking a minimum of 2 values (artistName & at least one SongTitle!) to up to 5 values (artist Name & 4x Songtitles)
  // Image - Cover Artwork
  // metadataTrackZIP -  a ZIP file including WAV & MP3 song files - this has to be encrypted!

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
        <div className="mt-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
          Create Record
        </div>
        <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
          <div className=" w-9/12 flex flex-row justify-evenly">
            <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
              <p>Record Information</p>

              {/* METADATA ZIP INPUTS BELOW  */}

              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataRecordName"
                  id="metadataRecordName"
                  type="text"
                  placeholder="Record Title"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="1"
                  id="metadataArtistName"
                  type="text"
                  placeholder="Artist Name"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <p>Upload Cover Artwork</p>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  type="file"
                  name="coverArtwork"
                  id="coverArtwork"
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
                  name="blockchainDataRecordAmount"
                  id="blockchainDataRecordAmount"
                  placeholder="Number of Records"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="blockchainDataPricePerToken"
                  id="blockchainDataPricePerToken"
                  type="n"
                  placeholder="Price in AVAX/USDC"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
              <p>Upload MP3 & WAV files (ZIP)</p>
              <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
                <input
                  name="metadataTrackZIP"
                  id="metadataTrackZIP"
                  type="file"
                  placeholder="Cover Art"
                  className="bg-transparent outline:none focus:outline-none text-white text-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-11/12 py-2 border-b"></div>

          {/* SONG TITLE INPUTS BELOW */}

          <div className="flex flex-col w-6/12 items-center justify-around">
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
          </div>
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
