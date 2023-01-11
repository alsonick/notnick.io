import { Authors } from "../components/Authors";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ARTICLES } from "../lib/articles";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Tag } from "../components/Tag";

// Next.js
import { NextPage } from "next";
import Link from "next/link";
//focus:ring-4 ring-[#f54bff] outline-none duration-300 focus:ring-offset-2 dark:ring-offset-black
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
            <Text>A list of interesting articles I found on the internet.</Text>
          </Header>
          <div className="flex flex-col mb-4">
            {ARTICLES.map((article) => (
              <Link
                href={article.link}
                className="border-b border-teal-100 dark:border-teal-900
              hover:no-underline my-4 w-full pb-4 focus:ring-4 rounded ring-[#f54bff] outline-none duration-300 focus:ring-offset-2 dark:ring-offset-black"
                key={article.id}
                target="_blank"
              >
                <Tag title={article.type} />
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
                          style="long"
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
