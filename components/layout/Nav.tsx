import { NavDropdown } from "./NavDropdown";
import { NavLinkTag } from "./NavLinkTag";
import { PostSearch } from "../posts/PostSearch";
import { ITEMS } from "../../lib/data/nav-items";
import { Toggle } from "./Toggle";

// Next.js
import { useRouter } from "next/router";

// The long-post theme notice is a fixed `h-7` (1.75rem) bar at the top of the
// viewport, so the nav drops by that much to keep its usual 2rem of clearance.
const NOTICE_NAV_OFFSET = "top-[3.75rem]";

interface Props {
  searchableContentHtml?: string;
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
  hasTopNotice?: boolean;
}

export const Nav = (props: Props) => {
  const router = useRouter();

  // "/" stays highlighted on every page, but only the page actually open is
  // announced as current.
  const isCurrent = (to: string) =>
    to === "/" ? router.pathname === "/" : router.pathname.includes(to);

  return (
    <nav
      aria-label="Main"
      className={`liquid-glass flex px-6 ${
        props.hasTopNotice
          ? NOTICE_NAV_OFFSET
          : props.isDisplaySpotify
            ? "md:top-18 top-8"
            : "top-8"
      } fixed z-50 mb-12 duration-300 sm:w-[40rem] w-[95%] rounded-lg justify-between h-14 items-center`}
    >
      <div className="flex lg:hidden">
        <NavDropdown items={ITEMS} />
      </div>
      <div className="hidden lg:flex">
        {ITEMS.map((nav) => (
          <NavLinkTag
            key={nav.id}
            className={
              nav.to === "/" || router.pathname.includes(nav.to)
                ? "dark:bg-gray-800 bg-gray-100 border-gray-300 dark:border-gray-700"
                : "border-transparent"
            }
            label={nav.dropdown ?? nav.text}
            current={isCurrent(nav.to)}
            to={nav.to}
          >
            {nav.text}
          </NavLinkTag>
        ))}
      </div>
      <div className="flex items-center gap-2 ml-auto">
        {props.searchableContentHtml ? (
          <PostSearch contentHtml={props.searchableContentHtml} />
        ) : null}
        <Toggle />
      </div>
    </nav>
  );
};
