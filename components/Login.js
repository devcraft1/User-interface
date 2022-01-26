import Header from "./Main/Header";
import About from "../components/About";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const { authenticate } = useMoralis();

  return (
    <div className="bg-gradient-to-b from-black to-teal-600 h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-24">
          <h1 className="text-5xl my-10 text-white">A V A S O U N D</h1>
        </div>
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
