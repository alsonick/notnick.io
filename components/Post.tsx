import { FiExternalLink, FiTwitter } from "react-icons/fi";
import { DOMAIN, FULL_NAME } from "../lib/constants";
import { ProgressNotice } from "./ProgressNotice";
import { social } from "../lib/social-links";
import { FiArrowLeft } from "react-icons/fi";
import { PostCardTag } from "./PostCardTag";
import { NewsLetter } from "./Newsletter";
import { Post as P } from "../types/post";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
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

export const Post = (props: Props) => {
  return (
    <>
      <Seo
        title={`${props.post.title} - ${FULL_NAME}`}
        description={props.post.description}
      />
      <Layout>
        <h1 className="font-bold sm:text-4xl text-3xl mt-6 dark:text-white">
          {props.post.title}
        </h1>
        <div className="flex md:flex-row md:items-center items-start flex-col mt-4 mb-6 justify-between sm:text-base text-sm">
          <div className="flex items-center">
            <Avatar border={false} width={24} height={24} />
            <p className="text-gray-600 dark:text-gray-300 ml-2">
              {FULL_NAME} /&nbsp;
            </p>
            <Date date={props.post.date} />
          </div>
          <div className="flex items-center justify-center sm:mt-2 mt-0">
            <div className="border-r-2 pr-2 border-teal-100 dark:border-teal-900">
              <Text>{props.post.mins} min read</Text>
            </div>
            {props.post.finished ? (
              <div className="ml-2 outline-none flex">
                <Link
                  className={`focus:ring-4 hover:scale-110 ring-primary focus:ring-offset-2 dark:ring-offset-black rounded outline-none duration-300`}
                  href={`https://twitter.com/intent/tweet?text=${props.post.title} by @${social.x.username}: https://${DOMAIN}/${props.type}/${props.post.slug}`}
                  title={`Share "${props.post.title}" on  X (Twitter).`}
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
        <Tag title={props.post.tag} />
        <div className="my-4 border-b border-teal-100 dark:border-teal-900">
          <Label text="Description" />
          <div className="duration-300 mb-4 mt-1">
            <Text>
              {props.post.description
                ? props.post.description
                : "No description."}
            </Text>
          </div>
          {process.env.NODE_ENV === "development" ? (
            <div className="flex items-center mb-4">
              <Tag
                title={props.post.finished ? "Completed" : "Not Completed"}
                type={props.post.finished ? "success" : "error"}
              />
            </div>
          ) : null}
        </div>
        {Boolean(props.post.contentHtml) || props.post.finished ? (
          <article
            className={`
            prose max-w-none mt-2 sm:text-base text-sm dark:prose-invert prose-a:text-primary
            prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800
            dark:prose-code:text-white prose-img:drop-shadow prose-a:font-bold
            focus:prose-a:ring-4 focus:prose-a:ring-primary prose-a:outline-none
            prose-a:duration-300 prose-a:rounded focus:prose-a:ring-offset-2
            focus:prose-a:dark:ring-offset-black`}
            dangerouslySetInnerHTML={{ __html: props.post.contentHtml }}
          />
        ) : (
          <ProgressNotice />
        )}
        <div className="mt-8 pt-4 border-t border-teal-100 dark:border-teal-900">
          <NewsLetter formHeading="Enjoyed the post?" showStats />
        </div>
        <div className="pt-8 mt-8 flex sm:flex-row flex-col sm:items-center items-start justify-between border-t border-teal-100 dark:border-teal-900">
          <Link
            className={`sm:text-base text-sm focus:ring-4 rounded focus:ring-offset-2 dark:ring-offset-black ring-primary
            outline-none flex w-fit duration-300 items-center text-gray-600 dark:text-gray-300 hover:text-black
            hover:underline dark:hover:text-white`}
            href={`${social.github.link}/${DOMAIN}/blob/main/posts/${props.type}/${props.post.slug}.md`}
            title="Edit this page on GitHub."
            target="_blank"
          >
            Edit this page on {social.github.name}{" "}
            <FiExternalLink className="ml-2" />
          </Link>
          <div className="text-sm">
            <span className="flex">
              <Text>Last Updated:&nbsp;</Text>
              <Date date={props.post.last_updated_date} />
            </span>
          </div>
        </div>
        <LinkTag href={`/${props.type}`} style={{ marginTop: "2rem" }}>
          <FiArrowLeft className="text-lg mr-1" /> Go back to{" "}
          {props.type === page.blog.name ? page.blog.name : page.note.name}
        </LinkTag>
      </Layout>
    </>
  );
};
