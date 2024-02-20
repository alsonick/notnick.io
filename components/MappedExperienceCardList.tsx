import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "../types/experience";

interface Props {
  list: Experience[];
}

export const MappedExperienceCardList = ({ list }: Props) => {
  return (
    <>
      {list.map((experience) => (
        <ExperienceCard
          employmentType={experience.employmentType}
          description={experience.description}
          location={experience.location}
          current={experience.current}
          remote={experience.remote}
          filter={experience.filter}
          name={experience.name}
          link={experience.link}
          year={experience.year}
          logo={experience.logo}
          task={experience.task}
          key={experience.id}
        />
      ))}
    </>
  );
};
