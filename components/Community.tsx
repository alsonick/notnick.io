import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { useState, useEffect } from "react";
import { LinkButton } from "./LinkButton";
import { DOMAIN } from "../lib/constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Avatar } from "./Avatar";
import { Text } from "./Text";

export const CommunityCard = () => {
  const [members, setMembers] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/community/members")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setMembers(data.members);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="not-prose flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300 z-10"
    >
      <div className="flex sm:flex-row flex-col items-center w-full justify-between">
        <div className="flex mb-4 sm:flex-row flex-col items-center sm:mb-0">
          <div className="shrink-0">
            <Avatar border height={100} width={100} />
          </div>
          <div className="flex sm:ml-8 ml-0 flex-col sm:text-left mt-5 sm:mt-0 text-center">
            <h1 className="text-2xl font-bold dark:text-white">
              Nicholas F&amp;F
            </h1>
            <Text>Community Server &bull; Discord</Text>
            {members !== null && (
              <Text>
                <b className="dark:text-white text-black">
                  {members.toLocaleString()}
                </b>{" "}
                Members
              </Text>
            )}
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
        interacted online or in person, I invite you to join my community server
        on <b>Discord</b>.
      </Text>
      <div className="flex flex-col mt-6">
        <CommunityCard />
      </div>
    </Section>
  );
};
