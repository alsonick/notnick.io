import { findSlugAndAssociatedContent } from "../../lib/find-slug-and-associated-content";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { CHALLENGES } from "../../lib/challenges";
import { GoBack } from "../../components/GoBack";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";

// Next.js
import { useRouter } from "next/router";
import { NextPage } from "next";

const Slug: NextPage = () => {
  const challenge = findSlugAndAssociatedContent(useRouter(), CHALLENGES);

  return (
    <>
      <Seo
        title={`${
          !challenge?.name ? "Loading..." : challenge.name
        } - ${FULL_NAME}`}
        description={`Nicholas Njoki - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>{challenge?.name}</Heading>
          </Header>
          <div className="mb-4 flex flex-col"></div>
          <GoBack location="/challenge" />
        </Animate>
      </Layout>
    </>
  );
};

export default Slug;
