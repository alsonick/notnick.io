import { LinkWrapper } from "./LinkWrapper";
import { LINKS } from "../lib/links";

export const Links = () => {
  return (
    <div className="flex">
      {LINKS.map((link) => (
        <LinkWrapper key={link.id} href={link.href} title={link.title}>
          {link.icon}
        </LinkWrapper>
      ))}
    </div>
  );
};
