import { Authors } from "../components/Authors";
import { Article } from "../types/article";
import { Text } from "../components/Text";

// Next.js
import Link from "next/link";

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
            <h1
              className="sm:text-3xl text-2xl font-bold cursor-pointer underline
                  dark:text-white hover:no-underline"
            >
              {article.title}
            </h1>
            <div className="flex items-center w-full">
              {article.authors.length === 1 ? (
                <Text>By {article.authors[0]}</Text>
              ) : (
                <Authors
                  authors={article.authors}
                  type="article"
                  style="long"
                />
              )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
