import { FiExternalLink } from "react-icons/fi";
import { ICON } from "../lib/tailwindcss/icon";
import { Project } from "../types/project";
import { PostCardTag } from "./PostCardTag";
import { LinkButton } from "./LinkButton";
import { FaGithub } from "react-icons/fa";
import { LinkT } from "./Link";
import { Text } from "./Text";

// Next.js
import Image from "next/image";

export const ProjectCard = (props: Project) => {
  return (
    <div className="rounded-xl flex flex-col text-center justify-between items-center py-4 px-2 border w-full border-teal-100 dark:border-teal-900 hover:translate-y-1 duration-300">
      <Image
        className="rounded-full border border-teal-100 dark:border-teal-900"
        title={`${props.name} Logo`}
        alt={`${props.name} Logo`}
        src={props.logo}
        height={80}
        width={80}
      />
      <div className="mb-2 mt-1">
        <PostCardTag title={props.site} />
      </div>
      <h1 className="text-xl font-bold  dark:text-white">
        {props.name} {props.oss && "[OSS]"}
      </h1>
      <Text>{props.desc}</Text>
      <div className="flex items-center mt-3">
        {" "}
        <div className="mr-2">
          <LinkButton href={`https://${props.site}`} target="_blank">
            Visit <FiExternalLink className={ICON} />
          </LinkButton>
        </div>
        {props.oss && (
          <LinkT href="" target="_blank">
            <FaGithub className="text-2xl text-black dark:text-white hover:scale-110 duration-150" />
          </LinkT>
        )}
      </div>
    </div>
  );
};
