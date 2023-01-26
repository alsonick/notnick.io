import { Project } from "../types/project";
import { ProjectCard } from "./ProjectCard";

export const ProjectCardWrapper = ({
  id,
  name,
  desc,
  active,
  github,
  oss,
  site,
}: Project) => {
  return (
    <ProjectCard
      githubLink={github}
      active={active}
      title={name}
      desc={desc}
      site={site}
      oss={oss}
      key={id}
    />
  );
};
