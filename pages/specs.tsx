import { Heading } from "../components/Heading";
import { LinkTag } from "../components/LinkTag";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Specs: NextPage = () => {
  const SPECS = [
    {
      id: 1,
      title: "PC",
      list: [
        { id: 1, key: "CPU", value: "Intel Core i9-11900KF" },
        { id: 2, key: "RAM", value: "32GB" },
        { id: 3, key: "GPU", value: "NVIDIA GeForce RTX 3060" },
        { id: 4, key: "OS", value: "Windows 11" },
        { id: 5, key: "Storage", value: "1TB SSD" },
      ],
    },
    {
      id: 2,
      title: 'M1 MacBook Pro 13"',
      list: [
        { id: 1, key: "Display", value: "Retina display" },
        { id: 2, key: "Chip", value: "Apple M1 chip" },
        { id: 3, key: "Memory", value: "8GB" },
        { id: 4, key: "Storage", value: "256GB SSD" },
      ],
    },
    {
      id: 3,
      title: "Gear",
      list: [
        { id: 1, key: "Monitor", value: "Samsung UR55 4K IPS HDR10" },
        {
          id: 2,
          key: "Keyboard",
          value: "Keychron K4 Wireless Mechanical Keyboard",
        },
        { id: 3, key: "Mouse", value: "TECKNET RGB Gaming Mouse" },
        { id: 4, key: "Headset", value: "HyperX Cloud II 7.1" },
        { id: 5, key: "Earbuds", value: "AirPods Pro" },
        { id: 6, key: "Watch", value: "Apple Watch Series 3" },
        { id: 7, key: "Phone", value: "iPhone XR" },
      ],
    },
  ];

  return (
    <>
      <Seo title="My Specs" description="" />
      <Layout>
        <div className="flex flex-col mt-4 mb-4 min-h-[4rem]">
          <Heading style={{ marginBottom: 0 }}>My Specs</Heading>
        </div>
        {SPECS.map((spec) => (
          <Section key={spec.id}>
            <Heading style={{ fontSize: "2rem", marginBottom: 0 }}>
              {spec.title}
            </Heading>
            <ul className="mt-3">
              {spec.list.map((item) => (
                <li className="mb-1" key={item.id}>
                  <Text>
                    <Key>{item.key}:</Key> {item.value}
                  </Text>
                </li>
              ))}
            </ul>
          </Section>
        ))}
        <LinkTag href="/">&larr; Go back</LinkTag>
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
