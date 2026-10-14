import {
  YEAR_STARTED_PROGRAMMING_PROFESSIONALLY,
  SUBJECT_OF_STUDY,
  UNIVERSITY,
  PROFESSION,
  LOCATED,
  DOMAIN,
} from "../../lib/constants";
import { Heading } from "../ui/Heading";
import { Section } from "../layout/Section";
import { Highlight } from "../ui/Highlight";
import { LinkTag } from "../ui/LinkTag";
import Tippy from "@tippyjs/react";
import { page } from "../../lib/page";
import { Text } from "../ui/Text";

export const About = () => {
  const p = [
    {
      p1: (
        <Text>
          <Tippy animation="fade" content={"4th March 2003"}></Tippy>
          <Highlight>{PROFESSION}</Highlight> based in the {LOCATED}, currently
          in my <Highlight>final year</Highlight> of a{" "}
          <Highlight>{SUBJECT_OF_STUDY}</Highlight> degree at the{" "}
          <Highlight>{UNIVERSITY}</Highlight>. I also have{" "}
          <Highlight>
            {new Date().getFullYear() - YEAR_STARTED_PROGRAMMING_PROFESSIONALLY}{" "}
            years
          </Highlight>{" "}
          of hands-on experience building software with React, Python, Java &
          TypeScript. Alongside my degree, I&apos;m working towards getting my{" "}
          <Highlight>CCNA</Highlight> certification to build a strong foundation
          in networking.
        </Text>
      ),
      p3: (
        <Text>
          I&apos;m also into <Highlight>homelabbing</Highlight>. You can check
          out the <LinkTag href={page.specs.link}>hardware specs</LinkTag> I use
          every day, a collection of{" "}
          <LinkTag href={page.articles.link}>articles</LinkTag> on networking
          and software engineering that I&apos;ve found interesting, and some{" "}
          <LinkTag href={`https://pics.${DOMAIN}`} target="_blank">
            photos
          </LinkTag>{" "}
          I&apos;ve taken in my spare time. Feel free to sign my{" "}
          <LinkTag href={page.guestbook.link}>guestbook</LinkTag> and leave a
          message while you&apos;re here!
        </Text>
      ),
    },
  ];

  return (
    <Section>
      <Heading>About 💭</Heading>
      <div className="space-y-4">
        {p[0].p1}
        {p[0].p3}
      </div>
    </Section>
  );
};
