import { EMAIL_ADDRESS } from "../../lib/constants";
import { social } from "../../lib/data/social-links";
import { ContactForm } from "./ContactForm";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { LinkTag } from "../ui/LinkTag";
import { Text } from "../ui/Text";

export const Contact = () => {
  return (
    <Section>
      <Heading>Contact 💌</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag href={social.x.link} target="_blank" title="DM on X">
          DM on X
        </LinkTag>
        .
      </Text>
      <Text>
        For more <b>serious</b> matters{" "}
        <LinkTag
          href={`mailto:${EMAIL_ADDRESS}`}
          title={`shoot me an email (${EMAIL_ADDRESS})`}
        >
          shoot me an email
        </LinkTag>
        .
      </Text>
      <div className="flex flex-col justify-center border-t border-teal-100 dark:border-teal-900 mt-10 pt-5 w-full">
        <ContactForm />
      </div>
    </Section>
  );
};
