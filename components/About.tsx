import Tippy from "@tippyjs/react";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a{" "}
        <Tippy animation="fade" content={"4th March 2003"}>
          <p className="inline">{new Date().getFullYear() - 2003}</p>
        </Tippy>{" "}
        software engineer mainly focused on the field of mobile app development,
        more specifically iOS development. I&apos;m also a huge{" "}
        <LinkTag
          href="https://developer.apple.com/xcode/swiftui/"
          target="_blank"
        >
          SwiftUI
        </LinkTag>{" "}
        enthusiast so If you&apos;d like to geek about{" "}
        <LinkTag href="https://www.swift.org/" target="_blank">
          Swift
        </LinkTag>{" "}
        be sure to{" "}
        <LinkTag href="https://twitter.com/heynickn" target="_blank">
          tweet
        </LinkTag>{" "}
        me.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I also love to travel and watch anime in my spare
        time, currently my favorite anime shows are{" "}
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
        . I also love playing the piano,{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/Ragtime" target="_blank">
          ragtime
        </LinkTag>{" "}
        is my favorite genre to play.
      </Text>

      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href="/specs">Click here</LinkTag>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        View the collection of articles that I&apos;ve found interesting{" "}
        <LinkTag href="/articles">over here</LinkTag>.
      </Text>

      <Text>
        View some random pictures I&apos;ve taken{" "}
        <LinkTag href="https://pics.notnick.io" target="_blank">
          here
        </LinkTag>
        .
        <br /> Connect with me on my <LinkTag href="/socials">socials</LinkTag>.
      </Text>
    </section>
  );
};
