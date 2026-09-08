import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { DOMAIN } from "../lib/constants";
import { LinkTag } from "./LinkTag";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Avatar } from "./Avatar";
import { Text } from "./Text";

export const CommunityCard = () => {
  return (
    <div
      className="not-prose relative flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300 z-10
      shadow-[0_12px_32px_-16px_rgba(88,101,242,0.25)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-lg bg-gradient-to-t
        from-[#5865F2]/[0.07] via-[#5865F2]/[0.03] to-[#5865F2]/0
        dark:from-[#5865F2]/[0.14] dark:via-[#5865F2]/[0.06] dark:to-[#5865F2]/0"
      />
      <div className="relative z-10 flex sm:flex-row flex-col items-center w-full justify-between">
        <div className="flex mb-4 sm:flex-row flex-col items-center sm:mb-0">
          <div className="shrink-0">
            <Avatar border={true} height={100} width={100} />
          </div>
          <div className="flex sm:ml-8 ml-0 flex-col sm:text-left mt-5 sm:mt-0 text-center">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#5865F2]">
              Discord Community
            </span>
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
