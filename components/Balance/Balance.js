import ERC20Balance from "../../components/MoralisComp/ERC20Balance"
import ERC20Balances from "../../hooks/useERC20Balances"

function Balance() {

    return (
    <div className="flex w-fullflex-col justify-center">
        <div className="flex flex-col items-center just w-full  border-r border-b bg-gradient-to-t from-gray-500/5 rounded-xl shadow-xl">
            <div className="mt-2 mb-2 py-2 w-9/12 mx-2 items-center font-bold text-lg text-center text-white border-b ">
                WALLET Balances
            </div>
            </div>
        </div>

    )
}

export default Balance