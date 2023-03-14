import { PageUnderConstruction } from "../components/PageUnderConstruction";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Work: NextPage = () => {
  return (
    <>
      <Seo
        title="Work - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Work</Heading>
            <Text style={{ marginTop: "15px" }}>
              Here&apos;s a showcase of all the work I&apos;ve done, this
              includes companies I&apos;ve worked for, personal projects, open
              source projects that I&apos;ve contributed or helped maintain,
              YouTube channels I use to run and more.
              <br />
              <br />
              Be sure to checkout my{" "}
              <LinkT href="https://github.com/alsonick" target="_blank">
                GitHub
              </LinkT>{" "}
              page to view more of my technical work.
            </Text>
          </Header>
          <PageUnderConstruction />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Work;
