/** Merge class names conditionally, filtering out falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Pads a number to at least 2 digits, e.g. 5 -> "05". */
export function pad2(value: number): string {
  return value.toString().padStart(2, "0");
}

/** Formats an ISO date string into a long, human-friendly date. */
export function formatLongDate(iso: string, locale = "en-GB"): string {
  return new Date(iso).toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Copies text to clipboard, returns whether it succeeded. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/** Reads the `?to=` query param used to personalize the cover greeting. */
export function getGuestNameFromSearchParams(
  searchParams: URLSearchParams
): string | null {
  const to = searchParams.get("to");
  if (!to) return null;
  return decodeURIComponent(to.replace(/\+/g, " "));
}
