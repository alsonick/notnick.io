import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { NextPage } from "next";
import { LinkTag } from "../components/LinkTag";

const Blogs: NextPage = () => {
  return (
    <>
      <Seo
        title="Blogs - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Heading>Blogs</Heading>
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </Layout>
    </>
  );
};

export default Blogs;
