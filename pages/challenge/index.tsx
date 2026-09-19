import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Challenge } from "../../components/challenge/Challenge";
import { Heading } from "../../components/ui/Heading";
import { Animate } from "../../components/layout/Animate";
import { CHALLENGES } from "../../lib/data/challenges";
import { GoBack } from "../../components/layout/GoBack";
import { Layout } from "../../components/layout/Layout";
import { Header } from "../../components/layout/Header";
import { Seo } from "../../components/layout/Seo";

// Next.js
import { NextPage } from "next";

const ChallengePage: NextPage = () => {
  return (
    <>
      <Seo
        title={`Challenge • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={false}>
              <Heading as="h1" style={{ marginBottom: 0 }}>Challenge</Heading>
            </Header>
            <div className="flex flex-col mb-4">
              {CHALLENGES.filter((challenge) => challenge.active).map(
                (challenge) => (
                  <Challenge key={challenge.id} challenge={challenge} />
                )
              )}
            </div>
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default ChallengePage;
