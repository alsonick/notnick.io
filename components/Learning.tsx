import { OtherPageContainer } from "./OtherPageContainer";
import { Learn, Topic } from "../types/topic";
import { Heading } from "./Heading";
import { Toggle } from "./Toggle";
import { Header } from "./Header";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const Learning = ({ learn, language, description }: Topic) => {
  return (
    <OtherPageContainer footer={true}>
      <div className="flex flex-col">
        <Toggle />
        <Header singleItem={true} column={true}>
          <Heading style={{ marginBottom: 0 }}>{language}</Heading>
          <div className="max-w-lg mt-3">
            <Text>{description}</Text>
          </div>
        </Header>
      </div>
      <div className="mt-2 border-t border-teal-100 dark:border-teal-900 pt-8">
        {learn.map((topic) => (
          <Topic
            key={topic.id}
            name={topic.name}
            language={language}
            learned={topic.learned}
            completed={topic.completed}
            link={topic.link}
          />
        ))}
      </div>
    </OtherPageContainer>
  );
};

const Topic = ({
  completed,
  name,
  learned,
  link,
}: Learn & { language: string }) => {
  return (
    <div className="mb-10 border-b border-teal-100 dark:border-teal-900 pb-5">
      <Heading style={{ marginBottom: 0 }}>
        <>
          {name} {completed ? "✅" : "❌"}
        </>
      </Heading>
      <div className="mt-12">
        {learned.map((learn) => (
          <div className="ml-5" key={learn.id}>
            <Heading style={{ marginTop: "3.5rem" }}>{learn.title}</Heading>
            <ul className="list-disc ml-10  leading-tight">
              {learn.points.map((point) => (
                <li
                  key={point.id}
                  className="text-gray-600 dark:text-gray-300 max-w-xl mb-4"
                >
                  {point.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <LinkT href={link} target="_blank">
          Visit
        </LinkT>
      </div>
    </div>
  );
};
