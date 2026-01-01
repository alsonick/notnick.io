import { MUSIC_STREAMING_PLATFORM } from "../lib/constants";
import { PlaylistCover } from "./PlaylistCover";
import { FiArrowRight } from "react-icons/fi";
import { MUSIC } from "../lib/music";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Section } from "./Section";
import { page } from "../lib/page";
import { Text } from "./Text";

// Net.js
import Link from "next/link";

export const Music = () => {
  const featured = MUSIC.filter((playlist) => playlist.feature);

  return (
    <Section>
      <Heading>Music 🎶</Heading>
      <Text>
        If you&apos;re curious about the type of music I listen to, be sure to
        check out some of my {MUSIC_STREAMING_PLATFORM} playlists below.
      </Text>
      <div className="sm:flex hidden mt-12 mb-6 flex-col md:flex-row justify-between">
        {featured.map((playlist, index) => {
          return (
            <Link
              className={`cursor-pointer flex flex-col items-center z-10 p-0 md:p-2 focus:ring-4 ring-primary ${
                index === 1
                  ? "md:-translate-y-6 md:hover:-translate-y-5"
                  : "md:hover:translate-y-1"
              } outline-none rounded-xl duration-300 md:mb-0 mb-6`}
              key={playlist.id}
              href={playlist.link}
              target="_blank"
            >
              <PlaylistCover
                playlist={playlist}
                name={playlist.name}
                path={playlist.path}
              />
            </Link>
          );
        })}
      </div>
      <div className="sm:hidden flex mt-4">
        <LinkTag href={page.music.link}>
          Click here to view playlist collection.{" "}
          <FiArrowRight className="text-lg ml-1" />
        </LinkTag>
      </div>
      <div className="sm:flex hidden">
        <Text>
          Click{" "}
          <LinkTag
            href={page.music.link}
            title="Click here to view the entire playlist collection"
          >
            here
          </LinkTag>{" "}
          to view the entire playlist collection.
        </Text>
      </div>
    </Section>
  );
};
