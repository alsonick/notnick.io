import { FULL_NAME, PROFESSION, THEME } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { SOCIALS } from "../lib/socials";
import { FiCopy } from "react-icons/fi";
import { Seo } from "../components/Seo";
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
            <Heading style={{ marginBottom: 0 }}>{page.socials.title}</Heading>
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
                    className={`text-gray-600 sm:text-base text-sm focus:ring-4 focus:ring-offset-2 dark:ring-offset-black rounded ring-primary
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
                    <div
                      className="cursor-pointer"
                      onClick={() => copyToClipboard(social.link)}
                    >
                      <FiCopy className="ml-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300" />
                    </div>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Socials;
