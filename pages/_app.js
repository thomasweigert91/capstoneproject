import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";
import {createContext} from "react";
import {useState} from "react";

export const stateContext = createContext();

function MyApp({Component, pageProps}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <>
      <stateContext.Provider
        value={[
          search,
          setSearch,
          bodyParts,
          setBodyParts,
          exercises,
          setExercises,
          bodyPart,
          setBodyPart,
        ]}
      >
        <Head>
          <title>{Component.title}</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </stateContext.Provider>
    </>
  );
}

export default MyApp;
