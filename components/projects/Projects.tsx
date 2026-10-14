import { social } from "../../lib/data/social-links";
import { PROJECTS } from "../../lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { LinkTag } from "../ui/LinkTag";
import { page } from "../../lib/page";
import { Text } from "../ui/Text";

export const Projects = () => {
  return (
    <Section>
      <Heading>Projects ⛓️</Heading>
      <Text>
        Projects I&apos;ve built in my own time, a couple of which started out
        as tools I needed for my own work. You can find the source code for most
        of them on{" "}
        <LinkTag href={social.github.link} target="_blank">
          GitHub
        </LinkTag>
        .
      </Text>
      <div className="flex flex-col gap-4 mt-6">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard
            active={project.active}
            github={project.github}
            desc={project.desc.slice(0, 2)}
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
