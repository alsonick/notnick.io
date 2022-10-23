import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Key } from "../components/Key";
import { SPECS } from "../lib/specs";

// Next.js
import { NextPage } from "next";

const Section = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-col w-full mb-8">{children}</div>;
};

const Specs: NextPage = () => {
  return (
    <>
      <Seo title="My Specs" description="" />
      <Layout>
        <Animate>
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
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Specs;
