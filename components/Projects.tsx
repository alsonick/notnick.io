import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../lib/projects";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
import { Text } from "./Text";

export const Projects = () => {
  return (
    <Section>
      <Heading>Projects ⛓️</Heading>
      <Text>A collection of a few of my projects.</Text>
      <div className="flex gap-2 flex-col md:flex-row justify-between mt-6">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard
            active={project.active}
            github={project.github}
            desc={project.desc}
            name={project.name}
            logo={project.logo}
            link={project.link}
            kind={project.kind}
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
