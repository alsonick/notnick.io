import { Music } from "../types/music";

// Next.js
import Image from "next/image";

interface Props {
  playlist?: Music;
  height?: number;
  width?: number;
  name: string;
  path: string;
}

export const SpotifyPlaylistCover = ({
  playlist,
  height,
  width,
  path,
  name,
}: Props) => {
  return (
    <Image
      className="rounded-xl border w-full border-teal-100 dark:border-teal-900"
      title={`${playlist?.name || name} Spotify Playlist`}
      alt={`${playlist?.name || name} Spotify Playlist`}
      src={playlist?.path || path}
      height={height || 200}
      width={width || 200}
      quality={100}
    />
  );
};
