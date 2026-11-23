import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { ScanText } from "lucide-react";
import { ICON_BUTTON, MiniPlayer, keepFocus } from "../ui/MiniPlayer";
import { FULL_NAME } from "../../lib/constants";
import { PostAudio } from "../../types/post";
import { useFollowAlong } from "./useFollowAlong";

// Remembered between posts and visits. Off until a reader turns it on.
const FOLLOW_KEY = "listen-follow-along";

const readFollowPreference = () => {
  try {
    return localStorage.getItem(FOLLOW_KEY) === "on";
  } catch {
    return false;
  }
};

const saveFollowPreference = (on: boolean) => {
  try {
    localStorage.setItem(FOLLOW_KEY, on ? "on" : "off");
  } catch {}
};

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
  return [
    m && `${m} minute${m === 1 ? "" : "s"}`,
    s && `${s} second${s === 1 ? "" : "s"}`,
  ]
    .filter(Boolean)
    .join(" ");
};

/**
 * The post read aloud. The time shows the full length until playback starts,
 * then counts down what's left. Once it has started, the mini player from the
 * rags page sits at the bottom of the screen, so it can be paused, scrubbed or
 * sped up from anywhere in the post.
 */
export const ListenToArticle = (props: Props) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const remaining = props.audio.duration - currentTime;
  const canFollow = Boolean(props.audio.timings);

  useEffect(() => {
    setIsFollowing(readFollowPreference());
  }, []);

  const follow = useFollowAlong({
    audio,
    src: props.audio.timings,
    // Waits for the first play, so the words aren't mapped for nothing.
    enabled: canFollow && isFollowing && hasStarted,
  });

  const toggleFollowing = () => {
    const next = !isFollowing;
    setIsFollowing(next);
    saveFollowPreference(next);
  };

  // Stop if the reader leaves the post mid-listen.
  useEffect(() => {
    return () => audio?.pause();
  }, [audio]);

  const toggle = () => {
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
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
        ref={setAudio}
        src={props.audio.src}
        preload="none"
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
        }}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          setCurrentTime(0);
        }}
      />
      {/* Portalled out of the post so nothing it sits in can clip or offset
          a fixed element. Only rendered after a click, so document exists. */}
      {hasStarted
        ? createPortal(
            <>
              <MiniPlayer
                audio={audio}
                track={{ title: props.title, artist: FULL_NAME }}
                isPlaying={isPlaying}
                onTogglePlay={toggle}
                extraControls={
                  canFollow ? (
                    <button
                      onClick={toggleFollowing}
                      onMouseDown={keepFocus}
                      aria-pressed={isFollowing}
                      aria-label="Follow along"
                      title={
                        isFollowing
                          ? "Stop following along"
                          : "Follow along: highlight the words as they're read. Click any sentence to listen from there."
                      }
                      className={`${ICON_BUTTON} ${
                        isFollowing
                          ? "!bg-primary/15 !text-primary"
                          : ""
                      } ${follow.isLoading ? "animate-pulse" : ""}`}
                    >
                      <ScanText size={17} aria-hidden="true" />
                    </button>
                  ) : null
                }
              />
              {follow.offScreen ? (
                // Centred by the row rather than a translate, which the enter
                // animation's transform would override.
                <div
                  className="pointer-events-none fixed inset-x-0 z-50 flex justify-center"
                  style={{ bottom: "var(--bottom-bar-inset, 16px)" }}
                >
                  <button
                    onClick={follow.resume}
                    className="player-enter liquid-glass pointer-events-auto flex items-center gap-1.5 rounded-full
                      px-3 py-1.5 text-sm font-semibold text-black outline-none duration-300 hover:scale-105
                      focus-visible:ring-4 ring-primary dark:text-white"
                  >
                    {follow.offScreen === "up" ? (
                      <FiArrowUp aria-hidden="true" />
                    ) : (
                      <FiArrowDown aria-hidden="true" />
                    )}
                    Back to reading
                  </button>
                </div>
              ) : null}
            </>,
            document.body,
          )
        : null}
    </div>
  );
};
