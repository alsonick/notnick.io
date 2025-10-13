import { FiExternalLink } from "react-icons/fi";
import { Education } from "../types/education";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { Border } from "./Border";
import { Text } from "./Text";

// Next.js
import Image from "next/image";

interface Props {
  education: Education;
}

export const EducationCard = (props: Props) => {
  return (
    <div
      className="flex flex-col sm:flex-row w-full items-center dark:bg-[#10161a]/50 rounded-lg p-6
      duration-300 border border-teal-100 dark:border-teal-900 mb-6"
    >
      <div className="flex sm:flex-row flex-col items-center w-full justify-between">
        <div className="flex sm:flex-row flex-col items-center mb-4 sm:mb-0">
          <Border>
            <Image
              title={`${props.education.name} Logo`}
              className="rounded-full h-fit sm:mb-0"
              alt={`${props.education.name} Logo`}
              src={props.education.logo}
              quality={100}
              height={100}
              width={100}
            />
          </Border>
          <div className="flex sm:ml-8 ml-0 flex-col sm:text-left mt-5 sm:mt-0 text-center">
            <Text>{`${props.education.start} - ${props.education.finish}`}</Text>
            <h1 className="text-2xl font-bold dark:text-white">
              {props.education.name}
            </h1>
            <Text>
              {props.education.degree}, {props.education.course}
            </Text>
          </div>
        </div>
        <LinkButton
          href={props.education.link}
          title={`Visit The ${props.education.name} Website`}
          target="_blank"
        >
          Visit <FiExternalLink title="Visit" className={ICON} />
        </LinkButton>
      </div>
    </div>
  );
};
