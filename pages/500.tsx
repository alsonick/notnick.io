import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

const InternalServerError = () => {
  return (
    <E
      heading="500 - Internal Server Error"
      title={`Internal Server Error - ${FULL_NAME}`}
      text="Oops! Something went wrong."
    />
  );
};

export default InternalServerError;
