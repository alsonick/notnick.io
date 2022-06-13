import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Heading } from "../components/Heading";
import { GetStaticProps, NextPage } from "next";
import { LinkTag } from "../components/LinkTag";
import { Layout } from "../components/Layout";
import { NoPost } from "../components/NoPost";
import { BLOGS_DIR } from "../lib/constants";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { Post } from "../types/post";
import { useState } from "react";

export const getStaticProps: GetStaticProps = () => {
  const blogs = getSortedPostData(BLOGS_DIR);
  return {
    props: {
      blogs,
    },
  };
};

interface Props {
  blogs: Post[];
}

const Blogs: NextPage<Props> = ({ blogs }) => {
  const blg = {
    blogs: [{ tag: "" }],
  };
  const blgs = blogs.length ? blogs[0].tag : blg.blogs[0].tag;
  const [selectedTag, setSelectedTag] = useState(blgs);
  const filteredNotesList = blogs.filter((b) => b.tag === selectedTag);
  // console.log(filteredNotesList);
  return (
    <>
      <Seo
        title="Blogs - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <div className="flex items-center mb-4 min-h-[4rem] justify-between">
          <Heading className="mb-0">Blogs</Heading>
          {blogs.length ? (
            <FilterListBox
              items={blogs}
              selectedItem={selectedTag}
              onChange={setSelectedTag}
            />
          ) : null}
        </div>
        {!blogs.length && <NoPost type="blogs" />}
        <Posts type="blogs" items={selectedTag ? filteredNotesList : blogs} />
        <LinkTag href="/">&larr; Go Back</LinkTag>
      </Layout>
    </>
  );
};

export default Blogs;
