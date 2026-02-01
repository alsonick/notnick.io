import { EducationCard } from "./EducationCard";
import { EDUCATION } from "../lib/education";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Text } from "./Text";

export const Education = () => {
  return (
    <Section>
      <Heading>Education 📚</Heading>
      <Text>
        My full educational background, not inclusive of secondary school and
        below.
      </Text>
      <div className="flex flex-col mt-6">
        {EDUCATION.map((education) => (
          <EducationCard education={education} key={education.id} />
        ))}
      </div>
    </Section>
  );
};
