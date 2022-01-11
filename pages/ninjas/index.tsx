import Head from "next/head";
import Link from "next/link";
import EndPoint from "../../services/api/api.json";

export const getStaticProps = async () => {
  const result = await fetch(`${EndPoint.apiURL}/users`);
  const data = await result.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

export interface NinjaTypes {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface NinjasProps {
  ninjas: Array<NinjaTypes>;
}

const Ninjas: React.FC<NinjasProps> = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninjas | Ninja App</title>
      </Head>
      <>
        <h2>Ninjas</h2>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id} passHref>
            <h3 className="ninjas__name">{ninja.name}</h3>
          </Link>
        ))}
      </>
    </>
  );
};

export default Ninjas;
