import {
  FIRST_NAME,
  PROFESSION,
  PRONOUNS,
  STUDYING_UNTIL,
} from "../../lib/constants";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { fireworks } from "../../lib/fireworks";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";
import { Links } from "./Links";

export const Main = () => {
  const date = new Date();

  const isStudent = date < STUDYING_UNTIL;

  const roles = [PROFESSION, "Programmer", ...(isStudent ? ["Student"] : [])];

  // The typing loop never stops, so readers who ask their OS to reduce motion
  // get the first role as plain text instead.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

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
      <div className="flex md:flex-row md:flex-start flex-col-reverse items-start md:items-center w-full justify-between mb-12 mt-20">
        <div className="flex flex-col">
          <p className="text-sm opacity-65 mb-1">{PRONOUNS}</p>
          <Heading
            as="h1"
            style={{
              marginBottom: "0.5rem",
              marginTop: "8px",
            }}
          >
            Hi, I&apos;m {FIRST_NAME}!{" "}
            <span className="wave" aria-hidden="true">
              👋
            </span>
          </Heading>
          <div className="text-gray-700 flex font-semibold dark:text-gray-100 mb-4">
            {/* Screen readers get every role once instead of a constantly
                retyping string. */}
            <p className="sr-only">{roles.join(", ")}</p>
            {reducedMotion ? (
              <p aria-hidden="true">{roles[0]}</p>
            ) : (
              <div aria-hidden="true">
                <TypeAnimation
                  sequence={roles.flatMap((role) => [role, 2000])}
                  wrapper="p"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            )}
          </div>
          <Links />
          {(date.getMonth() + 1 === 1 && date.getDate() === 1) ||
          (date.getMonth() + 1 === 3 && date.getDate() === 4) ? (
            <div className="mt-4">
              <Button
                title="Click me!"
                aria-label="Celebrate with fireworks"
                onClick={() => confetti()}
              >
                🎉
              </Button>
            </div>
          ) : null}
        </div>
        <div className="flex mb-8 md:mb-0 duration-300 rounded-full">
          <Avatar border={true} width={135} height={125} clickable={true} />
        </div>
      </div>
    </>
  );
};
