export type FlamesScreenStage = "home" | "entry" | "calculating" | "result";

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