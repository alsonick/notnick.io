import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

export const Avatar = ({ width, height }: Props) => {
  return (
    <Image
      className="rounded-full"
      src="/me.jpeg"
      width={width}
      height={height}
      quality={99}
      alt="Me"
    />
  );
};
