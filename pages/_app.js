import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import {createContext} from "react";
import {useState} from "react";

export const stateContext = createContext();

function MyApp({Component, pageProps}) {
  const [lastWeight, setLastWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [reps, setReps] = useState("");

  const handleLastWeightChange = event => {
    setLastWeight(event.target.value);
  };

  const handleCurrentWeightChange = event => {
    setCurrentWeight(event.target.value);
  };

  const handleRepsChange = event => {
    setReps(event.target.value);
  };

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
        handleCurrentWeightChange={handleCurrentWeightChange}
        handleRepsChange={handleRepsChange}
      />
    </>
  );
}

export default MyApp;
