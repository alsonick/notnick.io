import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../../lib/data/projects";
import { Heading } from "../ui/Heading";
import { Section } from "../layout/Section";
import { LinkTag } from "../ui/LinkTag";
import { page } from "../../lib/page";
import { Text } from "../ui/Text";

export const Projects = () => {
  return (
    <Section>
      <Heading>Projects ⛓️</Heading>
      <Text>A collection of a few of my projects.</Text>
      <div className="flex flex-col gap-4 mt-6">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard
            active={project.active}
            github={project.github}
            desc={project.desc}
            name={project.name}
            logo={project.logo}
            link={project.link}
            kind={project.kind}
            tech={project.tech}
            site={project.site}
            oss={project.oss}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
      <div className="mt-6">
        <Text>
          Click <LinkTag href={page.projects.link}>here</LinkTag> to view the
          full list.
        </Text>
      </div>
    </Section>
  );
};
