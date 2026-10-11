import { FiExternalLink, FiCameraOff, FiCode } from "react-icons/fi";
import { ICON } from "../../lib/tailwindcss/icon";
import { Project } from "../../types/project";
import { LinkButton } from "../ui/LinkButton";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "../ui/Tooltip";
import { Border } from "../ui/Border";
import { LinkT } from "../ui/Link";

// Next.js
import Image from "next/image";
import Link from "next/link";

const VISIBLE_TECH = 4;

interface Props extends Project {
  /** h3 inside the home page section; h2 when listed straight under a page title. */
  headingLevel?: "h2" | "h3";
}

// Laid out like ExperienceCard, with EducationCard's divided footer row for
// the tech stack, so the three read as one family.
export const ProjectCard = (props: Props) => {
  const HeadingTag = props.headingLevel ?? "h3";
  const href = props.link ? props.link : `https://${props.site}`;
  const visibleTech = props.tech.slice(0, VISIBLE_TECH);
  const remaining = props.tech.length - VISIBLE_TECH;
  const github = props.oss ? props.github : undefined;

  return (
    <div
      className="flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-6
      border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300"
    >
      <div className="flex flex-col sm:flex-row w-full items-center">
        <div className="shrink-0 mb-5 sm:mb-0">
          <Border>
            {props.logo ? (
              <Image
                className="rounded-full object-cover h-20 w-20"
                title={`${props.name} Logo`}
                alt={`${props.name} Logo`}
                src={props.logo}
                quality={100}
                height={80}
                width={80}
              />
            ) : (
              <div
                className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br
                from-teal-50 to-white dark:from-teal-900/30 dark:to-transparent"
              >
                <FiCameraOff className="text-2xl text-teal-600 dark:text-teal-300" />
              </div>
            )}
          </Border>
        </div>
        <div className="sm:ml-8 ml-0 w-full min-w-0 text-center sm:text-left">
          <div className="flex w-full items-center sm:items-start sm:flex-row flex-col sm:justify-between mb-3 sm:mb-0 gap-2">
            <HeadingTag className="text-2xl font-bold dark:text-white">
              <Link
                className="rounded outline-none sm:hover:text-primary focus:ring-4 focus:ring-primary
                focus:ring-offset-2 dark:ring-offset-black duration-300"
                title={props.name}
                target="_blank"
                href={href}
              >
                {props.name}
              </Link>
            </HeadingTag>
            {props.site && (
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-right whitespace-nowrap sm:mt-2">
                {props.site}
              </p>
            )}
          </div>
          <ul
            className="mt-2 list-disc pl-5 space-y-1 text-left text-base
            text-gray-600 dark:text-gray-300 marker:text-primary"
          >
            {props.desc.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-5 pt-5 border-t border-teal-100 dark:border-teal-900">
        {props.tech.length > 0 && (
          <p className="text-gray-600 dark:text-gray-300 text-base text-center sm:text-left">
            <FiCode
              title="Technologies"
              className="inline align-[-0.125em] text-primary text-base mr-3 md:hover:scale-110 transition-transform duration-200 ease-out"
            />
            {visibleTech.join(", ")}
            {remaining > 0 && (
              <>
                {" and "}
                <Tooltip content={props.tech.join(", ")}>
                  <span
                    tabIndex={0}
                    className="font-medium text-gray-700 dark:text-gray-200 cursor-default border-b border-dotted outline-none focus-visible:ring-2 ring-primary rounded-sm border-gray-400 dark:border-gray-500"
                  >
                    +{remaining} more
                    <span className="sr-only">
                      : {props.tech.slice(VISIBLE_TECH).join(", ")}
                    </span>
                  </span>
                </Tooltip>
              </>
            )}
          </p>
        )}
        <div className="flex items-center gap-4 shrink-0 sm:ml-auto">
          {github && (
            <LinkT
              title={`${props.name} On GitHub`}
              href={github}
              target="_blank"
            >
              <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 duration-150" />
            </LinkT>
          )}
          <LinkButton title={`Visit ${props.name}`} href={href} target="_blank">
            Visit <FiExternalLink className={ICON} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
