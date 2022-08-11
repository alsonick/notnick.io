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
              <Text>
                <Key>Processor:</Key> Intel Core i9-11900KF
              </Text>
            </li>
            <li>
              <Text>
                <Key>RAM:</Key> 32GB
              </Text>
            </li>
            <li>
              <Text>
                <Key>GPU:</Key> NVIDIA GeForce RTX 3060
              </Text>
            </li>
            <li>
              <Text>
                <Key>OS:</Key> Windows 11
              </Text>
            </li>
            <li>
              <Text>
                <Key>Storage:</Key> 1TB SSD
              </Text>
            </li>
          </ul>
        </Section>
        <Section>
          <Heading style={{ fontSize: "2rem", marginBottom: 0 }}>
            M1 MacBook Pro 13&quot;
          </Heading>
          <ul className="mt-3">
            <li>
              <Text>
                <Key>Display:</Key> Retina display
              </Text>
            </li>
            <li>
              <Text>
                <Key>Chip:</Key> Apple M1 chip
              </Text>
            </li>
            <li>
              <Text>
                <Key>Memory:</Key> 8GB
              </Text>
            </li>
            <li>
              <Text>
                <Key>Storage:</Key> 256GB SSD
              </Text>
            </li>
          </ul>
        </Section>
        <Section>
          <Heading style={{ fontSize: "2rem", marginBottom: 0 }}>Gear</Heading>
          <ul className="mt-3">
            <li>
              <Text>
                <Key>Monitor:</Key> Samsung UR55 4K IPS HDR10
              </Text>
            </li>
            <li>
              <Text>
                <Key>Keyboard:</Key> Keychron K4 Wireless Mechanical Keyboard
              </Text>
            </li>
            <li>
              <Text>
                <Key>Mouse:</Key> TECKNET RGB Gaming Mouse
              </Text>
            </li>
            <li>
              <Text>
                <Key>Headset:</Key> HyperX Cloud II 7.1
              </Text>
            </li>
            <li>
              <Text>
                <Key>Earbuds:</Key> AirPods Pro
              </Text>
            </li>
            <li>
              <Text>
                <Key>Watch: </Key>
                Apple Watch Series 3
              </Text>
            </li>
            <li>
              <Text>
                <Key>Phone: </Key>
                iPhone XR
              </Text>
            </li>
          </ul>
        </Section>
        <LinkTag href="/">&larr; Home page</LinkTag>
      </Layout>
    </>
  );
};

const Key = ({ children }: { children?: React.ReactNode }) => {
  return (
    <span className="text-black dark:text-white font-bold">{children}</span>
  );
};

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-col w-full mb-8">{children}</div>;
};

export default Specs;
