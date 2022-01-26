import Image from "next/image";
import Card from "./Card/Card";
import Bottom from "./Main/Bottom";
import tokenDetails from "../contracts/TokenContract";
import marketplaceDetails from "../contracts/MarketplaceContract";
import Sponsors from "./Main/Sponsors";

const { MarketplaceABI, marketplaceAddress } = marketplaceDetails;
const { TokenABI, TokenAddress } = tokenDetails;

console.log(MarketplaceABI, TokenABI);

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
      <div className="flex flex-wrap justify-evenly mx-auto space-x-16 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Bottom />
      <Sponsors />

      <div className="m-12 flex flex-col text-black">Copy Right Avaound</div>
    </div>
  );
}

export default Marketplace;
