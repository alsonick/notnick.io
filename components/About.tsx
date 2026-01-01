import {
  YEAR_STARTED_PROGRAMMING_PROFESSIONALLY,
  SUBJECT_OF_STUDY,
  PROFESSION,
  LOCATED,
  DOMAIN,
} from "../lib/constants";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { LinkTag } from "./LinkTag";
import Tippy from "@tippyjs/react";
import { page } from "../lib/page";
import { Text } from "./Text";

export const About = () => {
  const p = [
    {
      p1: (
        <Text>
          <Tippy animation="fade" content={"4th March 2003"}></Tippy>
          <b>{PROFESSION}</b> located in the <b>{LOCATED}</b>. I have{" "}
          <b>
            {new Date().getFullYear() - YEAR_STARTED_PROGRAMMING_PROFESSIONALLY}{" "}
            years
          </b>{" "}
          hands-on experience building software applications. I specialize in
          full-stack development using <b>React</b>, <b>Python</b>, <b>Java</b>{" "}
          & <b>TypeScript</b>. I&apos;m currently{" "}
          <b>pursuing a degree in {SUBJECT_OF_STUDY}</b>.
        </Text>
      ),
      p2: (
        <Text>
          Outside of programming, I enjoy watching <b>anime</b> in my spare
          time. Some of my favorites include{" "}
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
          . You can see what I&apos;m currently watching{" "}
          <LinkTag
            href="https://anilist.co/user/alsonick/animelist"
            target="_blank"
          >
            here
          </LinkTag>
          . I also enjoy playing the <b>piano</b> in my free time, with{" "}
          <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
            ragtime
          </LinkTag>{" "}
          being my favorite genre to play.
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
