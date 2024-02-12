import { Toggle } from "../components/Toggle";
import { FULL_NAME } from "../lib/constants";
import { LinkT } from "../components/Link";
import { Seo } from "../components/Seo";
import { PATHS } from "../lib/paths";

// Next.js
import { NextPage } from "next";

export const Paths: NextPage = () => {
  return (
    <>
      <Seo title={`Paths - ${FULL_NAME}`} description="" />
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
