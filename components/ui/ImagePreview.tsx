import { useCallback, useEffect, useRef, useState } from "react";
import { FiX } from "react-icons/fi";
import { createPortal } from "react-dom";

// Matches the leave animations in globals.css.
const CLOSE_DURATION = 200;

interface Props {
  src: string;
  alt: string;
  /** Called once the closing animation has finished. */
  onClose: () => void;
}

// An image opened full size over the page, like an image sent in a Discord chat.
// Closes on Escape, the close button, or a click anywhere off the image.
export const ImagePreview = (props: Props) => {
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);
  const { onClose } = props;

  const close = useCallback(() => {
    // The close button's click also bubbles to the backdrop.
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    setTimeout(onClose, CLOSE_DURATION);
  }, [onClose]);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();

      // Keep Tab cycling between the dialog's own controls.
      if (e.key === "Tab" && dialogRef.current) {
        const controls = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]"),
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return createPortal(
    <div
      ref={dialogRef}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 p-4
      bg-black/80 backdrop-blur-sm ${
        closing ? "image-preview-leave" : "image-preview-enter"
      }`}
      aria-label={props.alt || "Image preview"}
      onClick={close}
      aria-modal="true"
      role="dialog"
    >
      <button
        ref={closeRef}
        className="fixed top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20
        border border-white/30 text-white cursor-pointer outline-none focus-visible:ring-4 ring-primary
        hover:bg-white/30 duration-300"
        onClick={close}
        aria-label="Close"
        type="button"
      >
        <FiX size={16} />
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="image-preview-img max-w-full max-h-[80vh] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        src={props.src}
        alt={props.alt}
      />
      {props.alt && (
        <p
          className="max-w-xl text-center text-sm text-gray-300"
          onClick={(e) => e.stopPropagation()}
        >
          {props.alt}
        </p>
      )}
    </div>,
    document.body,
  );
};
