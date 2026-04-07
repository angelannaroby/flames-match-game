import { calculateFlamesResult } from "../../src/features/lib/calculateFlamesResult";

describe("calculateFlamesResult", () => {
  it("returns a valid flames result key", () => {
    const result = calculateFlamesResult("Anna", "Raj");

    expect([
      "friends",
      "love",
      "affection",
      "marriage",
      "enemies",
      "siblings",
    ]).toContain(result);
  });

  it("is deterministic for the same inputs", () => {
    const first = calculateFlamesResult("Anna", "Raj");
    const second = calculateFlamesResult("Anna", "Raj");

    expect(second).toBe(first);
  });

  it("does not change due to extra outer spaces", () => {
    const plain = calculateFlamesResult("Anna", "Raj");
    const spaced = calculateFlamesResult("  Anna  ", "  Raj  ");

    expect(spaced).toBe(plain);
  });

  it("handles repeated letters consistently", () => {
    const result = calculateFlamesResult("Aanna", "Anaya");

    expect([
      "friends",
      "love",
      "affection",
      "marriage",
      "enemies",
      "siblings",
    ]).toContain(result);
  });

  it("produces the same result for normalized spacing", () => {
    const first = calculateFlamesResult("Anna Maria", "Raj Kumar");
    const second = calculateFlamesResult("Anna   Maria", "Raj   Kumar");

    expect(second).toBe(first);
  });

  it("works for names with unicode characters", () => {
    const result = calculateFlamesResult("Élodie", "André");

    expect([
      "friends",
      "love",
      "affection",
      "marriage",
      "enemies",
      "siblings",
    ]).toContain(result);
  });
});