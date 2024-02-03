import { FeaturedArticles } from "../components/FeaturedArticles";
import { Technologies } from "../components/Technologies";
import { Experience } from "../components/Experience";
import { NewsLetter } from "../components/Newsletter";
import { Community } from "../components/Community";
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
import { FiX } from "react-icons/fi";

const Home: NextPage = () => {
  const [isDisplaySpotify, setIsDisplaySpotify] = useState(true);
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo
        title="Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      {isDisplaySpotify ? (
        <div className="md:flex hidden items-center justify-center h-8 w-full bg-[#1DB954] z-50 fixed top-0 p-2">
          <Listening
            setActive={setPresenceActive}
            style={{ margin: 0, color: "white" }}
          />
          <FiX
            className="text-white hover:cursor-pointer text-xl absolute right-2"
            onClick={() => {
              setIsDisplaySpotify(false);
            }}
          />
        </div>
      ) : null}
      <Layout isDisplaySpotify={isDisplaySpotify}>
        <Animate>
          <Main />
          <About />
          <FeaturedArticles />
          <Experience />
          <Technologies />
          <Community />
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
