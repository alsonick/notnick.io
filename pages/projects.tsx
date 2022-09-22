import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <>
      <Seo
        title="Projects - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <div className="flex items-center mb-4 min-h-[4rem] justify-between">
          <Heading style={{ marginBottom: 0 }}>Projects</Heading>
        </div>
        <GoBack />
      </Layout>
    </>
  );
};

export default Projects;
