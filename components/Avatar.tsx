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
      className="rounded-full bg-red"
      title="My Memoji"
      src="/memoji.png"
      height={height}
      alt="My Memoji"
      width={width}
      quality={100}
    />
  );
};

const Border = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-fit border duration-300 border-teal-100 dark:border-teal-900 rounded-full">
      {children}
    </div>
  );
};
