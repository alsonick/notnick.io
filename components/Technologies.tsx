import { technologies } from "../lib/technologies";
import { Heading } from "./Heading";
import Tippy from "@tippyjs/react";
import { Note } from "./Note";

// Next.js
import Link from "next/link";

export const Technologies = () => {
  return (
    <section className="flex flex-col mb-12">
      <Heading>Technologies 💻</Heading>
      <ul className="block text-center list-disc mb-6">
        {technologies.map((tech) => (
          <div key={tech.id} className="mr-4 inline-block">
            <Tippy animation="fade" content={tech.desc}>
              <Link
                href={tech.link}
                className="cursor-pointer inline-block py-2 px-8 focus:ring-4 ring-[#f54bff] outline-none
                  hover:translate-y-1 text-sm rounded-full mb-4 duration-300 focus:ring-offset-2 dark:ring-offset-black
                  font-semibold  bg-gray-100 hover:bg-gray-200 dark:bg-gray-800
                dark:hover:bg-gray-900 dark:text-white"
                title={tech.text}
                rel="noreferrer"
                target="_blank"
              >
                {tech.text}
              </Link>
            </Tippy>
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
