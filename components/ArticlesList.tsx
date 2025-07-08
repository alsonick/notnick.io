import { Authors } from "../components/Authors";
import { Article } from "../types/article";
import { Text } from "../components/Text";

// Next.js
import Link from "next/link";
import { Tag } from "./Tag";

interface Props {
  articles: Article[];
}

export const ArticlesList = (props: Props) => {
  return (
    <>
      {props.articles.map((article) => (
        <div
          className="border-b border-teal-100 dark:border-teal-900 mb-10 pb-4"
          key={article.id}
        >
          <Link
            href={article.link}
            title={article.title}
            className={`flex flex-col w-full focus:ring-offset-2 dark:ring-offset-black focus:ring-4
            rounded ring-primary outline-none duration-300`}
            target="_blank"
          >
            <div className="flex-wrap flex h-auto w-full text-wrap mb-2">
              {article.tags.map((tag) => (
                <div key={tag.id} className="mr-2">
                  <Tag title={tag.filter} />
                </div>
              ))}
            </div>
            <h1
              className="sm:text-3xl text-2xl font-bold cursor-pointer underline
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
