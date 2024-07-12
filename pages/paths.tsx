import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Toggle } from "../components/Toggle";
import { LinkT } from "../components/Link";
import { Seo } from "../components/Seo";
import { PATHS } from "../lib/paths";

// Next.js
import { NextPage } from "next";
import { PlainTag } from "../components/PlainTag";

export const Paths: NextPage = () => {
  return (
    <>
      <Seo
        title={`Paths • ${FULL_NAME}`}
        description={`${FULL_NAME} • ${PROFESSION}`}
      />
      <div className="p-10">
        <Toggle />
        <div className="flex flex-col">
          {PATHS.map((path) => (
            <div className="flex items-center p-1" key={path.id}>
              <LinkT href={path.link}>{path.path}</LinkT>
              {path.slug && (
                <div className="ml-2">
                  <PlainTag text="[Slug]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Paths;
