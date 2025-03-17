import { AVATAR_FILE_EXTENSION, AVATAR } from "../lib/constants";
import { Border } from "./Border";

// Next.js
import Image from "next/image";

interface Props {
  border?: boolean;
  height: number;
  width: number;
}

export const Avatar = (props: Props) => {
  return (
    <>
      {props.border ? (
        <Border>
          <Img height={props.height} width={props.width} />
        </Border>
      ) : (
        <Img height={props.height} width={props.width} />
      )}
    </>
  );
};

const Img = (props: Props) => {
  return (
    <Image
      className="rounded-full border border-teal-100 dark:border-teal-900"
      src={`/Avatar.${AVATAR_FILE_EXTENSION}`}
      height={props.height}
      width={props.width}
      title="My Avatar"
      alt="My Avatar"
      quality={100}
    />
  );
};
