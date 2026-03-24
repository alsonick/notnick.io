import { FeaturedArticles } from "../components/FeaturedArticles";
import { Technologies } from "../components/Technologies";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Experience } from "../components/Experience";
import { NewsLetter } from "../components/Newsletter";
import { Education } from "../components/Education";
import { Community } from "../components/Community";
import { Listening } from "../components/Listening";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Animate } from "../components/Animate";
import { License } from "../components/License";
import { Layout } from "../components/Layout";
import { Music } from "../components/Music";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Seo } from "../components/Seo";
import { useState } from "react";

// Next.js
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [isDisplaySpotify, setIsDisplaySpotify] = useState(true);
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo title={FULL_NAME} description={`${FULL_NAME} - ${PROFESSION}`} />
      <Layout isDisplaySpotify={isDisplaySpotify}>
        <Animate>
          <Main />
          <About />
          <FeaturedArticles />
          <Experience />
          <Technologies />
          <Education />
          {/* <Projects /> */}
          <Music />
          <Community />
          <NewsLetter showStats={true} showTitle={true} note={true} />
          <Contact />
          <License />
          <Listening setActive={setPresenceActive} />
        </Animate>
      </Layout>
    </>
  );
};

export default Home;
