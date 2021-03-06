import { getAllPostSlugs, getPostData } from "../../lib/post";
import { GetStaticProps, NextPage } from "next";
import { BLOGS_DIR } from "../../lib/constants";
import { Post } from "../../components/Post";

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
    tag: string;
    mins: string;
    slug: string;
    date: string;
    contentHtml: string;
  };
}

const Blog: NextPage<Props> = ({ blog }) => {
  return <Post post={blog} />;
};

export default Blog;
