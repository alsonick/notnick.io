import { ProjectCard } from "../components/ProjectCard";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { PROJECTS } from "../lib/projects";
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
          <div className="flex items-center my-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Projects</Heading>
          </div>
          {/* <div className="my-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                desc={project.desc}
                active={project.active}
                site={project.site}
              />
            ))}
          </div> */}
          {/* <Button onClick={() => shuffleArray(PROJECTS)}>Shuffle</Button> */}
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
