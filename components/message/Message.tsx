import { MessageDate } from "./MessageDate";
import { Sender } from "./Sender";
import { Avatar } from "./Avatar";
import { Text } from "./Text";

interface Props {
  deleteMessage: (id: string, messageId: string) => void;
  messageUserId: string;
  userId: string;
  sender: string;
  avatar: string;
  text: string;
  id: string;
  date: Date;
}

export const Message = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-between h-16">
      <div className="flex items-center">
        <Avatar src={props.avatar} width={35} height={35} />
        <div className="flex flex-col justify-center">
          <div className="flex text-sm items-center">
            <Sender sender={props.sender} />
            <span className="text-gray-300 font-bold mx-2 dark:text-gray-600">
              /
            </span>
            <MessageDate date={props.date} />
          </div>
          <Text text={props.text} />
        </div>
      </div>
      {props.userId === props.messageUserId ? (
        <p
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => props.deleteMessage(props.userId, props.id)}
        >
          Delete
        </p>
      ) : null}
    </div>
  );
};
