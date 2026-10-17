import {
  FiSkipForward,
  FiSkipBack,
  FiVolumeX,
  FiVolume1,
  FiVolume2,
  FiPause,
  FiPlay,
} from "react-icons/fi";
import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { speedControlFor } from "../../lib/speed-control";

export interface Track {
  title: string;
  artist: string;
}

interface Props {
  /**
   * The element doing the playing. The page owns it, so a play button on the
   * page can start a track straight from the click.
   */
  audio: HTMLAudioElement | null;
  /** What's loaded into `audio`. The player stays hidden until there is one. */
  track: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

// How far the left and right arrow keys jump, in seconds.
const SEEK_STEP = 5;

// Holding the pitch steady at other speeds means time-stretching the audio,
// which starts to smear and warble past about half or double speed.
const MIN_SPEED = 0.5;
const MAX_SPEED = 2;
const SPEED_PRESETS = [0.5, 0.75, 1, 1.25, 1.5, 2];

// Between the player and the bottom of the viewport, and between the player
// and anything that has to sit above it.
const GAP = 16;

const ICON_BUTTON = `flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-600 dark:text-gray-300
  outline-none duration-300 hover:bg-black/5 hover:text-black dark:hover:bg-white/10 dark:hover:text-white
  focus-visible:ring-4 ring-primary`;

const formatTime = (seconds: number) => {
  const whole = Number.isFinite(seconds) ? Math.floor(seconds) : 0;
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
};

const formatSpeed = (speed: number) => `${Number(speed.toFixed(2))}×`;

// How much of a slider's track is filled in (see .player-range in globals.css).
const fill = (fraction: number) =>
  ({ "--fill": `${fraction * 100}%` }) as React.CSSProperties;

const seekBy = (audio: HTMLAudioElement, seconds: number) => {
  const end = Number.isFinite(audio.duration) ? audio.duration : Infinity;
  audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), end);
};

// Space is left alone wherever it already does something: pressing a button,
// ticking a box, typing. Sliders don't use it, so it still plays and pauses
// after one has been dragged.
const ownsSpace = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    target.closest(
      "button, select, textarea, summary, input:not([type=range]), [role=button], [role=checkbox], [role=switch], [role=menuitem], [role=option], [role=tab]",
    ) !== null);

/**
 * For a button's onMouseDown. Clicking would otherwise leave the button
 * focused, and space would then press it again (say, skip another track)
 * instead of playing or pausing. Keyboard focus works as normal.
 */
export const keepFocus = (e: React.MouseEvent) => e.preventDefault();

// The arrow keys are left alone wherever they already do something: typing,
// the volume and speed sliders, menus. The seek bar is the exception, so they
// jump 5 seconds there too rather than a sliver of one.
const ownsArrowKeys = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement) || target.matches("[data-seek-bar]")) {
    return false;
  }

  return (
    target.isContentEditable ||
    target.closest(
      "input, textarea, select, [role=menu], [role=listbox], [role=slider]",
    ) !== null
  );
};

/**
 * A player pinned to the bottom of the viewport, the counterpart to the nav at
 * the top. Left and right arrow keys rewind and skip ahead 5 seconds anywhere
 * on the page, and media keys work through the Media Session API.
 */
