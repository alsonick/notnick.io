import { social } from "../../lib/data/social-links";
import { FULL_NAME } from "../../lib/constants";
import { GitHubButton } from "./GitHubButton";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between pb-1 border-t mt-5 border-teal-100 dark:border-teal-900 pt-10">
      <div className="flex flex-col opacity-50">
        <p className="sm:text-lg text-base font-bold text-gray-600 dark:text-gray-400">
          {FULL_NAME}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} | {FULL_NAME} | MIT.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          Made with{" "}
          <FooterLink link="https://nextjs.org/" title="Next.js">
            Next.js
          </FooterLink>
          ,{" "}
          <FooterLink link="https://tailwindcss.com/" title="Tailwind">
            Tailwind
          </FooterLink>{" "}
          &
          <FooterLink link="https://vercel.com/" title="Vercel">
            {" "}
            Vercel
          </FooterLink>
          .
        </p>
        <div className="flex items-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs mr-1 ">
            <span>Built with</span> <span className="opacity-75">❤️</span>{" "}
            <span>
              by{" "}
              <FooterLink link={social.github.link} title={FULL_NAME}>
                {FULL_NAME}
              </FooterLink>
              .{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex shrink-0">
        <GitHubButton />
      </div>
    </footer>
  );
};
