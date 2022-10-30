interface Props {
  sender: string;
}

export const Sender = ({ sender }: Props) => {
  return <h2 className="dark:text-white font-semibold">{sender}</h2>;
};
