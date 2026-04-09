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

export type FlamesVisualLetterState =
  | "idle"
  | "active"
  | "matched"
  | "removed"
  | "survived";

export type FlamesVisualLetter = {
  id: string;
  value: string;
  state: FlamesVisualLetterState;
};

export type FlamesVisualStepPhase =
  | "matchingScan"
  | "matchingPair"
  | "matchingStrike"
  | "matchingNoMatch"
  | "countSummary"
  | "transitionToFlames"
  | "flamesCounting"
  | "flamesEliminated"
  | "final";

export type FlamesVisualStep = {
  phase: FlamesVisualStepPhase;
  title: string;
  subtitle: string;
  message?: string;
  firstNameLetters: FlamesVisualLetter[];
  secondNameLetters: FlamesVisualLetter[];
  remainingLetters: FlamesVisualLetter[];
  flamesLetters: FlamesVisualLetter[];
  remainingCount: number;
  currentCountNumber?: number;
  stepDurationMs: number;
};