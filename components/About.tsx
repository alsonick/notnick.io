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
        mostly focus on developing for <b>Apple</b> platforms, more specifically
        for <b>iOS</b> and <b>macOS</b>. I also have past experience (<b>4</b>{" "}
        years) in web development and I&apos;m familiar with modern web
        technologies such as <b>React</b> & <b>TypeScript</b>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I also love to travel (when I have the time and
        money) and watch <b>anime</b> in my spare time, currently my favorite
        anime shows are{" "}
        <LinkTag href="https://anilist.co/anime/21/ONE-PIECE/" target="_blank">
          One Piece{" "}
        </LinkTag>
        ,{" "}
        <LinkTag
          href="https://anilist.co/anime/223/Dragon-Ball/"
          target="_blank"
        >
          Dragon Ball
        </LinkTag>{" "}
        and{" "}
        <LinkTag
          href="https://anilist.co/anime/16498/Shingeki-no-Kyojin/"
          target="_blank"
        >
          Attack on Titan
        </LinkTag>
        . I also love playing <b>piano</b>,{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
          ragtime
        </LinkTag>{" "}
        & <LinkTag href="">classic</LinkTag> is my favorite genre to play.
      </Text>

      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href={page.specs.link}>click here</LinkTag>.
      </Text>

      <Text>
        View the collection of articles that I&apos;ve found interesting{" "}
        <LinkTag href={page.articles.link}>over here</LinkTag>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Like music? <LinkTag href={page.music.link}>View</LinkTag> my Spotify
        playlist collection.
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
