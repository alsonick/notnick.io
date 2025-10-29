import { SpotifyPlaylistCover } from "../components/SpotifyPlaylistCover";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Listening } from "../components/Listening";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Seo } from "../components/Seo";
import { MUSIC } from "../lib/music";
import { page } from "../lib/page";

// Next.js
import Link from "next/link";

const Music = () => {
  return (
    <>
      <Seo
        title={`${page.music.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>{page.music.title}</Heading>
          </Header>
          <div className="mb-4 grid md:grid-cols-3 gap-4 sm:grid-cols-2">
            {MUSIC.map((playlist) => (
              <Link
                href={playlist.link}
                target="_blank"
                className={`my-4 flex flex-col items-center md:hover:translate-y-1 duration-300
  focus:ring-4 ring-primary rounded-xl outline-none`}
                key={playlist.id}
              >
                <SpotifyPlaylistCover
                  playlist={playlist}
                  name={playlist.name}
                  path={playlist.path}
                />
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
