import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { Border } from "./Border";

// Next.js
import Image from "next/image";

interface Props {
  decoration?: "halloween" | "christmas";
  clickable?: boolean;
  border?: boolean;
  height: number;
  width: number;
}

const getAvatarSrc = (decoration?: "halloween" | "christmas") => {
  if (decoration === "halloween")
    return "/branding/fun/discord/HalloweenChibi.jpg";
  if (decoration === "christmas")
    return "/branding/fun/discord/ChristmasChibi.jpg";

  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  if (month === 10 && day === 31)
    return "/branding/fun/discord/HalloweenChibi.jpg";
  if (month === 12) return "/branding/fun/discord/ChristmasChibi.jpg";

  return "/Chibi.jpg";
};

const STYLES = `
  @keyframes fade-in  { from { opacity: 0 } to { opacity: 1 } }
  @keyframes fade-out { from { opacity: 1 } to { opacity: 0 } }
  @keyframes scale-in  { from { opacity: 0; transform: scale(0.75) } to { opacity: 1; transform: scale(1) } }
  @keyframes scale-out { from { opacity: 1; transform: scale(1) } to { opacity: 0; transform: scale(0.75) } }
  .lb-enter { animation: fade-in 250ms ease forwards }
  .lb-leave { animation: fade-out 250ms ease forwards }
  .lb-img-enter { animation: scale-in 280ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards }
  .lb-img-leave { animation: scale-out 220ms ease forwards }
`;

interface LightboxProps {
  onClose: () => void;
  closing: boolean;
  src: string;
}

const Lightbox = (props: LightboxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const content = (
    <div
      ref={ref}
      className={props.closing ? "lb-leave" : "lb-enter"}
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        display: "flex",
        outline: "none",
        zIndex: 9999,
        inset: 0,
      }}
      aria-label="My Chibi Avatar"
      onClick={props.onClose}
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      <style>{STYLES}</style>
      <button
        className="fixed top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 border border-white/30 text-white cursor-pointer outline-none focus:outline-none active:bg-white/30 transition-none"
        onClick={props.onClose}
        aria-label="Close"
      >
        <FiX size={16} />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={props.closing ? "lb-img-leave" : "lb-img-enter"}
      >
        <Image
          className="rounded-full aspect-square object-cover"
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          title="My Chibi Avatar"
          alt="My Chibi Avatar"
          src={props.src}
          quality={100}
          height={500}
          width={500}
        />
      </div>
    </div>
  ) as unknown as import("react").ReactNode;

  return createPortal(content, document.body);
};

export const Avatar = (props: Props) => {
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const src = getAvatarSrc(props.decoration);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setOpen(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") e.preventDefault();
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const img = (
    <Image
      className="rounded-full z-10 aspect-square object-cover sm:hover:scale-105 sm:transition-transform sm:duration-300"
      title="My Chibi Avatar"
      alt="My Chibi Avatar"
      height={props.height}
      width={props.width}
      quality={100}
      src={src}
    />
  );

  const trigger = props.clickable ? (
    <button
      className="rounded-full focus-visible:outline-none cursor-default sm:cursor-pointer overflow-hidden"
      onClick={() => {
        if (window.matchMedia("(min-width: 640px)").matches) setOpen(true);
      }}
      aria-label="View avatar full size"
      aria-haspopup="dialog"
      type="button"
      style={{
        background: "none",
        display: "block",
        border: "none",
        padding: 0,
      }}
    >
      {img}
    </button>
  ) : (
    img
  );

  return (
    <>
      {props.border ? <Border>{trigger}</Border> : trigger}
      {props.clickable && mounted && open && (
        <Lightbox src={src} closing={closing} onClose={close} />
      )}
    </>
  );
};
