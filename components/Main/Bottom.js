import {
  ArrowCircleRightIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";
import { ByMoralis } from "react-moralis";
import Image from "next/image";
function Bottom() {
  return (
    <div>
      <section
        className={`sticky flex flex-row justify-center items-center space-x-8 bg-transparent h-36 mx-48 border-b text-white padding-4`}
      >
        <div className="flex justify-between items-center my-6 space-x-8">
          {/* <div>
                    <ArrowCircleLeftIcon className="h-5 w-5 hover:text-white cursor-pointer"/>
                </div> */}
          <h1 className="text-white ">///////\\\\\\\</h1>
          {/* <div>
                        <ArrowCircleRightIcon className="h-5 w-5 hover:text-white cursor-pointer"/>
                </div> */}
        </div>
      </section>
      <div className="my-2 flex flex-row justify-center">
        {" "}
        <Image
          width={115}
          height={50}
          src="/avax2.png"
          alt="Item"
          className="rounded-full"
        />
        <ByMoralis
          variant="dark"
          // style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
    </div>
  );
}

export default Bottom;
