import { TypeAnimation } from "react-type-animation";
import { CITY, COUNTRY } from "../lib/constants";
import { fireworks } from "../lib/fireworks";
import { FiSend } from "react-icons/fi";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Avatar } from "./Avatar";
import { Links } from "./Links";

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
        // Happy new year & Happy birthday!
        fireworks();
      }
    }
  };

  return (
    <>
      <main className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <Link
            className="w-fit focus:ring-4 rounded-full focus:ring-offset-2 dark:ring-offset-black border-none my-2 ring-[#f54bff] duration-300 outline-none font-semibold"
            target="_blank"
            href={`https://www.google.com/maps/place/${CITY}`}
          >
            <div
              className="flex items-center p-1 text-sm px-3  w-fit rounded-full text-white bg-[#f54bff]"
              title={`${CITY}, ${COUNTRY}`}
            >
              <FiSend className="mr-2" />
              {CITY}, {COUNTRY}
            </div>
          </Link>

          <Heading style={{ marginBottom: "0.5rem" }}>
            Hi, I&apos;m Nicholas! <span className="wave">👋</span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            {new Date().getFullYear() - 2003} y/o&nbsp;
            <TypeAnimation
              sequence={[
                "software engineer",
                2000,
                "entrepreneur",
                2000,
                "student",
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
          <Avatar width={122} height={122} />
        </div>
      </main>
    </>
  );
};
