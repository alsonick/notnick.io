import { PostCardTag } from "../components/PostCardTag";
import { Authors } from "../components/Authors";
import { Article } from "../types/article";
import { Text } from "../components/Text";
import { THEME } from "../lib/constants";
//
// Next.js
import Link from "next/link";

export const ArticlesList = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      {articles.map((article) => (
        <div
          className="border-b border-teal-100 dark:border-teal-900 mb-10 pb-4"
          key={article.id}
        >
          <Link
            href={article.link}
            title={article.title}
            className={`flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black focus:ring-4
          rounded ring-[${THEME}] outline-none duration-300`}
            target="_blank"
          >
            <div className="flex mb-2">
              {article.tags.map((tag) => (
                <div key={tag.id} className="mr-2">
                  <PostCardTag title={tag.filter} />
                </div>
              ))}
            </div>
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
        </div>
      ))}
    </>
  );
};