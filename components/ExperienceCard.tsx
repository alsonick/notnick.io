import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { Experience } from "../types/experience";
import { LinkButton } from "./LinkButton";
import { Border } from "./Border";
import { Text } from "./Text";
import { Tag } from "./Tag";

// Next.js
import Image from "next/image";

export const ExperienceCard = (props: Experience) => {
  return (
    <div
      className="flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6 mt-5 
      duration-300 border border-teal-100 dark:border-teal-900 mb-6"
    >
      {props.logo ? (
        <div className="mb-5">
          <Border>
            <Image
              className="rounded-full h-fit sm:mb-0"
              src={props.logo}
              width={100}
              height={100}
              alt={`${props.name} Logo`}
              title={`${props.name} Logo`}
              quality={99}
            />
          </Border>
        </div>
      ) : (
        <div></div>
      )}
      <div className="ml-8 w-full text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-0">
          <h1 className="text-2xl font-bold dark:text-white mr-3">
            {props.name}
          </h1>
          <Tag title={props.current ? "Current" : "Past"} />
        </div>
        <Text>
          {props.description} &bull; {props.year} &bull;{" "}
          {props.partTime ? "Part-time" : "Full-time"} &bull;{" "}
          {props.remote && "Remote"}
        </Text>
        <div className="relative mt-2">
          <Text>{props.task}</Text>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-2">
          <div className="flex items-center mb-4 sm:mb-0">
            <FiMapPin className="text-gray-600 dark:text-gray-300 mr-2" />
            <Text>{props.location}</Text>
          </div>
          <LinkButton href={props.link} target="_blank">
            Visit <FiExternalLink className="text-xl ml-2" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
