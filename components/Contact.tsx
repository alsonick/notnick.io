import { EMAIL_ADDRESS } from "../lib/constants";
import { social } from "../lib/social-links";
import { ContactForm } from "./ContactForm";
import { useState, useEffect } from "react";
import { Section } from "./Section";
import { Heading } from "./Heading";
import { LinkTag } from "./LinkTag";
import { Text } from "./Text";

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
    <Section>
      <Heading>Contact 💌</Heading>
      <Text>
        Be sure to shoot me a{" "}
        <LinkTag
          href={social.x.link}
          target="_blank"
          title="DM on X (Previously Twitter)"
        >
          DM on X (Previously Twitter)
        </LinkTag>
        .
      </Text>
      <Text>
        For more <b>serious</b> matters{" "}
        <LinkTag
          href={`mailto:${EMAIL_ADDRESS}`}
          title={`shoot me an email (${EMAIL_ADDRESS})`}
        >
          shoot me an email
        </LinkTag>
        .
      </Text>
      <div className="flex flex-col justify-center border-t border-teal-100 dark:border-teal-900 mt-10 pt-5 w-full">
        <ContactForm />
      </div>
    </Section>
  );
};
