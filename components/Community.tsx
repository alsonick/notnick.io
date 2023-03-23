import { FiExternalLink } from "react-icons/fi";
import { LinkButton } from "./LinkButton";
import { Heading } from "./Heading";
import { LinkT } from "./Link";
import { Text } from "./Text";
import { Note } from "./Note";

export const Community = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Community 👊</Heading>
      <Text>
        If you would like to connect with me, whether we have previously
        interacted online or in person, I invite you to{" "}
        <LinkT href="https://notnick.io/community" target="_blank">
          join
        </LinkT>{" "}
        my community server on Discord. It is an open space that welcomes anyone
        who may be interested in getting to know me and engaging with
        like-minded individuals.
      </Text>
      <div className="mt-4">
        <LinkButton href="https://notnick.io/community" target="_blank">
          Join Server <FiExternalLink className="text-xl ml-2" />
        </LinkButton>
      </div>
      <div className="mt-6">
        <Note>
          To maintain a safe environment for all members, it is important that
          you carefully review and accept the server guidelines and rules upon
          joining.
        </Note>
      </div>
    </section>
  );
};
