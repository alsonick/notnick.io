import { EMAIL_ADDRESS, FULL_NAME, PROFESSION } from "../lib/constants";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Heading } from "../components/ui/Heading";
import { Animate } from "../components/layout/Animate";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/layout/Header";
import { PROJECTS } from "../lib/data/projects";
import { Seo } from "../components/layout/Seo";
import { LinkTag } from "../components/ui/LinkTag";
import { social } from "../lib/data/social-links";
import { Text } from "../components/ui/Text";
import { LinkButton } from "../components/ui/LinkButton";
import { ICON } from "../lib/tailwindcss/icon";
import { FiHeart } from "react-icons/fi";
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
          <Header singleItem={false}>
            <Heading as="h1" style={{ marginBottom: 0 }}>
              {page.projects.title}
            </Heading>
            <LinkButton
              href="https://github.com/sponsors/alsonick"
              title="Support me on GitHub Sponsors"
              target="_blank"
            >
              Support <FiHeart className={ICON} />
            </LinkButton>
          </Header>
          <div className="mb-5">
            <Text style={{ marginTop: "10px" }}>
              These are the best of my side projects, the ones that people
              actually use and that have been well received. Most of them are
              open source, so you can dig into the code behind them. For
              everything else I&apos;ve built, check out my{" "}
              <LinkTag href={social.github.link} target="_blank" title="GitHub">
                GitHub
              </LinkTag>
              .
            </Text>
            <br />
            <Text>
              If you&apos;ve used one of these and have feedback, a feature
              idea, or found a bug, I&apos;d love to hear about it. Feel free to
              shoot me an{" "}
              <LinkTag
                href={`mailto:${EMAIL_ADDRESS}`}
                target="_blank"
                title={`Email me at ${EMAIL_ADDRESS}`}
              >
                email
              </LinkTag>
              .
            </Text>
          </div>
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
