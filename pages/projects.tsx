import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { motion } from "framer-motion";

// Next.js
import { NextPage } from "next";
import { Animate } from "../components/Animate";

const Projects: NextPage = () => {
  return (
    <>
      <Seo
        title="Projects - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Projects</Heading>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
