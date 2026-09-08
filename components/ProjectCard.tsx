import { FiExternalLink, FiCameraOff, FiCode } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { Project } from "../types/project";
import { LinkButton } from "./LinkButton";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tippy";
import { LinkT } from "./Link";

// Next.js
import Image from "next/image";
import Link from "next/link";

const VISIBLE_TECH = 4;

export const ProjectCard = (props: Project) => {
  const href = props.link ? props.link : `https://${props.site}`;
  const visibleTech = props.tech.slice(0, VISIBLE_TECH);
  const remaining = props.tech.length - VISIBLE_TECH;

  return (
    <div
      className="group flex flex-col rounded-lg p-4 sm:p-5 w-full
      dark:bg-[#10161a]/50 bg-white border border-teal-100 dark:border-teal-900
      sm:hover:border-primary sm:dark:hover:border-primary sm:hover:-translate-y-0.5
      sm:hover:shadow-lg sm:hover:shadow-primary/5 duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 w-full">
        {props.logo ? (
          <Image
            className="rounded-lg border border-teal-100 dark:border-teal-900 shrink-0 object-cover h-[60px] w-[60px] sm:group-hover:scale-105 duration-300"
            title={`${props.name} Logo`}
            alt={`${props.name} Logo`}
            src={props.logo}
            quality={100}
            height={60}
            width={60}
          />
        ) : (
          <div
            className="flex items-center justify-center shrink-0 h-[60px] w-[60px] rounded-lg
            border border-teal-100 dark:border-teal-900 bg-gradient-to-br from-teal-50 to-white
            dark:from-teal-900/30 dark:to-transparent sm:group-hover:scale-105 duration-300"
          >
            <FiCameraOff className="text-lg text-teal-600 dark:text-teal-300" />
          </div>
        )}

        <div className="flex flex-col min-w-0 flex-1">
          <Link
            className="text-lg font-bold dark:text-white text-black leading-tight truncate rounded outline-none
            sm:hover:text-primary focus:ring-4 focus:ring-primary focus:ring-offset-2 dark:ring-offset-black duration-300"
            title={props.name}
            target="_blank"
            href={href}
          >
            {props.name}
          </Link>

          {props.site && (
            <span className="truncate text-[0.8rem] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
              {props.site}
            </span>
          )}

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
            {props.desc}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0 sm:ml-2">
          {props.oss && props.github && (
            <LinkT
              title={`${props.name} On GitHub`}
              href={props.github}
              target="_blank"
            >
              <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 duration-150" />
            </LinkT>
          )}
          <LinkButton
            title={`Visit ${props.name}`}
            href={href}
            target="_blank"
          >
            Visit <FiExternalLink className={ICON} />
          </LinkButton>
        </div>
      </div>

      {props.tech.length > 0 && (
        <div className="flex items-center mt-5 pt-5 border-t border-teal-100 dark:border-teal-900">
          <FiCode
            title="Technologies"
            className="text-primary text-base shrink-0 mr-3 md:hover:scale-110 transition-transform duration-200 ease-out"
          />
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            {visibleTech.join(", ")}
            {remaining > 0 && (
              <>
                {" and "}
                <Tooltip
                  title={props.tech.join(", ")}
                  position="top"
                  animation="shift"
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200 cursor-default border-b border-dotted border-gray-400 dark:border-gray-500">
                    +{remaining} more
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
