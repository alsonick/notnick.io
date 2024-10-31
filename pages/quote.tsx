import { LoadingPageContainer } from "../components/LoadingPageContainer";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { Animate } from "../components/Animate";
import { ICON } from "../lib/tailwindcss/icon";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { FULL_NAME } from "../lib/constants";
import { useEffect, useState } from "react";
import { Quote as Q } from "../types/quote";
import { FiRepeat } from "react-icons/fi";
import { Text } from "../components/Text";
import { Tag } from "../components/Tag";
import { Seo } from "../components/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const Quote: NextPage<Q> = () => {
  const [quote, setQuote] = useState<Q | undefined>(undefined);
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
                  title={`${page.quote.title} • ${FULL_NAME}`}
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
                    <FiRepeat className={ICON} />
                  </Button>
                </Header>
              </div>
            ) : (
              <LoadingPageContainer>
                <Loading text="Loading..." loading={loading} />
              </LoadingPageContainer>
            )}
          </div>
          <GoBack />
        </div>
      </Animate>
    </Layout>
  );
};

export default Quote;
