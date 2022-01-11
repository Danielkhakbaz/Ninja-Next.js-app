import Head from "next/head";
import EndPoint from "../../services/api/api.json";

export const getStaticPaths = async () => {
  const result = await fetch(`${EndPoint.apiURL}/users`);
  const data = await result.json();
  const paths = data.map((ninja: { id: number }) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;

  const result = await fetch(`${EndPoint.apiURL}/users/${id}`);
  const data = await result.json();

  return {
    props: {
      ninja: data,
    },
  };
};

export interface DetailsProps {
  ninja: {
    name: string;
    email: string;
    website: string;
  };
}

const Details: React.FC<DetailsProps> = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Details | Ninja App</title>
      </Head>

      <>
        <h2>{ninja.name}</h2>
        <h3>{ninja.email}</h3>
        <h3>{ninja.website}</h3>
      </>
    </>
  );
};

export default Details;
