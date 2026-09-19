import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiFilter } from "react-icons/fi";

export interface ToastMessage {
  /** Changes with every new toast, so the same text twice still re-shows it. */
  id: number;
  text: string;
}

interface Props {
  toast: ToastMessage | null;
  /** How long the toast stays up, in ms. */
  duration?: number;
}

interface Item extends ToastMessage {
  /** False once it's been replaced or has timed out, while it animates away. */
  shown: boolean;
}

/**
 * A short notice that slides in at the top right of the page and back out
 * again. A new toast slides in over the old one as that one leaves, rather
 * than just swapping the text. It never takes focus, and is announced to
 * screen readers through a live region.
 */
export const Toast = ({ toast, duration = 2500 }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const timers = useRef(new Set<ReturnType<typeof setTimeout>>());

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (!toast) return;

    // Whatever is still up heads out as the new toast comes in.
    setItems((current) => [
      ...current.map((item) => ({ ...item, shown: false })),
      { ...toast, shown: true },
    ]);

    const timer = setTimeout(() => {
      timers.current.delete(timer);
      setItems((current) =>
        current.map((item) =>
          item.id === toast.id ? { ...item, shown: false } : item,
        ),
      );
    }, duration);
    timers.current.add(timer);
  }, [toast, duration]);

  // Only drop a toast once its exit animation has finished.
  const remove = (id: number) =>
    setItems((current) => current.filter((item) => item.id !== id));

  if (!mounted) return null;

  const latest = [...items].reverse().find((item) => item.shown);

  return createPortal(
    // From xl up there's room beside the centred nav, so the toast sits in the
    // corner, vertically centred on the nav (top-8, h-14). Narrower than that
    // the nav reaches the corner, so the toast tucks under its right end
    // instead (w-[95%] on phones, 40rem from sm) rather than covering it.
    <div
      className="pointer-events-none fixed z-40 flex top-[6.5rem] right-[2.5%] sm:right-[calc((100%-40rem)/2)]
      xl:right-8 xl:top-8 xl:h-14 xl:items-center"
    >
      {/* The live region stays mounted so the announcement is reliable; the
          text is cleared once the toast has gone so it isn't read later. */}
      <p className="sr-only" role="status">
        {latest?.text ?? ""}
      </p>
      {/* Every toast shares one grid cell, so an incoming toast lands exactly
          where the outgoing one is leaving from. */}
      <div aria-hidden="true" className="grid justify-items-end">
        {items.map((item) => (
          <div
            key={item.id}
            onAnimationEnd={() => {
              if (!item.shown) remove(item.id);
            }}
            className={`liquid-glass [grid-area:1/1] flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2
            text-sm font-semibold text-black dark:text-white ${
              item.shown ? "toast-enter" : "toast-exit"
            }`}
          >
            <FiFilter className="shrink-0 text-primary" />
            {item.text}
          </div>
        ))}
      </div>
    </div>,
    document.body,
  );
};
