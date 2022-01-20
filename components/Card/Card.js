import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Seller from "./Seller"
import Description from "./Description"
import Purchase from "./Purchase"


function Card() {

    return (
        <div className="w-64 h-96 flex flex-col items-center border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
                    <div className="border-b w-48 flex justify-between items-center p-2">
                        <h1 className="tracking-wider text-white">TITLE</h1>
                    <HeartIcon className="h-5 w-5 hover:text-red-700 hover:cursor-pointer"/>
                    </div>
                    <div className="flex items-center my-2 pt-1">
                    <Image width={175} height={175} src="/FP.png" alt="Item" className="rounded-xl shadow-xl" />
                    </div>
                    <div className="flex flex-col w-64 py-1">
                        <Seller />
                        <Description />
                        <Purchase />
                        </div>
                        
        </div>
    )
}

export default Card
