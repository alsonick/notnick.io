import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Seo } from "../components/Seo";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";

export const Blm: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.blm.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <div className="h-screen">
        <div className="flex items-center justify-center h-full flex-col">
          <Heading>#BlackLivesMatter</Heading>
        </div>
      </div>
    </>
  );
};

export default Blm;
