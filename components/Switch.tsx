import { Switch as S } from "@headlessui/react";

interface Props {
  setEnabled: () => void;
  enabled: boolean;
}

export const Switch = (props: Props) => {
  return (
    <S
      checked={props.enabled}
      onChange={props.setEnabled}
      className={`${
        props.enabled ? `bg-primary` : "bg-gray-400 dark:bg-gray-600"
      } relative inline-flex h-6 w-11 items-center rounded-full focus:ring-4 ring-primary outline-none duration-300
      focus:ring-offset-2 dark:ring-offset-black`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          props.enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </S>
  );
};
