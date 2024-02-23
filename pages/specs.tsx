import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { FULL_NAME } from "../lib/constants";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Tag } from "../components/Tag";
import { Key } from "../components/Key";
import { SPECS } from "../lib/specs";

// Next.js
import { NextPage } from "next";

const Specs: NextPage = () => {
  return (
    <>
      <Seo
        title={`Specs - ${FULL_NAME}`}
        description="The equipment I use on a daily basis."
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading style={{ marginBottom: 0 }}>Specs</Heading>
          </Header>
          {SPECS.map((spec) => (
            <div className="flex flex-col w-full mb-8" key={spec.id}>
              {spec.sellingSoon && <Tag title="Selling soon" />}
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
            </div>
          ))}
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Specs;
