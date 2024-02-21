import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

// Next.js
import { NextPage } from "next";

const InternalServerError: NextPage = () => {
  return (
    <E
      heading="500 - Internal Server Error"
      title={`Internal Server Error - ${FULL_NAME}`}
      text="Oops! Something went wrong."
    />
  );
};

export default InternalServerError;
