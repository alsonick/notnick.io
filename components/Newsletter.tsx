import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
import { getSubscribers } from "../lib/get-subscribers";
import { Subscribers } from "../types/revue";
import { useState, useEffect } from "react";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Avatar } from "./Avatar";
import { Input } from "./Input";
import { Text } from "./Text";

// Next.js
import Link from "next/link";

export const NewsLetter = () => {
  const [subs, setSubs] = useState<Subscribers | undefined>(undefined);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    setLoading(true);
    setErrorMessage("");

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
        setErrorMessage("");
        setSuccessMessage("You're set! Check your email to confirm.");
        return setEmail("");
      }

      setLoading(false);
      setErrorMessage("Something went wrong.");
    } catch (e) {
      setLoading(false);
      setErrorMessage("Something went wrong.");
    }
  };

  const fetchSubscriberHelperCall = async () => {
    try {
      const data = await getSubscribers();
      if (data) return setSubs(data as Subscribers);
    } catch (e) {
      console.log(e);
      setErrorMessage(e as string);
    }
  };

  useEffect(() => {
    fetchSubscriberHelperCall();
  }, []);

  return (
    <section className="flex flex-col mb-12">
      <Heading>Newsletter 📰</Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          subscribe();
        }}
        className="flex flex-col dark:bg-[#10161a]/50 rounded-lg p-4 duration-300 border border-teal-100 dark:border-teal-900"
      >
        <Heading style={{ fontSize: "1.2rem", marginBottom: 0 }}>
          Subscribe to my newsletter
        </Heading>
        <Text>
          Subscribe if you&apos;re interested about Rust &#38; TypeScript
          content.
        </Text>
        <div className="flex md:flex-row flex-col w-full md:items-center items-start rounded-lg justify-between mt-2">
          <div className="flex-1 md:w-fit w-full mr-3 mb-3 md:mb-0">
            <Input
              id="email"
              name="email"
              value={email}
              type="email"
              style={{ width: "100%" }}
              required={true}
              placeholder="hi@notnick.io"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex md:w-fit w-full">
            <Button style={{ width: "100%" }}>Subscribe</Button>
          </div>
        </div>
        <div className="flex md:items-center items-start justify-between mt-2 md:flex-row flex-col">
          <div className="flex text-sm items-center text-gray-600 dark:text-gray-300">
            <span className="font-bold text-black dark:text-white">
              {subs?.data.length ?? 0}&nbsp;
            </span>{" "}
            {subs?.data.length === 1 ? "subscriber" : "subscribers"}{" "}
            &bull;&nbsp;
            <Link href="https://www.getrevue.co/profile/heynickn">
              <a
                className="hover:underline"
                target="_blank"
                title="View my published issues"
              >
                View all issues&nbsp;
              </a>
            </Link>
            &bull;&nbsp;
            <Avatar width={20} height={20} />
          </div>
          {successMessage && (
            <p
              className="flex items-center text-green-500 font-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              <HiBadgeCheck className="mr-1 mt-[1px]" />
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p
              className="flex items-center text-red-500 font-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              <HiExclamationCircle className="mr-1 mt-[1px]" />
              {errorMessage}
            </p>
          )}
          {loading && <Text style={{ fontSize: "0.9rem" }}>Loading...</Text>}
        </div>
      </form>
    </section>
  );
};
