import { LoadingPageContainer } from "../../components/LoadingPageContainer";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { Loading } from "../../components/Loading";
import { GoBack } from "../../components/GoBack";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Text } from "../../components/Text";
import { useState, useEffect } from "react";
import { Response } from "../../types/rule";
import { Seo } from "../../components/Seo";
import { Key } from "../../components/Key";
import { page } from "../../lib/page";

// Next.js
import { NextPage } from "next";

const Rules: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Response>();

  const fetchRulesData = async () => {
    const response = await fetch(`/api/community/rules`);
    const data: Response = await response.json();

    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchRulesData();
  }, []);

  return (
    <>
      <Seo
        title={`${page.community.title2} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>
              {page.community.title2}
            </Heading>
          </Header>
          {data ? (
            <div className="mb-4 mt-16">
              {data?.rules.map((rule) => (
                <div
                  className="flex flex-col border-b border-teal-100 dark:border-teal-900 mb-10 pb-4"
                  key={rule.id}
                >
                  <Key>
                    {rule.number}. {rule.title}
                  </Key>
                  <Text>{rule.text}</Text>
                </div>
              ))}
            </div>
          ) : (
            <LoadingPageContainer>
              <Loading text="Loading..." loading={loading} />
            </LoadingPageContainer>
          )}
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Rules;
