import { Border } from "./Border";

// Next.js
import Image from "next/image";

interface Props {
  border?: boolean;
  height: number;
  width: number;
}

export const Avatar = ({ border, height, width }: Props) => {
  return (
    <>
      {border ? (
        <Border>
          <Img height={height} width={width} />
        </Border>
      ) : (
        <Img height={height} width={width} />
      )}
    </>
  );
};

const Img = ({ height, width }: { height: number; width: number }) => {
  return (
    <Image
      className="rounded-full border border-teal-100 dark:border-teal-900"
      title="My avatar"
      src="/branding/secondary_dark_short_sig_avatar.png"
      height={height}
      alt="My avatar"
      width={width}
      quality={100}
    />
  );
};
