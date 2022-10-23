import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Animate } from "../components/Animate";
import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { NoPost } from "../components/NoPost";
import { BLOGS_DIR } from "../lib/constants";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { Post } from "../types/post";
import { useState } from "react";

// Next.js
import { GetStaticProps, NextPage } from "next";

interface Props {
  blogs: Post[];
}

const Blogs: NextPage<Props> = ({ blogs }) => {
  let tags = [{ tag: "All", slug: "" }];

  blogs.forEach((blog) => {
    tags.push({ tag: blog.tag, slug: blog.slug });
  });

  const [selectedTag, setSelectedTag] = useState(tags[0].tag);

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].tag === tags[i].tag) {
      setSelectedTag(tags[i].tag);
    }
  }

  const filteredBlogsList = blogs.filter((blog) => blog.tag === selectedTag);

  return (
    <>
      <Seo
        title="Blogs - Nicholas Njoki"
        description="Nicholas Njoki - Full-Stack Developer"
      />
      <Layout>
        <Animate>
          <div className="flex items-center mb-4 min-h-[4rem] justify-between">
            <Heading style={{ marginBottom: 0 }}>Blogs</Heading>
            {blogs.length ? (
              <FilterListBox
                items={tags}
                selectedItem={selectedTag}
                onChange={setSelectedTag}
              />
            ) : null}
          </div>
          {!blogs.length && <NoPost type="blogs" />}
          <Posts
            type="blogs"
            items={filteredBlogsList.length ? filteredBlogsList : blogs}
          />
          <GoBack />
        </Animate>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blogs = getSortedPostData(BLOGS_DIR);
  return {
    props: {
      blogs,
    },
  };
};

export default Blogs;
