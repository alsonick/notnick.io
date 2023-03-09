import { ExperienceCard } from "./ExperienceCard";
import { EXPERIENCE } from "../lib/experience";
import { Heading } from "./Heading";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const Experience = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Experience 🛠️</Heading>
      <Text>
        If you want to find out more about my professional experience and the
        work I&apos;ve done then please head over to my{" "}
        <LinkT
          href="https://www.linkedin.com/in/nicholas-n-5a9187195/"
          target="_blank"
        >
          LinkedIn
        </LinkT>{" "}
        page.
      </Text>
      <div>
        {EXPERIENCE.map((experience) => (
          <ExperienceCard
            key={experience.id}
            name={experience.name}
            description={experience.description}
            partTime={experience.partTime}
            remote={experience.remote}
            location={experience.location}
            current={experience.current}
            year={experience.year}
            logo={experience.logo}
            task={experience.task}
          />
        ))}
      </div>
    </section>
  );
};
