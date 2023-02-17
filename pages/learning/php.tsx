import { Learning } from "../../components/Learning";
import { TOPICS } from "../../lib/learning/php";

const PHP = () => {
  return (
    <Learning
      language="PHP"
      description="This is where I'm keeping tracking of my learning progress and to document all the topics I learn. I'm going to be using W3Schools to learn PHP."
      topics={TOPICS}
    />
  );
};

export default PHP;
