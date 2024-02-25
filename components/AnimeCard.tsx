import { FiExternalLink } from "react-icons/fi";
import { PostCardTag } from "./PostCardTag";
import { LinkButton } from "./LinkButton";
import { Anime } from "../types/anime";
import Tippy from "@tippyjs/react";
import { Text } from "./Text";
import { Tag } from "./Tag";

interface Props {
  showExtendedDescription: boolean;
  anime: Anime;
}

export const AnimeCard = ({ showExtendedDescription, anime }: Props) => {
  return (
    <div
      className="flex sm:flex-row flex-col border h-full items-center text-center border-teal-100
      dark:border-teal-900 rounded-lg dark:bg-[#10161a]/50 p-4 mb-4"
      key={anime.id}
    >
      {" "}
      <picture className="flex sm:h-60 sm:w-60 w-full h-full mb-3 sm:mb-0 justify-center">
        <img
          className="rounded-lg sm:hover:scale-95 hover:scale-100 duration-300 w-full border border-teal-100 dark:border-teal-900"
          title={`${anime.name} ${
            anime.english && `(${anime.english})`
          } Anime Cover`}
          alt={`${anime.name} ${
            anime.english && `(${anime.english})`
          } Anime Cover`}
          src={anime.path}
        />
      </picture>
      <div className="flex flex-col w-full items-center text-center sm:items-end sm:text-left px-6">
        <div className="flex items-center sm:mr-auto mr-0">
          <Tag title={anime.filter} />
          <div className="ml-2 hidden sm:flex">
            <PostCardTag
              title={anime.anilistId.toString()}
              style={{ margin: 0 }}
            />
          </div>
        </div>
        <div className="my-3 w-full">
          <h1 className="text-black dark:text-white font-bold text-xl">
            {anime.name} {anime.english && `(${anime.english})`}
          </h1>
          {showExtendedDescription ? (
            <Tippy
              content={anime.description}
              placement="bottom"
              animation="fade"
            >
              <div className="w-full">
                <Text sliceText={true} slice={100}>
                  {anime.description}
                </Text>
              </div>
            </Tippy>
          ) : (
            <Text sliceText={true} slice={100}>
              {anime.description}
            </Text>
          )}
        </div>
        <div className="flex sm:flex-row flex-col-reverse items-center">
          <div className="mr-0 sm:mr-4 mt-4 sm:mt-0">
            <LinkButton href={anime.watch} target="_blank">
              Watch <FiExternalLink className="text-xl ml-2" />
            </LinkButton>
          </div>
          <LinkButton
            href={`https://anilist.co/anime/${anime.anilistId}/${anime.slug}/`}
            target="_blank"
          >
            Learn More <FiExternalLink className="text-xl ml-2" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
