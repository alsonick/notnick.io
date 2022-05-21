import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Seo } from "../components/Seo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
