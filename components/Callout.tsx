import { FiInfo, FiLock, FiZap } from "react-icons/fi";

interface Props {
  variant?: "info" | "happy" | "privacy";
  children: React.ReactNode;
  title: string;
}

const VARIANT_STYLES = {
  info: `border-teal-100 dark:border-teal-900 border-l-4 border-l-primary
    dark:border-l-primary dark:bg-[#10161a]/50`,
  happy: `border-primary/40 bg-gradient-to-br from-green-50 to-teal-50
    dark:from-primary/10 dark:to-teal-900/20`,
  privacy: `border-dashed border-teal-100 dark:border-teal-900
    dark:bg-[#10161a]/50`,
};

const VARIANT_ICONS = {
  info: FiInfo,
  happy: FiZap,
  privacy: FiLock,
};

export const Callout = (props: Props) => {
  const variant = props.variant ?? "info";
  const Icon = VARIANT_ICONS[variant];

  return (
    <div
      className={`flex flex-col w-full rounded-lg p-4 mt-5 duration-300 border z-10 ${VARIANT_STYLES[variant]}`}
    >
      <div className="flex items-center mb-2">
        <Icon className="text-primary mr-2" />
        <h2
          className={`font-bold text-sm ${
            variant === "happy"
              ? "text-primary"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {props.title.toUpperCase()}
        </h2>
      </div>
      <div className="space-y-2">{props.children}</div>
    </div>
  );
};
