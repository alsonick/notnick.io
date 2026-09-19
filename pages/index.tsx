import { FeaturedArticles } from "../components/articles/FeaturedArticles";
import { Experience } from "../components/experience/Experience";
import { Technologies } from "../components/home/Technologies";
import { Education } from "../components/experience/Education";
import { NewsLetter } from "../components/home/Newsletter";
import { Projects } from "../components/projects/Projects";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Community } from "../components/home/Community";
import { Listening } from "../components/home/Listening";
import { Animate } from "../components/layout/Animate";
import { License } from "../components/home/License";
import { Contact } from "../components/home/Contact";
import { Layout } from "../components/layout/Layout";
import { Music } from "../components/music/Music";
import { About } from "../components/home/About";
import { Main } from "../components/home/Main";
import { Seo } from "../components/layout/Seo";
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
