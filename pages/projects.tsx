import { ProjectCard } from "../components/ProjectCard";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { LinkT } from "../components/Link";
import { PROJECTS } from "../lib/projects";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Projects: NextPage = () => {
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <>
      <Seo
        title="Projects - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Projects</Heading>
            <Text style={{ marginTop: "15px" }}>
              Here&apos;s a showcase of my projects & startups I&apos;ve worked
              for, you can always view my <LinkT href="s">GitHub</LinkT> page to
              view more of my projects.
            </Text>
          </Header>
          <div className="my-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                githubLink={project.githubLink}
                active={project.active}
                title={project.name}
                desc={project.desc}
                site={project.site}
                oss={project.oss}
                key={project.id}
              />
            ))}
            <Button onClick={() => {}}>Shuffle</Button>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
