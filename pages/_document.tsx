import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: React.FC = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/TopLogo.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
