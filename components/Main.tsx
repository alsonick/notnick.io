import { EMAIL_ADDRESS } from "../lib/constants";
import { Listening } from "./Listening";
import { LinkTag } from "./LinkTag";
import { Heading } from "./Heading";
import { useState } from "react";
import { Links } from "./Links";

export const Main = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Heading style={{ marginTop: "2rem" }}>Hey, I&apos;m Nicholas!</Heading>
      <Listening setActive={setPresenceActive} />
      <Article>
        I&apos;m a {new Date().getFullYear() - 2003} year old software engineer
        based in the UK, I specialize in web development and a little bit of
        mobile development.
      </Article>
      <Article>
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
      </Article>
      <Article>
        I&apos;m also very passionate about systems programming and networking,
        recently I&apos;ve been picking up the{" "}
        <LinkTag href="https://www.rust-lang.org/" target="_blank">
          Rust Programming Language
        </LinkTag>{" "}
        and so far I&apos;m loving it.
      </Article>
      <Article>
        Aside from programming I also love to travel and watch anime in my spare
        time, currently my favourite anime is{" "}
        <LinkTag href="https://en.wikipedia.org/wiki/One_Piece" target="_blank">
          One Piece
        </LinkTag>
        .
      </Article>
      <h3 className="dark:text-white font-bold mb-2">Contact 💌</h3>
      <ContactText>
        Be sure to shoot me a{" "}
        <LinkTag href="https://twitter.com/heynickn" target="_blank">
          DM on Twitter
        </LinkTag>
        .
      </ContactText>
      <ContactText>
        For more serious matters{" "}
        <LinkTag href={`mailto:${EMAIL_ADDRESS}`}>shoot me an email</LinkTag>.
      </ContactText>
      <Links />
    </>
  );
};

const ContactText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-600 dark:text-gray-300">{children}</p>;
};

const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="text-gray-600  dark:text-gray-300 mb-6">
      {children}
    </article>
  );
};
