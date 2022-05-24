import { EMAIL_ADDRESS } from "../lib/constants";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const Contact = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Contact 💌</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag href="https://twitter.com/heynickn" target="_blank">
          DM on Twitter
        </LinkTag>
        .
      </Text>
      <Text>
        For more serious matters{" "}
        <LinkTag href={`mailto:${EMAIL_ADDRESS}`}>shoot me an email</LinkTag>.
      </Text>
    </section>
  );
};
