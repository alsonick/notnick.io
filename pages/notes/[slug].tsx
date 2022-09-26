import { getAllPostSlugs, getPostData } from "../../lib/post";
import { NOTES_DIR } from "../../lib/constants";
import { Post } from "../../components/Post";

// Next.js
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const note = await getPostData(params!.slug, NOTES_DIR);
  return {
    props: {
      note,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs(NOTES_DIR);
  return {
    paths,
    fallback: false,
  };
};

interface Props {
  note: {
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

const Note: NextPage<Props> = ({ note }) => {
  return <Post type="notes" post={note} />;
};

export default Note;
