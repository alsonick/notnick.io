import { CITY, COUNTRY, FIRST_NAME, THEME } from "../lib/constants";
import { TypeAnimation } from "react-type-animation";
import { FiNavigation } from "react-icons/fi";
import { fireworks } from "../lib/fireworks";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Avatar } from "./Avatar";
import { Links } from "./Links";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

export const Main = () => {
  const date = new Date();

  const confetti = () => {
    if (typeof window === "object") {
      if (
        (date.getMonth() + 1 === 1 && date.getDate() === 1) ||
        (date.getMonth() + 1 === 3 && date.getDate() === 4)
      ) {
        // Happy new year! or Happy birthday!
        fireworks();
      }
    }
  };

  return (
    <>
      <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link
            className={`cursor-pointer p-[2px] mr-[2px] w-fit focus:ring-4 ring-[${THEME}] outline-none rounded-full duration-300`}
            href={`https://www.google.com/maps/search/${CITY}`}
            target="_blank"
          >
            <Tag
              title={`${CITY}, ${COUNTRY}`}
              icon={
                <FiNavigation
                  className="ml-1 hover:scale-110 duration-150"
                  size={17}
                />
              }
            />
          </Link>
          <Heading style={{ marginBottom: "0.5rem", marginTop: "8px" }}>
            Hi, I&apos;m {FIRST_NAME}! <span className="wave">👋</span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Entrepreneur",
                2000,
                "Student",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </div>
          <Links />
          {(date.getMonth() + 1 === 1 && date.getDate() === 1) ||
          (date.getMonth() + 1 === 3 && date.getDate() === 4) ? (
            <div className="mt-4">
              <Button onClick={() => confetti()}>🎉</Button>
            </div>
          ) : null}
        </div>
        <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
          <Avatar border={false} width={122} height={122} />
        </div>
      </main>
    </>
  );
};
