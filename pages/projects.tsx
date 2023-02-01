import { ProjectCardWrapper } from "../components/ProjectCardWrapper";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { LinkT } from "../components/Link";
import { PROJECTS } from "../lib/projects";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { useState } from "react";

// Next.js
import { NextPage } from "next";

const Projects: NextPage = () => {
  const [projectInput, setProjectInput] = useState("");
  const [projects, setProjects] = useState(PROJECTS);

  const filteredProjectArray = projects.filter((project) =>
    project.name.includes(projectInput)
  );

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
              for, you can always view my{" "}
              <LinkT href="https://github.com/alsonick" target="_blank">
                GitHub
              </LinkT>{" "}
              page to view more of my projects.
            </Text>
          </Header>

          <div className="flex items-center justify-between w-full">
            <div className="w-full">
              <div className="mb-1">
                <Label text="Title" />
              </div>
              <Input
                placeholder="Search for a project..."
                style={{ width: "100%" }}
                value={projectInput}
                onChange={(e) => setProjectInput(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="my-4">
            <>
              {filteredProjectArray.length && projectInput ? (
                <>
                  {filteredProjectArray.map((project) => (
                    <ProjectCardWrapper
                      github={project.github}
                      active={project.active}
                      name={project.name}
                      desc={project.desc}
                      site={project.site}
                      oss={project.oss}
                      key={project.id}
                      id={project.id}
                    />
                  ))}
                </>
              ) : (
                <>
                  <>
                    {!projectInput ? (
                      <div>
                        {projects.map((project) => (
                          <ProjectCardWrapper
                            github={project.github}
                            active={project.active}
                            name={project.name}
                            desc={project.desc}
                            site={project.site}
                            oss={project.oss}
                            key={project.id}
                            id={project.id}
                          />
                        ))}
                      </div>
                    ) : (
                      <h2 className="text-xl font-semibold opacity-30 dark:text-white text-center my-24">
                        No projects with the title{" "}
                        {`"${projectInput
                          .trim()
                          .split("", 15)
                          .reduce(
                            (o, c) =>
                              o.length === 14 ? `${o}${c}...` : `${o}${c}`,
                            ""
                          )}"`}{" "}
                        was found.
                        <br />
                        Try a different search with a different title.
                      </h2>
                    )}
                  </>
                </>
              )}
            </>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
