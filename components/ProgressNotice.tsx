import { CSSProperties } from "react";
import { Notice } from "./Notice";

export const ProgressNotice = ({
  style,
}: {
  style?: CSSProperties | undefined;
}) => {
  return (
    <div className="flex items-center justify-center p-20 mt-8" style={style}>
      <Notice>
        In progress...
        <br />
        Come back and check <br />
        again later.
      </Notice>
    </div>
  );
};
