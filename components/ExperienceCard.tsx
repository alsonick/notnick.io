import { FiExternalLink, FiMapPin } from "react-icons/fi";
import { Experience } from "../types/experience";
import { Button } from "./Button";
import Image from "next/image";
import { Text } from "./Text";
import { Tag } from "./Tag";

// TODO: Add link

export const ExperienceCard = ({
  name,
  description,
  year,
  partTime,
  location,
  current,
  remote,
  logo,
  task,
}: Experience) => {
  return (
    <div
      className="flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6 mt-5 
      duration-300 border border-teal-100 dark:border-teal-900 mb-6"
    >
      {logo ? (
        <Image
          className="rounded-full h-fit mb-5 sm:mb-0"
          src={logo}
          width={80}
          height={80}
          alt={`${name} Logo`}
          title={name}
          quality={99}
        />
      ) : (
        <div></div>
      )}
      <div className="ml-6 w-full text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start mb-3 sm:mb-0">
          <h1 className="text-2xl font-bold dark:text-white mr-3">{name}</h1>
          <Tag title={current ? "Current" : "Past"} />
        </div>
        <Text>
          {description} &bull; {year} &bull;{" "}
          {partTime ? "Part-time" : "Full-time"} &bull; {remote && "Remote"}
        </Text>
        <div className="relative mt-2">
          <Text>{task}</Text>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-2">
          <div className="flex items-center mb-4 sm:mb-0">
            <FiMapPin className="text-gray-600 dark:text-gray-300 mr-2" />
            <Text>{location}</Text>
          </div>
          <Button>
            Visit <FiExternalLink className="text-xl ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
