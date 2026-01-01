import { MUSIC_STREAMING_PLATFORM } from "../lib/constants";
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

export const PlaylistCover = (props: Props) => {
  return (
    <Image
      className="rounded-xl border w-full border-teal-100 dark:border-teal-900 z-10"
      title={`${
        props.playlist?.name || props.name
      } ${MUSIC_STREAMING_PLATFORM} Playlist Cover`}
      alt={`${
        props.playlist?.name || props.name
      } ${MUSIC_STREAMING_PLATFORM} Playlist Cover`}
      src={props.playlist?.path || props.path}
      height={props.height || 200}
      width={props.width || 200}
      quality={100}
    />
  );
};
