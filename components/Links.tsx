import { FiKey, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

import Link from "next/link";

export const Links = () => {
  return (
    <div className="flex mt-6">
      <LinkWrapper href="https://keybase.io/nick241">
        <FiKey />
      </LinkWrapper>
      <LinkWrapper href="https://github.com/alsonick">
        <FiGithub />
      </LinkWrapper>
      <LinkWrapper href="https://twitter.com/heynickn">
        <FiTwitter />
      </LinkWrapper>
      <LinkWrapper href="https://www.linkedin.com/in/nicholas-n-5a9187195/">
        <FiLinkedin />
      </LinkWrapper>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkWrapper = ({ href, children }: Props) => {
  return (
    <Link href={href} rel="noreferrer">
      <a
        className="text-2xl duration-100 cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300"
        target="_blank"
      >
        {children}
      </a>
    </Link>
  );
};
