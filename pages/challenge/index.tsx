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
          <div className="mb-4 flex flex-col">
            {CHALLENGES.map((challenge) => (
              <Link
                className={`focus:ring-4 ring-[${THEME}] focus:ring-offset-4 outline-none duration-300 rounded p-2 dark:ring-offset-black`}
                href={`${page.challenge.name}/${challenge.slug}`}
                key={challenge.id}
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
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Challenge;
