import { LinkTag } from "./LinkTag";
import { Layout } from "./Layout";
import { Date } from "./Date";
import { Seo } from "./Seo";

interface Props {
  type: "notes" | "blogs";
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
        <Date type={type} date={post.date} />
        <article
          className="prose max-w-none dark:prose-invert prose-a:text-[#f54bff] prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800 dark:prose-code:text-white"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <LinkTag href="/notes" style={{ marginTop: "2rem" }}>
          &larr; Go back to notes
        </LinkTag>
      </Layout>
    </>
  );
};
