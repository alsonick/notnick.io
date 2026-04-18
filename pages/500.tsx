import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

// Next.js
import { NextPage } from "next";

const InternalServerError: NextPage = () => {
  return (
    <E
      description="An unexpected error occurred on our end."
      title={`Internal Server Error • ${FULL_NAME}`}
      subtitle="Something Went Wrong"
      code={500}
    />
  );
};

export default InternalServerError;
