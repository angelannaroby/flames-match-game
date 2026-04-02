export const flamesContent = {
  app: {
    applicationLabel: "Flames relationship game",
  },
  home: {
    title: "FLAMES",
    subtitle: "A playful way to reveal your relationship result.",
  },
  form: {
    firstNameLabel: "Your name",
    secondNameLabel: "Partner name",
    submitButtonLabel: "Let's find out",
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
  },
  result: {
    title: "Your result",
  },
} as const;