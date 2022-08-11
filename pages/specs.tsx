import { Heading } from "../components/Heading";
import { LinkTag } from "../components/LinkTag";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Specs: NextPage = () => {
  return (
    <>
      <Seo title="My Specs" description="" />
      <Layout>
        <Heading>My Specs</Heading>
        <Section>
          <Heading style={{ fontSize: "2rem", marginBottom: 0 }}>PC</Heading>
          <ul className="mt-3">
            <li>
              <Text>Processor: Intel Core i9-11900KF</Text>
              <Text>RAM: 32GB</Text>
              <Text>GPU: NVIDIA GeForce RTX 3060</Text>
              <Text>OS: Windows 11</Text>
              <Text>Storage: 1TB SSD</Text>
            </li>
          </ul>
        </Section>
        <Section>
          <Heading style={{ fontSize: "2rem", marginBottom: 0 }}>
            M1 MacBook Pro 13"
          </Heading>
          <ul className="mt-3">
            <li>
              <Text>Display: Retina display</Text>
              <Text>Chip: Apple M1 chip</Text>
              <Text>Memory: 8GB</Text>
              <Text>Storage: 256GB SSD</Text>
            </li>
          </ul>
        </Section>
        <LinkTag href="/">&larr; Home page</LinkTag>
      </Layout>
    </>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-col w-full mb-8">{children}</div>;
};

export default Specs;
