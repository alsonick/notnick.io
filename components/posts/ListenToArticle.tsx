import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { PostAudio } from "../../types/post";

interface Props {
  audio: PostAudio;
  title: string;
}

const formatTime = (seconds: number) => {
  const whole = Math.max(0, Math.round(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
};

const spokenTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return [m && `${m} minute${m === 1 ? "" : "s"}`, s && `${s} second${s === 1 ? "" : "s"}`]
    .filter(Boolean)
    .join(" ");
};

/**
 * The post read aloud. The time shows the full length until playback starts,
 * then counts down what's left.
 */
export const ListenToArticle = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const remaining = props.audio.duration - currentTime;

  // Pause if the reader navigates to another post mid-listen.
  useEffect(() => {
    const audio = audioRef.current;
    return () => audio?.pause();
  }, [props.audio.src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: props.title,
          artist: "Listen to article",
        });
      }
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="flex items-center mb-4">
      <button
        type="button"
        onClick={toggle}
        aria-label={
          isPlaying
            ? "Pause article"
            : `Listen to article, ${spokenTime(props.audio.duration)}`
        }
        className="group flex items-center gap-3 rounded-full pr-2 outline-none duration-300
          focus-visible:ring-4 ring-primary focus-visible:ring-offset-2 dark:ring-offset-black"
      >
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-black
            duration-300 group-hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:group-hover:bg-white/20"
        >
          {isPlaying ? (
            <FaPause className="text-xs" />
          ) : (
            <FaPlay className="text-xs ml-0.5" />
          )}
        </span>
        <span className="text-base text-gray-600 dark:text-gray-300">
          Listen to article
        </span>
        <span
          aria-hidden="true"
          className="h-6 border-l border-gray-200 dark:border-gray-700"
        />
        <span className="text-base tabular-nums text-gray-600 dark:text-gray-300">
          {formatTime(remaining)}
        </span>
      </button>
      <audio
        ref={audioRef}
        src={props.audio.src}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          setCurrentTime(0);
        }}
      />
    </div>
  );
};
