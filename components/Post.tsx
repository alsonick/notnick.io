import { FiExternalLink, FiTwitter } from "react-icons/fi";
import { DOMAIN, FULL_NAME } from "../lib/constants";
import { TableOfContents } from "./TableOfContents";
import { useMemo, useEffect, useRef } from "react";
import { ProgressNotice } from "./ProgressNotice";
import { social } from "../lib/social-links";
import { FiArrowLeft } from "react-icons/fi";
import { GitHubEmbed } from "./GitHubEmbed";
import { NewsLetter } from "./Newsletter";
import { Post as P } from "../types/post";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
import { Layout } from "./Layout";
import { Avatar } from "./Avatar";
import { Label } from "./Label";
import { Tweet } from "./Tweet";
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
  const articleRef = useRef<HTMLDivElement>(null);

  const contentWithEmbeds = useMemo(() => {
    if (!props.post.contentHtml) return null;

    const embedRegex = /<div data-embed="(tweet|github)"[^>]*><\/div>/g;
    const matches = [...props.post.contentHtml.matchAll(embedRegex)];

    if (matches.length === 0) {
      return (
        <div dangerouslySetInnerHTML={{ __html: props.post.contentHtml }} />
      );
    }

    const getAttr = (str: string, name: string) => {
      const m = str.match(new RegExp(`${name}="([^"]+)"`));
      return m ? m[1] : null;
    };

    const parts: JSX.Element[] = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      const matchIndex = match.index!;
      const matchStr = match[0];
      const type = match[1];

      if (matchIndex > lastIndex) {
        const htmlBefore = props.post.contentHtml.substring(
          lastIndex,
          matchIndex,
        );
        parts.push(
          <div
            key={`html-${index}`}
            dangerouslySetInnerHTML={{ __html: htmlBefore }}
          />,
        );
      }

      if (type === "tweet") {
        const tweetUrl = getAttr(matchStr, "data-tweet-url");
        const tweetId = getAttr(matchStr, "data-tweet-id");
        if (tweetUrl && tweetId) {
          parts.push(
            <Tweet
              key={`tweet-${tweetId}-${index}`}
              url={tweetUrl}
              id={tweetId}
            />,
          );
        }
      } else if (type === "github") {
        const ghUrl = getAttr(matchStr, "data-github-url");
        if (ghUrl) {
          parts.push(<GitHubEmbed key={`github-${index}`} url={ghUrl} />);
        }
      }

      lastIndex = matchIndex + matchStr.length;
    });

    if (lastIndex < props.post.contentHtml.length) {
      const htmlAfter = props.post.contentHtml.substring(lastIndex);
      parts.push(
        <div key="html-end" dangerouslySetInnerHTML={{ __html: htmlAfter }} />,
      );
    }

    return <>{parts}</>;
  }, [props.post.contentHtml]);

  // Add line numbers and copy button to code blocks
  useEffect(() => {
    if (articleRef.current) {
      const codeBlocks = articleRef.current.querySelectorAll("pre code.hljs");
      codeBlocks.forEach((code) => {
        const pre = code.parentElement;
        if (!pre || pre.querySelector(".line-numbers")) return;

        pre.style.position = "relative";

        const text = code.textContent || "";
        const lines = text.split("\n");
        if (lines[lines.length - 1] === "") lines.pop();

        const gutter = document.createElement("code");
        gutter.className = "line-numbers";
        gutter.setAttribute("aria-hidden", "true");
        gutter.textContent = lines.map((_, i) => i + 1).join("\n");
        pre.insertBefore(gutter, code);

        const copyBtn = document.createElement("button");
        copyBtn.className = "copy-button";
        copyBtn.setAttribute("aria-label", "Copy code");
        copyBtn.innerHTML =
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(text.replace(/\n$/, ""));
          copyBtn.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
          copyBtn.classList.add("copied");
          setTimeout(() => {
            copyBtn.innerHTML =
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
            copyBtn.classList.remove("copied");
          }, 2000);
        });
        pre.appendChild(copyBtn);
      });
    }
  }, [contentWithEmbeds]);

  // Add click handlers to h2 and h3 headings
  useEffect(() => {
    if (articleRef.current) {
      const headingElements =
        articleRef.current.querySelectorAll<HTMLHeadingElement>(
          "h2[id], h3[id]",
        );
      headingElements.forEach((heading) => {
        const headingId = heading.id;
        heading.style.cursor = "pointer";
        heading.style.scrollMarginTop = "100px";
        heading.classList.add("group");

        heading.addEventListener("mouseenter", () => {
          heading.style.textDecoration = "underline";
        });
        heading.addEventListener("mouseleave", () => {
          heading.style.textDecoration = "none";
        });

        heading.addEventListener("click", () => {
          window.history.pushState(null, "", `#${headingId}`);
          heading.scrollIntoView({ behavior: "smooth" });
        });
      });
    }
  }, [contentWithEmbeds]);

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
        <div className="flex md:flex-row md:items-center items-start flex-col mt-4 mb-6 justify-between text-base">
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
          <>
            <article
              ref={articleRef}
              className={`
            prose max-w-none mt-2 text-base dark:prose-invert prose-a:text-primary
            prose-a:no-underline hover:prose-a:underline
            dark:prose-code:text-white prose-img:drop-shadow prose-a:font-bold
            focus:prose-a:ring-4 focus:prose-a:ring-primary prose-a:outline-none
            prose-a:duration-300 prose-a:rounded focus:prose-a:ring-offset-2
            focus:prose-a:dark:ring-offset-black`}
            >
              {contentWithEmbeds}
            </article>
            {props.post.contentHtml && (
              <TableOfContents contentHtml={props.post.contentHtml} />
            )}
          </>
        ) : (
          <ProgressNotice />
        )}
        <div className="mt-8 pt-4 border-t border-teal-100 dark:border-teal-900">
          <NewsLetter formHeading="Enjoyed the post?" showStats />
        </div>
        <div className="pt-8 mt-8 flex sm:flex-row flex-col sm:items-center items-start justify-between border-t border-teal-100 dark:border-teal-900">
          <Link
            className={`text-base focus:ring-4 rounded focus:ring-offset-2 dark:ring-offset-black ring-primary
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
