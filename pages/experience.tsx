import { ExperienceCard } from "../components/ExperienceCard";
import { EMAIL_ADDRESS } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { LinkTag } from "../components/LinkTag";
import { EXPERIENCE } from "../lib/experience";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
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
          <Header singleItem={true} column={true}>
            <Heading style={{ marginBottom: 0 }}>Experience</Heading>
            <Text style={{ marginTop: "15px" }}>
              Not all my professional experience is listed below here, If
              you&apos;d like to find out more then please visit my{" "}
              <LinkTag
                href="https://www.linkedin.com/in/nicholas-n-5a9187195/"
                target="_blank"
              >
                LinkedIn
              </LinkTag>{" "}
              page. For details on my past experience please drop an email to me
              by clicking{" "}
              <LinkTag href={`mailto:${EMAIL_ADDRESS}`} target="_blank">
                here
              </LinkTag>
              .
            </Text>
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
