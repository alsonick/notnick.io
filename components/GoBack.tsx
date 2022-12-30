import { FiArrowLeft } from "react-icons/fi";
import { LinkT } from "./Link";
// Next.js
import { useRouter } from "next/router";

export const GoBack = () => {
  const router = useRouter();

  return <LinkT onClick={() => router.back()}><FiArrowLeft className="text-lg mr-1" /> Go back</LinkT>;
};
