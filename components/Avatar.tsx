import { Border } from "./Border";

// Next.js
import Image from "next/image";

interface Props {
  border: boolean;
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
      className="rounded-full sm:hover:scale-105 duration-300 hover:scale-100"
      title="My Apple Memoji"
      src="/Avatar.png"
      height={height}
      alt="My Apple Memoji"
      width={width}
      quality={100}
    />
  );
};
