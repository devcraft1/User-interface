import { useEffect, useState } from "react";
import shuffle from "lodash/shuffle";
// import { useRecoilValue, useRecoilState } from "recoil";
// import { playlistIdState, playlistState } from "../../atoms/atom"
import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";
import Marketplace from "../Marketplace";
import Mintpage from "../Mint/Mintpage";

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
    <div className="flex flex-col w-full items-center p-12 mx-auto">
      <section
        className={`sticky flex w-8/12 flex-col justify-center items-center space-x-8 bg-transparent h-12 mx-48 border-b border-teal-600 text-gray-800 padding-4 mb-8`}
      >
        <h1 className="text-lg mb-8">Marketplace</h1>
      </section>
      <Marketplace />
    </div>
  );
}

export default Main;
