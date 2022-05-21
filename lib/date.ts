import dayjs from "dayjs";

export const convertDate = (dateString: string) => {
  const date = dayjs(dateString).format("MMMM D, YYYY");
  return date;
};
