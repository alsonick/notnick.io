import { FiGithub } from "react-icons/fi";
import { Text } from "./Text";
import { Link } from "./Link";
import { Tag } from "./Tag";

interface Props {
  title: string;
  desc: string;
  active: boolean;
  site: string;
}

export const ProjectCard = ({ title, desc, active, site }: Props) => {
  return (
    <div className="flex items-center mb-8 justify-between rounded w-full">
      <div>
        <Tag title={active ? "Active" : "Not active"} />
        <h1 className="text-3xl text-black dark:text-white font-bold leading-tight">
          {title}
        </h1>
        <div className="max-w-sm">
          <Text>{desc}</Text>
          <div>
            <FiGithub className="text-gray-600 dark:text-gray-300 mt-2 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
      {site ? <Link>Visit</Link> : null}
    </div>
  );
};
