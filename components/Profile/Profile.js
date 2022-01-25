import ChangeUsername from "./ChangeUsername";
import CollectionButton from "../Main/Buttons/CollectionButton";
import MintpageButton from "../Main/Buttons/MintpageButton";
import SwappageButton from "../Main/Buttons/SwappageButton";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { CursorClickIcon, DuplicateIcon } from "@heroicons/react/outline";

function Profile() {
  const {
    user,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  const email = user.get("email");
  const socials = user.get("url");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [editModal, setEditModal] = useState(false);

  function handleClick() {
    setEditModal(true);
  }
  function copyEmail() {
    navigator.clipboard.writeText(email);
  }
  function navigateLink() {
    window.open(socials);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col right-0 border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl px-2">
        <div className="mb-6 flex flex-col items-center" onClick={handleClick}>
          {!editModal && <ChangeUsername />}
        </div>
        <div className="flex flex-col items-center text-white space-y-2 mb-4 text-sm">
          {email ? (
            <div
              className="flex flex-row items-center justify-between space-y-2 hover:cursor-pointer active:text-teal-300"
              onClick={copyEmail}
            >
              <DuplicateIcon className="h-3 w-3 mr-1" />

              {email}
            </div>
          ) : (
            ""
          )}
          {socials ? (
            <div
              className="flex flex-row items-center justify-between space-y-2 hover:cursor-pointer active:text-teal-300"
              onClick={() => window.open(socials)}
            >
              <CursorClickIcon className="h-3 w-3 mr-1" />

              {socials}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col items-center">
          {editModal && <Modal setEditModal={setEditModal} />}
          {editModal && (
            <button
              className="text-sm w-1/12 flex flex-col items-center text-black bg-teal-300 rounded-full px-2 py-1 hover:shadow-xl 
                active:text-white active:border-b active:border-teal-300 active:bg-teal-700 mb-4"
              onClick={() => setEditModal(false)}
            >
              Close
            </button>
          )}
        </div>
        {/* <div className="flex flex-col">{!editModal && <Userinfo />}</div> */}

        <hr className="border-t-[0.1px] border-teal-300" />
        <div className="flex flex-row justify-between py-2 ">
          <div className="w-48  text-white flex flex-col items-center">
            <MintpageButton />
          </div>
          <div className="w-48 text-white flex flex-col items-center">
            <CollectionButton />
          </div>
          <div className="w-48 text-white flex flex-col items-center">
            <SwappageButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
