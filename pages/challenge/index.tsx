import { FULL_NAME, PROFESSION, THEME } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { CHALLENGES } from "../../lib/challenges";
import { GoBack } from "../../components/GoBack";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";
import { page } from "../../lib/page";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Challenge: NextPage = () => {
  return (
    <>
      <Seo
        title={`Challenge - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Challenge</Heading>
          </Header>
          <div className="flex flex-col mb-4">
            {CHALLENGES.map((challenge) => (
              <div
                className="border-b border-teal-100 dark:border-teal-900 mb-4 pb-4"
                key={challenge.id}
              >
                <Link
                  className={`flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black focus:ring-4
                  rounded ring-[${THEME}] outline-none duration-300`}
                  href={`${page.challenge.name}/${challenge.slug}`}
                >
                  <h1
                    className="text-3xl font-bold cursor-pointer underline
                  dark:text-white hover:no-underline"
                  >
                    {challenge.name}
                  </h1>
                  <Text style={{ margin: "0.5rem 0px 0.25rem" }}>
                    {challenge.description}
                  </Text>
                </Link>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Challenge;
