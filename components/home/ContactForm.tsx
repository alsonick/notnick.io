import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
import { CharacterLimit } from "../ui/CharacterLimit";
import { EMAIL_ADDRESS } from "../../lib/constants";
import { StatusMessage } from "../ui/StatusMessage";
import { ICON } from "../../lib/tailwindcss/icon";
import { FiSend } from "react-icons/fi";
import { TextArea } from "../ui/TextArea";
import { Loading } from "../ui/Loading";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import Filter from "bad-words";
import { Text } from "../ui/Text";
import { Form } from "../ui/Form";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const CHARACTER_LIMIT = 500;

  const filter = new Filter();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (message.length > CHARACTER_LIMIT) {
      setLoading(false);
      return setError(`You can only have ${CHARACTER_LIMIT} characters.`);
    }

    if (filter.isProfane(message)) {
      setLoading(false);
      return setError("Please don't send inappropriate messages.");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/connect", {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response: { success: boolean; error?: string | undefined } =
        await res.json();

      if (response.success) {
        setSuccess("Thanks! I've received the message.");
        setMessage("");
        setEmail("");
      } else {
        setError(response.error ?? "Something went wrong.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={sendMessage} action="POST" hoverBorder={true}>
      <div className="flex items-center justify-between">
        <Heading as="h3" style={{ fontSize: "1.2rem", marginBottom: 0 }}>
          Let&apos;s connect!
        </Heading>
      </div>
      <Text>Become part of my network bubble!</Text>
      <div className="flex flex-col my-2 justify-center w-full">
        <div className="mb-1">
          <Label text="email" htmlFor="contact-email" />
        </div>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder={`${EMAIL_ADDRESS}`}
          style={{ width: "100%" }}
          required={true}
          value={email}
          name="email"
          type="email"
          id="contact-email"
        />
        <div className="mb-1 mt-2">
          <Label text="message" htmlFor="contact-message" />
        </div>
        <TextArea
          onChange={(e) => {
            setMessage(e.target.value);

            if (message.length === CHARACTER_LIMIT) {
              setLoading(false);
            }
          }}
          placeholder="Amazing website, let's connect!"
          id="contact-message"
          value={message}
          required={true}
          rows={8}
        />
      </div>
      <CharacterLimit text={message} limit={CHARACTER_LIMIT} />
      <div className="w-full flex items-center justify-between mt-2">
        <Loading loading={loading} text="Sending..." />
        {error && !loading ? (
          <div className="flex items-center">
            <HiExclamationCircle className="mr-1 mt-[1px] text-red-500" />
            <StatusMessage message={error} type="error" />
          </div>
        ) : null}
        {success && !loading ? (
          <div className="flex items-center">
            <HiBadgeCheck className="mr-1 mt-[1px] text-green-500" />
            <StatusMessage message={success} type="success" />
          </div>
        ) : null}
        <div className="ml-auto pl-1">
          <Button title="Send">
            Send <FiSend className={ICON} />
          </Button>
        </div>
      </div>
    </Form>
  );
};
