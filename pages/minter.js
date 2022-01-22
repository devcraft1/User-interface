import Mintpage from "../components/Mint/Mintpage"
import Header from "../components/Main/Header"
import Sidebar from "../components/Main/Sidebar"

function minter() {
    return (
        <div className="bg-gradient-to-b from-black to-gray-500/5 h-screen overflow-hidden">
        <Header />
    <main className='flex relative overflow-y-scroll h-screen scrollbar-hide overflow-hidden'>
        <Sidebar />
        <div className="flex flex-col items-center mx-auto w-full">
            <section className={`sticky flex flex-col justify-center items-center mb-6 bg-transparent mt-8 w-auto text-white`}>
                <div className="flex justify-center items-center mb-4">
                    {/* <h1>MINTER</h1> */}
        </div>
            </section> 
            <div className="w-6/12">
            <Mintpage />
                        </div>
                </div>
            </main>
        </div>
    )
}

export default minter
