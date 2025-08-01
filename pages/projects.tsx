import { FULL_NAME, PROFESSION } from "../lib/constants";
import { ProjectCard } from "../components/ProjectCard";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { PROJECTS } from "../lib/projects";
import { Seo } from "../components/Seo";
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
            <Heading style={{ marginBottom: 0 }}>{page.projects.title}</Heading>
          </Header>
          <div className="mb-4 grid md:grid-cols-3 gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard
                active={project.active}
                github={project.github}
                desc={project.desc}
                name={project.name}
                logo={project.logo}
                kind={project.kind}
                link={project.link}
                site={project.site}
                oss={project.oss}
                key={project.id}
                id={project.id}
              />
            ))}
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
