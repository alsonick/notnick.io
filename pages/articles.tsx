import { Authors } from "../components/Authors";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ARTICLES } from "../lib/articles";
import { Text } from "../components/Text";
import { THEME } from "../lib/constants";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Articles: NextPage = () => {
  return (
    <>
      <Seo
        title="Articles - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />

      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Articles</Heading>
          </Header>
          <div className="flex flex-col mb-4">
            {ARTICLES.map((article) => (
              <Link
                href={article.link}
                title={article.title}
                className={`hover:no-underline my-4 w-full pb-4 focus:ring-4 rounded ring-[${THEME}] outline-none
                duration-300 focus:ring-offset-2 dark:ring-offset-black`}
                key={article.id}
                target="_blank"
              >
                <h1
                  className="text-3xl font-bold cursor-pointer underline
                  dark:text-white hover:no-underline"
                >
                  {article.title}
                </h1>
                <div className="flex w-full">
                  {article.authors.length === 1 ? (
                    <Text style={{ margin: "0.5rem 0 0.25rem 0" }}>
                      By {article.authors[0]}
                    </Text>
                  ) : (
                    <>
                      <div
                        className="flex"
                        style={{ margin: "0.5rem 0 0.25rem 0" }}
                      >
                        <Authors
                          type="article"
                          authors={article.authors}
                          style="short"
                        />
                      </div>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};
//
export default Articles;
