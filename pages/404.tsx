import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

// Next.js
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <E
      text="Oops! We couldn't find this page."
      title={`Not Found • ${FULL_NAME}`}
      heading="404 • Not Found"
      code={404}
    />
  );
};

export default NotFound;
