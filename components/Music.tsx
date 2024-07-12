import { SpotifyPlaylistLinkButton } from "./SpotifyLinkButton";
import { SpotifyPlaylistCover } from "./SpotifyPlaylistCover";
import { FiArrowRight } from "react-icons/fi";
import { MUSIC } from "../lib/music";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
import { Text } from "./Text";

// Net.js
import Link from "next/link";

export const Music = () => {
  const featured = MUSIC.filter((playlist) => playlist.feature);

  return (
    <section className="flex flex-col mb-12">
      <Heading>Music 🎶</Heading>
      <Text>
        If you&apos;re curious about the type of music I listen to, be sure to
        check out some of my Spotify playlists below.
      </Text>
      <div className="sm:flex hidden mt-8 mb-6 flex-col md:flex-row justify-between">
        {featured.map((playlist, index) => {
          return (
            <Link
              className={`cursor-pointer flex flex-col items-center p-0 md:p-2 focus:ring-4 ring-primary ${
                index === 1
                  ? "md:-translate-y-6 md:hover:-translate-y-5"
                  : "md:hover:translate-y-1"
              } outline-none rounded-xl duration-300 md:mb-0 mb-6`}
              key={playlist.id}
              href={playlist.link}
              target="_blank"
            >
              <SpotifyPlaylistCover
                playlist={playlist}
                name={playlist.name}
                path={playlist.path}
              />
              <div className="mt-4">
                <SpotifyPlaylistLinkButton name={playlist.name} />
              </div>
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
          Click <LinkTag href={page.music.link}>here</LinkTag> to view the
          entire playlist collection.
        </Text>
      </div>
    </section>
  );
};
