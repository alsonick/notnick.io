import { capitalizeFirstLetter } from "../lib/utils/capitalize-first-letter";
import { BLOGS_DIR, FULL_NAME, PROFESSION } from "../lib/constants";
import { generateRandomId } from "../lib/utils/generate-random-id";
import { FilterListBox } from "../components/ui/FilterListBox";
import { removeDuplicates } from "../lib/utils/remove-duplicates";
import { getSortedPostData } from "../lib/post";
import { Animate } from "../components/layout/Animate";
import { Heading } from "../components/ui/Heading";
import { GoBack } from "../components/layout/GoBack";
import { Layout } from "../components/layout/Layout";
import { NoPost } from "../components/posts/NoPost";
import { Header } from "../components/layout/Header";
import { Posts } from "../components/posts/Posts";
import { Seo } from "../components/layout/Seo";
import { Post } from "../types/post";
import { page } from "../lib/page";
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
        title={`${page.blog.title} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={false}>
              <Heading as="h1" style={{ marginBottom: 0 }}>
                {page.blog.title}
              </Heading>
              {blogs.length ? (
                <FilterListBox
                  items={removeDuplicates(tags)}
                  selectedItem={selected}
                  onChange={setSelected}
                  label="Filter posts by tag"
                />
              ) : null}
            </Header>
            {!blogs.length && <NoPost type="blogs" />}
            <Posts
              posts={filteredBlogsList.length ? filteredBlogsList : blogs}
              type="blog"
            />
            <div className="mt-auto">
              <GoBack />
            </div>
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
