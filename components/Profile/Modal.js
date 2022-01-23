import { useState } from "react";
import { useMoralis } from "react-moralis";
// import SaveUserprofile from "./SaveUserprofile";

function Modal() {
  const { setUserData, isUserUpdating, user } = useMoralis();

  const [username, setUser] = useState();
  const [email, setEmail] = useState();
  const [socials, setSocials] = useState();

  const updateUser = (e) => {
    e.preventDefault();
    if (!username) return;
    // const username = prompt(`Edit Username (current: ${user.getUsername()})`);

    setUserData({
      username: username,
      email: email,
      url: socials,
    });
  };

  return (
    <form className="flex flex-col justify-center items-center space-y-2 mb-4">
      <h1 className="text-white">Username</h1>
      <div className="flex text-white items-center w-9/12 g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input key="username" className="outline-none bg-transparent" />
      </div>
      <h1 className="text-white">Email</h1>
      <div className="flex text-white flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input key="email" className="outline-none bg-transparent" />
      </div>
      <h1 className="text-white">Social Media</h1>
      <div className="flex text-white flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input key="socials" className="outline-none bg-transparent" />
      </div>
      <h1 className="text-white">Avatar</h1>
      <div className="flex text-white flex-row items-center w-9/12 justify-between g-black opacity-95 shadow-xl border-2 border-teal-300/50 z-50 rounded-full hover:border-teal-200">
        <input
          type="file"
          placeholder=""
          className="outline-none text-xs bg-transparent"
        />
      </div>
      <div className="flex flex-col relative  w-24 lg:mx-auto">
        <button
          type="submit"
          className="text-sm mt-4 text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700"
          disabled={isUserUpdating}
          onClick={updateUser}
        >
          Save Info
        </button>
      </div>
    </form>
  );
}

export default Modal;
