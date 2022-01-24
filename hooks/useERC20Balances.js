import { useERC20Balances } from "react-moralis";
import { useMoralis } from "react-moralis";

const ERC20Balances = (props) => {
  const { fetchERC20Balances, data, isLoading, isFetching, error } =
    useERC20Balances();
  const { Moralis } = useMoralis();

  return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <h1 className="flex flex-col items-center">Token Balances</h1>
      {data
        ? data.map((element, index) => (
            <div
              className="flex flex-row justify-evenly items-center p-2 text-teal-300 bg-black opacity-95 mt-4 mb-4 w-48 shadow-2xl border-2 border-teal-300/50 z-50 rounded-full"
              key={index}
            >
              {" "}
              <img
                src={"https://snowtrace.io/images/main/empty-token.png"}
                alt="nologo"
                width="25px"
                height="25px"
                className="rounded-full"
              />
              <span>
                {parseFloat(
                  Moralis?.Units?.FromWei(element.balance, element.decimals)
                ).toFixed(5)}
              </span>
              <span>{element.symbol}</span>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ERC20Balances;
