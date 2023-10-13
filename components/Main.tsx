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
          <Heading style={{ marginBottom: "0.5rem" }}>
            Hi, I&apos;m Nicholas! <span className="wave">👋</span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Student",
                2000,
                "Entrepreneur",
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
          <Avatar border={true} width={122} height={122} />
        </div>
      </main>
    </>
  );
};
