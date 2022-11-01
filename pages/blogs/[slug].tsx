import { getAllPostSlugs, getPostData } from "../../lib/post";
import { BLOGS_DIR } from "../../lib/constants";
import { Post as P } from "../../types/post";
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
  blog: P;
}

const Blog: NextPage<Props> = ({ blog }) => {
  return <Post type="blogs" post={blog} />;
};

export default Blog;
