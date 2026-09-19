import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { Header } from "../components/layout/Header";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { FULL_NAME } from "../lib/constants";
import { Text } from "../components/ui/Text";
import { Seo } from "../components/layout/Seo";
import { Tag } from "../components/ui/Tag";
import { Key } from "../components/ui/Key";
import { SPECS } from "../lib/data/specs";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const Specs: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.specs.title} • ${FULL_NAME}`}
        description="The equipment I use on a daily basis."
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={true}>
              <Heading as="h1" style={{ marginBottom: 0 }}>
                {page.specs.title}
              </Heading>
            </Header>
            {SPECS.map((spec) => (
              <div className="flex flex-col w-full mb-8" key={spec.id}>
                {spec.sellingSoon && <Tag title="Selling soon" />}
                <h2 className="dark:text-white hover:no-underline sm:text-3xl text-2xl font-bold mb-0">
                  {spec.title}
                </h2>
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
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Specs;
