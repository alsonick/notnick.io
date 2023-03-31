import { OtherPageContainer } from "../components/OtherPageContainer";
import { Heading } from "../components/Heading";
import { Toggle } from "../components/Toggle";
import { LinkT } from "../components/Link";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

const Credit = () => {
  return (
    <>
      <Seo
        title="Credit"
        description="The source code to this site is open source so anyone is free to take a copy and make modifications. Whiles this is not absolutely necessary it would be greatly appreciated if credit is given to the original creator."
      />
      <OtherPageContainer footer={true}>
        <Toggle />
        <Heading>Credit</Heading>
        <Text>
          The source code to this site is{" "}
          <LinkT href="https://github.com/alsonick/notnick.io" target="_blank">
            open source
          </LinkT>{" "}
          so anyone is free to take a copy and make modifications. Whiles this
          is not absolutely necessary it would be greatly appreciated if credit
          is given to the original creator.
        </Text>
        <br />
        <br />
        <Text>How do i give credit?</Text>
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
            href="https://github.com/alsonick/notnick.io/issues/new"
            target="_blank"
          >
            raise an issue
          </LinkT>{" "}
          on the GitHub repository and I&apos;ll be able to assist you there.
        </Text>
      </OtherPageContainer>
    </>
  );
};

export default Credit;
