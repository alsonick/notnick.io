import { findSlugAndAssociatedContent } from "../../lib/find-slug-and-associated-content";
import { returnCourseStatus } from "../../lib/return-course-status";
import { generateRandomId } from "../../lib/generate-random-id";
import { FULL_NAME, PROFESSION } from "../../lib/constants";
import { Heading } from "../../components/Heading";
import { Animate } from "../../components/Animate";
import { GoBack } from "../../components/GoBack";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { COURSES } from "../../lib/learn";
import { Table } from "../../components/Table";
import { LinkT } from "../../components/Link";
import { Note } from "../../components/Note";
import { Text } from "../../components/Text";
import { Tag } from "../../components/Tag";
import { Seo } from "../../components/Seo";
import { Key } from "../../components/Key";
import { Th } from "../../components/Th";
import { Td } from "../../components/Td";
import { page } from "../../lib/page";

// Next.js
import { useRouter } from "next/router";
import { NextPage } from "next";

const Slug: NextPage = () => {
  const router = useRouter();

  const course = findSlugAndAssociatedContent(router, COURSES);

  return (
    <>
      <Seo
        title={`${!course?.name ? page.learn.title : course.name} • ${FULL_NAME}`}
        description={`${FULL_NAME} - ${PROFESSION}`}
      />
      <Layout
        longLayoutFormat={true}
        supportLargeScreen={false}
        backButtonLocation={page.learn.link}
        showBackButton={true}
      >
        <Animate>
          <Header singleItem={false}>
            <Heading style={{ marginBottom: 0 }}>{course?.name}</Heading>{" "}
            <Tag
              title={returnCourseStatus(course)}
              type={course?.completed ? "success" : "normal"}
            />
          </Header>
          <Text>{course?.description}</Text>
          {course?.note ? (
            <div className="my-4">
              <Note>{course.note}</Note>
            </div>
          ) : null}
          {course?.usefulLinks ? (
            <div className="flex flex-col mt-4">
              <Key>Useful links:</Key>
              {course.usefulLinks.map((link) => (
                <LinkT key={link} href={link} target="_blank">
                  {link.slice(8).replaceAll("www.", "")}
                </LinkT>
              ))}
            </div>
          ) : null}
          <div className="my-8">
            <Key>Status</Key>
            <Table>
              <thead>
                <tr>
                  {course?.statusKeys.map((k) => (
                    <Th key={k} text={k} />
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td
                    text={course?.name ?? "No 'name' was provided."}
                    center={true}
                  />
                  <Td
                    text={`${
                      course?.completedLessons ??
                      "No 'completed lessons' was provided."
                    }`}
                    center={true}
                  />
                </tr>
              </tbody>
            </Table>
          </div>
          {course?.modules.map((module) => (
            <div key={module.id} className="mb-8 flex flex-col">
              <Key>{module.name}</Key>
              <Table>
                <thead>
                  <tr>
                    {course?.keys.map((key) => (
                      <Th key={key} text={key} />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {module.lessons.map((lesson) => (
                    <tr key={generateRandomId()}>
                      <Td
                        text={
                          lesson.title.length ? lesson.title : "No title."
                        }
                        center={false}
                      />
                      <Td text={lesson.completed ? "✅" : "❌"} center={true} />
                      <Td
                        text={lesson.learnt.length ? lesson.learnt : "—"}
                        center={false}
                      />
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
          <GoBack location={page.learn.link} />
        </Animate>
      </Layout>
    </>
  );
};

export default Slug;
