import { Course } from "../types/learn";

export const returnCourseStatus = (course: Course | undefined): string => {
  let status: string;

  if (course?.completed) {
    status = "Completed";
  } else if (!course?.active) {
    status = "Not Active";
  } else if (course?.active) {
    status = "In Progress";
  } else {
    status = "";
  }

  return status;
};
