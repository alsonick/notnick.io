import { LinkTag } from "./LinkTag";

// Next.js
import { useRouter } from "next/router";
import { Link } from "./Link";

export const GoBack = () => {
  const router = useRouter();

  return <Link onClick={() => router.back()}>Go back</Link>;
};
