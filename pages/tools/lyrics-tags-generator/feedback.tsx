import { CharacterLimit } from "../../../components/CharacterLimit";
import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
import { EMAIL_ADDRESS, FULL_NAME } from "../../../lib/constants";
import { StatusMessage } from "../../../components/StatusMessage";
import { TextArea } from "../../../components/TextArea";
import { Animate } from "../../../components/Animate";
import { Heading } from "../../../components/Heading";
import { Loading } from "../../../components/Loading";
import { ICON } from "../../../lib/tailwindcss/icon";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { Button } from "../../../components/Button";
import { GoBack } from "../../../components/GoBack";
import { Label } from "../../../components/Label";
import { Input } from "../../../components/Input";
import { Form } from "../../../components/Form";
import { Text } from "../../../components/Text";
import { Seo } from "../../../components/Seo";
import { page } from "../../../lib/page";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import Filter from "bad-words";

// Next.js
import { NextPage } from "next";

const Feedback: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const CHARACTER_LIMIT = 500;

  const filter = new Filter();

  const sendFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (feedback.length > CHARACTER_LIMIT) {
      setLoading(false);
      return setError(`You can only have ${CHARACTER_LIMIT} characters.`);
    }

    if (filter.isProfane(feedback)) {
      setLoading(false);
      return setError("Please don't send inappropriate messages.");
    }

    setLoading(true);

    try {
      await fetch(process.env.FEEDBACK_DISCORD_WEBHOOK_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `Feedback from **${email}**:\n\n${feedback}`,
        }),
      });
    } catch (error) {
      console.log(error);
    }

    // setError(response.error!);
  };

  return (
    <>
      <Seo
        title={`${page.feedback.lyricsTagsGenerator.title} • ${FULL_NAME}`}
        description={`${page.feedback.lyricsTagsGenerator.name}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>
              {page.feedback.lyricsTagsGenerator.title}
            </Heading>
          </Header>
          <Form onSubmit={sendFeedback} action="POST">
            <Heading style={{ fontSize: "1.2rem", marginBottom: 0 }}>
              {page.feedback.lyricsTagsGenerator.name}
            </Heading>
            <Text>Send feedback to help us improve.</Text>
            <div className="flex flex-col my-2 justify-center w-full">
              <div className="mb-1">
                <Label text="email" />
              </div>
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
              <div className="mb-1 mt-2">
                <Label text="feedback" />
              </div>
              <TextArea
                onChange={(e) => {
                  setFeedback(e.target.value);

                  if (feedback.length === CHARACTER_LIMIT) {
                    setLoading(false);
                  }
                }}
                placeholder="Your feedback..."
                value={feedback}
                required={true}
                rows={8}
              />
            </div>
            <CharacterLimit text={feedback} limit={CHARACTER_LIMIT} />
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
                <Button>
                  Send <FiSend className={ICON} />
                </Button>
              </div>
            </div>
          </Form>
        </Animate>
      </Layout>
    </>
  );
};

export default Feedback;
