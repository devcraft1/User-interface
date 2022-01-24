function IPFSInputs() {
  return (
    <div className="flex flex-col space-y-4 mt-4 mb-4 justify-center items-center w-full">
      <p>Record Economics</p>
      <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
        <input
          type="n"
          placeholder="Number of Records"
          id="recordCount"
          className="bg-transparent outline:none focus:outline-none text-white text-center"
        />
      </div>
      <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
        <input
          type="n"
          placeholder="Price in AVAX/USDC"
          id="recordPrice"
          className="bg-transparent outline:none focus:outline-none text-white text-center"
        />
      </div>
      <p>Upload MP3 & WAV files (ZIP)</p>
      <div className="w-9/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
        <input
          type="file"
          placeholder="Cover Art"
          id="recordFiles"
          className="bg-transparent outline:none focus:outline-none text-white text-center"
        />
      </div>
    </div>
  );
}

export default IPFSInputs;
