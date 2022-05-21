import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import type { NextPage } from "next";

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicholas Njoki</title>
        <meta name="theme-color" content="#f54bff" />
        <meta
          name="description"
          content="Nicholas Njoki - Full-Stack Developer"
        />
        <meta name="twitter:title" content="Nicholas Njoki" />
        <meta
          name="twitter:description"
          content="Nicholas Njoki - Full-Stack Developer"
        />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
