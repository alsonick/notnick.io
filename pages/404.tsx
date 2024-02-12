import { FULL_NAME } from "../lib/constants";
import { E } from "../components/E";

const NotFound = () => {
  return (
    <E
      heading="404 - Not Found"
      title={`Not Found - ${FULL_NAME}`}
      text="Oops! We couldn't find this page."
    />
  );
};

export default NotFound;
