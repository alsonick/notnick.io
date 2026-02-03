import { Date as DateComponent } from "../components/Date";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { PostCardTag } from "../components/PostCardTag";
import { NewsLetter } from "../components/Newsletter";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { TALKS } from "../lib/talks";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const Talks: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.talks.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading style={{ marginBottom: 0 }}>{page.talks.title}</Heading>
          </Header>
          <div className="mb-5">
            <Text>
              A collection of daily talks where I share my thoughts on various
              topics like technology, programming, personal development,
              artificial intelligence, and more. Also you get to hear my sexy
              voice...
            </Text>
          </div>
          <Text>
            If you want to stay updated with the topics I discuss, feel free to
            subscribe to my newsletter for more detailed insights.
          </Text>
          <NewsLetter showStats />
          {TALKS.length === 0 && <Text>No talks available at the moment.</Text>}
          {[...TALKS]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((talk) => (
              <div
                className="flex items-center justify-between mb-5"
                key={talk.file}
              >
                <div className="flex flex-col justify-center">
                  <PostCardTag title={`Talk #${talk.recording}`} />
                  <h1 className="sm:text-3xl mt-2 text-2xl font-bold underline dark:text-white w-fit">
                    {talk.title}
                  </h1>
                  <div className="my-1">
                    <Text>{talk.description}</Text>
                  </div>
                  <DateComponent date={talk.date} />
                </div>
                <audio controls src={`${page.talks.path}/${talk.file}.mp3`} />
              </div>
            ))}
        </Animate>
      </Layout>
    </>
  );
};

export default Talks;
