import { NavDropdown } from "./NavDropdown";
import { NavLinkTag } from "./NavLinkTag";
import { PostSearch } from "./PostSearch";
import { ITEMS } from "../lib/nav-items";
import { Toggle } from "./Toggle";

// Next.js
import { useRouter } from "next/router";

interface Props {
  /** Rendered HTML of a long post, which gets a heading search next to the theme toggle. */
  searchableContentHtml?: string;
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
}

export const Nav = (props: Props) => {
  const router = useRouter();

  return (
    <nav
      className={`liquid-glass flex px-6 ${
        props.isDisplaySpotify ? "md:top-18 top-8" : "top-8"
      } fixed z-50 mb-12 duration-300 sm:w-[40rem] w-[95%] rounded-lg justify-between h-14 items-center`}
    >
      <div className="flex lg:hidden">
        <NavDropdown items={ITEMS} />
      </div>
      <div className="hidden lg:flex">
        {ITEMS.map((nav) => (
          <NavLinkTag
            key={nav.id}
            className={`${
              nav.to === "/"
                ? "dark:bg-gray-800 bg-gray-100"
                : router.pathname.includes(nav.to) &&
                  "dark:bg-gray-800 bg-gray-100"
            }`}
            title={nav.text}
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
