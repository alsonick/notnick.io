import { Layout } from "../../components/layout/Layout";
import { PageUnderConstruction } from "../../components/ui/PageUnderConstruction";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Seo } from "../../components/layout/Seo";

// Next.js
import { NextPage } from "next";

const HelloWorld: NextPage = () => {
  return (
    <>
      <Seo
        title={`Keys • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <PageUnderConstruction />
      </Layout>
    </>
  );
};

export default HelloWorld;
