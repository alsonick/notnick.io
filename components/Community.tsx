import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { DOMAIN } from "../lib/constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Text } from "./Text";

export const Community = () => {
  return (
    <Section>
      <Heading>Community 👊</Heading>
      <Text>
        If you would like to connect with me, whether we have previously
        interacted online or in person, I invite you to join my community server
        on <b>Discord</b>.
      </Text>
      <div className="mt-4">
        <LinkButton href={`https://${DOMAIN}/community`} target="_blank">
          Join Discord Community <FiExternalLink className={ICON} />
        </LinkButton>
      </div>
    </Section>
  );
};
