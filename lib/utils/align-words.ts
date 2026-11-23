// Lining up two versions of the same words, for following along with a post
// read aloud. Shared by scripts/generate-audio.mjs (the post's text against
// what the transcriber heard, for timings) and the post page (the post's text
// against the words on screen, for highlighting). Plain TypeScript with no
// imports, so Node can run it with its built-in type stripping.

/**
 * A word reduced to what both sides agree on: lowercase letters and digits.
 * "It's", "its" and "ITS," all become "its". Punctuation on its own ("—",
 * "&") becomes "", which never matches anything.
 */
export const normalizeWord = (word: string): string =>
  word
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]/gu, "");

/**
 * For each word in `a`, the index of the same word in `b`, or -1 if it has no
 * partner. Words are paired in order, as many as possible (a longest common
 * subsequence), so extra or missing words on either side are skipped over
 * rather than throwing everything after them out of line.
 *
 * The two are assumed to run roughly in step, so only pairings within a band
 * around the diagonal are considered. That keeps a 10,000-word note to a few
 * megabytes of work rather than 100 million cells.
 */
export const alignWords = (a: string[], b: string[], band = 300): Int32Array => {
  const n = a.length;
  const m = b.length;
  const result = new Int32Array(n).fill(-1);
  if (n === 0 || m === 0) return result;

  const na = a.map(normalizeWord);
  const nb = b.map(normalizeWord);

  const half = band + Math.abs(n - m);
  const width = half * 2 + 1;
  const centre = (i: number) => Math.round((i * m) / n);
  const NONE = -1;

  // Row i holds columns centre(i) - half … centre(i) + half.
  const score = new Int32Array((n + 1) * width).fill(NONE);
  // 1: paired, 2: skipped a word of `a`, 3: skipped a word of `b`.
  const step = new Uint8Array((n + 1) * width);

  const cell = (i: number, j: number) => {
    const k = j - (centre(i) - half);
    return j < 0 || j > m || k < 0 || k >= width ? -1 : i * width + k;
  };
  const get = (i: number, j: number) => {
    const c = cell(i, j);
    return c === -1 ? NONE : score[c];
  };

  for (let i = 0; i <= n; i++) {
    const from = Math.max(0, centre(i) - half);
    const to = Math.min(m, centre(i) + half);
    for (let j = from; j <= to; j++) {
      const c = cell(i, j);
      if (i === 0 || j === 0) {
        score[c] = 0;
        step[c] = i === 0 ? 3 : 2;
        continue;
      }

      let best = NONE;
      let how = 0;
      const word = na[i - 1];
      if (word && word === nb[j - 1]) {
        const diagonal = get(i - 1, j - 1);
        if (diagonal !== NONE) {
          best = diagonal + 1;
          how = 1;
        }
      }
      // On a tie, skipping a word of `b` wins. Read back from the end, that
      // leaves each word of `a` paired with the earliest copy in `b`: a
      // post's title with the <h1> rather than a heading repeating it.
      const left = get(i, j - 1);
      if (left !== NONE && left >= best) {
        best = left;
        how = 3;
      }
      const up = get(i - 1, j);
      if (up > best) {
        best = up;
        how = 2;
      }
      score[c] = best;
      step[c] = how;
    }
  }

  let i = n;
  let j = m;
  while (i > 0 && j > 0) {
    const c = cell(i, j);
    if (c === -1) break;
    const how = step[c];
    if (how === 1) {
      result[i - 1] = j - 1;
      i--;
      j--;
    } else if (how === 2) {
      i--;
    } else if (how === 3) {
      j--;
    } else {
      break;
    }
  }

  return result;
};
