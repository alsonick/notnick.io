import { DOMAIN, PROFESSION } from "../lib/constants";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import Tippy from "@tippyjs/react";
import { Text } from "./Text";
import { SOCIAL_LINKS } from "../lib/social-links";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a{" "}
        <Tippy animation="fade" content={"4th March 2003"}>
          <span className="inline">{new Date().getFullYear() - 2003}</span>
        </Tippy>{" "}
        year old {PROFESSION.toLowerCase()} based in the <b>UK</b>. I mostly
        focus in developing for Apple platforms, more specifically for{" "}
        <b>iOS</b> and <b>macOS</b>. I also have past experience in web
        development and I&apos;m familiar with modern web technologies such as{" "}
        <b>React</b> & <b>TypeScript</b>. I&apos;m also a huge <b>SwiftUI</b>{" "}
        enthusiast so If you&apos;d like to geek about <b>Swift</b> be sure to{" "}
        <LinkTag href={SOCIAL_LINKS.x.link} target="_blank">
          tweet
        </LinkTag>{" "}
        me.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I also love to travel (when I have the time and
        money) and watch anime in my spare time, currently my favorite anime
        shows are{" "}
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
        . I also love playing piano,{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
          ragtime
        </LinkTag>{" "}
        & <LinkTag href="">classic</LinkTag> is my favorite genre to play.
      </Text>

      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href="/specs">click here</LinkTag>.
      </Text>

      <Text>
        View the collection of articles that I&apos;ve found interesting{" "}
        <LinkTag href="/articles">over here</LinkTag>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Like music? <LinkTag href="/music">View</LinkTag> my Spotify playlist
        collection.
      </Text>

      <Text>
        View some random pictures I&apos;ve taken{" "}
        <LinkTag href={`https://pics.${DOMAIN}`} target="_blank">
          here
        </LinkTag>
        .
        <br /> Connect with me on my <LinkTag href="/socials">socials</LinkTag>.
      </Text>
    </section>
  );
};
