import { FULL_NAME, PROFESSION } from "../lib/constants";
import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { Header } from "../components/Header";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { FiArrowRight } from "react-icons/fi";
import { Seo } from "../components/Seo";
import { PATHS } from "../lib/paths";
import { page } from "../lib/page";

// Next.js
import { NextPage } from "next";
import Link from "next/link";

export const Paths: NextPage = () => {
  return (
    <>
      <Seo
        title={`${page.paths.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={true}>
              <Heading style={{ marginBottom: 0 }}>{page.paths.title}</Heading>
            </Header>
            <div className="flex flex-col gap-1">
              {PATHS.map((path) => (
                <Link
                  href={path.link}
                  className="flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#10161a]/50 duration-300 group"
                  key={path.id}
                >
                  <span className="text-base font-mono text-gray-700 dark:text-gray-300 group-hover:text-primary duration-300">
                    {path.path}
                  </span>
                  <FiArrowRight className="text-gray-400 dark:text-gray-500 group-hover:text-primary group-hover:translate-x-1 duration-300" />
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default Paths;
