import { PageUnderConstruction } from "../components/PageUnderConstruction";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
// import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <>
      <Seo
        title="Experience - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Experience</Heading>
            {/* <Text style={{ marginTop: "15px" }}></Text> */}
          </Header>
          <PageUnderConstruction />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Experience;
