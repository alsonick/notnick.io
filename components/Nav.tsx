import { NavLinkTag } from "./NavLinkTag";
import { ITEMS } from "../lib/nav-items";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";

// Next.js
import { useRouter } from "next/router";

interface Props {
  isDisplaySpotify?: boolean;
  longLayoutFormat?: boolean;
}

export const Nav = ({ isDisplaySpotify, longLayoutFormat }: Props) => {
  const router = useRouter();

  return (
    <nav
      className={`flex px-6 ${
        isDisplaySpotify ? "md:top-16 top-8" : "top-8"
      } fixed border dark:bg-[#10161a]/50 z-10 w-[70%] md:w-[${
        longLayoutFormat ? "60rem" : "40rem"
      }] border-teal-100
    dark:border-teal-900 backdrop-blur-md mb-12 duration-300 rounded-lg justify-between h-14 items-center`}
    >
      <div className="flex lg:hidden">
        <Dropdown items={ITEMS} />
      </div>
      <div className="hidden lg:flex">
        {ITEMS.map((nav) => (
          <NavLinkTag
            key={nav.id}
            className={`${
              router.pathname.includes(nav.to) && "dark:bg-gray-800 bg-gray-100"
            }`}
            to={nav.to}
          >
            {nav.text}
          </NavLinkTag>
        ))}
      </div>
      <Toggle />
    </nav>
  );
};
