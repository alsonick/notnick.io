import { RagtimeSection } from "../components/RagtimeSection";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Not finished yet

// Next.js
import { NextPage } from "next";

const Ragtime: NextPage = () => {
  return (
    <>
      <Seo
        title={`Ragtime • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="mb-4 mt-8 flex w-full flex-col font-serif">
            <div className="flex flex-col w-full items-center mb-10">
              <picture className="w-full mb-2 flex justify-center">
                <img
                  src="/assets/scott_joplin.png"
                  title="Portrait of Scott Joplin"
                  alt="Scott Joplin"
                />
              </picture>
              <Text>Scott Joplin (1868-1917)</Text>
              <Text>
                <strong>King of Ragtime</strong>
              </Text>
            </div>
            <RagtimeSection title="What is Ragtime?">
              <Text>
                A genre of musical composition for the piano, generally in duple
                meter and containing a highly syncopated treble lead over a
                rhythmically steady bass. A ragtime composition is usually
                composed three or four contrasting sections or strains, each one
                being 16 or 32 measures in length.
              </Text>

              <br />

              <Text>Ragtime was typically played in saloons</Text>
            </RagtimeSection>
            <RagtimeSection title="Who is Scott Joplin?">
              <Text>
                Scott Joplin was an American composer and pianist. Dubbed the
                &quot;King of Ragtime&quot;, he composed more than 40 ragtime
                pieces, one ragtime ballet, and two operas.
              </Text>

              <br />

              <Text>
                Scott Joplin was born around the years 1867 and 1868 in
                Texarkana, he was the second of six children, born to Giles
                Joplin, a former slave. Joplin was born into a musical family,
                his father played the violin and his mother sang and played the
                banjo. By the age of seven Joplin would start practicing on the
                piano, and at some point he was able to receive a musical
                education from a man called Julius Weiss
              </Text>
            </RagtimeSection>
            <RagtimeSection title="What is syncopation?">
              <picture>
                <img src="/assets/syncopation.png" alt="" />
              </picture>
            </RagtimeSection>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Ragtime;
