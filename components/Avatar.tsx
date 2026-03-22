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
      className="rounded-full z-10 aspect-square object-cover"
      title="My Signature Avatar"
      alt="My Signature Avatar"
      height={props.height}
      width={props.width}
      src={"/Chibi.jpg"}
      quality={100}
    />
  );
};
