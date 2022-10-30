import { AvatarBorder } from "../AvatarBorder";

// Next.js
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
}

export const Avatar = ({ src, width, height }: Props) => {
  return (
    <AvatarBorder>
      <Image
        className="rounded-full w-full"
        src={src}
        width={width}
        height={height}
        alt="Avatar"
      />
    </AvatarBorder>
  );
};
