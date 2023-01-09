import { FiExternalLink, FiTwitter } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { Post as P } from "../types/post";
import { LinkTag } from "./LinkTag";
import { Layout } from "./Layout";
import { Avatar } from "./Avatar";
import { Notice } from "./Notice";
import { Label } from "./Label";
import { Date } from "./Date";
import { Text } from "./Text";
import { Seo } from "./Seo";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  type: "notes" | "blogs";
  post: P;
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
          <div className="flex items-center justify-center">
            <div className="border-r-2 pr-2 border-teal-100 dark:border-teal-900">
              <Text>{post.mins} min read</Text>
            </div>
            {post.finished ? (
              <Link
                href={`https://twitter.com/intent/tweet?text=${post.title} by @heynickn: https://notnick.io/${type}/${post.slug}`}
                target="_blank"
              >
                <FiTwitter className="text-gray-600 dark:text-gray-300 cursor-pointer text-xl ml-2 hover:text-black hover:dark:text-white duration-300" />
              </Link>
            ) : null}
          </div>
        </div>

        <Tag title={post.tag} />
        <div className="my-4 border-b border-teal-100 dark:border-teal-900">
          <Label text="Description" />
          <div className="text-gray-600 dark:text-gray-300 duration-300 mb-4 dark:bg-gray-800 p-3 bg-gray-100 rounded-lg">
            {post.description}
          </div>
          {process.env.NODE_ENV === "development" ? (
            <>
              <Label text="Status" />
              <div className="text-gray-600 dark:text-gray-300 duration-300 mb-8 dark:bg-gray-800 p-3 bg-gray-100 rounded-lg">
                {post.finished ? "Complete" : "Not Complete"}
              </div>
            </>
          ) : null}
        </div>
        {Boolean(post.contentHtml) || post.finished ? (
          <article
            className="
            prose max-w-none mt-2 dark:prose-invert prose-a:text-[#f54bff]
            prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800
          dark:prose-code:text-white prose-img:rounded-xl prose-img:border
          prose-img:border-teal-100 prose-img:dark:border-teal-900 prose-a:font-bold"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : (
          <ProgressNotice />
        )}
        <div className="pt-8 mt-8 flex items-center justify-between border-t border-teal-100 dark:border-teal-900">
          <Link
            className="text-sm flex w-fit duration-300 items-center text-gray-600 dark:text-gray-300 hover:text-black hover:underline dark:hover:text-white"
            target="_blank"
            href={`https://github.com/alsonick/notnick.io/blob/main/data/${type}/${post.slug}.md`}
          >
            Edit this page on GitHub <FiExternalLink className="ml-2" />
          </Link>
          <div className="text-sm">
            <span className="flex">
              <Text>Last Updated:&nbsp;</Text>
              <Date date={post.last_updated_date} />
            </span>
          </div>
        </div>
        <LinkTag href={`/${type}`} style={{ marginTop: "2rem" }}>
          <FiArrowLeft className="text-lg mr-1" /> Go back to{" "}
          {type === "blogs" ? "blogs" : "notes"}
        </LinkTag>
      </Layout>
    </>
  );
};

const ProgressNotice = () => {
  return (
    <div className="flex items-center justify-center p-20 mt-8">
      <Notice>
        In progress...
        <br />
        Come back and check <br />
        again later.
      </Notice>
    </div>
  );
};
