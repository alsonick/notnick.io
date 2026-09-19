import { canGoBackInApp } from "../../lib/navigation-history";
import { FiArrowLeft } from "react-icons/fi";
import { LinkT } from "../ui/Link";

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
      href={props.location ? props.location : "/"}
      onClick={(e) => {
        // An explicit location always wins. Otherwise step back through the
        // reader's history, unless they entered the site on this page, in
        // which case the link's own href (home) takes them somewhere useful.
        if (!props.location && canGoBackInApp()) {
          e.preventDefault();
          router.back();
        }
      }}
    >
      <FiArrowLeft className="text-lg mr-1" /> Go back
    </LinkT>
  );
};
