function SongName() {
  return (
    <div className="flex flex-col w-6/12 items-center justify-around">
      <p className="mt-2 mb-2">Tracks included in this record</p>

      <div className="flex p-4 flex-row space-x-12 justify-between">
        <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
          <input
            type="n"
            placeholder="Track 1"
            className="bg-transparent outline:none focus:outline-none text-white"
          />
        </div>
        <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
          <input
            type="n"
            placeholder="Track 2"
            className="bg-transparent outline:none focus:outline-none text-white"
          />
        </div>
      </div>
      <div className="flex flex-row space-x-12 justify-between">
        <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
          <input
            type="n"
            placeholder="Track 3"
            className="bg-transparent outline:none focus:outline-none text-white"
          />
        </div>
        <div className="w-6/12 flex flex-col bg-black opacity-95 px-4 py-1 max-w-2xl shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200 hover:text-teal-300">
          <input
            type="n"
            placeholder="Track 4"
            className="bg-transparent outline:none focus:outline-none text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default SongName;
