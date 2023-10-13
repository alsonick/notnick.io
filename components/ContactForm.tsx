import { CharacterLimit } from "./CharacterLimit";
import { FiSend } from "react-icons/fi";
import { TextArea } from "./TextArea";
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
import { Form } from "./Form";

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
      setSuccess("Thanks! I've received the message.");
      setMessage("");
      setEmail("");
      return;
    }

    setError(response.error!);
  };

  return (
    <Form onSubmit={sendMessage} action="POST">
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
    </Form>
  );
};
