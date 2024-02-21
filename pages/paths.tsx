import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Toggle } from "../components/Toggle";
import { LinkT } from "../components/Link";
import { Seo } from "../components/Seo";
import { PATHS } from "../lib/paths";

// Next.js
import { NextPage } from "next";

export const Paths: NextPage = () => {
  return (
    <>
      <Seo
        title={`Paths - ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <div className="p-10">
        <Toggle />
        <div className="flex flex-col">
          {PATHS.map((path) => (
            <LinkT key={path.id} href={path.link}>
              {path.path}
            </LinkT>
          ))}
        </div>
      </div>
    </>
  );
};

export default Paths;
