import { TECHNOLOGIES } from "../lib/technologies";
import { Heading } from "./Heading";
import { Note } from "./Note";

// Next.js
import Link from "next/link";
import { TechnologyCard } from "./TechnologyCard";

export const Technologies = () => {
  return (
    <section className="flex flex-col mb-12">
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
    </section>
  );
};
