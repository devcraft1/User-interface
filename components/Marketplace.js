import Image from "next/image"
import Card from "./Card/Card"
// import Bottom from "./Main/Bottom"
function Marketplace() {
    return (
        <div className="">

        <div className="flex flex-wrap justify-evenly mx-auto space-x-16 mt-10">
            <Card />    
            <Card />    
            <Card />    
            <Card />    
        </div>
        <div className="flex flex-wrap justify-evenly mx-auto space-x-16 mt-10">
            <Card />    
            <Card />    
            <Card />    
            <Card />    
        </div>
        {/* <Bottom/>     */}
        <div className="m-12 flex flex-col text-black">
            Copy Right Avaound</div>
        </div>
    )
}

export default Marketplace
