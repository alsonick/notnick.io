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
    <div className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 rounded-2xl p-4 sm:p-5 dark:bg-[#10161a]/50 bg-white border border-teal-100 dark:border-teal-900 sm:hover:border-primary sm:dark:hover:border-primary duration-300 w-full">
      {props.logo ? (
        <Image
          className="rounded-xl border border-teal-100 dark:border-teal-900 shrink-0 object-cover h-[60px] w-[60px] sm:group-hover:scale-105 duration-300"
          title={`${props.name} Logo`}
          alt={`${props.name} Logo`}
          src={props.logo}
          quality={100}
          height={60}
          width={60}
        />
      ) : (
        <div className="flex items-center justify-center shrink-0 h-[60px] w-[60px] border border-teal-100 dark:border-teal-900 rounded-xl">
          <FiCameraOff className="text-lg dark:text-white text-black" />
        </div>
      )}

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold dark:text-white text-black leading-tight truncate">
            {props.name}
          </h2>
          <span className="shrink-0 text-[0.65rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full text-teal-700 bg-teal-50 border border-teal-100 dark:text-teal-300 dark:bg-teal-900/40 dark:border-teal-800">
            {props.kind}
          </span>
        </div>
        {props.site && <Text style={{ fontSize: "0.8rem" }}>{props.site}</Text>}
        <Text>{props.desc}</Text>
      </div>

      <div className="flex items-center gap-4 shrink-0 mt-1 sm:mt-0">
        {props.oss && props.github && (
          <LinkT href={props.github} target="_blank">
            <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 duration-150" />
          </LinkT>
        )}
        <LinkButton href={href} target="_blank">
          Visit <FiExternalLink className={ICON} />
        </LinkButton>
      </div>
    </div>
  );
};
