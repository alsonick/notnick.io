import { getAllPostSlugs, getPostData } from "../../lib/post";
import { BLOGS_DIR } from "../../lib/constants";
import { Post } from "../../components/Post";

// Next.js
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await getPostData(params!.slug, BLOGS_DIR);
  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs(BLOGS_DIR);
  return {
    paths,
    fallback: false,
  };
};

interface Props {
  blog: {
    title: string;
    description: string;
    last_updated_date: string;
    tag: string;
    mins: string;
    slug: string;
    date: string;
    contentHtml: string;
  };
}

const Blog: NextPage<Props> = ({ blog }) => {
  return <Post type="blogs" post={blog} />;
};

export default Blog;
