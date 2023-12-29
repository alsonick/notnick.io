import { THEME } from "../lib/constants";
import { Avatar } from "./Avatar";

// Next.js
import Link from "next/link";

const FooterLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link
      className={`hover:underline dark:hover:text-white hover:text-black focus:ring-4 dark:ring-offset-black opacity-100
      ring-[${THEME}] focus:ring-offset-2 outline-none rounded border-none duration-300`}
      href={link}
      target="_blank"
    >
      <b>{children}</b>
    </Link>
  );
};

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between pb-12 border-t mt-6 border-teal-100 dark:border-teal-900 pt-10">
      <div className="flex flex-col">
        <h2 className="text-xl opacity-50 font-bold dark:text-white">
          Nicholas Njoki
        </h2>
        <p className="text-gray-500 opacity-50 text-xs">
          &copy; {new Date().getFullYear()} | All rights reserved
        </p>
        <p className="text-gray-500 opacity-50 text-xs">
          Made with <FooterLink link="https://nextjs.org/">Next.js</FooterLink>,{" "}
          <FooterLink link="https://tailwindcss.com/">Tailwind</FooterLink> &
          <FooterLink link="https://vercel.com/"> Vercel</FooterLink>.
        </p>
        <div className="flex items-center">
          <p className="text-gray-500 opacity-50 text-xs mr-1 ">
            Built with ❤️ by{" "}
            <FooterLink link="https://github.com/alsonick">
              Nicholas Njoki
            </FooterLink>{" "}
          </p>
          <Avatar border={false} width={15} height={15} />
        </div>
      </div>
      <Link
        className="github-button"
        href="https://github.com/alsonick/notnick.io"
        target="_blank"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        data-show-count="true"
        aria-label="Star alsonick/notnick.io on GitHub"
      >
        Star
      </Link>
    </footer>
  );
};
