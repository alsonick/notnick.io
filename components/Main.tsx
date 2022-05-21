import { EMAIL_ADDRESS } from "../lib/constants";
import { Listening } from "./Listening";
import { Heading } from "./Heading";
import { useState } from "react";
import { Links } from "./Links";

import Link from "next/link";

export const Main = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <main>
      <Heading>Hey, I&apos;m Nicholas!</Heading>
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
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Be sure to shoot me a{" "}
        <Link href="https://twitter.com/heynickn">
          <a
            className="font-bold text-[#f54bff] hover:underline"
            target="_blank"
          >
            DM on Twitter
          </a>
        </Link>
        .
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        For more serious matters{" "}
        <Link href={`mailto:${EMAIL_ADDRESS}`}>
          <a
            className="font-bold text-[#f54bff] hover:underline"
            target="_blank"
          >
            shoot me an email
          </a>
        </Link>
        .
      </p>
      <Links />
    </main>
  );
};

const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="text-gray-600 dark:text-gray-300 mb-6">
      {children}
    </article>
  );
};

interface Props {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

const LinkTag = ({ children, href, target }: Props) => {
  return (
    <Link href={href}>
      <a className="font-bold hover:underline text-[#f54bff]" target={target}>
        {children}
      </a>
    </Link>
  );
};
