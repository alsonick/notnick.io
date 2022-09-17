import Image from "next/image";

interface Props {
  width: number;
  height: number;
}

export const Avatar = ({ width, height }: Props) => {
  return (
    <Border>
      <Image
        className="rounded-full bg-red"
        src="/pfp.png"
        width={width}
        height={height}
        quality={99}
        alt="Me"
      />
    </Border>
  );
};

const Border = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-fit border duration-300 border-teal-100 dark:border-teal-900 rounded-full">
      {children}
    </div>
  );
};
