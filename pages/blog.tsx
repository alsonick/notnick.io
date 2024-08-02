import { capitalizeFirstLetter } from "../lib/capitalize-first-letter";
import { BLOGS_DIR, FULL_NAME, PROFESSION } from "../lib/constants";
import { generateRandomId } from "../lib/generate-random-id";
import { FilterListBox } from "../components/FilterListBox";
import { removeDuplicates } from "../lib/remove-duplicates";
import { getSortedPostData } from "../lib/post";
import { Animate } from "../components/Animate";
import { Heading } from "../components/Heading";
import { GoBack } from "../components/GoBack";
import { Layout } from "../components/Layout";
import { NoPost } from "../components/NoPost";
import { Header } from "../components/Header";
import { Posts } from "../components/Posts";
import { Seo } from "../components/Seo";
import { Post } from "../types/post";
import { useState } from "react";

// Next.js
import { GetStaticProps, NextPage } from "next";

interface Props {
  blogs: Post[];
}

const Blog: NextPage<Props> = ({ blogs }) => {
  let tags = [
    {
      filter: capitalizeFirstLetter("all"),
      slug: "",
      finished: false,
      id: generateRandomId(),
    },
  ];

  blogs.forEach((blog) => {
    if (blog.finished) {
      tags.push({
        filter: blog.filter,
        slug: blog.slug,
        finished: blog.finished,
        id: generateRandomId(),
      });
    }
  });

  const [selected, setSelected] = useState(tags[0].filter);

  const filteredBlogsList = blogs.filter((blog) => blog.filter === selected);

  return (
    <>
      <Seo
        title={`Blog • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>Blog</Heading>
            {blogs.length ? (
              <FilterListBox
                items={removeDuplicates(tags)}
                selectedItem={selected}
                onChange={setSelected}
              />
            ) : null}
          </Header>
          {!blogs.length && <NoPost type="blogs" />}
          <div className="relative">
            <Posts
              posts={filteredBlogsList.length ? filteredBlogsList : blogs}
              type="blog"
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

export default Blog;
