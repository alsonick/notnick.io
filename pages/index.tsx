import { FeaturedArticles } from "../components/FeaturedArticles";
import { Technologies } from "../components/Technologies";
import { NewsLetter } from "../components/Newsletter";
import { Listening } from "../components/Listening";
import { Contact } from "../components/Contact";
import { Animate } from "../components/Animate";
import { License } from "../components/License";
import { Layout } from "../components/Layout";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Seo } from "../components/Seo";
import { useState } from "react";

// Next.js
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo
        title="Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Main />
          <About />
          <FeaturedArticles />
          <Technologies />
          <NewsLetter />
          <Contact />
          <License />
          <Listening setActive={setPresenceActive} />
        </Animate>
      </Layout>
    </>
  );
};

export default Home;
