import { FiArrowLeft } from "react-icons/fi";
import { LinkT } from "./Link";

// Next.js
import { useRouter } from "next/router";

interface Props {
  location?: string;
}

export const GoBack = (props: Props) => {
  const router = useRouter();

  return (
    <LinkT
      title="Go back"
      href={props.location ? props.location : undefined}
      onClick={() => {
        !location && router.back();
      }}
    >
      <FiArrowLeft className="text-lg mr-1" /> Go back
    </LinkT>
  );
};
