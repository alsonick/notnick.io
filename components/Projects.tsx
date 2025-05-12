import { EMAIL_ADDRESS } from "../lib/constants";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../lib/projects";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
import { LinkT } from "./Link";
import { Note } from "./Note";
import { Text } from "./Text";

export const Projects = () => {
  return (
    <Section>
      <Heading>Projects ⛓️</Heading>
      <div className="flex gap-2 flex-col md:flex-row justify-between">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard
            active={project.active}
            github={project.github}
            desc={project.desc}
            name={project.name}
            logo={project.logo}
            link={project.link}
            site={project.site}
            oss={project.oss}
            key={project.id}
            id={project.id}
          />
        ))}
      </div>
      <div className="mt-6">
        <Note>
          Some projects are based on other platforms and may use their branding
          assets, these are small hobby projects, but if you&apos;d like your
          branding removed, please{" "}
          <LinkT href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
            email
          </LinkT>{" "}
          me.
        </Note>
        <div className="mt-6">
          <Text>
            Click <LinkTag href={page.projects.link}>here</LinkTag> to view the
            full list.
          </Text>
        </div>
      </div>
    </Section>
  );
};
