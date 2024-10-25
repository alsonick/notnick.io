import { OtherPageContainer } from "./OtherPageContainer";
import { SecondaryFilterBox } from "./SecondaryFilterBox";
import { Learn, Topic as T } from "../types/topic";
import { Heading } from "./Heading";
import { Toggle } from "./Toggle";
import { Header } from "./Header";
import { GoBack } from "./GoBack";
import { useState } from "react";
import { Label } from "./Label";
import { Topic } from "./Topic";
import { Text } from "./Text";

export const Learning = (props: T) => {
  const [learnData, setLearnData] = useState<Learn[]>(props.learn);

  const filter = (name: string) => {
    const filtered = props.learn.filter((learn) => learn.name === name);
    setLearnData(filtered);
  };

  return (
    <OtherPageContainer footer={true}>
      <div className="flex flex-col">
        <Toggle />
        <Header singleItem={true} column={true}>
          <Heading style={{ marginBottom: 0 }}>{props.language}</Heading>
          <div className="max-w-lg mt-3">
            <Text>{props.description}</Text>
          </div>
        </Header>
      </div>
      <div className="mt-2 border-t border-teal-100 dark:border-teal-900 pt-8">
        <div className="mb-6 w-full flex items-center">
          <div className="ml-auto flex flex-col items-center w-fit">
            <div className="ml-auto mb-1">
              <Label text="filter by name" />
            </div>
            <SecondaryFilterBox items={props.learn} filter={filter} />
          </div>
        </div>
        {learnData.map((topic) => (
          <Topic learn={topic} language={props.language} key={topic.id} />
        ))}
      </div>
      <GoBack location="/learn" />
    </OtherPageContainer>
  );
};
