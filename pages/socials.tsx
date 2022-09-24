import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Text } from "../components/Text";
import { SOCIALS } from "../lib/socials";
import { FiCopy } from "react-icons/fi";
import { Seo } from "../components/Seo";
import copy from "copy-to-clipboard";
import Tippy from "@tippyjs/react";
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
    }, 3000);
  };

  return (
    <>
      <Seo
        title="Socials - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <div className="flex items-center mb-4 min-h-[4rem] justify-between">
          <Heading style={{ marginBottom: 0 }}>Socials</Heading>
        </div>
        <div className="flex flex-col mb-4">
          {SOCIALS.map((social) => (
            <div
              key={social.id}
              className="flex w-full items-center justify-between p-1 h-12 border-b border-teal-100 dark:border-teal-900"
            >
              <Text style={{ fontWeight: 600 }}>{social.title}</Text>
              <div className="flex items-center">
                <Link href={social.link}>
                  <a
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer duration-300"
                    title={social.link}
                    target="_blank"
                  >
                    {social.username}
                  </a>
                </Link>
                <Tippy
                  content={copyText}
                  hideOnClick={false}
                  onHidden={() => setCopyText("Copy")}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => copyToClipboard(social.link)}
                  >
                    <FiCopy className="ml-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white duration-300" />
                  </div>
                </Tippy>
              </div>
            </div>
          ))}
        </div>
        <GoBack />
      </Layout>
    </>
  );
};

export default Socials;
