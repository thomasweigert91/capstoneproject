import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import {createContext} from "react";
import {useState} from "react";

export const stateContext = createContext();

function MyApp({Component, pageProps}) {
  const [lastWeight, setLastWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [reps, setReps] = useState("");

  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <GlobalStyles />
      <Component
        {...pageProps}
        currentWeight={currentWeight}
        reps={reps}
        lastWeight={lastWeight}
      />
    </>
  );
}

export default MyApp;
