import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { playlistIdState, playlistState } from "../../atoms/atom"
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Marketplace from "../Marketplace"
import Mintpage from "../Mint/Mintpage"
// import Profile from "../Profile/Profile"


const colors = [
    "from-yellow-700",
    "from-blue-700",
    "from-rose-700",
    "from-fuchsia-700",
];

function Main() {
    // const spotifyApi = useSpotify();
    // const [color, setColor] = useState(null);
    // const playlistId = useRecoilValue(playlistIdState)
    // const [playlist, setPlaylist] = useRecoilState(playlistState)

    // useEffect(() => {
    //     setColor(shuffle(colors).pop());
    // }, [playlistId]);

    // useEffect(() => {
    //     spotifyApi.getPlaylist(playlistId).then((data) => {
    //         setPlaylist(data.body)
    //     }).catch((err) => console.log("something went wrong", err));
    // }, [spotifyApi, playlistId])

    return (
        <div className="flex flex-col items-center p-12 mx-auto">


            {/* <section className={`flex items-end space-x-7 bg-gradient-to-l to-black ${color} h-40 border-b text-white padding-8`}> */}
            <section className={`sticky flex flex-col justify-center items-center space-x-8 bg-transparent h-12 mx-48 border-b text-white padding-4 mb-8`}>
                <h1 className="text-lg mb-8">MARKETPLACE</h1>
            </section>
            <Marketplace />
            {/* <Mintpage /> */}

            
            </div>
     
    )
}

export default Main
