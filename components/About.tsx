import {
  YEAR_STARTED_PROGRAMMING,
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
          I&apos;m a{" "}
          <Tippy animation="fade" content={"4th March 2003"}>
            <b>
              <span className="inline">{new Date().getFullYear() - 2003}</span>
            </b>
          </Tippy>{" "}
          year old <b>{PROFESSION}</b> located in the <b>{LOCATED}</b>. I have{" "}
          <b>
            {new Date().getFullYear() - YEAR_STARTED_PROGRAMMING} years of
            experience
          </b>{" "}
          in web development and I&apos;m familiar with modern web technologies
          such as <b>React</b> & <b>TypeScript</b>. I&apos;m currently{" "}
          <b>pursuing a degree in {SUBJECT_OF_STUDY}</b>.
        </Text>
      ),
      p2: (
        <Text>
          Aside from programming I love to watch <b>anime</b> in my spare time,
          currently my favorite anime shows are{" "}
          <LinkTag
            href="https://anilist.co/anime/21/ONE-PIECE/"
            target="_blank"
          >
            One Piece{" "}
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
          . Click{" "}
          <LinkTag
            href="https://anilist.co/user/alsonick/animelist"
            target="_blank"
          >
            here
          </LinkTag>{" "}
          to see what I&apos;m currently watching. I also love playing{" "}
          <b>piano</b> in my free,{" "}
          <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
            Ragtime
          </LinkTag>{" "}
          is my favorite genre to play.
        </Text>
      ),
      p3: (
        <Text>
          I&apos;m also a huge{" "}
          <LinkTag
            href="https://en.wikipedia.org/wiki/Extraversion_and_introversion"
            target="_blank"
          >
            introvert
          </LinkTag>{" "}
          and pretty shy but I&apos;m always open to meeting new people with
          similar interests! If you&apos;d like to chat then be sure to add me
          on any <LinkTag href={page.socials.link}>social</LinkTag> media
          platform.
        </Text>
      ),
      p4: (
        <>
          <Text>
            If you&apos;re interested on what specs I use on a daily basis then{" "}
            <LinkTag href={page.specs.link}>click here</LinkTag>.<br /> View the
            collection of articles that I&apos;ve found interesting{" "}
            <LinkTag href={page.articles.link}>over here</LinkTag>.
          </Text>
        </>
      ),
      p5: (
        <Text>
          See what games I play on my Nintendo Switch{" "}
          <LinkTag href={page.switch.games.path}>here</LinkTag>.
          <br />
          View some random pictures I&apos;ve taken{" "}
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
        {p[0].p5}
      </div>
    </Section>
  );
};
