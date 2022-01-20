function Navbar() {
    return (
        <div>
            {/* <div className="relative pt-4 min-h-screen flex flex-start flex-row-reverse mx-auto"> */}
                
                <nav className="sticky w-64 bg-gradient-to-b from-slate-700/[.2] to-teal-800/[.05] rounded-3xl border-t-2 border-teal-300 shadow-lg pt-2">
                    <h1 className="flex justify-center text-bold text-lg py-2 shadow-lg">Select Game</h1>
                    <div className="pb-4 pt-4 p-2">
                    <div 
                        className="flex justify-center p-1 rounded-full text-white bg-teal-700/[.9] shadow-lg hover:bg-teal-500/[.7] hover:cursor-pointer hover:text-black active:bg-teal-100 active:border-t-2 active:border-teal-500"
                        onClick={()=> window.open("https://google.com")}
                        >Chess</div>
                    </div>
                    <div className="pb-4 pt-4 p-2">
                    <div 
                        className="flex justify-center p-1 rounded-full text-white bg-teal-700/[.9] hover:bg-teal-500/[.7] shadow-lg hover:cursor-pointer hover:text-black active:bg-teal-100 active:border-t-2 active:border-teal-500"
                        onClick={()=> window.open("https://google.com")}
                        >Pacman</div>
                    </div>
                    <div className="pb-4 pt-4 p-2">
                    <div 
                        className="flex justify-center p-1 rounded-full text-white bg-teal-700/[.9] shadow-lg hover:bg-teal-500/[.7] hover:cursor-pointer hover:text-black active:bg-teal-100 active:border-t-2 active:border-teal-500"
                        onClick={()=> window.open("https://google.com")}
                        >Asteroids</div>
                    </div>
                </nav>
            </div>

 
    )
}

export default Navbar
