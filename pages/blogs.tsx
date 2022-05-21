import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { NextPage } from "next";

import Head from "next/head";

const Blogs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogs - Nicholas Njoki</title>
        <meta
          name="description"
          content="Nicholas Njoki - Full-Stack Developer"
        />
      </Head>
      <Layout>
        .<Heading>Blogs</Heading>
      </Layout>
    </>
  );
};

export default Blogs;
