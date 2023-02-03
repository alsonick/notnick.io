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
        <h1 className="text-2xl text-black dark:text-white font-bold leading-tight">
          {title}
        </h1>
        <div className="max-w-sm">
          <Text>{desc}</Text>

          {oss && (
            <Link
              className="focus:ring-4 flex w-fit items-center justify-center mt-2 duration-300 
              rounded ring-[#f54bff] outline-none focus:ring-offset-2 dark:ring-offset-black"
              href={githubLink}
              target="_blank"
            >
              <DiGithubBadge
                className="text-gray-600 dark:text-gray-300 duration-300 hover:scale-110
                hover:dark:text-gray-200 hover:text-gray-900 text-3xl cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>
      {site ? (
        <LinkT href={site} target="_blank">
          Visit
        </LinkT>
      ) : null}
    </div>
  );
};
