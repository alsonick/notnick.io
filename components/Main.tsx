import { CITY, COUNTRY } from "../lib/constants";
import { FiSend } from "react-icons/fi";
import { Heading } from "./Heading";
import { Avatar } from "./Avatar";
import { Links } from "./Links";

// Next.js
import Link from "next/link";

export const Main = () => {
  return (
    <>
      <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link href={`https://www.google.com/maps/place/${CITY}`}>
            <a className="w-fit" target="_blank">
              <div className="flex items-center p-1 text-sm px-3 mb-2 w-fit rounded-full text-white bg-[#f54bff]">
                <FiSend className="mr-2" />
                {CITY}, {COUNTRY}
              </div>
            </a>
          </Link>
          <Heading style={{ marginBottom: "0.5rem" }}>
            Hi, I&apos;m Nicholas! <span className="wave">👋</span>
          </Heading>
          <p className="text-gray-700 font-semibold dark:text-gray-100 mb-4">
            {new Date().getFullYear() - 2003} y/o software engineer
          </p>
          <Links />
        </div>
        <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
          <Avatar width={122} height={122} />
        </div>
      </main>
    </>
  );
};
