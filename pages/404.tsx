import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState<number>(3);

  useEffect(() => {
    if (seconds != 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      router.push("/");
    }
  }, [router, seconds]);

  return (
    <>
      <Head>
        <title>404 | Ninja App</title>
      </Head>
      <>
        <div className="notFound__texts">
          <h1>{seconds}</h1>
          <h2>Oooops...</h2>
          <h3>That page cannot be found.</h3>
          <h5>
            Go back to the{" "}
            <Link href="/" passHref>
              <button className="notFound__button">Home</button>
            </Link>
          </h5>
        </div>
      </>
    </>
  );
};

export default NotFound;
