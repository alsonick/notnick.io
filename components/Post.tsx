import { DOMAIN, FULL_NAME, THEME } from "../lib/constants";
import { FiExternalLink, FiTwitter } from "react-icons/fi";
import { SOCIAL_LINKS } from "../lib/social-links";
import { ProgressNotice } from "./ProgressNotice";
import { FiArrowLeft } from "react-icons/fi";
import { Post as P } from "../types/post";
import { LinkTag } from "./LinkTag";
import { Layout } from "./Layout";
import { Avatar } from "./Avatar";
import { Label } from "./Label";
import { Date } from "./Date";
import { Text } from "./Text";
import { Seo } from "./Seo";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  type: "note" | "blog";
  post: P;
}

export const Post = ({ type, post }: Props) => {
  return (
    <>
      <Seo
        title={`${post.title} - ${FULL_NAME}`}
        description={post.description}
      />
      <Layout>
        <h1 className="font-bold text-4xl mt-6 dark:text-white">
          {post.title}
        </h1>
        <div className="flex md:flex-row md:items-center items-start flex-col mt-4 mb-6 justify-between text-sm">
          <div className="flex items-center">
            <Avatar border={true} width={24} height={24} />
            <p className="text-gray-600 dark:text-gray-300 ml-2">
              {FULL_NAME} /&nbsp;
            </p>
            <Date date={post.date} />
          </div>
          <div className="flex items-center justify-center sm:mt-2 mt-0">
            <div className="border-r-2 pr-2 border-teal-100 dark:border-teal-900">
              <Text>{post.mins} min read</Text>
            </div>
            {post.finished ? (
              <div className="ml-2 outline-none flex">
                <Link
                  className={`focus:ring-4 ring-[${THEME}] focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300`}
                  href={`https://twitter.com/intent/tweet?text=${post.title} by @${SOCIAL_LINKS.x.username}: https://${DOMAIN}/${type}/${post.slug}`}
                  target="_blank"
                >
                  <FiTwitter
                    className="text-gray-600 dark:text-gray-300 cursor-pointer
                    text-xl hover:text-black hover:dark:text-white duration-300"
                  />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <Tag title={post.tag} />
        <div className="my-4 border-b border-teal-100 dark:border-teal-900">
          <Label text="Description" />
          <div className="duration-300 mb-4 mt-1">
            <Text>{post.description}</Text>
          </div>
          {process.env.NODE_ENV === "development" ? (
            <div className="flex items-center mb-4">
              <Label text="Status:" />
              &nbsp;
              <Text>{post.finished ? "Completed" : "Not Completed"}</Text>
            </div>
          ) : null}
        </div>
        {Boolean(post.contentHtml) || post.finished ? (
          <article
            className={`
            prose max-w-none mt-2 dark:prose-invert prose-a:text-[#f54bff]
            prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800
          dark:prose-code:text-white prose-img:rounded-xl prose-img:border
          prose-img:border-teal-100 prose-img:dark:border-teal-900 prose-a:font-bold
            focus:prose-a:ring-4 focus:prose-a:ring-[#f54bff] prose-a:outline-none
            prose-a:duration-300 prose-a:rounded focus:prose-a:ring-offset-2
            focus:prose-a:dark:ring-offset-black`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        ) : (
          <ProgressNotice />
        )}
        <div className="pt-8 mt-8 flex sm:flex-row flex-col sm:items-center items-start justify-between border-t border-teal-100 dark:border-teal-900">
          <Link
            className={`text-sm focus:ring-4 rounded focus:ring-offset-2 dark:ring-offset-black ring-[${THEME}]
            outline-none flex w-fit duration-300 items-center text-gray-600 dark:text-gray-300 hover:text-black
            hover:underline dark:hover:text-white`}
            target="_blank"
            href={`${SOCIAL_LINKS.github.link}/${DOMAIN}/blob/main/posts/${type}/${post.slug}.md`}
          >
            Edit this page on {SOCIAL_LINKS.github.name}{" "}
            <FiExternalLink className="ml-2" />
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
          {type === "blog" ? "blog" : "note"}
        </LinkTag>
      </Layout>
    </>
  );
};
