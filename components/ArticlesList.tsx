import { PostCardTag } from "../components/PostCardTag";
import { Authors } from "../components/Authors";
import { Article } from "../types/article";
import { Text } from "../components/Text";
import { THEME } from "../lib/constants";

// Next.js
import Link from "next/link";

export const ArticlesList = ({ articles }: { articles: Article[] }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          href={article.link}
          title={article.title}
          className={`hover:no-underline my-6 w-full pb-4 focus:ring-4 rounded ring-[${THEME}] outline-none
                duration-300 focus:ring-offset-2 dark:ring-offset-black`}
          key={article.id}
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
                <div className="flex" style={{ margin: "0.5rem 0 0.25rem 0" }}>
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
    </>
  );
};
