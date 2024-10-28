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

export const SpotifyPlaylistCover = (props: Props) => {
  return (
    <Image
      className="rounded-xl border w-full border-teal-100 dark:border-teal-900"
      title={`${props.playlist?.name || name} Spotify Playlist`}
      alt={`${props.playlist?.name || name} Spotify Playlist`}
      src={props.playlist?.path || props.path}
      height={props.height || 200}
      width={props.width || 200}
      quality={100}
    />
  );
};
