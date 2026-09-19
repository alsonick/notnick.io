import { EducationCard } from "./EducationCard";
import { EDUCATION } from "../../lib/data/education";
import { Heading } from "../ui/Heading";
import { Section } from "../layout/Section";
import { Text } from "../ui/Text";

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
