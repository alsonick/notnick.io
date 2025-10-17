import { determineAvatarDecorationType } from "../lib/determine-avatar-decoration-type";
import { determineQueryMonth } from "../lib/determine-query-month";
import { Border } from "./Border";

// Next.js
import { useRouter } from "next/router";
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
  const router = useRouter();

  const decoration = router.query.decoration as string;

  return (
    <Image
      src={
        decoration
          ? determineAvatarDecorationType(determineQueryMonth("none"))
          : determineAvatarDecorationType(0)
      }
      title="My Signature Avatar"
      alt="My Signature Avatar"
      className="rounded-full"
      height={props.height}
      width={props.width}
      quality={100}
    />
  );
};
