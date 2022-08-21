import { FiExternalLink } from "react-icons/fi";
import { LinkTag } from "./LinkTag";
import { Layout } from "./Layout";
import { Avatar } from "./Avatar";
import { Date } from "./Date";
import { Seo } from "./Seo";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  post: {
    title: string;
    slug: string;
    description: string;
    tag: string;
    mins: string;
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
        <h1 className="font-bold text-4xl mt-6 dark:text-white">
          {post.title}
        </h1>
        <div className="flex md:flex-row md:items-center items-start flex-col mt-4 mb-6 justify-between text-sm">
          <div className="flex items-center">
            <Avatar width={24} height={24} />
            <p className="text-gray-600 dark:text-gray-300 ml-2">
              Nicholas Njoki /&nbsp;
            </p>
            <Date date={post.date} />
          </div>
          <p className="text-gray-600 md:mt-0 mt-1 dark:text-gray-300">
            {post.mins} min read
          </p>
        </div>
        <Tag title={post.tag} />
        {Boolean(post.contentHtml) ? (
          <article
            className="
            prose max-w-none mt-2 dark:prose-invert prose-a:text-[#f54bff]
            prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800
          dark:prose-code:text-white prose-img:rounded-xl prose-img:border
          prose-img:border-teal-100 prose-img:dark:border-teal-900"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : (
          <div className="flex items-center justify-center p-20 mt-8">
            <h1 className="text-xl text-center font-semibold opacity-30 dark:text-white">
              In progress...
              <br />
              Come back and check again later.
            </h1>
          </div>
        )}
        <div className="pt-8 mt-8 border-t border-teal-100 dark:border-teal-900">
          <Link
            href={`https://github.com/alsonick/notnick.io/blob/main/data/${type}/${post.slug}.md`}
          >
            <a
              className="text-sm flex w-fit duration-300 items-center text-gray-600 dark:text-gray-300 hover:text-black hover:underline dark:hover:text-white"
              target="_blank"
            >
              Edit this page on GitHub <FiExternalLink className="ml-2" />
            </a>
          </Link>
        </div>
        <LinkTag href={`/${type}`} style={{ marginTop: "2rem" }}>
          &larr; Go back to {type === "blogs" ? "blogs" : "notes"}
        </LinkTag>
      </Layout>
    </>
  );
};
