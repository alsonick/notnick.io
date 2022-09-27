import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { GoBack } from "../components/GoBack";
import { useEffect, useState } from "react";
import { Text } from "../components/Text";
import { Tag } from "../components/Tag";
import { Seo } from "../components/Seo";
import { Quote } from "../types/quote";

// Next.js
import { NextPage } from "next";

const Quote: NextPage<Quote> = () => {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuote = async () => {
    setLoading(true);
    const response = await fetch("https://api.quotable.io/random");
    const quote = await response.json();
    if (quote) setLoading(false);
    setQuote(quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col h-full items-center justify-center">
        {quote && !loading ? (
          <>
            <Seo title={quote.content} description={quote.author} />
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
                onClick={() => fetchQuote()}
                style={{ marginTop: "1.5rem" }}
              >
                Reload
              </Button>
            </div>
          </>
        ) : (
          <div className="min-h-[4rem] text-center">
            <Heading>Loading...</Heading>
          </div>
        )}
      </div>
      <GoBack />
    </Layout>
  );
};

export default Quote;
