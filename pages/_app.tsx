import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.scss";
import "../styles/components.scss";
import "../styles/pages.scss";

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
