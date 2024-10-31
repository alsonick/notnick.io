import { FULL_NAME, PROFESSION } from "../lib/constants";
import { PlainTag } from "../components/PlainTag";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { COMPONENTS } from "../lib/components";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { Note } from "../components/Note";
import { Seo } from "../components/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const Components: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.components.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>
              {page.components.title}
            </Heading>
            <div className="sm:flex hidden">
              <Text>
                <b className="text-gray-500 dark:text-gray-200">
                  {COMPONENTS.length}
                </b>{" "}
                components
              </Text>
            </div>
          </Header>
          <div className="mb-4 flex flex-col">
            {COMPONENTS.map((component) => (
              <div
                className="flex items-center my-4 w-full justify-between"
                key={component.id}
              >
                <div className="flex flex-col">
                  <PlainTag text={component.text} />
                  {component.note && (
                    <div className="mt-4 sm:w-[60%] w-52">
                      <Note>{component.note}</Note>
                    </div>
                  )}
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
