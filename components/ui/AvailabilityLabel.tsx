import { OPEN_TO_ROLES } from "../../lib/constants";

interface Props {
  className?: string | undefined;
}

export const AvailabilityLabel = (props: Props) => {
  if (!OPEN_TO_ROLES) return null;

  return (
    <p
      className={`label-shine flex items-center gap-2 w-fit rounded-2xl border border-primary/40
      bg-gradient-to-r from-primary/20 to-primary/5 pl-2.5 pr-3.5 py-1.5 text-xs
      text-gray-700 dark:text-gray-300 shadow-[0_0_22px_-6px_rgb(var(--color-primary)/0.6)]
      ${props.className ?? ""}`}
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
        <span className="relative h-2 w-2 rounded-full bg-primary" />
      </span>
      <span>
        Open to{" "}
        <span className="font-semibold text-green-800 dark:text-primary">
          IT & Software Graduate Scheme Roles
        </span>
      </span>
    </p>
  );
};
