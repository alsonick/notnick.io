import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

// Next.js
import { NextPage } from "next";

const InternalServerError: NextPage = () => {
  return (
    <E
      title={`Internal Server Error • ${FULL_NAME}`}
      heading="500 • Internal Server Error"
      text="Oops! Something went wrong."
      code={500}
    />
  );
};

export default InternalServerError;
