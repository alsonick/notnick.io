import { DiGithubBadge } from "react-icons/di";
import { Text } from "./Text";
import { LinkT } from "./Link";
import Link from "next/link";

interface Props {
  active: boolean;
  githubLink: string;
  title: string;
  desc: string;
  oss: boolean;
  site?: string;
}

// TODO: clean this up

export const ProjectCard = ({ title, desc, githubLink, oss, site }: Props) => {
  return (
    <div className="flex items-center mb-8 justify-between dark:bg-gray-800 bg-gray-100 rounded-lg p-5 w-full">
      <div>
        <h1 className="text-3xl text-black dark:text-white font-bold leading-tight">
          {title}
        </h1>
        <div className="max-w-sm">
          <Text>{desc}</Text>
          {oss && (
            <Link href={githubLink} target="_blank">
              <DiGithubBadge className="text-gray-600 dark:text-gray-300 mt-2 text-3xl cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      {site ? <LinkT>Visit</LinkT> : null}
    </div>
  );
};
