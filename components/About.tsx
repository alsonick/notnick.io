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
        based in the UK, I mostly specialize in web development, mainly frontend
        development.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I use a variety of technologies to ease the development process, when
        working on the client I use <b>TypeScript</b> &#38; <b>Next.js</b> and
        for the backend development I use either <b>NodeJS</b> or <b>PHP</b>.
        For databases I have the most experience in <b>PostgreSQL</b> and{" "}
        <b>SQL</b>.
      </Text>

      <Text style={{ marginBottom: `${TEXT_MARGIN_BOTTOM}rem` }}>
        I&apos;m also very passionate about systems programming and networking,
        recently I&apos;ve been picking up <b>Rust</b> and so far I&apos;m
        loving it. I also have some{" "}
        <LinkTag href="/note/networking-notes">networking notes</LinkTag> so If
        you&apos;re interested about getting into networking then be sure to
        check those out!
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
        .
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
