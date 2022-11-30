import GlobalStyles from "../styles/GlobalStyles";
import Head from "next/head";

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
