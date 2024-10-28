import { Content } from "../types/challenge";
import { LinkT } from "./Link";

interface Props {
  c: Content;
}

export const DownloadCodeProject = (props: Props) => {
  return (
    <div className="text-center whitespace-nowrap flex justify-center">
      <LinkT
        href={props.c.code?.link}
        target="_blank"
        title={`Download the Xcode project for Day ${props.c.day}`}
      >
        <picture>
          <img
            className="w-6 mr-2"
            src={`/assets/${
              props.c.code?.icon === "xcode" ? "xcode" : "vscode"
            }.${props.c.code?.image.extension}`}
            title={`${
              props.c.code?.icon === "xcode" ? "Xcode" : "Vscode"
            } icon`}
            alt={`${props.c.code?.icon === "xcode" ? "Xcode" : "Vscode"} icon`}
          />
        </picture>
        Download {props.c.code?.icon === "xcode" ? "Xcode" : "Vscode"} project
      </LinkT>
    </div>
  );
};
