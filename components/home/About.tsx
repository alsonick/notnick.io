import {
  YEAR_STARTED_PROGRAMMING_PROFESSIONALLY,
  SUBJECT_OF_STUDY,
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
          <Highlight>{PROFESSION}</Highlight> located in the{" "}
          <Highlight>{LOCATED}</Highlight>, currently in my{" "}
          <Highlight>final year</Highlight> of a degree in{" "}
          <Highlight>{SUBJECT_OF_STUDY}</Highlight>. I&apos;m working towards a
          career in <Highlight>Computer Networking</Highlight>. I also have{" "}
          <Highlight>
            {new Date().getFullYear() - YEAR_STARTED_PROGRAMMING_PROFESSIONALLY}{" "}
            years
          </Highlight>{" "}
          of hands-on experience building software with{" "}
          <Highlight>React</Highlight>, <Highlight>Python</Highlight>,{" "}
          <Highlight>Java</Highlight> & <Highlight>TypeScript</Highlight>.
        </Text>
      ),
      p2: (
        <Text>
          Outside of work, I enjoy watching <Highlight>anime</Highlight> in my
          spare time. Some of my favorites are{" "}
          <LinkTag
            href="https://anilist.co/anime/21/ONE-PIECE/"
            target="_blank"
          >
            One Piece
          </LinkTag>
          ,{" "}
          <LinkTag
            href="https://anilist.co/anime/20755/Assassination-Classroom/"
            target="_blank"
          >
            Assassination Classroom
          </LinkTag>
          ,{" "}
          <LinkTag
            href="https://anilist.co/anime/1535/Death-Note/"
            target="_blank"
          >
            Death Note
          </LinkTag>{" "}
          and{" "}
          <LinkTag
            href="https://anilist.co/anime/16498/Shingeki-no-Kyojin/"
            target="_blank"
          >
            Attack on Titan
          </LinkTag>
          , and you can see what I&apos;m currently watching{" "}
          <LinkTag
            href="https://anilist.co/user/alsonick/animelist"
            target="_blank"
          >
            here
          </LinkTag>
          . I also play the <Highlight>piano</Highlight>, with{" "}
          <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
            Ragtime
          </LinkTag>{" "}
          being my favorite genre to play, and I&apos;m a big fan of{" "}
          <Highlight>gaming</Highlight> whenever I get the chance.
        </Text>
      ),

      p3: (
        <Text>
          If you&apos;re interested in the hardware and setup I use daily, you
          can find it <LinkTag href={page.specs.link}>here</LinkTag>.
          <br />I also keep a curated collection of articles I&apos;ve found
          interesting <LinkTag href={page.articles.link}>here</LinkTag>.
        </Text>
      ),

      p4: (
        <Text>
          You can see what games I play on my Nintendo Switch{" "}
          <LinkTag href={page.switch.games.path}>here</LinkTag>.
          <br />I also share a small collection of photos I&apos;ve taken{" "}
          <LinkTag href={`https://pics.${DOMAIN}`} target="_blank">
            here
          </LinkTag>
          .
          <br />
          <br /> Click <LinkTag href={page.guestbook.link}>here</LinkTag> to
          sign my guestbook!{" "}
        </Text>
      ),
    },
  ];

  return (
    <Section>
      <Heading>About 💭</Heading>
      <div className="space-y-4">
        {p[0].p1}
        {p[0].p2}
        {p[0].p3}
        {p[0].p4}
      </div>
    </Section>
  );
};
