import type { StretchNode } from "signalsmith-stretch";

/*
Changing an <audio> element's speed without changing its pitch.

Browsers can do this themselves (preservesPitch), but Chrome's version splices
the audio in short pieces, which makes piano sound fluttery and uneven. So away
from 1x, Signalsmith Stretch plays the track instead, from a decoded copy,
while the element carries on silently as the clock: its time, seeking, pausing
and ending still drive the player, and the stretcher follows it. Because the
stretcher has the whole track, a seek lands within a block and a new speed
takes over smoothly, with the pitch never touched.

Measured on a sustained chord at 0.5–2x, that leaves 5–15 dB less splicing
noise than Chrome's own.

At 1x the element is heard as it is. Until someone changes the speed nothing
is routed anywhere. The track is decoded as soon as the speed menu opens, and
while one isn't ready yet (a fraction of a second; under one for the longest
rag) the browser's own stretch fills in.
*/

// Signalsmith's analysis block. Longer blocks are cleaner on sustained notes,
// shorter ones keep attacks crisp; 160ms balanced the two across 0.5–2x.
const BLOCK_MS = 160;

// How long handing over between the element and the stretcher takes: short
// enough not to be heard as a fade, long enough not to click.
const CROSSFADE = 0.04;

// How quickly the old spot fades out on a seek, and the new one in.
const CUT = 0.012;

// The stretcher follows the element. If they drift further apart than this
// (say the element stalls to load), the stretcher is put back in step.
const MAX_DRIFT = 0.06;

// How late the element's sound reaches the audio graph, in seconds
// (measured in Chrome).
const ELEMENT_LATENCY = 0.024;

// How long the element's sound is held back before it's heard. A seek makes
// the element jump the moment it's asked to, and the `seeking` event only
// follows a few milliseconds later; with this, the jump reaches the speakers
// after the sound has faded out, so seeking doesn't click.
const LOOKAHEAD = 0.03;

// How late, in all, the element is heard.
const ELEMENT_DELAY = ELEMENT_LATENCY + LOOKAHEAD;

// How far the stretcher is held back, in seconds of real time, so it lines
// up with the element and handing over between them doesn't skip: its sound
// comes out about 48ms sooner than its latency figure says (measured in
// Chrome, at the block above), plus the element's delay.
const ALIGN = 0.048 + ELEMENT_DELAY;

export interface SpeedControl {
  setSpeed: (speed: number) => void;
  /**
   * Gets the stretcher and the current track ready before they're needed.
   * Call it from a click, since browsers only let audio start from one.
   */
  prepare: () => void;
  /** Frees the audio graph once the element has left the page. */
  release: () => void;
}

interface Graph {
  /** The element as it is, heard at 1x and while a track is decoding. */
  direct: GainNode;
  /** Follows the element's own volume, which only reaches `direct`. */
  volume: GainNode;
  /** Brings the stretcher in and out. */
  stretched: GainNode;
}

const controls = new WeakMap<HTMLMediaElement, SpeedControl>();

/**
 * One per element, for as long as it lives: once an element is routed into an
 * audio graph it can't be routed into another, so a second control (say, after
 * a hot reload) would be stuck with no way to reach it.
 */
export const speedControlFor = (audio: HTMLMediaElement): SpeedControl => {
  let control = controls.get(audio);
  if (!control) {
    control = createSpeedControl(audio);
    controls.set(audio, control);
  }
  return control;
};

/**
 * Shapes a fade as a quarter sine. The element and the stretcher don't line
 * up in phase, so a straight crossfade between them dips in the middle; with
 * these, one's loudness rises as the other's falls.
 */
const fadeCurve = (from: number, to: number) =>
  Float32Array.from({ length: 32 }, (_, i) => {
    const x = (i / 31) * (Math.PI / 2);
    return to > from
      ? from + (to - from) * Math.sin(x)
      : to + (from - to) * Math.cos(x);
  });

