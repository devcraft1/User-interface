import ChangeUsername from "./ChangeUsername";
import CollectionButton from "../Main/Buttons/CollectionButton";
import MintpageButton from "../Main/Buttons/MintpageButton";
import StakingpageButton from "../Main/Buttons/StakingpageButton";
import Modal from "./Modal";
import { useState } from "react";
import Userinfo from "./Userinfo";

function Profile() {
  const [editModal, setEditModal] = useState(false);

  function handleClick() {
    setEditModal(true);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col right-0 border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl px-2">
        <div className="mb-6 flex flex-col items-center" onClick={handleClick}>
          {!editModal && <ChangeUsername />}
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
            <StakingpageButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
