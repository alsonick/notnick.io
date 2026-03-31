import { Border } from "./Border";

// Next.js
import Image from "next/image";

interface Props {
  decoration?: "halloween" | "christmas";
  border?: boolean;
  height: number;
  width: number;
}

const getAvatarSrc = (decoration?: "halloween" | "christmas"): string => {
  if (decoration === "halloween")
    return "/branding/fun/discord/HalloweenChibi.jpg";
  if (decoration === "christmas")
    return "/branding/fun/discord/ChristmasChibi.jpg";

  const now = new Date();
  const month = now.getMonth() + 1; // 1-indexed
  const day = now.getDate();

  if (month === 10 && day === 31)
    return "/branding/fun/discord/HalloweenChibi.jpg";
  if (month === 12) return "/branding/fun/discord/ChristmasChibi.jpg";

  return "/Chibi.jpg";
};

export const Avatar = (props: Props) => {
  return (
    <>
      {props.border ? (
        <Border>
          <Img
            height={props.height}
            width={props.width}
            decoration={props.decoration}
          />
        </Border>
      ) : (
        <Img
          height={props.height}
          width={props.width}
          decoration={props.decoration}
        />
      )}
    </>
  );
};

const Img = (props: Props) => {
  const src = getAvatarSrc(props.decoration);
  return (
    <Image
      className="rounded-full z-10 aspect-square object-cover"
      title="My Signature Avatar"
      alt="My Signature Avatar"
      height={props.height}
      width={props.width}
      quality={100}
      src={src}
    />
  );
};
