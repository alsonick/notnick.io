import { Switch as S } from "@headlessui/react";

interface Props {
  setEnabled: () => void;
  enabled: boolean;
}

export const Switch = ({ setEnabled, enabled }: Props) => {
  return (
    <S
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-[#f54bff]" : "bg-gray-400 dark:bg-gray-600"
      } relative inline-flex h-6 w-11 items-center rounded-full focus:ring-4 ring-[#f54bff] outline-none duration-300`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </S>
  );
};
