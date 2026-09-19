import { TECHNOLOGIES } from "../../lib/data/technologies";
import { TechnologyCard } from "./TechnologyCard";
import { Heading } from "../ui/Heading";
import { Section } from "../layout/Section";
import { Text } from "../ui/Text";

export const Technologies = () => {
  return (
    <Section>
      <Heading>Technologies 💻</Heading>
      <Text>Tools and technologies I have experience with.</Text>
      <ul className="block text-center list-disc mt-6">
        {TECHNOLOGIES.map((tech) => (
          <li key={tech.id} className="mr-4 inline-block">
            <TechnologyCard link={tech.link} text={tech.text} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
