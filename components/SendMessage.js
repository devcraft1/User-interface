import { useState } from "react"
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {


    const { user, Moralis} = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if(!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then((message) => {
            
        },
        (error) => {
            console.log(error.message);
        }
        );
        endOfMessagesRef.current.scrollIntoView({behaviour: "smooth"})
        setMessage("")
    };

    return (
        
        <form className="flex justify-center fixed bottom-5 bg-black opacity-95 w-4/12 px-4 py-2 max-w-2xl shadow-xl border-4 border-teal-300/50 z-50 rounded-full">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5"
                placeholder={`Send Message / GameCode, ${user.getUsername()}!`}
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text" />
            <button 
                type="submit"
                onClick={sendMessage}
                className="font-bold text-teal-300/80">Send</button>
        </form>
       
    )

    //w-4-12
}

export default SendMessage
