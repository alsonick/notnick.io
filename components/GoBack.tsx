import { FiArrowLeft } from "react-icons/fi";
import { LinkT } from "./Link";

// Next.js
import { useRouter } from "next/router";

export const GoBack = ({ location }: { location?: string }) => {
  const router = useRouter();

  return (
    <LinkT
      title="Go back"
      href={location ? location : undefined}
      onClick={() => {
        !location && router.back();
      }}
    >
      <FiArrowLeft className="text-lg mr-1" /> Go back
    </LinkT>
  );
};
