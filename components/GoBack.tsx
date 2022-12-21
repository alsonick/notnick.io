import { LinkT } from "./Link";

// Next.js
import { useRouter } from "next/router";

export const GoBack = () => {
  const router = useRouter();

  return <LinkT onClick={() => router.back()}>&larr; Go back</LinkT>;
};
