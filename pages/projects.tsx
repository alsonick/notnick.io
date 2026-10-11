import { FULL_NAME, PROFESSION } from "../lib/constants";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/layout/Header";
import { PROJECTS } from "../lib/data/projects";
import { Seo } from "../components/layout/Seo";
import { page } from "../lib/page";

const Projects = () => {
  return (
    <>
      <Seo
        title={`${page.projects.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={true}>
            <Heading as="h1" style={{ marginBottom: 0 }}>
              {page.projects.title}
            </Heading>
          </Header>
          <div className="flex flex-col flex-1 mt-2">
            <div className="mb-4 flex flex-col gap-4">
              {PROJECTS.map((project) => (
                <ProjectCard
                  active={project.active}
                  github={project.github}
                  desc={project.desc}
                  name={project.name}
                  logo={project.logo}
                  kind={project.kind}
                  link={project.link}
                  tech={project.tech}
                  site={project.site}
                  oss={project.oss}
                  key={project.id}
                  id={project.id}
                  headingLevel="h2"
                />
              ))}
            </div>
            <div className="mt-auto pb-4">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
