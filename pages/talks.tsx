import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Talk } from "../components/Talk";
import { Text } from "../components/Text";
import { Talk as T } from "../types/talk";
import { Seo } from "../components/Seo";
import { TALKS } from "../lib/talks";

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
          <div className="flex flex-col mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Talks</Heading>
            <Text>A list of interesting talks I found on the internet.</Text>
          </div>
          <div className="flex flex-col mb-4">
            {TALKS.map((talk: T) => (
              <Talk
                key={talk.id}
                id={talk.id}
                title={talk.title}
                link={talk.link}
                type={talk.type}
                authors={talk.authors}
              />
            ))}
          </div>

          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Talks;
