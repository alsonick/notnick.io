import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { Anime } from "../types/anime";
import Tippy from "@tippyjs/react";
import { Text } from "./Text";
import { Tag } from "./Tag";

interface Props {
  showExtendedDescription: boolean;
  anime: Anime;
}

export const AnimeCard = (props: Props) => {
  return (
    <div
      className="flex sm:flex-row flex-col border h-full items-center text-center border-teal-100
      dark:border-teal-900 rounded-lg dark:bg-[#10161a]/50 p-4 mb-4"
      key={props.anime.id}
    >
      {" "}
      <picture className="flex sm:h-60 sm:w-60 w-full h-full mb-3 sm:mb-0 justify-center">
        <img
          className="rounded-lg sm:hover:scale-95 hover:scale-100 duration-300 w-full border border-teal-100 dark:border-teal-900"
          title={`${props.anime.name} ${
            props.anime.english && `(${props.anime.english})`
          } Anime Cover`}
          alt={`${props.anime.name} ${
            props.anime.english && `(${props.anime.english})`
          } Anime Cover`}
          src={props.anime.path}
        />
      </picture>
      <div className="flex flex-col w-full items-center text-center sm:items-end sm:text-left px-6">
        <div className="flex items-center sm:mr-auto mr-0">
          <Tag title={capitalizeFirstLetter(props.anime.filter)} />
        </div>
        <div className="my-1 w-full">
          <h1 className="text-black dark:text-white font-bold text-xl">
            {props.anime.name}{" "}
            {props.anime.english && `(${props.anime.english})`}
          </h1>
          {props.showExtendedDescription ? (
            <Tippy
              content={props.anime.description}
              placement="bottom"
              animation="fade"
            >
              <div className="w-full">
                <Text sliceText={true} slice={100}>
                  {props.anime.description}
                </Text>
              </div>
            </Tippy>
          ) : (
            <Text sliceText={true} slice={100}>
              {props.anime.description}
            </Text>
          )}
        </div>
        <div className="flex sm:flex-row flex-col-reverse items-center">
          <div className="mr-0 sm:mr-4 mt-4 sm:mt-0">
            <LinkButton href={props.anime.watch} target="_blank">
              Watch <FiExternalLink className={ICON} />
            </LinkButton>
          </div>
          <LinkButton
            href={`https://anilist.co/anime/${props.anime.anilistId}/${props.anime.slug}/`}
            target="_blank"
          >
            Learn More <FiExternalLink className={ICON} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
