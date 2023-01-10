import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
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
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Talks</Heading>
            <Text>A list of interesting talks I found on the internet.</Text>
          </Header>
          <div className="flex flex-col mb-4">
            {TALKS.map((talk: T) => (
              <Talk
                authors={talk.authors}
                title={talk.title}
                link={talk.link}
                type={talk.type}
                key={talk.id}
                id={talk.id}
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
