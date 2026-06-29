import { RiVipDiamondFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { Education } from "../types/education";
import { ICON } from "../lib/tailwindcss/icon";
import { LinkButton } from "./LinkButton";
import { Tooltip } from "react-tippy";
import { Border } from "./Border";
import { Text } from "./Text";

// Next.js
import Image from "next/image";

interface Props {
  education: Education;
}

const VISIBLE_SKILLS = 2;

export const EducationCard = (props: Props) => {
  const visibleSkills = props.education.skills.slice(0, VISIBLE_SKILLS);
  const remaining = props.education.skills.length - VISIBLE_SKILLS;

  return (
    <div
      className="flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300 mb-6 z-10"
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
            <div
              className={`flex w-full items-center justify-center sm:justify-start sm:mb-0 mb-0 ${
                props.education.graduated ? "mb-1" : "mb-0"
              }`}
            >
              <Text>{`${props.education.start} - ${props.education.finish} ${
                props.education.finish - new Date().getFullYear() >= 1
                  ? "(Present)"
                  : ""
              }`}</Text>{" "}
            </div>
            <h1 className="text-2xl font-bold dark:text-white">
              {props.education.name}
            </h1>
            <Text>
              {props.education.degree}, {props.education.course}
            </Text>
          </div>
        </div>
        <LinkButton
          title={`Visit The ${props.education.name} Website`}
          href={props.education.link}
          target="_blank"
        >
          Visit <FiExternalLink title="Visit" className={ICON} />
        </LinkButton>
      </div>
      {props.education.skills.length > 0 && (
        <div className="flex items-center justify-center sm:justify-start mt-5 pt-5 border-t border-teal-100 dark:border-teal-900">
          <RiVipDiamondFill
            title="Skills"
            className="text-primary text-base shrink-0 mr-3 md:hover:scale-110 transition-transform duration-200 ease-out"
          />
          <span className="text-gray-600 dark:text-gray-300 text-base">
            {visibleSkills.join(", ")}
            {remaining > 0 && (
              <>
                {" and "}
                <Tooltip
                  title={props.education.skills.join(", ")}
                  position="top"
                  animation="shift"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200 cursor-default border-b border-dotted border-gray-400 dark:border-gray-500">
                    +{remaining} skill{remaining > 1 ? "s" : ""}
                  </span>
                </Tooltip>
              </>
            )}
          </span>
        </div>
      )}
    </div>
  );
};
