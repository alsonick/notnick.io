import { CharacterLimit } from "./CharacterLimit";
import { EMAIL_ADDRESS } from "../lib/constants";
import { FiSend } from "react-icons/fi";
import { TextArea } from "./TextArea";
import { LinkTag } from "./LinkTag";
import { Loading } from "./Loading";
import { Heading } from "./Heading";
import { Success } from "./Success";
import { Button } from "./Button";
import { useState } from "react";
import { Input } from "./Input";
import { Label } from "./Label";
import { Error } from "./Error";
import Filter from "bad-words";
import { Text } from "./Text";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const CHARACTER_LIMIT = 500;

  const filter = new Filter();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (message.length > CHARACTER_LIMIT) {
      return setError(`You can only have ${CHARACTER_LIMIT} characters.`);
    }

    if (filter.isProfane(message)) {
      return setError("Please don't send inappropriate messages.");
    }

    setLoading(true);

    const response: { success: boolean; error?: string | undefined } =
      await fetch("/api/connect", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

    if (response.success) {
      setLoading(false);
      setSuccess("Thanks! I've received the message, expect a response soon.");
      setMessage("");
      setEmail("");
      return;
    }

    setError(response.error!);
  };

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
        <form
          onSubmit={sendMessage}
          className="flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-4 mt-5
          duration-300 border border-teal-100 dark:border-teal-900"
        >
          <Heading style={{ fontSize: "1.2rem", marginBottom: 0 }}>
            Let&apos;s connect!
          </Heading>
          <Text>Become part of my network bubble!</Text>
          <div className="flex flex-col my-2 justify-center w-full">
            <div className="mb-1">
              <Label text="email" />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
              placeholder="hi@notnick.io"
            />
            <div className="mb-1 mt-2">
              <Label text="message" />
            </div>
            <TextArea
              rows={8}
              placeholder="Amazing website, let's connect!"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <CharacterLimit text={message} limit={CHARACTER_LIMIT} />
          <div className="w-full flex items-center justify-between mt-2">
            <Loading loading={loading} text="Sending..." />
            {error ? <Error message={error} /> : null}
            {success ? <Success message={success} /> : null}
            <div className="ml-auto pl-1">
              <Button>
                Send <FiSend className="text-xl ml-2" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