const createSpeedControl = (audio: HTMLMediaElement): SpeedControl => {
  let speed = 1;
  let context: AudioContext | null = null;
  let loading: Promise<StretchNode | null> | null = null;
  let stretch: StretchNode | null = null;
  // How long a change to the stretcher takes to be heard.
  let lead = 0;
  // Set once the element is routed through the audio graph, for good.
  let graph: Graph | null = null;
  let stretching = false;
  // Which track the stretcher holds, and which it's being given.
  let decoded: string | null = null;
  let decoding: string | null = null;
  // Where the stretcher was last told to play from, so it can carry on from
  // there and be checked against the element: a track position (ALIGN behind
  // the element's), at a context time, moving at a rate.
  let anchor = { at: 0, position: 0, rate: 1 };
  // Set by a seek or a new speed while paused: what's held over from before
  // the pause is then from the wrong spot, and shouldn't be heard on playing.
  let jumpedWhilePaused = false;
  // Between a seek starting and the element landing in the new spot.
  let seeking = false;
  const timers = new Set<ReturnType<typeof setTimeout>>();
  let bridgeTimer: ReturnType<typeof setTimeout> | undefined;

  const later = (run: () => void, seconds: number) => {
    const timer = setTimeout(() => {
      timers.delete(timer);
      run();
    }, seconds * 1000);
    timers.add(timer);
  };
  const cancelLater = () => {
    timers.forEach(clearTimeout);
    timers.clear();
  };

  const setRate = (rate: number) => {
    // Loading the next track resets playbackRate to defaultPlaybackRate, so
    // set both to carry the speed over.
    audio.defaultPlaybackRate = rate;
    audio.playbackRate = rate;
  };

  // The last fade on each gain, to know where it'll be at a given time.
  const fades = new WeakMap<
    AudioParam,
    { from: number; to: number; start: number; duration: number }
  >();

  const valueAt = (param: AudioParam, time: number) => {
    const last = fades.get(param);
    if (!last) return param.value;
    if (time <= last.start) return last.from;
    if (time >= last.start + last.duration) return last.to;
    const curve = fadeCurve(last.from, last.to);
    const index = ((time - last.start) / last.duration) * (curve.length - 1);
    return curve[Math.round(index)];
  };

  /**
   * Fades a gain to `to`, starting at context time `at`. Anything already
   * scheduled before then (say, a fade-out still under way) is left to
   * finish, and the new fade starts from wherever that leaves it.
   */
  const fade = (
    param: AudioParam,
    to: number,
    at: number,
    duration = CROSSFADE,
  ) => {
    if (!context) return;
    const now = context.currentTime;
    const start = Math.max(at, now);
    const from = valueAt(param, start);
    try {
      if (param.cancelAndHoldAtTime) param.cancelAndHoldAtTime(start);
      else {
        param.cancelScheduledValues(now);
        param.setValueAtTime(valueAt(param, now), now);
      }
      param.setValueCurveAtTime(fadeCurve(from, to), start, duration);
      fades.set(param, { from, to, start, duration });
    } catch {
      param.cancelScheduledValues(0);
      param.value = to;
      fades.delete(param);
    }
  };

  /** Tells the stretcher to play from `position` at context time `at`. */
  const playFrom = (position: number, at: number, rate = speed) => {
    anchor = { at, position, rate };
    if (audio.paused) jumpedWhilePaused = true;
    stretch?.schedule({
      active: !audio.paused,
      input: position,
      rate,
      outputTime: at,
    });
  };

  /** Points the stretcher at wherever the element is now (after a seek). */
  const sync = () => {
    if (!context) return;
    playFrom(audio.currentTime - ALIGN * speed, context.currentTime);
  };

  /**
   * After a jump the stretcher takes a moment to catch up, so the element,
   * which lands in the new spot sooner, is heard meanwhile, and then it hands
   * back. Holding an arrow key keeps it on the element until it's let go.
   */
  const holdOnElement = () => {
    clearTimeout(bridgeTimer);
    bridgeTimer = setTimeout(
      () => {
        if (!stretching || !context || !graph) return;
        fade(graph.direct.gain, 0, context.currentTime);
        fade(graph.stretched.gain, 1, context.currentTime);
      },
      (lead + ALIGN + 0.03) * 1000,
    );
  };

  /**
   * A new speed: the stretcher keeps its place and just changes pace. To stay
   * in step, it and the silent element have to change at the same point in
   * the track, and the stretcher is ALIGN behind: so the element changes now,
   * and the stretcher's change, which takes `lead` to land, is sent once the
   * rest of ALIGN has passed.
   */
  const retime = () => {
    const rate = speed;
    setRate(rate);
    later(
      () => {
        if (!context) return;
        const at = context.currentTime + lead;
        playFrom(anchor.position + (at - anchor.at) * anchor.rate, at, rate);
      },
      Math.max(0, ALIGN - lead),
    );
  };

  const switchToStretcher = () => {
    if (!context || !graph || stretching) return;
    stretching = true;
    cancelLater();

    // The element stays as it is, heard, until the stretcher's first block
    // is out, and fades out as the stretcher fades in. It changes speed as
    // the fade starts, in step with the stretcher, but that's only heard
    // ELEMENT_DELAY later, after the fade (which is shorter) has finished, so
    // the browser's own stretch never starts where it can be heard.
    const at = context.currentTime + lead;
    playFrom(audio.currentTime + lead * audio.playbackRate - ALIGN * speed, at);
    fade(graph.direct.gain, 0, at);
    fade(graph.stretched.gain, 1, at);
    if (audio.playbackRate !== speed) {
      const rate = speed;
      later(() => setRate(rate), lead);
    }
  };

  const switchToElement = () => {
    if (!context || !graph || !stretching) return;
    stretching = false;
    cancelLater();
    clearTimeout(bridgeTimer);
    setRate(speed);
    fade(graph.direct.gain, 1, context.currentTime);
    fade(graph.stretched.gain, 0, context.currentTime);
    const node = stretch;
    later(() => node?.schedule({ active: false }), CROSSFADE + 0.05);
  };

  /** Decodes the element's track into the stretcher, if it isn't already. */
  const decodeCurrentTrack = () => {
    const src = audio.currentSrc;
    if (!context || !stretch || !src || decoded === src || decoding === src) {
      return;
    }

    decoding = src;
    const ctx = context;
    const node = stretch;
    fetch(src)
      .then((response) => response.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then(async (track) => {
        if (decoding !== src) return;
        const channels = Array.from(
          { length: track.numberOfChannels },
          (_, c) => track.getChannelData(c),
        );
        await node.dropBuffers();
        // Handed over rather than copied: the longest rag is 170 MB decoded.
        await node
          .addBuffers(
            channels,
            channels.map((channel) => channel.buffer),
          )
          .catch(() => node.addBuffers(channels));
        decoded = src;
        decoding = null;
        if (speed !== 1 && graph && audio.currentSrc === src) {
          switchToStretcher();
        }
      })
      // The browser's own stretch carries on.
      .catch(() => {
        if (decoding === src) decoding = null;
      });
  };

  /** Plays the current speed through whichever path is ready for it. */
  const apply = () => {
    if (speed === 1) return switchToElement();
    if (stretching) return retime();
    if (graph && decoded === audio.currentSrc) return switchToStretcher();
    // Not ready yet: the browser stretches it meanwhile.
    setRate(speed);
    decodeCurrentTrack();
  };

  const prepare = () => {
    if (loading) {
      loading.then(() => decodeCurrentTrack());
      return;
    }

    try {
      // Created here, synchronously, so it's still inside the click.
      context = new AudioContext();
      context.resume().catch(() => {});
    } catch {
      loading = Promise.resolve(null);
      return;
    }

    const ctx = context;
    loading = import("signalsmith-stretch")
      .then(({ default: SignalsmithStretch }) => SignalsmithStretch(ctx))
      .then(async (node) => {
        await node.configure({ blockMs: BLOCK_MS });
        // In buffer mode the input side is read ahead of time, so only the
        // output half of the latency is left.
        lead = (await node.latency()) / 2;
        stretch = node;
        decodeCurrentTrack();
        return node;
      })
      // No AudioWorklet (an insecure context, an old browser): the browser's
      // own stretch will have to do.
      .catch(() => null);
  };

  const route = () => {
    // Routing into a context that can't play would silence the element.
    if (!context || context.state !== "running" || !stretch) return false;
    if (graph) return true;

    const delay = context.createDelay(1);
    delay.delayTime.value = LOOKAHEAD;
    const direct = context.createGain();
    const volume = context.createGain();
    const stretched = context.createGain();
    stretched.gain.value = 0;

    context.createMediaElementSource(audio).connect(delay).connect(direct);
    direct.connect(context.destination);
    stretch.connect(volume).connect(stretched).connect(context.destination);
    stretch.schedule({ active: false });
    graph = { direct, volume, stretched };
    followVolume();
    return true;
  };

  const setSpeed = (next: number) => {
    speed = next;
    // Heard while the stretcher isn't, so it shouldn't sound like a record.
    audio.preservesPitch = true;

    if (graph) return apply();
    if (next === 1) return setRate(1);

    prepare();
    loading?.then(() => {
      if (speed === 1) return;
      if (route()) apply();
      else setRate(speed);
    });
  };

  const followVolume = () => {
    if (!graph || !context) return;
    // Eased over a few milliseconds, as an instant jump in level clicks.
    graph.volume.gain.setTargetAtTime(
      audio.muted ? 0 : audio.volume,
      context.currentTime,
      0.01,
    );
  };

  const checkDrift = () => {
    if (!stretching || !context || audio.paused || audio.seeking) return;
    const heard =
      anchor.position + (context.currentTime - anchor.at + ALIGN) * anchor.rate;
    if (Math.abs(heard - audio.currentTime) > MAX_DRIFT) sync();
  };

  // A new track: the browser's stretch plays it while it's decoded.
  const onLoadStart = () => {
    // A seek cut short by the new track would otherwise leave it faded out.
    if (seeking && !stretching && graph && context) {
      fade(graph.direct.gain, 1, context.currentTime, CUT);
    }
    seeking = false;
    jumpedWhilePaused = false;
    switchToElement();
    if (graph && speed !== 1) decodeCurrentTrack();
  };

  // Pausing suspends the whole graph, so it stops at once and playing again
  // picks up exactly where the sound stopped. Not at the end of a track,
  // where the next one starts by itself without a click to resume on.
  const freeze = () => {
    if (graph && !audio.ended) context?.suspend();
  };
  const thaw = () => {
    if (!graph || !context) return;
    context.resume().catch(() => {});
    // Frozen together, everything is still in step and just carries on.
    if (!jumpedWhilePaused) return checkDrift();

    // Otherwise what was held over is from the old spot: drop it, and let
    // the element in once its new sound is through.
    jumpedWhilePaused = false;
    const now = context.currentTime;
    fade(graph.direct.gain, 0, now, 0.001);
    fade(graph.direct.gain, 1, now + ELEMENT_DELAY, CUT);
    if (!stretching) return;
    sync();
    fade(graph.stretched.gain, 0, now, 0.001);
    holdOnElement();
  };

  const onSeeking = () => {
    if (!graph || !context) return;
    if (stretching) sync();
    if (audio.paused) {
      jumpedWhilePaused = true;
      return;
    }
    // The old spot fades out before the element's jump is heard.
    const now = context.currentTime;
    seeking = true;
    fade(graph.direct.gain, 0, now, CUT);
    if (!stretching) return;
    fade(graph.stretched.gain, 0, now, CUT);
    holdOnElement();
  };

  // Landed: the new spot fades in once its sound is through.
  const onSeeked = () => {
    if (!seeking || !graph || !context || audio.paused) return;
    seeking = false;
    fade(graph.direct.gain, 1, context.currentTime + ELEMENT_DELAY, CUT);
  };

  const listeners: [string, () => void][] = [
    ["loadstart", onLoadStart],
    ["pause", freeze],
    ["play", thaw],
    ["seeking", onSeeking],
    ["seeked", onSeeked],
    ["playing", checkDrift],
    ["timeupdate", checkDrift],
    ["volumechange", followVolume],
  ];
  listeners.forEach(([event, listener]) =>
    audio.addEventListener(event, listener),
  );

  const release = () => {
    // While the element is still on the page (a hot reload, React's strict
    // mode), closing the graph would leave it routed into nothing, silent.
    if (audio.isConnected) return;

    cancelLater();
    clearTimeout(bridgeTimer);
    listeners.forEach(([event, listener]) =>
      audio.removeEventListener(event, listener),
    );
    stretch?.dropBuffers().catch(() => {});
    context?.close().catch(() => {});
    controls.delete(audio);
  };

  return { setSpeed, prepare, release };
};
