import { PageUnderConstruction } from "../components/PageUnderConstruction";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Seo } from "../components/Seo";
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
          <PageUnderConstruction />
        </Animate>
      </Layout>
    </>
  );
};

export default Talks;
