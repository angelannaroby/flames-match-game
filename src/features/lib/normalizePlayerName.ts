export function normalizePlayerName(value: string) {
  return value.replace(/\s+/g, " ").trim();
}