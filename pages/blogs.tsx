import { FilterListBox } from "../components/FilterListBox";
import { getSortedPostData } from "../lib/post";
import { Animate } from "../components/Animate";
import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { NoPost } from "../components/NoPost";
import { Header } from "../components/Header";
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
  let tags = [{ tag: "All", slug: "", finished: false }];

  blogs.forEach((blog) => {
    if (blog.finished) {
      tags.push({ tag: blog.tag, slug: blog.slug, finished: blog.finished });
    }
  });

  const [selectedTag, setSelectedTag] = useState(tags[0].tag);

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].finished) {
      if (blogs[i].tag === tags[i].tag) {
        setSelectedTag(tags[i].tag);
      }
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
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Blogs</Heading>
            {blogs.length ? (
              <FilterListBox
                items={tags}
                selectedItem={selectedTag}
                onChange={setSelectedTag}
              />
            ) : null}
          </Header>
          {!blogs.length && <NoPost type="blogs" />}
          <div className="relative">
            <Posts
              posts={filteredBlogsList.length ? filteredBlogsList : blogs}
              type="blogs"
            />
            <GoBack />
          </div>
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