export const MiniPlayer = (props: Props) => {
  const { audio, track } = props;
  const playerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Where the volume slider sits, from 0 to 1. See the effect below for how
  // that becomes the actual volume.
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  // What unmuting goes back to after the slider has been dragged to 0.
  const lastVolume = useRef(1);
  const [canSetVolume, setCanSetVolume] = useState(true);
  const [speed, setSpeed] = useState(1);

  const isVisible = audio !== null && track !== null;
  const silent = muted || volume === 0;

  // iOS ties media volume to the hardware buttons and quietly ignores this,
  // so a slider there would do nothing.
  useEffect(() => {
    const probe = new Audio();
    probe.volume = 0.5;
    setCanSetVolume(probe.volume === 0.5);
  }, []);

  useEffect(() => {
    if (!audio) return;
    // Loudness is heard on a log scale, so mapping the slider straight to gain
    // packs all the audible change into its bottom end. Squaring it spreads
    // the change evenly along the slider.
    audio.volume = volume ** 2;
    audio.muted = muted;
  }, [audio, volume, muted]);

  useEffect(() => {
    if (audio) speedControlFor(audio).setSpeed(speed);
  }, [audio, speed]);

  useEffect(() => {
    if (!audio) return;
    return () => speedControlFor(audio).release();
  }, [audio]);

  // Playing but waiting on data, like right after a track is picked.
  useEffect(() => {
    if (!audio) return;

    const sync = () =>
      setIsLoading(
        !audio.paused &&
          !audio.error &&
          audio.readyState < HTMLMediaElement.HAVE_FUTURE_DATA,
      );
    const events = [
      "loadstart",
      "waiting",
      "canplay",
      "playing",
      "play",
      "pause",
      "error",
    ];

    events.forEach((event) => audio.addEventListener(event, sync));
    return () =>
      events.forEach((event) => audio.removeEventListener(event, sync));
  }, [audio]);

  useEffect(() => {
    if (!audio || !isVisible) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.shiftKey) return;

      if (e.key === " ") {
        // Holding it down shouldn't flick between playing and paused.
        if (e.repeat || ownsSpace(e.target)) return;
        e.preventDefault();
        if (audio.paused) audio.play().catch(() => {});
        else audio.pause();
        return;
      }

      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (ownsArrowKeys(e.target)) return;
      e.preventDefault();
      seekBy(audio, e.key === "ArrowLeft" ? -SEEK_STEP : SEEK_STEP);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [audio, isVisible]);

  // Lets the page (Layout) and the corner tips (Decorations) know how much of
  // the bottom of the viewport the player covers, so they can stay clear.
  useEffect(() => {
    const player = playerRef.current;
    if (!isVisible || !player) return;

    const root = document.documentElement;
    const observer = new ResizeObserver(() =>
      root.style.setProperty(
        "--bottom-bar-inset",
        `${player.offsetHeight + GAP * 2}px`,
      ),
    );

    observer.observe(player);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--bottom-bar-inset");
    };
  }, [isVisible]);

  // Media keys and the system's now playing controls.
  const title = track?.title;
  const artist = track?.artist;

  useEffect(() => {
    if (!title || !("mediaSession" in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({ title, artist });
    return () => {
      navigator.mediaSession.metadata = null;
    };
  }, [title, artist]);

  const { onPrevious, onNext } = props;

  useEffect(() => {
    if (!audio || !("mediaSession" in navigator)) return;

    const handlers: [MediaSessionAction, MediaSessionActionHandler][] = [
      ["previoustrack", onPrevious],
      ["nexttrack", onNext],
      ["seekbackward", (d) => seekBy(audio, -(d.seekOffset ?? SEEK_STEP))],
      ["seekforward", (d) => seekBy(audio, d.seekOffset ?? SEEK_STEP)],
    ];
    // Browsers throw for actions they don't support.
    const set = (
      action: MediaSessionAction,
      handler: MediaSessionActionHandler | null,
    ) => {
      try {
        navigator.mediaSession.setActionHandler(action, handler);
      } catch {}
    };

    handlers.forEach(([action, handler]) => set(action, handler));
    return () => handlers.forEach(([action]) => set(action, null));
  }, [audio, onPrevious, onNext]);

  if (!isVisible) return null;

  const changeVolume = (value: number) => {
    setVolume(value);
    setMuted(false);
    if (value > 0) lastVolume.current = value;
  };

  const toggleMute = () => {
    if (!silent) return setMuted(true);
    setMuted(false);
    if (volume === 0) setVolume(lastVolume.current);
  };

  return (
    <div
      ref={playerRef}
      role="region"
      aria-label="Audio player"
      className="player-enter liquid-glass fixed inset-x-0 bottom-4 z-50 mx-auto w-[95%] rounded-lg px-4 pb-2 pt-3
      sm:w-[40rem]"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="min-w-0">
          <p className="truncate font-semibold text-black dark:text-white">
            {track.title}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {track.artist}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrevious}
            onMouseDown={keepFocus}
            aria-label="Previous"
            className={ICON_BUTTON}
          >
            <FiSkipBack fill="currentColor" />
          </button>
          <button
            onClick={props.onTogglePlay}
            onMouseDown={keepFocus}
            aria-label={props.isPlaying ? "Pause" : "Play"}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg
            text-white outline-none duration-300 hover:scale-105 focus-visible:ring-4 ring-primary ring-offset-2
            dark:text-black dark:ring-offset-black"
          >
            {props.isPlaying ? (
              <FiPause fill="currentColor" />
            ) : (
              // The triangle sits left of centre in its box, so nudge it over.
              <FiPlay fill="currentColor" className="ml-0.5" />
            )}
            {isLoading ? (
              <span className="absolute -inset-1 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
            ) : null}
          </button>
          <button
            onClick={onNext}
            onMouseDown={keepFocus}
            aria-label="Next"
            className={ICON_BUTTON}
          >
            <FiSkipForward fill="currentColor" />
          </button>
        </div>

        <div className="flex items-center justify-end gap-1">
          <SpeedControl
            speed={speed}
            onChange={setSpeed}
            onButtonClick={() => speedControlFor(audio).prepare()}
          />
          {canSetVolume ? (
            <>
              <button
                onClick={toggleMute}
                onMouseDown={keepFocus}
                aria-label={silent ? "Unmute" : "Mute"}
                className={`${ICON_BUTTON} text-lg`}
              >
                {silent ? (
                  <FiVolumeX />
                ) : volume < 0.5 ? (
                  <FiVolume1 />
                ) : (
                  <FiVolume2 />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={silent ? 0 : volume}
                onChange={(e) => changeVolume(Number(e.target.value))}
                aria-label="Volume"
                aria-valuetext={`${Math.round((silent ? 0 : volume) * 100)}%`}
                className="player-range hidden w-24 sm:block"
                style={fill(silent ? 0 : volume)}
              />
            </>
          ) : null}
        </div>
      </div>

      <SeekBar audio={audio} />
    </div>
  );
};

/**
 * Elapsed time, a bar to scrub with, and the length of the track. It keeps its
 * own state so following the playhead doesn't re-render the rest of the player.
 */
const SeekBar = ({ audio }: { audio: HTMLAudioElement }) => {
  const [time, setTime] = useState(audio.currentTime);
  const [duration, setDuration] = useState(0);

  // timeupdate only fires about four times a second, which makes the bar tick
  // along rather than glide, so follow the playhead every frame while playing.
  useEffect(() => {
    let frame = 0;

    const sync = () => {
      setTime(audio.currentTime);
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const follow = () => {
      sync();
      frame = requestAnimationFrame(follow);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      follow();
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      sync();
    };
    const events = ["timeupdate", "durationchange", "seeking", "emptied"];

    audio.addEventListener("play", start);
    audio.addEventListener("pause", stop);
    events.forEach((event) => audio.addEventListener(event, sync));
    if (audio.paused) sync();
    else start();

    return () => {
      cancelAnimationFrame(frame);
      audio.removeEventListener("play", start);
      audio.removeEventListener("pause", stop);
      events.forEach((event) => audio.removeEventListener(event, sync));
    };
  }, [audio]);

  return (
    <div className="mt-1 flex items-center gap-3 text-xs tabular-nums text-gray-500 dark:text-gray-400">
      <span className="w-10 text-right">{formatTime(time)}</span>
      <input
        type="range"
        data-seek-bar
        min={0}
        max={duration}
        // "any", not whole seconds, or the browser snaps the thumb to each
        // second and the bar jumps instead of gliding.
        step="any"
        value={Math.min(time, duration)}
        onChange={(e) => {
          audio.currentTime = Number(e.target.value);
          setTime(audio.currentTime);
        }}
        disabled={duration === 0}
        aria-label="Seek"
        aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
        className="player-range flex-1"
        style={fill(duration ? time / duration : 0)}
      />
      <span className="w-10">{formatTime(duration)}</span>
    </div>
  );
};

const SpeedControl = (props: {
  speed: number;
  onChange: (speed: number) => void;
  /**
   * Runs on each click of the button that opens the menu, so the pitch
   * correction can start loading inside a click, which browsers require.
   */
  onButtonClick: () => void;
}) => {
  const { speed } = props;

  return (
    <Popover className="relative">
      <Popover.Button
        onClick={props.onButtonClick}
        onMouseDown={keepFocus}
        aria-label={`Playback speed ${formatSpeed(speed)}`}
        className="h-8 min-w-[3.25rem] rounded-full px-2 text-sm font-semibold tabular-nums text-gray-600 outline-none
        duration-300 hover:bg-black/5 hover:text-black focus-visible:ring-4 ring-primary ui-open:bg-black/5
        ui-open:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white dark:ui-open:bg-white/10
        dark:ui-open:text-white"
      >
        {formatSpeed(speed)}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 translate-y-1 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition duration-150 ease-out"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-1 scale-95"
      >
        <Popover.Panel
          className="absolute bottom-full right-0 mb-4 w-60 origin-bottom-right rounded-lg border border-teal-100 bg-white
          p-3 shadow-md dark:border-teal-900 dark:bg-[#10161a]"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-black dark:text-white">
              Playback speed
            </span>
            <span className="tabular-nums text-gray-500 dark:text-gray-400">
              {formatSpeed(speed)}
            </span>
          </div>
          <input
            type="range"
            min={MIN_SPEED}
            max={MAX_SPEED}
            step={0.05}
            value={speed}
            onChange={(e) => props.onChange(Number(e.target.value))}
            aria-label="Playback speed"
            aria-valuetext={formatSpeed(speed)}
            className="player-range mt-2 w-full"
            style={fill((speed - MIN_SPEED) / (MAX_SPEED - MIN_SPEED))}
          />
          <div className="mt-2 grid grid-cols-3 gap-1">
            {SPEED_PRESETS.map((preset) => {
              const isActive = Math.abs(speed - preset) < 0.001;

              return (
                <button
                  key={preset}
                  onClick={() => props.onChange(preset)}
                  onMouseDown={keepFocus}
                  aria-pressed={isActive}
                  className={`rounded-md py-1 text-sm font-semibold tabular-nums outline-none duration-300
                  focus-visible:ring-4 ring-primary ${
                    isActive
                      ? "bg-primary text-white dark:text-black"
                      : "bg-black/5 text-gray-600 hover:text-black dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {formatSpeed(preset)}
                </button>
              );
            })}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
