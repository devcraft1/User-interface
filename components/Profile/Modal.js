import { useState } from "react";
import SaveUserprofile from "./SaveUserprofile";
import { closeModal } from "./Profile"

function Modal(setEditModal){

    function handleClick(){
        setEditModal(false)
    }
    return (

        <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="mb-4 ">Edit user profile</h1>
            <div className="flex flex-row items-center w-4/12 justify-between">
            <h1>Username</h1>
            <input placeholder="username" className="outline-none bg-transparent"/>
            </div>
            <div className="flex flex-row items-center w-4/12 justify-between">
            <h1>Email</h1>
            <input placeholder="email" className="outline-none bg-transparent" />
            </div>
            <div className="flex flex-row items-center w-4/12 justify-between">
            <h1>Social Media</h1>
            <input placeholder="url" className="outline-none bg-transparent"/>
            </div>
            <div className="flex flex-row items-center w-4/12 justify-between">
            <h1>Avatar</h1>
            <input type="file" placeholder="url" className="outline-none bg-transparent" />
            </div>
            <button onClick = {handleClick}>
X
            </button>
             <SaveUserprofile  />
        </div>
    )
}

export default Modal