// Next.js
import Image from "next/image";

interface Props {
  id: string;
  userId: string;
  messageUserId: string;
  text: string;
  sender: string;
  avatar: string;
  date: Date;
  deleteMessage: (id: string, messageId: string) => void;
}

export const Message = ({
  id,
  text,
  userId,
  messageUserId,
  sender,
  avatar,
  date,
  deleteMessage,
}: Props) => {
  const d = new Date(date);

  const day = {
    date: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
    hour: d.getHours(),
    mins: d.getMinutes(),
  };

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const formatDate = (date: Date): string => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? 0 + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  return (
    <div className="flex w-full items-center justify-between h-16">
      <div className="flex items-center">
        <div className="mr-3 border flex items-center justify-center rounded-full border-teal-100 dark:border-teal-900">
          <Image
            className="rounded-full w-full"
            src={avatar}
            width={35}
            height={35}
            alt="Avatar"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex text-sm items-center">
            <h2 className="dark:text-white font-semibold">{sender}</h2>
            <span className="text-gray-300 font-bold mx-2 dark:text-gray-600">
              /
            </span>
            <p className="text-gray-500 dark:text-gray-400">
              {day.date}th{" "}
              {months[day.month].charAt(0).toUpperCase() +
                months[day.month].slice(1)}
              {" at "}
              {formatDate(d).toUpperCase()}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{text}</p>
        </div>
      </div>
      {userId === messageUserId ? (
        <p
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => deleteMessage(userId, id)}
        >
          Delete
        </p>
      ) : null}
    </div>
  );
};
