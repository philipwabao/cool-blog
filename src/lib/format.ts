/** Shared formatting helpers. */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Human, editorial date — e.g. "May 30, 2026". */
export const formatDate = (d: Date): string =>
  `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;

/** Compact mono "stamp" date for colophons, e.g. "2026/05/30". */
export const formatStamp = (d: Date): string =>
  d.toISOString().slice(0, 10).replace(/-/g, "/");

/** ISO date for <time datetime="…">. */
export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);

/**
 * Ledger entry numbers: every post gets a permanent number in
 * chronological order of publication ("No. 001" is the first entry).
 * Pass ALL non-draft posts so numbers stay stable across views.
 */
export const entryNumbers = (
  posts: Array<{ id: string; data: { pubDate: Date } }>
): Map<string, string> => {
  const byDate = [...posts].sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return new Map(
    byDate.map((p, i) => [p.id, String(i + 1).padStart(3, "0")])
  );
};
