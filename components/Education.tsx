import { EducationCard } from "./EducationCard";
import { EDUCATION } from "../lib/education";
import { Heading } from "./Heading";
import { Section } from "./Section";

export const Education = () => {
  return (
    <Section>
      <Heading>Education 📚</Heading>
      <div className="flex flex-col mt-6">
        {EDUCATION.map((education) => (
          <EducationCard education={education} key={education.id} />
        ))}
      </div>
    </Section>
  );
};
