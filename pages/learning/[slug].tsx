import { OtherPageContainer } from "../../components/OtherPageContainer";
import { Learning } from "../../components/Learning";
import { TOPICS } from "../../lib/learning/topics";

// Next.js
import { useRouter } from "next/router";

export const LearningSlugPage = () => {
  const router = useRouter();

  console.log(router.asPath);

  const topic = TOPICS.find(
    (topic) => `/learning/${topic.slug}` === router.asPath
  );

  if (!topic) {
    return;
  }

  return (
    <OtherPageContainer footer={false}>
      <Learning
        description={topic.content.description}
        language={topic.content.language}
        learn={topic.content.learn}
        cover={topic.content.cover}
      />
    </OtherPageContainer>
  );
};

export default LearningSlugPage;
