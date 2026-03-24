import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Challenge } from "../../components/Challenge";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { CHALLENGES } from "../../lib/challenges";
import { GoBack } from "../../components/GoBack";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { Seo } from "../../components/Seo";

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
              <Heading style={{ marginBottom: 0 }}>Challenge</Heading>
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
