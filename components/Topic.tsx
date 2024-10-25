import { FiDownload } from "react-icons/fi";
import { Learn } from "../types/topic";
import { Heading } from "./Heading";
import { saveAs } from "file-saver";
import { Button } from "./Button";
import { LinkT } from "./Link";

interface Props {
  language: string;
  learn: Learn;
}

export const Topic = (props: Props) => {
  return (
    <div className="mb-10 border-b border-teal-100 dark:border-teal-900 pb-5">
      <Heading style={{ marginBottom: 0 }}>
        {props.learn.name} {props.learn.completed ? "✅" : "❌"}
      </Heading>
      <div className="mt-12">
        {props.learn.learned.map((learn) => (
          <div className="ml-5" key={learn.id}>
            <Heading style={{ marginTop: "3.5rem" }}>{learn.title}</Heading>
            <ul className="list-disc ml-10 leading-tight">
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
      {props.learn.image && (
        <picture>
          <img
            title={`${props.learn.name} Simulator Showcase`}
            alt={`${props.learn.name} Simulator Showcase`}
            src={props.learn.image}
            className="w-2/3"
          />
        </picture>
      )}
      {props.learn.image && (
        <div className="mt-4">
          <Button
            title={`Download ${props.learn.name} Simulator Showcase`}
            onClick={() => {
              saveAs(
                `${props.learn.name} Simulator Showcase`,
                props.learn.name
              );
            }}
          >
            Download <FiDownload title="Download" className="text-xl ml-2" />
          </Button>
        </div>
      )}
      <div className="mt-5">
        <LinkT href={props.learn.link} title="Visit Page" target="_blank">
          Visit Page
        </LinkT>
      </div>
    </div>
  );
};
