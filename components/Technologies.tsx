import { technologies } from "../lib/technologies";
import { Heading } from "./Heading";

// Next.js
import Link from "next/link";

export const Technologies = () => {
  return (
    <section className="flex flex-col mb-12 ">
      <Heading>Technologies 💻</Heading>
      <ul className="block text-center list-disc">
        {technologies.map((tech) => (
          <Link key={tech.id} href={tech.link}>
            <a target="_blank">
              <li className="mr-4 hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                {tech.text}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </section>
  );
};
