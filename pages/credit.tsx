import { DOMAIN, FULL_NAME } from "../lib/constants";
import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { social } from "../lib/social-links";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Key } from "../components/Key";
import { Seo } from "../components/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

const Credit: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.credit.title} • ${FULL_NAME}`}
        description="The source code to this site is open source so anyone is free to take a copy and make modifications. While this is not absolutely necessary it would be greatly appreciated if credit is given to the original creator."
      />
      <Layout>
        <Header singleItem={true}>
          <Heading>{page.credit.title}</Heading>
        </Header>
        <Text>
          The source code to this site is{" "}
          <LinkT href={`${social.github.link}/${DOMAIN}`} target="_blank">
            open source
          </LinkT>{" "}
          and it&apos;s under the{" "}
          <LinkT href={page.license.path}>MIT License</LinkT>, so this means
          anyone is allowed to take a copy and make modifications. While this is
          not absolutely necessary it would be greatly appreciated if credit is
          given.
        </Text>

        <br />

        <Key>How do I give credit?</Key>

        <br />
        <br />

        <Text>
          You can give credit anywhere on the site but it&apos;s common to add
          it in the footer, here&apos;s an example:
        </Text>

        <br />

        <picture className="mt-10 mb-2">
          <img
            className="border border-teal-100 dark:border-teal-900"
            src={`${page.credit.path}/credit-screenshot.png`}
            alt="Credit Screenshot Example"
          />
        </picture>

        <div className="flex">
          <LinkT href="https://sahil.lol/" target="_blank">
            sahil.lol
          </LinkT>
          <Text style={{ marginLeft: "5.5px" }}>
            <i>(site currently inactive)</i>
          </Text>
        </div>

        <br />

        <Text>
          If you run into any issues with this then please feel free to{" "}
          <LinkT
            href={`${social.github.link}/${DOMAIN}/issues/new`}
            target="_blank"
          >
            raise an issue
          </LinkT>{" "}
          on the GitHub repository and I&apos;ll be able to assist you there.
        </Text>
        <div className="mt-4">
          <GoBack />
        </div>
      </Layout>
    </>
  );
};

export default Credit;
