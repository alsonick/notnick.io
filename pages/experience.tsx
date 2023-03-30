import { ExperienceCard } from "../components/ExperienceCard";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { EXPERIENCE } from "../lib/experience";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <>
      <Seo
        title="Experience - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <Header singleItem={true} column={false}>
            <Heading>Experience</Heading>
          </Header>
          {EXPERIENCE.map((experience) => (
            <ExperienceCard
              key={experience.id}
              name={experience.name}
              description={experience.description}
              employmentType={experience.employmentType}
              remote={experience.remote}
              location={experience.location}
              current={experience.current}
              link={experience.link}
              year={experience.year}
              logo={experience.logo}
              task={experience.task}
            />
          ))}
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Experience;
