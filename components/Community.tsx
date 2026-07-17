import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { LinkTag } from "./LinkTag";
import { DOMAIN } from "../lib/constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Avatar } from "./Avatar";
import { Text } from "./Text";

export const CommunityCard = () => {
  return (
    <div
      className="not-prose flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300 z-10"
    >
      <div className="flex sm:flex-row flex-col items-center w-full justify-between">
        <div className="flex mb-4 sm:flex-row flex-col items-center sm:mb-0">
          <div className="shrink-0">
            <Avatar border={true} height={100} width={100} />
          </div>
          <div className="flex sm:ml-8 ml-0 flex-col sm:text-left mt-5 sm:mt-0 text-center">
            <h1 className="text-2xl font-bold dark:text-white">
              Nicholas F&amp;F
            </h1>
            <Text>Friends &amp; Family</Text>
          </div>
        </div>
        <LinkButton
          title="Join The Nicholas F&F Discord Community"
          href={`https://${DOMAIN}/community`}
          target="_blank"
        >
          Join <FiExternalLink title="Join" className={ICON} />
        </LinkButton>
      </div>
    </div>
  );
};

export const Community = () => {
  return (
    <Section>
      <Heading>Community 👊</Heading>
      <Text>
        If you would like to connect with me, whether we have previously
        interacted online or in person, join my community server on{" "}
        <b>Discord</b> to chat. By joining, you&apos;re agreeing to the{" "}
        <LinkTag title="Server Rules & Guidelines" href="/community/rules">
          server rules and guidelines
        </LinkTag>
        .
      </Text>
      <div className="flex flex-col mt-6">
        <CommunityCard />
      </div>
    </Section>
  );
};
