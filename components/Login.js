import Header from "./Main/Header";
import About from "../components/About";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Image from "next/image";

function Login() {
  const router = useRouter();
  const { authenticate } = useMoralis();

  return (
    <div className="bg-gradient-to-b from-white to-teal-600 h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-24 items-center justify-center flex-col border-b-2 border-white">
          <h1 className="text-5xl my-10 text-white">A V A S O U N D</h1>
        </div>
        <Image
          width={50}
          height={50}
          src="/avso-b.png"
          // src={avatar}
          alt="Item"
          className="rounded-full"
        />
        <div
          className="text-sm my-12 text-black bg-teal-300 rounded-full py-3 px-4 
                            hover:shadow-xl active:text-white 
                            active:border-b-2 active:border-teal-300 active:bg-teal-700 border-b-2 border-black"
        >
          <button onClick={authenticate}>Explore Market</button>
        </div>

        <About />
      </div>
    </div>
  );
}

export default Login;
