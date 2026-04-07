import type { FlamesValidationMessages } from "../types/flames.types";

const playerNamePattern = /^[\p{L}\s'-]+$/u;

export function validatePlayerName(
  value: string,
  messages: FlamesValidationMessages,
) {
  const normalizedValue = value.trim();
  const characterCount = normalizedValue.replace(/\s/g, "").length;

  if (!normalizedValue) {
    return messages.requiredMessage;
  }

  if (!playerNamePattern.test(normalizedValue)) {
    return messages.lettersOnlyMessage;
  }

  if (characterCount < 3) {
    return messages.minimumLengthMessage;
  }

  return "";
}