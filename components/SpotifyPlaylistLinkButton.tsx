import { FiExternalLink } from "react-icons/fi";

interface Props {
  name: string;
}

export const SpotifyPlaylistLinkButton = ({ name }: Props) => {
  return (
    <div className="text-md flex items-center w-fit font-semibold bg-[#1DB954] rounded-xl p-2 px-4 text-white">
      {name} Playlist <FiExternalLink className="text-xl ml-2" />
    </div>
  );
};
