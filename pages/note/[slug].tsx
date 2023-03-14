import { getAllPostSlugs, getPostData } from "../../lib/post";
import { NOTES_DIR } from "../../lib/constants";
import { Post as P } from "../../types/post";
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
  note: P;
}

const Note: NextPage<Props> = ({ note }) => {
  return <Post type="note" post={note} />;
};

export default Note;
