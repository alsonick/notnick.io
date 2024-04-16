import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Seo } from "../components/Seo";

// Next.js
import { NextPage } from "next";

export const Blm: NextPage = () => {
  return (
    <>
      <Seo
        title={`Black Lives Matter • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
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
