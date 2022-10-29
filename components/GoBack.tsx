import { Link } from "./Link";

// Next.js
import { useRouter } from "next/router";

export const GoBack = () => {
  const router = useRouter();

  return <Link onClick={() => router.back()}>&larr; Go back</Link>;
};
