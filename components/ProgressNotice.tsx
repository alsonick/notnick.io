import { CSSProperties } from "react";
import { Notice } from "./Notice";

interface Props {
  style?: CSSProperties | undefined;
}

export const ProgressNotice = (props: Props) => {
  return (
    <div
      className="flex items-center justify-center p-20 mt-8"
      style={props.style}
    >
      <Notice>
        In progress...
        <br />
        Come back and check <br />
        again later.
      </Notice>
    </div>
  );
};
