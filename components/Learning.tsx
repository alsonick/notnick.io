import { OtherPageContainer } from "./OtherPageContainer";
import { Learn, Topic } from "../types/topic";
import { Heading } from "./Heading";
import { Toggle } from "./Toggle";
import { Header } from "./Header";
import { LinkT } from "./Link";
import { Text } from "./Text";
import { Seo } from "./Seo";

export const Learning = ({ learn, language, description, cover }: Topic) => {
  return (
    <OtherPageContainer footer={true}>
      <Seo title={`${language} Learning`} description={description} />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading style={{ marginBottom: 0 }}>{language} Learning</Heading>
        <div className="max-w-lg mt-3">
          <Text>{description}</Text>
        </div>
      </Header>
      <div className="mt-10 border-t border-teal-100 dark:border-teal-900 pt-5">
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
  language,
  completed,
  name,
  learned,
  link,
}: Learn & { language: string }) => {
  return (
    <div className="mb-10 border-b border-teal-100 dark:border-teal-900 pb-5">
      <Heading style={{ marginBottom: 0 }}>
        <>
          {language} {name} {completed ? "✅" : "❌"}
        </>
      </Heading>
      <ul className="list-disc ml-6 mt-3">
        {learned.map((learn) => (
          <li
            key={learn.id}
            className="text-gray-600 dark:text-gray-300 max-w-xl mb-2"
          >
            {learn.text}
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <LinkT href={link} target="_blank">
          Visit webpage
        </LinkT>
      </div>
    </div>
  );
};
