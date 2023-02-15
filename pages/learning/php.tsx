import { Heading } from "../../components/Heading";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Toggle } from "../../components/Toggle";
import { LinkT } from "../../components/Link";
import { Text } from "../../components/Text";
import { Seo } from "../../components/Seo";
import { TOPICS } from "./learning/php";

const PHP = () => {
  return (
    <div className="p-20">
      <Seo title="PHP Learning" description="" />
      <Toggle />
      <Header singleItem={true} column={true}>
        <Heading style={{ marginBottom: 0 }}>PHP Learning</Heading>
        <div className="max-w-lg mt-3">
          <Text>
            This is where I&apos;m keeping tracking of my learning progress and
            to document all the topics I learn. I&apos;m going to be using{" "}
            <LinkT
              href="https://www.w3schools.com/php/default.asp"
              target="_blank"
            >
              w3schools
            </LinkT>{" "}
            to learn PHP.
          </Text>
        </div>
        <div className="mt-10 border-t border-teal-100 dark:border-teal-900 pt-5">
          {TOPICS.map((topic) => (
            <div
              className="mb-10 border-b border-teal-100 dark:border-teal-900 pb-5"
              key={topic.id}
            >
              <Heading style={{ marginBottom: 0 }}>
                {topic.name} {topic.completed ? "✅" : "❌"}
              </Heading>
              <ul className="list-disc ml-6 mt-3 ">
                {topic.learned.map((learn) => (
                  <li
                    className="text-gray-600 dark:text-gray-300 max-w-xl mb-2"
                    key={learn.id}
                  >
                    {learn.text}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <LinkT href={topic.link} target="_blank">
                  Visit webpage
                </LinkT>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </Header>
    </div>
  );
};

export default PHP;
