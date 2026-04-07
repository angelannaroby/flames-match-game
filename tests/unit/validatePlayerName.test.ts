import { validatePlayerName } from "../../src/features/lib/validatePlayerName";

const messages = {
  requiredMessage: "Please enter a name.",
  lettersOnlyMessage: "Only letters, spaces, apostrophes, and hyphens are allowed.",
  minimumLengthMessage: "Please enter at least 3 letters.",
};

describe("validatePlayerName", () => {
  it("returns required message for empty input", () => {
    expect(validatePlayerName("", messages)).toBe(messages.requiredMessage);
  });

  it("returns required message for whitespace-only input", () => {
    expect(validatePlayerName("   ", messages)).toBe(messages.requiredMessage);
  });

  it("returns minimum length message when fewer than 3 letters are provided", () => {
    expect(validatePlayerName("Al", messages)).toBe(messages.minimumLengthMessage);
  });

  it("ignores spaces when checking minimum length", () => {
    expect(validatePlayerName("A l", messages)).toBe(messages.minimumLengthMessage);
  });

  it("accepts valid alphabetic names", () => {
    expect(validatePlayerName("Anna", messages)).toBe("");
  });

  it("accepts names with spaces", () => {
    expect(validatePlayerName("Anna Maria", messages)).toBe("");
  });

  it("accepts names with apostrophes", () => {
    expect(validatePlayerName("O'Neil", messages)).toBe("");
  });

  it("accepts names with hyphens", () => {
    expect(validatePlayerName("Anna-Maria", messages)).toBe("");
  });

  it("accepts unicode letters", () => {
    expect(validatePlayerName("Élodie", messages)).toBe("");
  });

  it("rejects numbers", () => {
    expect(validatePlayerName("Anna2", messages)).toBe(messages.lettersOnlyMessage);
  });

  it("rejects symbols outside allowed punctuation", () => {
    expect(validatePlayerName("Anna@", messages)).toBe(messages.lettersOnlyMessage);
  });
});