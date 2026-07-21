import { returnCourseStatus } from "../lib/return-course-status";
import { Course as C } from "../types/learn";
import { page } from "../lib/page";
import { Text } from "./Text";
import { Tag } from "./Tag";

// Next.js
import Link from "next/link";

interface Props {
  course: C;
}

export const Course = (props: Props) => {
  return (
    <div
      className="border-b border-teal-100 dark:border-teal-900 mb-4 pb-4"
      key={props.course.id}
    >
      <Tag
        title={returnCourseStatus(props.course)}
        type={props.course?.completed ? "success" : "normal"}
      />
      <Link
        className={`flex flex-col w-fit mt-2 focus:ring-offset-2 dark:ring-offset-black focus:ring-4
        rounded ring-primary outline-none duration-300`}
        href={`${page.learn.name}/${props.course.slug}`}
      >
        <h1
          className="text-3xl font-bold cursor-pointer underline
       	  dark:text-white hover:no-underline"
        >
          {props.course.name}
        </h1>
        <Text style={{ margin: "0.5rem 0px 0.25rem" }}>
          {props.course.description}
        </Text>
      </Link>
    </div>
  );
};
