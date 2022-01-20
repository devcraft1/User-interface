import { useMoralis } from "react-moralis";
// import Timeago from "timeago-react";
// import AvatarSmall from "./AvatarSmall";



function Message({ message }) {

    const { user } = useMoralis();

    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    const walletAddress = message.get("ethAddress");
    const userMessage = message.get("message");
   
    function copyClipboardAddress() {
        navigator.clipboard.writeText(walletAddress)
    }
    function copyClipboardMsg() {
        navigator.clipboard.writeText(userMessage)
    }

    return (
            <div className={`relative top-2 flex flex-row items-end space-x-2 ${isUserMessage && "justify-end"}`} >

            <div 
            className={`h-8 w-8 mx-auto items-end ${isUserMessage ? "absolute right-6": "absolute left-1"}`}>
                
{/* AVATAR      <AvatarSmall username={message.get("username")} /> */}
{/* USERNAME */}
                <p 
                    onClick={copyClipboardAddress}
                    className={`absolute -bottom-5 text-xs hover:cursor-pointer hover:bg-black active:text-cyan-200 bg-gray-200/50 rounded-full p-1 mx-auto ${isUserMessage ? "text-teal-700" : "text-teal-900"}`}>
                {message.get("username")}
                </p>
                
            </div>
            
{/* MESSAGE */} <div 
                    onClick={copyClipboardMsg}
                    className={`absolut p-1 rounded-lg hover:cursor-pointer ${ //same as papreact
                                isUserMessage 
                                ? 'rounded-br-none bg-teal-300 relative right-2 active:bg-teal-100 active:border-t-2 active:border-teal-300' 
                                : 'rounded-bl-none bg-teal-100 relative left-2 active:bg-teal-300 active:border-t-2 active:border-teal-100'}`}>
                <p>{message.get("message")}</p>
                </div>


{/* TIMESTAMP */}
            {/* <Timeago 
                className={`text-[8px] italic-gray-400 ${
                    isUserMessage && "order-first pr-1"
                    }`}
                datetime={message.createdAt}
            /> */} 
        </div>
        
        
    )
}

export default Message
