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
interface ImgProps {
  height: number;
  width: number;
}

const Img = (props: Props) => {
  return (
    <Image
      className="rounded-full border border-teal-100 dark:border-teal-900"
      title="My avatar"
      src="/branding/secondary_dark_short_sig_avatar.png"
      height={props.height}
      alt="My avatar"
      width={props.width}
      quality={100}
    />
  );
};
