import Image from "next/image";

interface Props {
  height: number;
  width: number;
}

export const Avatar = ({ height, width }: Props) => {
  return (
    <Border>
      <Image
        className="rounded-full bg-red"
        title="My Memoji"
        alt="My Memoji"
        height={height}
        src="/pfp.png"
        width={width}
        quality={99}
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
