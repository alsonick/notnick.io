import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

export const About = () => {
  const TEXT_MARGIN_BOTTOM = 1.5;

  return (
    <section className="flex flex-col mb-12">
      <Heading>About Me 💭</Heading>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m a {new Date().getFullYear() - 2003} year old software engineer
        based in the UK, I specialize in web development and a little bit of
        mobile development.
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I use a variety of technologies to ease my development process, when
        working on the client I use{" "}
        <LinkTag href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </LinkTag>{" "}
        &#38;{" "}
        <LinkTag href="https://reactjs.org/" target="_blank">
          React
        </LinkTag>{" "}
        and for the serverside I use{" "}
        <LinkTag href="https://nodejs.org/en/" target="_blank">
          Node
        </LinkTag>
        .
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m also very passionate about systems programming and networking,
        recently I&apos;ve been picking up the{" "}
        <LinkTag href="https://www.rust-lang.org/" target="_blank">
          Rust Programming Language
        </LinkTag>{" "}
        and so far I&apos;m loving it.
      </Text>
      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        Aside from programming I also love to travel and watch anime in my spare
        time, currently my favourite anime is{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/One_Piece" target="_blank">
          One Piece
        </LinkTag>
        .
      </Text>
    </section>
  );
};
