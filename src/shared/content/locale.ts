export const flamesContent = {
  app: {
    applicationLabel: "Flames relationship game",
  },
  home: {
    title: "FLAMES",
  },
  intro: {
    title: "Welcome to FLAMES",
    description:
      "The classic childhood game, reimagined with a playful modern twist. Ready to see what the names reveal?",
    buttonLabel: "Let’s go",
  },
  form: {
    firstNameLabel: "Your name",
    secondNameLabel: "Partner name",
    submitButtonLabel: "Let's find out",
    cardTitle: "Just for fun — don’t take it seriously",
    cardEmoji: "😉",
  },
  help: {
    buttonLabel: "Help",
    dialogTitle: "How to play",
    steps: [
      "Enter your name and your partner's name.",
      "The game removes common letters from both names.",
      "The remaining count is used to reveal the FLAMES result.",
      "FLAMES stands for Friends, Love, Affection, Marriage, Enemies, and Siblings.",
    ],
    closeButtonLabel: "Close",
  },
  validation: {
    requiredName: "Please enter a name.",
    lettersOnly: "Only letters and spaces are allowed.",
    minimumLength: "Please enter at least 3 letters.",
  },
  result: {
    title: "Your result",
  },
} as const;