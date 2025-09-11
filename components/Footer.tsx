import { GitHubStarButton } from "./GitHubStarButton";
import { social } from "../lib/social-links";
import { FULL_NAME } from "../lib/constants";
import { FooterLink } from "./FooterLink";
import { Avatar } from "./Avatar";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between pb-1 border-t mt-6 border-teal-100 dark:border-teal-900 pt-10">
      <div className="flex flex-col">
        <h2 className="sm:text-lg text-base opacity-50 font-bold dark:text-white">
          {FULL_NAME}
        </h2>
        <p className="text-gray-500 opacity-50 text-xs">
          &copy; {new Date().getFullYear()} | All rights reserved.
        </p>
        <p className="text-gray-500 opacity-50 text-xs">
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
          <p className="text-gray-500 opacity-50 text-xs mr-1 ">
            Built with ❤️ by{" "}
            <FooterLink link={social.github.link} title={FULL_NAME}>
              {FULL_NAME}
            </FooterLink>
            .{" "}
          </p>
          <Avatar border={false} width={15} height={15} />
        </div>
      </div>
      {/* <GitHubStarButton /> */}
    </footer>
  );
};
