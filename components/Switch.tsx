import { Switch as S } from "@headlessui/react";
import { useState } from "react";

interface Props {
  enabled: boolean;
  setEnabled: () => void;
}

export const Switch = ({ enabled, setEnabled }: Props) => {
  return (
    <S
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-[#f54bff]" : "bg-gray-400 dark:bg-gray-600"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
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
