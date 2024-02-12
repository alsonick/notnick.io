import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { FULL_NAME } from "../lib/constants";
import { useEffect, useState } from "react";
import { Text } from "../components/Text";
import { Tag } from "../components/Tag";
import { Seo } from "../components/Seo";
import { Quote } from "../types/quote";

// Next.js
import { NextPage } from "next";

const Quote: NextPage<Quote> = () => {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

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
      <Animate>
        <div className="flex flex-col h-full justify-center">
          <div className="mb-4">
            {quote && !loading ? (
              <div className="flex flex-col">
                <Seo
                  title={`Quote - ${FULL_NAME}`}
                  description={quote.author}
                />
                <Header column={true} singleItem={false}>
                  <Tag title={!quote.tags[0] ? "No tag" : quote.tags[0]} />
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
                </Header>
              </div>
            ) : (
              <div className="min-h-[4rem] mb-4 text-center">
                <Heading>Loading...</Heading>
              </div>
            )}
          </div>
          <GoBack />
        </div>
      </Animate>
    </Layout>
  );
};

export default Quote;
