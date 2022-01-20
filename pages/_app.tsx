import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";

const APP_ID = "5mgHy2kpLFIjmySx7yAAJMugLG4wVn1SsnOKZZhn";
const SERVER_URL = "https://jjk1k8ehc6ws.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }: AppProps) {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file."
    );
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        {/* <App isServerInfo /> */}
        <Component isServerInfo {...pageProps} />
      </MoralisProvider>
    );
  
}

export default MyApp
