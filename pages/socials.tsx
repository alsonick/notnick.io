import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/layout/Header";
import { Text } from "../components/ui/Text";
import { SOCIALS } from "../lib/data/socials";
import { FiCopy } from "react-icons/fi";
import { Seo } from "../components/layout/Seo";
import { Tooltip } from "react-tippy";
import copy from "copy-to-clipboard";
import { page } from "../lib/page";
import { useState } from "react";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

const Socials: NextPage = () => {
  const [copyText, setCopyText] = useState<string>("Copy");

  const copyToClipboard = (text: string) => {
    setCopyText("Copied");
    copy(text, { debug: true });
    setTimeout(() => {
      setCopyText("Copy");
    }, 500);
  };

  return (
    <>
      <Seo
        title={`${page.socials.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading as="h1" style={{ marginBottom: 0 }}>
              {page.socials.title}
            </Heading>
          </Header>
          <div className="flex flex-col mb-4">
            {SOCIALS.map((social) => (
              <div
                className="flex w-full items-center justify-between h-12 border-b border-teal-100 dark:border-teal-900"
                key={social.id}
              >
                <Text style={{ fontWeight: 600, marginRight: "1rem" }}>
                  {social.title}
                </Text>
                <div className="flex items-center">
                  <Link
                    className={`text-gray-600 text-base focus:ring-4 focus:ring-offset-2 dark:ring-offset-black rounded ring-primary
                    outline-none dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer duration-300`}
                    title={social.link}
                    target="_blank"
                    href={social.link}
                  >
                    {social.username}
                  </Link>
                  <Tooltip
                    title={copyText}
                    hideOnClick={false}
                    position="top"
                    animation="shift"
                  >
                    <button
                      type="button"
                      aria-label={`Copy ${social.title} link`}
                      className="ml-2 flex cursor-pointer rounded outline-none focus-visible:ring-4 ring-primary
                      focus-visible:ring-offset-2 dark:ring-offset-black"
                      onClick={() => copyToClipboard(social.link)}
                    >
                      <FiCopy className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
          {/* Announces a successful copy, which is otherwise only a tooltip. */}
          <p className="sr-only" role="status">
            {copyText === "Copied" ? "Link copied" : ""}
          </p>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Socials;
