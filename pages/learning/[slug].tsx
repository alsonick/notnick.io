import { OtherPageContainer } from "../../components/OtherPageContainer";
import { Learning } from "../../components/Learning";
import { TOPICS } from "../../lib/learning/topics";
import { Seo } from "../../components/Seo";

// Next.js
import { useRouter } from "next/router";

export const LearningSlugPage = () => {
  const router = useRouter();

  const topic = TOPICS.find(
    (topic) => `/learning/${topic.slug}` === router.asPath
  );

  if (!topic) {
    return;
  }

  return (
    <OtherPageContainer footer={false}>
      <Seo
        title={`${topic.content.language} - Learning`}
        description={topic.content.description}
        cover={topic.content.cover}
      />
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
