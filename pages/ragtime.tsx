import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Not finished yet

// Next.js
import { NextPage } from "next";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <section className="mb-10">
      <Heading>{title}</Heading>
      {children}
      <hr className="mt-5 border-teal-100 dark:border-teal-900" />
    </section>
  );
};

const Ragtime: NextPage = () => {
  return (
    <>
      <Seo
        title="Ragtime - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading>Ragtime</Heading>
          </Header>
          <div className="mb-4 flex w-full flex-col">
            <div className="flex flex-col w-full items-center mb-10">
              <picture className="w-full mb-2 flex justify-center">
                <img
                  className="w-1/2"
                  src="/assets/scott_joplin_portrait.jpeg"
                  title="Portrait of Scott Joplin"
                  alt="Scott Joplin"
                />
              </picture>
              <Text>Scott Joplin (1868-1917)</Text>
              <Text>
                <strong>King of Ragtime</strong>
              </Text>
            </div>
            <Section title="What is Ragtime?">
              <Text>
                A genre of musical composition for the piano, generally in duple
                meter and containing a highly syncopated treble lead over a
                rhythmically steady bass. A ragtime composition is usually
                composed three or four contrasting sections or strains, each one
                being 16 or 32 measures in length.
              </Text>
            </Section>
            <Section title="Who is Scott Joplin?">
              <Text>
                Scott Joplin was an American composer and pianist. Dubbed the
                &quot;King of Ragtime&quot;, he composed more than 40 ragtime
                pieces, one ragtime ballet, and two operas.
              </Text>
            </Section>
            <Section title="What is syncopation?">
              <picture>
                <img src="/assets/syncopation.png" alt="" />
              </picture>
            </Section>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Ragtime;
