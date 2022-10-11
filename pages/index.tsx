import { Technologies } from "../components/Technologies";
import { NewsLetter } from "../components/Newsletter";
import { Listening } from "../components/Listening";
import { Contact } from "../components/Contact";

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
        <Main />
        <About />
        <Technologies />
        <NewsLetter />
        <Contact />
        <Listening setActive={setPresenceActive} />
      </Layout>
    </>
  );
};

export default Home;
