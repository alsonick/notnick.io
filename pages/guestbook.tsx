import { Response, MessagesResponse, Message as M } from "../types/guestbook";
import { CharacterLimit } from "../components/CharacterLimit";
import { Message } from "../components/message/Message";
import { RoundedBox } from "../components/RoundedBox";
import { Skeleton } from "../components/Skeleton";
import { parseCookie } from "../lib/parse-cookie";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { LinkTag } from "../components/LinkTag";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { ClientUser } from "../types/discord";
import { Switch } from "../components/Switch";
import { Input } from "../components/Input";
import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import Filter from "bad-words";

// Next.js
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = { user: ClientUser | null };

const Guestbook: NextPage<Props> = (props) => {
  const [messages, setMessages] = useState<M[]>([]);
  const [loading, setLoading] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const CHARACTER_LIMIT = 30;

  const filter = new Filter();

  const loadMessages = async () => {
    setLoading(true);

    const data: MessagesResponse = await fetch("/api/guestbook", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (data.success) {
      setMessages(data.messages);
      if (error && error.length > 0) {
        setError("");
      }
      setLoading(false);
      return;
    }

    setLoading(false);
    setError(data.error!);
  };

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let msg: M[] = [];

    if (!props.user) {
      return setError("Please login with Discord.");
    }

    if (message.length > CHARACTER_LIMIT) {
      return setError(`You can only have ${CHARACTER_LIMIT} characters.`);
    }

    if (filter.isProfane(message.trim())) {
      return setError("Please don't send inappropriate messages.");
    }

    if (error && error.length > 0) {
      setError("");
    }

    msg.push({
      id: `${
        Math.random() + Date.now() - Math.floor(Math.random() * 12342)
      }-${Math.random().toString()}`,
      userId: props.user?.id!,
      text: message,
      sender: enabled ? props.user?.username! : props.user?.name!,
      avatar: props.user?.avatar!,
      date: new Date(),
    });

    const last = msg.length === 1 ? msg[0] : msg[messages.length - 1];

    const data: Response = await fetch("/api/guestbook", {
      method: "POST",
      body: JSON.stringify({
        ...last,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    const sortedMessage = msg.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    if (data.success) {
      setMessages([...sortedMessage, ...messages]);
      if (message && message.length > 0) {
        setMessage("");
      }
      return;
    }

    setError(data.error!);
  };

  const deleteMessage = async (userId: string, messageId: string) => {
    const deletedMessage = messages.find((message) => {
      return message.userId === userId;
    });

    const filteredMessages = messages.filter(
      (loadedMessage) => loadedMessage.id !== messageId
    );

    const data: Response = await fetch(
      `/api/guestbook?id=${deletedMessage?.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    if (!data.success) {
      setError(data.error!);
      return;
    }

    if (data.success) {
      const sortedMessages = filteredMessages.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      setMessages([...sortedMessages]);
    }
  };

  if (!messages.length && !loading) {
    setTimeout(() => {
      setError("This is taking longer than expected!");
    }, 7000);
  }

  useEffect(() => {
    loadMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Seo
        title="Guestbook - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center my-4 min-h-[4rem] justify-between">
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center w-full mb-4 justify-between">
                <Heading style={{ marginBottom: 0 }}>Guestbook</Heading>
                {props.user ? (
                  <div
                    className="flex flex-col items-center justify-center text-black
                  dark:text-white duration-300 font-semibold"
                  >
                    <div className="sm:flex hidden items-center bg-gray-100 dark:bg-gray-800 p-2 px-3 rounded-lg justify-center">
                      <div className="mr-3 flex items-center justify-center">
                        <Image
                          className="rounded-full"
                          src={props.user.avatar}
                          width={27}
                          height={27}
                          alt="Avatar"
                        />
                      </div>
                      {props.user.username}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="hidden sm:flex items-center justify-center">
                      <Link href="/api/oauth2/discord/login">
                        <Button>
                          <FaDiscord className="text-xl mr-2" />
                          Login with Discord
                        </Button>
                      </Link>
                    </div>
                    <div className="flex sm:hidden items-center justify-center">
                      <Link href="/api/oauth2/discord/login">
                        <RoundedBox>
                          <FaDiscord className="text-xl" />
                        </RoundedBox>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className={`${props.user ? "mb-0" : "mb-4"}`}>
                <Text>
                  This page was inspired by{" "}
                  <LinkTag href="https://leerob.io/" target="_blank">
                    Lee Robinson{" "}
                  </LinkTag>
                  so be sure to check out his website! You can send below any
                  type of message such as memes, wisdom or even an appreciation.
                </Text>
              </div>
              {!props.user ? (
                <Text>
                  Login with{" "}
                  <LinkTag href="https://discord.com/" target="_blank">
                    Discord{" "}
                  </LinkTag>{" "}
                  above to leave a message.
                </Text>
              ) : null}
            </div>
          </div>
          <div className="w-full">
            {props.user ? (
              <>
                {error.length ? (
                  <p className="text-red-500 mb-2 ml-auto text-sm">{error}</p>
                ) : (
                  <p className="text-green-500 font-semibold mb-2 ml-auto text-sm">
                    Logged in as {props.user.username}
                  </p>
                )}
              </>
            ) : (
              <>
                {error.length ? (
                  <p className="text-red-500 mb-2 ml-auto text-sm">{error}</p>
                ) : null}
              </>
            )}
          </div>
          <form
            className="flex bottom-0 w-full relative mb-2"
            onSubmit={sendMessage}
          >
            <Input
              id="message"
              name="message"
              value={message}
              placeholder="Enter your message..."
              onChange={(e) => setMessage(e.target.value)}
              required={true}
              style={{ width: "100%" }}
            />
            <div className="ml-5">
              <Button type="submit">Send</Button>
            </div>
          </form>
          {props.user ? (
            <div className="flex ml-auto font-semibold w-fit p-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="mr-3 text-black dark:text-white duration-300">
                Show Discriminator
              </p>{" "}
              <Switch
                enabled={enabled}
                setEnabled={() => setEnabled(!enabled)}
              />
            </div>
          ) : null}
          <div className="w-full flex mt-2">
            <CharacterLimit
              text={message}
              limit={CHARACTER_LIMIT}
              style={{ marginLeft: "auto" }}
            />
          </div>
          <div className="mb-10 w-full h-full">
            {messages.length ? (
              <>
                {messages.map((message) => (
                  <Message
                    messageUserId={message.userId}
                    deleteMessage={deleteMessage}
                    userId={props.user?.id!}
                    sender={message.sender}
                    avatar={message.avatar}
                    text={message.text}
                    date={message.date}
                    key={message.id}
                    id={message.id!}
                  />
                ))}
              </>
            ) : (
              <>
                {loading ? (
                  <div className="mt-4">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                  </div>
                ) : null}
              </>
            )}
          </div>
        </Animate>
        <GoBack />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async function (
  ctx
) {
  const authenticatedDiscordUser = parseCookie(ctx);

  return {
    props: { user: authenticatedDiscordUser },
  };
};

export default Guestbook;