import { EMAIL_ADDRESS } from "../lib/constants";
import { ContactForm } from "./ContactForm";
import { useState, useEffect } from "react";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";
import { Note } from "./Note";

export const Contact = () => {
  const [time, setTime] = useState<string>("00:00 P.M.");
  const [awake, setAwake] = useState<boolean>(true);

  // Credit: https://github.com/cnrad/cnrad.dev/blob/master/src/components/talk/TimeStatus.tsx
  const updateCurrentTime = () => {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "Europe/London",
    });

    setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`);
    setTimeout(updateCurrentTime, 60 * 1000);

    if (new Date().getHours() < 6) setAwake(false);
  };

  useEffect(() => {
    const second = setInterval(() => updateCurrentTime(), 1000);
    return () => {
      clearInterval(second);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex flex-col mb-12">
      <Heading>Contact 💌</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag href="https://twitter.com/heynickn" target="_blank">
          DM on Twitter
        </LinkTag>
        .
      </Text>
      <Text>
        For more serious matters{" "}
        <LinkTag href={`mailto:${EMAIL_ADDRESS}`}>shoot me an email</LinkTag>.
      </Text>
      <div className="flex flex-col justify-center border-t border-teal-100 dark:border-teal-900 mt-10 pt-5 w-full">
        <ContactForm />
        <div className="mt-6">
          <Note>
            It&apos;s currently <span className="font-bold">{time}</span> for
            me, so I&apos;m probably{" "}
            <span className="font-bold">{awake ? "awake" : "sleeping"}</span>.
            I&apos;ll get back to you soon.
          </Note>
        </div>
      </div>
    </section>
  );
};
