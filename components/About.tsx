import { DOMAIN, LOCATED, PROFESSION } from "../lib/constants";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import Tippy from "@tippyjs/react";
import { page } from "../lib/page";
import { Text } from "./Text";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a{" "}
        <Tippy animation="fade" content={"4th March 2003"}>
          <b>
            <span className="inline">{new Date().getFullYear() - 2003}</span>
          </b>
        </Tippy>{" "}
        year old {PROFESSION.toLowerCase()} located in the <b>{LOCATED}</b>. I
        roughly have around <b>4</b> years of experience in web development and
        I&apos;m familiar with modern web technologies such as <b>React</b> &{" "}
        <b>TypeScript</b>. I&apos;m currently studying Computer Science and I
        plan to specialize in server-side development in the near future.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I love to watch <b>anime</b> in my spare time,
        currently my favorite anime shows are{" "}
        <LinkTag href="https://anilist.co/anime/21/ONE-PIECE/" target="_blank">
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
        is my favorite genre to play. <br /> <br /> I&apos;m also a huge{" "}
        <LinkTag
          href="https://en.wikipedia.org/wiki/Extraversion_and_introversion"
          target="_blank"
        >
          introvert
        </LinkTag>{" "}
        and pretty shy so I prefer solitude but I&apos;m always open to meeting
        new people with similar interests! If you&apos;d like to chat then be
        sure to add me on any <LinkTag href={page.socials.link}>social</LinkTag>{" "}
        media platform.
      </Text>

      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href={page.specs.link}>click here</LinkTag>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        View the collection of articles that I&apos;ve found interesting{" "}
        <LinkTag href={page.articles.link}>over here</LinkTag>.
      </Text>

      <Text>
        View some random pictures I&apos;ve taken{" "}
        <LinkTag href={`https://pics.${DOMAIN}`} target="_blank">
          here
        </LinkTag>
        .
        <br /> Connect with me on my{" "}
        <LinkTag href={page.socials.link}>socials</LinkTag>.
      </Text>
    </section>
  );
};
