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
          showCurrentStatus={experience.showCurrentStatus}
          employmentType={experience.employmentType}
          description={experience.description}
          location={experience.location}
          current={experience.current}
          feature={experience.feature}
          remote={experience.remote}
          filter={experience.filter}
          note={experience.note}
          name={experience.name}
          link={experience.link}
          year={experience.year}
          slug={experience.slug}
          logo={experience.logo}
          task={experience.task}
          key={experience.id}
        />
      ))}
    </>
  );
};
