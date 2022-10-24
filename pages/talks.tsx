import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Talks: NextPage = () => {
  return (
    <>
      <Seo
        title="Talks - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Talks</Heading>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Talks;
