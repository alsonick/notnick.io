import { OtherPageContainer } from "../components/OtherPageContainer";
import { TOPICS } from "../lib/learning/topics";
import { GoBack } from "../components/GoBack";
import { Toggle } from "../components/Toggle";
import { Text } from "../components/Text";
import { Seo } from "../components/Seo";

// Next.js
import Link from "next/link";

const Learn = () => {
  return (
    <OtherPageContainer footer={true}>
      <Seo title="Learn" description="" />
      <Toggle />
      {TOPICS.map((topic) => (
        <Link
          className="focus:ring-4 flex mb-5 rounded ring-[#f54bff] outline-none duration-300 focus:ring-offset-2 dark:ring-offset-black"
          href={`/learn/${topic.slug}`}
          key={topic.id}
        >
          <div className="max-w-2xl">
            <h1 className="text-3xl mb-3 font-bold cursor-pointer underline dark:text-white hover:no-underline w-fit">
              {topic.name}
            </h1>
            <Text>{topic.description}</Text>
          </div>
        </Link>
      ))}
      <GoBack />
    </OtherPageContainer>
  );
};

export default Learn;
