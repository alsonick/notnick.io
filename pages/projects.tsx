import { EMAIL_ADDRESS, FULL_NAME, PROFESSION } from "../lib/constants";
import { ProjectCard } from "../components/ProjectCard";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { PROJECTS } from "../lib/projects";
import { LinkT } from "../components/Link";
import { Note } from "../components/Note";
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
          <Note>
            Some projects are based on other platforms (e.g. Lyrics Tags
            Generator, vercel.notnick.io) and may use some of their branding
            assets, these are small hobby projects, but if you&apos;d like your
            branding removed, please{" "}
            <LinkT href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
              email
            </LinkT>{" "}
            me.
          </Note>
          <div className="flex flex-col flex-1 mt-6">
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
