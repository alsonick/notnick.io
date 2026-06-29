import { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";

// Next.js
import Image from "next/image";

interface Props {
  className?: string;
  size: number;
  src?: string;
  alt: string;
}

// Renders a user's avatar, falling back to a generic icon when the image is
// missing or fails to load (e.g. a stale Discord avatar hash returning 404).
export const UserAvatar = (props: Props) => {
  const [errored, setErrored] = useState(false);

  // Reset the error state if the source changes (e.g. a different user).
  useEffect(() => setErrored(false), [props.src]);

  if (!props.src || errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-primary ${
          props.className ?? ""
        }`}
        style={{ width: props.size, height: props.size }}
        aria-label={props.alt}
        role="img"
      >
        <FiUser size={props.size * 0.55} />
      </div>
    );
  }

  return (
    <Image
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.size}
      height={props.size}
      onError={() => setErrored(true)}
    />
  );
};
