import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
// import { getIssues as getIssuesMethod } from "../lib/get-issues";
// import { getSubscribers } from "../lib/get-subscribers";
import { EMAIL_ADDRESS } from "../lib/constants";
import { StatusMessage } from "./StatusMessage";
import { ICON } from "../lib/tailwindcss/icon";
import { social } from "../lib/social-links";
import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { Button } from "./Button";
import { Avatar } from "./Avatar";
import { Input } from "./Input";
import { Text } from "./Text";
import { Form } from "./Form";
import { Note } from "./Note";

// Next.js
import Link from "next/link";

interface Props {
  formHeading?: string;
  showStats?: boolean;
  showTitle?: boolean;
  title?: string;
  note?: boolean;
}

export const NewsLetter = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  // const [issues, getIssues] = useState<number>(0);

  const [email, setEmail] = useState<string>("");
  const [subs, setSubs] = useState<number>(0);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("Revue has shut down.");
    return;

    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      interface DataResponse {
        success: boolean;
        error: string;
      }

      const data = (await response.json()) as DataResponse;

      // Something went wrong
      if (!data.success) {
        setLoading(false);
        return setErrorMessage(data.error);
      }

      // Success
      if (data.success) {
        setLoading(false);
        setSuccessMessage("You're set! Check your email to confirm.");
        return setEmail("");
      }

      setLoading(false);
      setErrorMessage("Revue is not in operation.");
    } catch (e) {
      setLoading(false);

      setErrorMessage("Revue is not in operation.");
    }
  };

  /*
  const fetchSubscriberHelperCall = async () => {
    try {
      const data = await getSubscribers();
      if (data) return setSubs(data);
    } catch (e) {
      setErrorMessage(e as string);
    }
  };

  const fetchIssuesHelperCall = async () => {
    try {
      const data = await getIssuesMethod();
      if (data) return getIssues(data);
    } catch (e) {
      setErrorMessage(e as string);
    }
  };
  */

  useEffect(() => {
    // fetchSubscriberHelperCall();
    // fetchIssuesHelperCall();
  }, []);

  return (
    <Section>
      {props.showTitle && (
        <>
          {props.title ? (
            <Heading>{props.title}</Heading>
          ) : (
            <Heading>Newsletter 📰</Heading>
          )}
        </>
      )}
      <Form onSubmit={subscribe} action="POST">
        <Heading style={{ fontSize: "1.2rem", marginBottom: 0 }}>
          {props.formHeading ? props.formHeading : "Subscribe to my newsletter"}
        </Heading>
        <Text>Subscribe if you&apos;re interested in nerdy stuff.</Text>
        <div className="flex md:flex-row flex-col w-full md:items-center items-start rounded-lg justify-between mt-2 mb-2">
          <div className="flex-1 md:w-fit w-full mr-3 mb-3 md:mb-0">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder={`${EMAIL_ADDRESS}`}
              style={{ width: "100%" }}
              required={true}
              value={email}
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div className="flex md:w-fit w-full">
            <Button
              style={{ width: "100%" }}
              onClick={() => setErrorMessage("Revue has shut down.")}
              title="Subscribe"
            >
              Subscribe <FiMail className={ICON} />
            </Button>
          </div>
        </div>
        {props.showStats && (
          <div className="flex md:items-center items-start justify-between mt-2 md:flex-row flex-col">
            <div className="flex text-sm items-center text-gray-600 dark:text-gray-300">
              <span className="font-bold text-black dark:text-white">
                {subs ?? 0}&nbsp;
              </span>{" "}
              {subs === 1 ? "subscriber" : "subscribers"} &bull;&nbsp;
              <Link
                className={`hover:underline focus:ring-4 ring-0 ring-primary outline-none duration-300
                  focus:ring-offset-2 dark:ring-offset-black rounded`}
                href={social.revue.link}
                rel="noreferrer"
                target="_blank"
                title="View my published issues"
              >
                View all issues
              </Link>
              &nbsp; &bull;&nbsp;
              <Avatar border={true} width={20} height={20} />
            </div>
          </div>
        )}
        {successMessage && (
          <div className="flex items-center">
            <HiBadgeCheck className="mr-1 mt-[1px] text-green-500" />
            <StatusMessage message={successMessage} type="success" />
          </div>
        )}
        {errorMessage && (
          <div className="flex mt-2 items-center">
            <HiExclamationCircle className="mr-1 mt-[1px] text-red-500" />
            <StatusMessage message={errorMessage} type="error" />
          </div>
        )}
        {loading && <Text style={{ fontSize: "0.9rem" }}>Loading...</Text>}
      </Form>
      {/* <div className="mt-6">
        {props.note && (
          <Note>
            {social.revue.name} has <b>shut down</b> so you won&apos;t be able
            to subscribe. I&apos;ll make sure to find another newsletter
            alternative in the meantime. 👍{" "}
          </Note>
        )}
      </div> */}
    </Section>
  );
};
