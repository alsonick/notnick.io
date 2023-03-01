import { Heading } from "./Heading";
import { LinkT } from "./Link";
import { Text } from "./Text";

// TODO: Finish this

export const Experience = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Experience 🛠️</Heading>
      <Text>
        If you want to find out more about my professional experience and the
        work I&apos;ve done then please head over to my{" "}
        <LinkT
          href="https://www.linkedin.com/in/nicholas-n-5a9187195/"
          target="_blank"
        >
          LinkedIn
        </LinkT>{" "}
        page.
      </Text>
    </section>
  );
};
