// The parts of signalsmith-stretch (which ships without types) that
// lib/speed-control.ts uses. See the package README for the rest.
declare module "signalsmith-stretch" {
  export interface StretchNode extends AudioWorkletNode {
    /**
     * Applies a change. The README calls the time `output`, but 1.3.2 reads
     * `outputTime`, and only changes for "now" are reliable: a future one
     * prunes the segment that's playing and takes effect straight away.
     */
    schedule(change: {
      active?: boolean;
      /** Position in the loaded audio, in seconds. */
      input?: number;
      rate?: number;
      semitones?: number;
      outputTime?: number;
    }): Promise<void>;
    configure(config: { blockMs?: number; intervalMs?: number }): Promise<void>;
    /** Input plus output latency, in seconds. */
    latency(): Promise<number>;
    /** Appends audio to play from, one array per channel. */
    addBuffers(
      channels: Float32Array[],
      transfer?: Transferable[],
    ): Promise<number>;
    dropBuffers(): Promise<{ start: number; end: number }>;
  }

  const SignalsmithStretch: (
    context: BaseAudioContext,
    options?: AudioWorkletNodeOptions,
  ) => Promise<StretchNode>;

  export default SignalsmithStretch;
}
