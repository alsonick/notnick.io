import { FiExternalLink, FiCameraOff } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { Project } from "../types/project";
import { LinkButton } from "./LinkButton";
import { FaGithub } from "react-icons/fa";
import { LinkT } from "./Link";
import { Text } from "./Text";

// Next.js
import Image from "next/image";

export const ProjectCard = (props: Project) => {
  const href = props.link ? props.link : `https://${props.site}`;

  return (
    <div className="rounded-2xl flex flex-col dark:bg-[#10161a]/50 bg-white border border-teal-100 dark:border-teal-900 hover:border-teal-400 dark:hover:border-teal-600 duration-300 w-full">
      <div className="p-4 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          {props.logo ? (
            <Image
              className="rounded-xl border border-teal-100 dark:border-teal-900"
              title={`${props.name} Logo`}
              alt={`${props.name} Logo`}
              src={props.logo}
              height={48}
              width={48}
            />
          ) : (
            <div className="flex items-center justify-center h-[48px] w-[48px] border border-teal-100 dark:border-teal-900 rounded-xl">
              <FiCameraOff className="text-lg dark:text-white text-black" />
            </div>
          )}
          <div className="flex flex-col gap-0.5">
            <h2 className="text-lg font-bold dark:text-white text-black leading-tight">
              {props.name}
            </h2>
            {props.site && (
              <Text style={{ fontSize: "0.8rem" }}>{props.site}</Text>
            )}
          </div>
        </div>
        <Text>{props.desc}</Text>
      </div>

      <div className="px-4 py-3 border-t border-teal-100 dark:border-teal-900 flex items-center gap-2">
        <LinkButton href={href} target="_blank">
          Visit <FiExternalLink className={ICON} />
        </LinkButton>
        {props.oss && props.github && (
          <LinkT href={props.github} target="_blank">
            <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 duration-150" />
          </LinkT>
        )}
      </div>
    </div>
  );
};
