import { returnChallengeStatus } from "../lib/return-challenge-status";
import { Challenge as C } from "../types/challenge";
import { page } from "../lib/page";
import { Text } from "./Text";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  challenge: C;
}

export const Challenge = (props: Props) => {
  return (
    <div
      className="border-b border-teal-100 dark:border-teal-900 mb-4 pb-4"
      key={props.challenge.id}
    >
      <Tag
        title={returnChallengeStatus(props.challenge)}
        type={props.challenge?.active ? "success" : "error"}
      />
      <Link
        className={`flex flex-col w-fit mt-2 focus:ring-offset-2 dark:ring-offset-black focus:ring-4
        rounded ring-primary outline-none duration-300`}
        href={`${page.challenge.name}/${props.challenge.slug}`}
      >
        <h1
          className="text-3xl font-bold cursor-pointer underline
       	  dark:text-white hover:no-underline"
        >
          {props.challenge.name}
        </h1>
        <Text style={{ margin: "0.5rem 0px 0.25rem" }}>
          {props.challenge.description}
        </Text>
      </Link>
    </div>
  );
};
