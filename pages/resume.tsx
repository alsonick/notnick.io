import { Heading } from "../components/Heading";
import { Animate } from "../components/Animate";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Seo } from "../components/Seo";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";

// Next.js
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const directory = path.join(process.cwd(), "/data");
  const fullPath = path.join(directory, "resume.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
      ...matterResult.data,
    },
  };
};

const Projects: NextPage = (props: any) => {
  return (
    <>
      <Seo
        title="Resume - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center my-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Resume</Heading>
          </div>
          <div className="flex flex-col mb-4">
            <article
              className="
            prose max-w-none dark:prose-invert prose-a:text-[#f54bff]
            prose-a:no-underline hover:prose-a:underline dark:prose-pre:bg-gray-800
          dark:prose-code:text-white prose-img:rounded-xl prose-img:border my-4
          prose-img:border-teal-100 prose-img:dark:border-teal-900 prose-h1:mb-0 prose-h2:mb-0 prose-p:mt-0 prose-p:mb-0"
              dangerouslySetInnerHTML={{ __html: props.contentHtml }}
            />
            <div className="ml-auto">
              <Button>Download PDF</Button>
            </div>
          </div>
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export default Projects;
