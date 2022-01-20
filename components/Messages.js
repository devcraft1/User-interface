import { useRef, useState } from "react"
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage"
import Message from "./Message"
import Navbar from '../components/Navbar';
import Image from "next/image"



// SHows messages for the last 15 mins
const MINS_DURATION = 0.5;

function Messages(message) {

    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => 
        query
        .ascending('createdAt')
        .greaterThan(
            "createdAt", 
            new Date(Date.now() -1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live: true,
        }
    );


    return (
        <div className="pb-16 h-screen6">
{/* RIGHT - NAVBAR */}
            <div className="flex flex-row-reverse justify-between pt-4">
                <Navbar />
{/* CENTER - PIECE */}
                <div className="flex flex-col items-center justify-center h-96 mx-auto">
                    <h1 className="text-xl p-3 bg-teal-200 border-teal-700/[.9]  border-t-2 shadow-2xl rounded-full ">Player vs Player Gaming Center</h1> 
                    <div  className="mt-8">
                    <div className="flex flex-col items-center p-1 text-black border-teal-300 border-b-2 bg-gradient-to-t from-teal-600/[.9] to-teal-300/[.9]  rounded-full shadow-xl">
                        <h4>Step by Step Guide:</h4>
                    <ol className="flex text-sm flex-col items-center w-96">
                        <li className="p-1">1 * Select your favourite game</li>
                        <li className="p-1">2 * Stake AVAX and create new game.</li>
                        <li className="p-1">2 * Share Gamecode in the Chatroom.</li>
                        <li className="p-1">3 * Wait for player to join your game.</li>
                        <li className="p-1">4 * Winner gets prizepot</li>
                    </ol>
                    </div>
                    </div>
                    
{/* 
                    <Image 
                        height={200}
                        width={200}
                        src="/FP.png"
                    />  */}
                </div>
{/* LEFT - CHATROOM */}
                <div className="sticky w-64  flex-col pt-2 overflow-y-scroll scrollbar-hide bg-gradient-to-b from-slate-700/[.2] to-teal-800/[.05] rounded-3xl border-t-2 border-teal-300 shadow-lg">
                    <h1 className="sticky max-h-3/6 top-0 flex overflow-hide justify-center text-bold text-lg py-2 shadow-lg z-50">Chat Room</h1>
                        <div
                            className="grid grid-cols-1 item-end space-y-8">
                           
                            {data.map(message => (
                                <Message 
                                key={message.id} 
                                message={message}
                                />
                                ))}
                        </div>
                            {/* <div ref={endOfMessagesRef}
                            className="text-gray-800 items-center">
                            <p> x</p></div> */}
                </div>
            </div>
           
            <div 
                className="flex justify-center">
                    <SendMessage endOfMessagesRef={endOfMessagesRef} />
            </div>
            <div 
                ref={endOfMessagesRef}
                className="text-start text-gray-800 mt-5 pl-16">
                    <p>Your'e up to date {user.getUsername()}!</p>
            </div>
                {/* <div 
                ref={endOfMessagesRef}
                className="my-2">
                    <ByMoralis variant="dark" style={{marginLeft:"auto", marginRight:"auto"}}/>
                </div> */}
        </div>
    )
}

export default Messages
