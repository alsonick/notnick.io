import { TECHNOLOGIES } from "../lib/technologies";
import { TechnologyCard } from "./TechnologyCard";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Text } from "./Text";

export const Technologies = () => {
  return (
    <Section>
      <Heading>Technologies 💻</Heading>
      <Text>Tools and technologies I have experience with.</Text>
      <ul className="block text-center list-disc mt-6">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.id} className="mr-4 inline-block">
            <TechnologyCard link={tech.link} text={tech.text} />
          </div>
        ))}
      </ul>
    </Section>
  );
};
