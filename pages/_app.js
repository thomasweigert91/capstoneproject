import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import {createContext} from "react";

export const stateContext = createContext();

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
