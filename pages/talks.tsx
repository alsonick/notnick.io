import { Date as DateComponent } from "../components/ui/Date";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { PostCardTag } from "../components/posts/PostCardTag";
import { NewsLetter } from "../components/home/Newsletter";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/layout/Header";
import { Text } from "../components/ui/Text";
import { Seo } from "../components/layout/Seo";
import { TALKS } from "../lib/data/talks";
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
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={true}>
              <Heading as="h1" style={{ marginBottom: 0 }}>{page.talks.title}</Heading>
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
                    <h2 className="sm:text-3xl mt-2 text-2xl font-bold underline dark:text-white w-fit">
                      {talk.title}
                    </h2>
                    <div className="my-1">
                      <Text>{talk.description}</Text>
                    </div>
                    <DateComponent date={talk.date} />
                  </div>
                  <audio controls src={`${page.talks.path}/${talk.file}.mp3`} />
                </div>
              ))}
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Talks;
