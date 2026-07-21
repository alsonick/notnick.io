import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { Course } from "../../components/Course";
import { GoBack } from "../../components/GoBack";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { COURSES } from "../../lib/learn";
import { Seo } from "../../components/Seo";

// Next.js
import { NextPage } from "next";

const LearnPage: NextPage = () => {
  return (
    <>
      <Seo
        title={`Learn • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout>
        <Animate>
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <Header singleItem={false}>
              <Heading style={{ marginBottom: 0 }}>Learn</Heading>
            </Header>
            <div className="flex flex-col mb-4">
              {COURSES.filter((course) => course.active).map((course) => (
                <Course key={course.id} course={course} />
              ))}
            </div>
            <div className="mt-auto">
              <GoBack />
            </div>
          </div>
        </Animate>
      </Layout>
    </>
  );
};

export default LearnPage;
