import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { COMPONENTS } from "../lib/components";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Components: NextPage = () => {
  return (
    <>
      <Seo
        title="Components - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center my-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Components</Heading>
          </div>
          <div className="mb-4 flex flex-col">
            {COMPONENTS.map((component) => (
              <div
                className="flex items-center my-4 w-full justify-between"
                key={component.id}
              >
                <div className="text-black dark:text-white items-center bg-gray-100 dark:bg-gray-800 p-2 px-3 rounded-lg justify-center">
                  <Text>{component.text}</Text>
                </div>
                {component.component}
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Components;