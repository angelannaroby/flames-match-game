export type FlamesScreenStage =
  | "introTitle"
  | "introCard"
  | "entry"
  | "calculating"
  | "result";

export type FlamesFormValues = {
  firstPlayerName: string;
  secondPlayerName: string;
};

export type FlamesResultKey =
  | "friends"
  | "love"
  | "affection"
  | "marriage"
  | "enemies"
  | "siblings";

export type FlamesValidationMessages = {
  requiredMessage: string;
  lettersOnlyMessage: string;
  minimumLengthMessage: string;
};