import { convertDate } from "../lib/date";
import { Layout } from "./Layout";
import { Seo } from "./Seo";

interface Props {
  type: "notes" | "blog";
  post: {
    title: string;
    description: string;
    date: string;
    contentHtml: string;
  };
}

export const Post = ({ type, post }: Props) => {
  return (
    <>
      <Seo
        title={`${post.title} - Nicholas Njoki`}
        description={post.description}
      />
      <Layout>
        <h1 className="font-bold text-4xl mt-3  dark:text-white">
          {post.title}
        </h1>
        {type === "notes" ? (
          <time
            dateTime={post.date}
            className="mt-2 mb-6 text-gray-600 dark:text-gray-400"
          >
            Last updated: {convertDate(post.date)}
          </time>
        ) : (
          <time
            dateTime={post.date}
            className="mt-2 mb-6 text-gray-600 dark:text-gray-400"
          >
            {convertDate(post.date)}
          </time>
        )}
        <article
          className="prose dark:prose-invert text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </Layout>
    </>
  );
};
