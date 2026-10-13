const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
};

// Turn HTML character references (&#x26;, &#38;, &amp;) back into text
export function decodeEntities(value: string): string {
  return value.replace(
    /&(?:#x([0-9a-f]+)|#(\d+)|([a-z]+));/gi,
    (match, hex, decimal, name) => {
      if (name) return NAMED_ENTITIES[name.toLowerCase()] ?? match;

      const code = hex ? parseInt(hex, 16) : Number(decimal);
      return code <= 0x10ffff ? String.fromCodePoint(code) : match;
    },
  );
}
