import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About 💭</Heading>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a {new Date().getFullYear() - 2003} year old software engineer
        based in the UK, I greatly specialize in web development (
        <b>full-stack</b>) and a little bit of mobile development. I&apos;m
        currently studying{" "}
        <LinkTag
          href="https://en.wikipedia.org/wiki/Computer_science"
          target="_blank"
        >
          Computer Science
        </LinkTag>{" "}
        at the{" "}
        <LinkTag href="https://www.kent.ac.uk/" target="_blank">
          University of Kent
        </LinkTag>
        .
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I use a variety of technologies to ease the development process, when
        working on the client I use <b>TypeScript</b> &#38; <b>React</b> and for
        the backend I use either <b>NodeJS</b> or <b>Rust</b>. For databases I
        have the most experience in <b>PostgreSQL</b> and <b>MySQL</b>.
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m also very passionate about systems programming and networking,
        recently I&apos;ve been picking up <b>Rust</b> and so far I&apos;m
        loving it. I also have some{" "}
        <LinkTag href="/notes/networking-notes">networking notes</LinkTag> so If
        you&apos;re interested about getting into networking then be sure to
        check those out!
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I also love to travel and watch anime in my spare
        time, currently my favorite anime shows are{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/One_Piece" target="_blank">
          One Piece{" "}
        </LinkTag>
        and{" "}
        <LinkTag
          href="https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)"
          target="_blank"
        >
          Attack on Titan
        </LinkTag>
        .
      </Text>
      <Text>
        If you&apos;re interested on what specs I use on a daily basis then{" "}
        <LinkTag href="/specs">Click here</LinkTag>.
      </Text>
      <Text>
        View the collection of articles that I&apos;ve found interesting{" "}
        <LinkTag href="/articles">over here</LinkTag>.
      </Text>
      <Text>
        Connect with me on my <LinkTag href="/socials">socials</LinkTag>.
      </Text>
    </section>
  );
};
