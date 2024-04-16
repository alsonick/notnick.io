import { Content } from "../types/challenge";
import { LinkT } from "./Link";

interface Props {
  c: Content;
}

export const DownloadCodeProject = ({ c }: Props) => {
  return (
    <div className="text-center flex justify-center">
      <LinkT
        href={c.code?.link}
        target="_blank"
        title={`Download the Xcode project for Day ${c.day}`}
      >
        <picture>
          <img
            className="w-6 mr-1"
            src={`/assets/${c.code?.icon === "xcode" ? "xcode" : "vscode"}.${
              c.code?.image.extension
            }`}
            title={`${c.code?.icon === "xcode" ? "Xcode" : "Vscode"} icon`}
            alt={`${c.code?.icon === "xcode" ? "Xcode" : "Vscode"} icon`}
          />
        </picture>
        Download {c.code?.icon === "xcode" ? "Xcode" : "Vscode"} project
      </LinkT>
    </div>
  );
};
