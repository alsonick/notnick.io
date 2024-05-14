import { ExperienceCard } from "./ExperienceCard";
import { EXPERIENCE } from "../lib/experience";
import { social } from "../lib/social-links";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { page } from "../lib/page";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const Experience = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Experience 🛠️</Heading>
      <Text>
        If you want to find out more about my professional experience and the
        work I&apos;ve done then please head over to my{" "}
        <LinkT href={social.linkedin.link} target="_blank">
          LinkedIn
        </LinkT>{" "}
        page.
      </Text>
      <div>
        {EXPERIENCE.slice(0, 3).map((experience) => (
          <ExperienceCard
            employmentType={experience.employmentType}
            description={experience.description}
            location={experience.location}
            current={experience.current}
            feature={experience.feature}
            filter={experience.filter}
            remote={experience.remote}
            name={experience.name}
            link={experience.link}
            year={experience.year}
            logo={experience.logo}
            task={experience.task}
            slug={experience.slug}
            key={experience.id}
          />
        ))}
      </div>
      <Text>
        Click <LinkTag href={page.experience.link}>here</LinkTag> to view the
        full list.
      </Text>
    </section>
  );
};
