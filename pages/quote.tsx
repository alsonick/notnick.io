import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { GoBack } from "../components/GoBack";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { Tag } from "../components/Tag";
import { Seo } from "../components/Seo";
import { Quote } from "../types/quote";

// Next.js
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.quotable.io/random");
  const quote = await response.json();

  return {
    props: {
      quote,
    },
  };
};

const Quote: NextPage<Quote> = ({ quote }) => {
  const router = useRouter();

  return (
    <>
      <Seo title={quote.content} description={quote.author} />
      <Layout>
        <div className="flex flex-col mt-4 items-center mb-4 min-h-[4rem]">
          <Tag title={quote.tags[0]} />
          <Heading
            style={{
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            {`"${quote.content}"`}
          </Heading>
          <Text>{quote.author}</Text>
          <Button
            onClick={() => router.reload()}
            style={{ marginTop: "1.5rem" }}
          >
            Reload
          </Button>
        </div>
        <GoBack />
      </Layout>
    </>
  );
};

export default Quote;
