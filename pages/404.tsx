import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

// Next.js
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <E
      description="The page you're looking for doesn't exist."
      title={`Not Found • ${FULL_NAME}`}
      subtitle="Page Not Found"
      code={404}
    />
  );
};

export default NotFound;
