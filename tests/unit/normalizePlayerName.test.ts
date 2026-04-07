import { normalizePlayerName } from "../../src/features/lib/normalizePlayerName";

describe("normalizePlayerName", () => {
  it("trims leading and trailing whitespace", () => {
    expect(normalizePlayerName("  Anna  ")).toBe("Anna");
  });

  it("collapses multiple inner spaces into a single space", () => {
    expect(normalizePlayerName("Anna     Maria")).toBe("Anna Maria");
  });

  it("keeps single spaces unchanged", () => {
    expect(normalizePlayerName("Anna Roby")).toBe("Anna Roby");
  });

  it("returns an empty string for whitespace-only input", () => {
    expect(normalizePlayerName("     ")).toBe("");
  });

  it("preserves letters with accents", () => {
    expect(normalizePlayerName("  Élodie   Marie ")).toBe("Élodie Marie");
  });
});