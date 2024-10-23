import { TECHNOLOGIES } from "../lib/technologies";
import { TechnologyCard } from "./TechnologyCard";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Note } from "./Note";

export const Technologies = () => {
  return (
    <Section>
      <Heading>Technologies 💻</Heading>
      <ul className="block text-center list-disc mb-6">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.id} className="mr-4 inline-block">
            <TechnologyCard
              link={tech.link}
              text={tech.text}
              desc={tech.desc}
            />
          </div>
        ))}
      </ul>
      <Note>
        I may use certain technologies more frequently than others on a daily
        basis.
      </Note>
    </Section>
  );
};
