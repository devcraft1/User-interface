import { useEffect, useState } from "react";
import { useMoralis, useMoralisFile } from "react-moralis";

function Modal() {
  const {
    Moralis,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
    user,
    setUserData,
    isUserUpdating,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);
  // const { saveFile } = useMoralisFile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // username ? username : user.get("username");

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const socials = document.getElementById("socials").value;
    // const data = document.getElementById("avatar").files[0];
    // const avatar = new Moralis.File(data.name, data);
    // await avatar.saveIPFS();

    await setUserData({
      username,
      email,
      url: socials,
      // file: avatar,
    });
  };

  // we need to check that file size is not too big,
  // we need to check that email is actual email & socials link is actual website link
  // username is not allowed to be ""

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-96 items-center text-center space-y-2 mb-4"
    >
      <h1 className="text-white">Username</h1>
      <div className="flex text-white pl-4 items-center w-9/12 g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input
          id="username"
          name="username"
          className="outline-none bg-transparent"
          placeholder={user.get("username")}
        />
      </div>
      <h1 className="text-white">Email</h1>
      <div className="flex text-white pl-4 flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input
          id="email"
          name="email"
          className="outline-none bg-transparent"
        />
      </div>
      <h1 className="text-white">Social Media</h1>
      <div className="flex text-white pl-4 flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input
          id="socials"
          name="socials"
          className="outline-none bg-transparent"
        />
      </div>
      {/* <h1 className="text-white">Avatar</h1> */}
      {/* <div className="flex text-white pl-4 flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input
          id="avatar"
          name="avatar"
          type="file"
          placeholder=""
          className="outline-none text-xs bg-transparent"
        />
      </div> */}
      <div className="flex flex-col relative  w-24 lg:mx-auto">
        <button
          type="submit"
          className="text-sm mt-4 text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700"
          disabled={isUserUpdating}
          // onClick={handleSubmit}
        >
          Save Info
        </button>
      </div>
    </form>
  );
}

export default Modal;
