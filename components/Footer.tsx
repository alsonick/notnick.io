import Link from "next/link";

const FooterLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link className="hover:underline" href={link} target="_blank">
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
