type AcceptEntry = {
  type: string;
  q: number;
  specificity: number;
  index: number;
};

function parseAccept(header: string): AcceptEntry[] {
  const entries: AcceptEntry[] = [];

  for (const [index, raw] of header.split(",").entries()) {
    const parts = raw
      .trim()
      .split(";")
      .map((part) => part.trim());
    const type = (parts[0] ?? "").toLowerCase();

    if (!type) {
      continue;
    }

    let q = 1;

    for (const param of parts.slice(1)) {
      const [name, value] = param.split("=").map((part) => part.trim());

      if (name === "q" && value) {
        const parsed = Number(value);

        if (!Number.isNaN(parsed)) {
          q = Math.max(0, Math.min(1, parsed));
        }
      }
    }

    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    entries.push({ type, q, specificity, index });
  }

  return entries;
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") {
    return true;
  }

  if (entry.type.endsWith("/*")) {
    return candidate.startsWith(entry.type.slice(0, -1));
  }

  return entry.type === candidate;
}

export function preferredMediaType(header: string | undefined, produces: string[]): string | null {
  if (!header) {
    return produces[0] ?? null;
  }

  const entries = parseAccept(header);

  if (entries.length === 0) {
    return produces[0] ?? null;
  }

  let best: string | null = null;
  let bestQ = -1;
  let bestPos = Number.POSITIVE_INFINITY;
  let bestSpecificity = -1;

  for (const candidate of produces) {
    let matched: AcceptEntry | null = null;

    for (const entry of entries) {
      if (!matches(entry, candidate)) {
        continue;
      }

      if (!matched || entry.specificity > matched.specificity || (entry.specificity === matched.specificity && entry.index < matched.index)) {
        matched = entry;
      }
    }

    if (!matched || matched.q <= 0) {
      continue;
    }

    const isBetter =
      matched.q > bestQ ||
      (matched.q === bestQ && matched.specificity > bestSpecificity) ||
      (matched.q === bestQ && matched.specificity === bestSpecificity && matched.index < bestPos) ||
      // Cloudflare: Accept: text/* prefers markdown over HTML when tied.
      (matched.q === bestQ && matched.specificity === bestSpecificity && matched.index === bestPos && matched.specificity === 1 && candidate === "text/markdown" && best === "text/html");

    if (isBetter) {
      best = candidate;
      bestQ = matched.q;
      bestPos = matched.index;
      bestSpecificity = matched.specificity;
    }
  }

  return best;
}

export function acceptsMarkdown(header: string | undefined): boolean {
  return preferredMediaType(header, ["text/html", "text/markdown"]) === "text/markdown";
}
