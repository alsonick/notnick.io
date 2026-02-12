import { HiBadgeCheck, HiExclamationCircle } from "react-icons/hi";
import { CharacterLimit } from "../components/CharacterLimit";
import { Props, Message } from "../types/guestbook";
import { StatusMessage } from "../components/StatusMessage";
import { FULL_NAME, PROFESSION } from "../lib/constants";
import relativeTime from "dayjs/plugin/relativeTime";
import { FiSend, FiLogOut } from "react-icons/fi";
import { TextArea } from "../components/TextArea";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Loading } from "../components/Loading";
import { ICON } from "../lib/tailwindcss/icon";
import { GoBack } from "../components/GoBack";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { getSession } from "../lib/session";
import { FaDiscord } from "react-icons/fa";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";
import { prisma } from "../lib/prisma";
import { page } from "../lib/page";
import { useState } from "react";

import dayjs from "dayjs";

// Next.js
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";

dayjs.extend(relativeTime);

const CHARACTER_LIMIT = 200;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = getSession(ctx.req);

  const messages = await prisma.guestbookMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const hasPosted = session
    ? messages.some((m) => m.discordId === session.discordId)
    : false;

  return {
    props: {
      session,
      messages: messages.map((m) => ({
        createdAt: m.createdAt.toISOString(),
        discordId: m.discordId,
        username: m.username,
        message: m.message,
        avatar: m.avatar,
        name: m.name,
        id: m.id,
      })),
      hasPosted,
    },
  };
};

const Guestbook: NextPage<Props> = ({
  hasPosted: initialHasPosted,
  messages: initialMessages,
  session,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [hasPosted, setHasPosted] = useState(initialHasPosted);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (message.trim().length === 0) {
      return setError("Message cannot be empty.");
    }

    if (message.length > CHARACTER_LIMIT) {
      return setError(`Message must be ${CHARACTER_LIMIT} characters or less.`);
    }

    setLoading(true);

    const response = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .catch(() => {
        setLoading(false);
        setError("Something went wrong.");
        return null;
      });

    setLoading(false);

    if (!response) return;

    if (!response.success) {
      return setError(response.error ?? "Something went wrong.");
    }

    setSuccess("Your message has been added!");
    setMessage("");
    setHasPosted(true);
    setMessages([response.entry, ...messages]);
  };

  const handleSignOut = async () => {
    await fetch("/api/guestbook", { method: "PATCH" });
    window.location.reload();
  };

  return (
    <>
      <Seo
        title={`${page.guestbook.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-16rem)]">
            <Header singleItem={false}>
              <Heading style={{ marginBottom: 0 }}>
                {page.guestbook.title}
              </Heading>
              {!session ? (
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a href="/api/oauth2/discord">
                  <Button title="Sign in with Discord">
                    <FaDiscord className="text-xl md:hover:scale-110 duration-300" />
                  </Button>
                </a>
              ) : (
                <Button onClick={handleSignOut} title="Sign out">
                  Sign out <FiLogOut className={ICON} />
                </Button>
              )}
            </Header>
            <div className="mt-4 mb-4">
              {session ? (
                <Text>
                  Signed in as <span className="font-bold">{session.name}</span>
                </Text>
              ) : (
                <Text>Sign in with Discord to leave a message.</Text>
              )}
            </div>
            {session && !hasPosted && (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full dark:bg-[#10161a]/50 rounded-lg p-4 mb-6 duration-300 border border-teal-100 dark:border-teal-900"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={session.avatar}
                    alt={session.name}
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base dark:text-white">
                      {session.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      @{session.username}
                    </span>
                  </div>
                </div>
                <TextArea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a message..."
                  value={message}
                  required
                  rows={3}
                />
                <div className="mt-2">
                  <CharacterLimit text={message} limit={CHARACTER_LIMIT} />
                </div>
                <div className="w-full flex items-center justify-between mt-2">
                  <Loading loading={loading} text="Sending..." />
                  {error && !loading && (
                    <div className="flex items-center">
                      <HiExclamationCircle className="mr-1 mt-[1px] text-red-500" />
                      <StatusMessage message={error} type="error" />
                    </div>
                  )}
                  {success && !loading && (
                    <div className="flex items-center">
                      <HiBadgeCheck className="mr-1 mt-[1px] text-green-500" />
                      <StatusMessage message={success} type="success" />
                    </div>
                  )}
                  <div className="ml-auto pl-1">
                    <Button title="Sign the guestbook">
                      Send <FiSend className={ICON} />
                    </Button>
                  </div>
                </div>
              </form>
            )}
            {session && hasPosted && !success && (
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                You&apos;ve already signed the guestbook.
              </p>
            )}
            <div className="flex flex-col gap-4 mb-6">
              {messages.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex gap-3 p-4 rounded-lg border duration-300 ${
                    session && entry.discordId === session.discordId
                      ? "border-primary/50 dark:bg-[#10161a]/50"
                      : "border-gray-200 dark:border-gray-800 dark:bg-[#10161a]/30"
                  }`}
                >
                  <Image
                    src={entry.avatar}
                    alt={entry.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-base dark:text-white">
                        {entry.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        @{entry.username}
                      </span>
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        · {dayjs(entry.createdAt).fromNow()}
                      </span>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-300 mt-1 break-words">
                      {entry.message}
                    </p>
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="mt-8">
                  <Text> Be the first to sign the guestbook! 😀 </Text>
                </div>
              )}
            </div>
            <GoBack />
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Guestbook;
