import { SpotifyPlaylistLinkButton } from "../components/SpotifyPlaylistLinkButton";
import { SpotifyPlaylistCover } from "../components/SpotifyPlaylistCover";
import { FULL_NAME, PROFESSION, THEME } from "../lib/constants";
import { Listening } from "../components/Listening";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Seo } from "../components/Seo";
import { MUSIC } from "../lib/music";
import { useState } from "react";
import Link from "next/link";

const Music = () => {
  const [_, setPresenceActive] = useState(false);

  return (
    <>
      <Seo
        title={`Music - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Music</Heading>
          </Header>
          <Listening setActive={setPresenceActive} />
          <div className="mb-4 grid md:grid-cols-3 gap-4 sm:grid-cols-2">
            {MUSIC.map((playlist) => (
              <Link
                href={playlist.link}
                target="_blank"
                className={`my-4 flex flex-col items-center  hover:translate-y-1 duration-300 focus:ring-4 ring-[${THEME}] rounded-xl outline-none`}
                key={playlist.id}
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
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Music;
