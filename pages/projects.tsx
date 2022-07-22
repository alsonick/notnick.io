import { NextPage } from "next";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

const Projects: NextPage = () => {
  return (
    <>
      <Seo
        title="Projects - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Heading>Projects</Heading>
      </Layout>
    </>
  );
};

export default Projects;
