import { OtherPageContainer } from "./OtherPageContainer";
import { SecondaryFilterBox } from "./SecondaryFilterBox";
import { Learn, Topic } from "../types/topic";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import { Heading } from "./Heading";
import { Toggle } from "./Toggle";
import { Header } from "./Header";
import { GoBack } from "./GoBack";
import { Button } from "./Button";
import { useState } from "react";
import { Label } from "./Label";
import { LinkT } from "./Link";
import { Text } from "./Text";

export const Learning = ({ learn, language, description }: Topic) => {
  const [learnData, setLearnData] = useState<Learn[]>(learn);

  const filter = (name: string) => {
    const filtered = learn.filter((learn) => learn.name === name);
    setLearnData(filtered);
  };

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
        <div className="mb-6 w-full flex items-center">
          <div className="ml-auto flex flex-col items-center w-fit">
            <div className="ml-auto mb-1">
              <Label text="filter by name" />
            </div>
            <SecondaryFilterBox items={learn} filter={filter} />
          </div>
        </div>
        {learnData.map((topic) => (
          <Topic
            key={topic.id}
            name={topic.name}
            language={language}
            learned={topic.learned}
            image={topic.image}
            completed={topic.completed}
            link={topic.link}
          />
        ))}
      </div>
      <GoBack location="/learn" />
    </OtherPageContainer>
  );
};

const Topic = ({
  completed,
  name,
  learned,
  image,
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
      {image && (
        <picture>
          <img
            className="w-2/3"
            src={image}
            alt={`${name} Simulator Showcase`}
            title={`${name} Simulator Showcase`}
          />
        </picture>
      )}
      {image && (
        <div className="mt-4">
          <Button
            title={`Download ${name} Simulator Showcase`}
            onClick={() => {
              saveAs(`${name} Simulator Showcase`, name);
            }}
          >
            Download <FiDownload className="text-xl ml-2" />
          </Button>
        </div>
      )}
      <div className="mt-5">
        <LinkT href={link} target="_blank">
          Visit Page
        </LinkT>
      </div>
    </div>
  );
};
