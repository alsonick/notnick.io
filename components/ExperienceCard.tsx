import { getEmploymentTypeString } from "../lib/get-employment-type-string";
import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { Experience } from "../types/experience";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { Border } from "./Border";
import { Text } from "./Text";
import { Note } from "./Note";
import { Tag } from "./Tag";

// Next.js
import Image from "next/image";

export const ExperienceCard = (props: Experience) => {
  return (
    <div
      className="flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 mb-6 z-10 mt-5"
    >
      {props.logo ? (
        <div className="mb-5">
          <Border>
            <Image
              className="rounded-full h-fit sm:mb-0 z-10"
              title={`${props.name} Logo`}
              alt={`${props.name} Logo`}
              src={props.logo}
              quality={99}
              height={100}
              width={100}
            />
          </Border>
        </div>
      ) : (
        <div></div>
      )}
      <div className="sm:ml-8 ml-0 w-full text-center sm:text-left">
        <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-start mb-3 sm:mb-0">
          <div className="flex items-center justify-center sm:mr-3 mr-0">
            <h1 className="text-2xl font-bold dark:text-white">{props.name}</h1>
            {props.showCurrentStatus && (
              <div className="ml-3">
                <Tag
                  title={props.current ? "Current" : "Past"}
                  type={props.current ? "success" : "error"}
                />
              </div>
            )}
          </div>
          {props.showCurrentStatus && (
            <>
              {props.discontinued && (
                <p className="ml-1 sm:mt-0 mt-3 uppercase text-xs text-red-500 font-bold tracking-widest">
                  discontinued
                </p>
              )}
            </>
          )}
        </div>
        <Text>
          {props.description} &bull; {props.year} &bull;{" "}
          {getEmploymentTypeString(props)} &bull; {props.remote && "Remote"}
        </Text>
        <div className="relative mt-2">
          <Text>{props.task}</Text>
        </div>
        {props.showCurrentStatus && (
          <div className="mt-2">{props.note && <Note>{props.note}</Note>}</div>
        )}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-2">
          <div className="flex items-center mb-4 sm:mb-0">
            <FiMapPin className="text-gray-600 dark:text-gray-300 mr-2" />
            <Text>{props.location}</Text>
          </div>
          <LinkButton href={props.link} title="Visit" target="_blank">
            Visit <FiExternalLink title="Visit" className={ICON} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
