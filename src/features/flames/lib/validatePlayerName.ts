type ValidatePlayerNameOptions = {
  requiredMessage: string;
  lettersOnlyMessage: string;
  minimumLengthMessage: string;
};

const playerNamePattern = /^[A-Za-z\s]+$/;

export function validatePlayerName(
  value: string,
  options: ValidatePlayerNameOptions,
) {
  const normalizedValue = value.trim();
  const characterCount = normalizedValue.replace(/\s/g, "").length;

  if (!normalizedValue) {
    return options.requiredMessage;
  }

  if (!playerNamePattern.test(normalizedValue)) {
    return options.lettersOnlyMessage;
  }

  if (characterCount < 3) {
    return options.minimumLengthMessage;
  }

  return "";
}