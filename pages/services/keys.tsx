import { Layout } from "../../components/Layout";
import { PageUnderConstruction } from "../../components/PageUnderConstruction";

// Next.js
import { NextPage } from "next";

const HelloWorld: NextPage = () => {
  return (
    <Layout>
      <PageUnderConstruction />
    </Layout>
  );
};

export default HelloWorld;
