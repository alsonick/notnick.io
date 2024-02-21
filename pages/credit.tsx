import { OtherPageContainer } from "../components/OtherPageContainer";
import { DOMAIN, FULL_NAME } from "../lib/constants";
import { SOCIAL_LINKS } from "../lib/social-links";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { GoBack } from "../components/GoBack";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { Key } from "../components/Key";

const Credit = () => {
  return (
    <>
      <Seo
        title={`Credit - ${FULL_NAME}`}
        description="The source code to this site is open source so anyone is free to take a copy and make modifications. Whiles this is not absolutely necessary it would be greatly appreciated if credit is given to the original creator."
      />
      <OtherPageContainer footer={false}>
        <div className="flex flex-col">
          <Toggle />
          <Heading>Credit</Heading>
        </div>
        <Text>
          The source code to this site is{" "}
          <LinkT href={`${SOCIAL_LINKS.github.link}/${DOMAIN}`} target="_blank">
            open source
          </LinkT>{" "}
          and it&apos;s under the <LinkT href="/license">MIT License</LinkT>, so
          this means anyone is allowed to take a copy and make modifications.
          Whiles this is not absolutely necessary it would be greatly
          appreciated if credit is given to the original creator.
        </Text>
        <br />

        <Key>How do I give credit?</Key>
        <br />
        <Text>
          You can give credit anywhere on the site but it&apos;s common to add
          it in the footer, here&apos;s an example:
        </Text>
        <picture className="mt-10 mb-2">
          <img
            className="border border-teal-100 dark:border-teal-900"
            src="/credit/credit-screenshot-1.png"
            alt="Credit Screenshot"
          />
        </picture>
        <LinkT href="https://sahil.lol/" target="_blank">
          sahil.lol
        </LinkT>
        <br />
        <Text>
          If you have troubles with this then please feel free to{" "}
          <LinkT
            href={`${SOCIAL_LINKS.github.link}/${DOMAIN}/issues/new`}
            target="_blank"
          >
            raise an issue
          </LinkT>{" "}
          on the GitHub repository and I&apos;ll be able to assist you there.
        </Text>
        <div className="mt-4">
          <GoBack />
        </div>
      </OtherPageContainer>
    </>
  );
};

export default Credit;
