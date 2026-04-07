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
      "There was a time when all you needed was a pen, a piece of paper, and a name you weren’t ready to say out loud.\n\nYou’d cross out letters slowly, pretending it didn’t matter — but secretly hoping it did. Those tiny moments, filled with laughter and curiosity, made FLAMES more than just a game.\n\nThis is just a digital version…\nbut maybe it brings back a little bit of that feeling. 💛",
    buttonLabel: "Excited !!",
  },
  form: {
    firstNameLabel: "Your name",
    secondNameLabel: "Partner name",
    submitButtonLabel: "Let's find out",
    cardTitle: "Just for fun, okay?",
    cardEmoji: "😉",
  },
  help: {
    buttonLabel: "Help",
    dialogTitle: "How to play FLAMES",
    intro:
      "A tiny game from school days — simple, silly, and oddly unforgettable. Here’s how this version works.",
    sections: {
      stepsTitle: "How it works",
      rulesTitle: "Little rules",
    },
    steps: [
      "Enter your name and the other person’s name.",
      "Matching letters are cancelled one pair at a time from both names.",
      "The letters left after that are counted.",
      "That final count is used to reveal one FLAMES result.",
      "FLAMES can reveal Friends, Love, Affection, Marriage, Enemies, or Siblings.",
    ],
    rules: [
      "This is only for fun — don’t take the result too seriously.",
      "Use real names or nicknames, but keep them at least 3 letters long.",
      "Only letters, spaces, apostrophes, and hyphens are allowed.",
    ],
    closeButtonLabel: "Close",
  },
  validation: {
    requiredName: "Please enter a name.",
    lettersOnly: "Only letters, spaces, apostrophes, and hyphens are allowed.",
    minimumLength: "Please enter at least 3 letters.",
  },
  calculating: {
    title: "Calculating your FLAMES...",
    subtitle: "Let the names do their magic.",
  },
  result: {
    title: "Your result is",
    restartButtonLabel: "Try again",
    labels: {
      friends: "Friends",
      love: "Love",
      affection: "Affection",
      marriage: "Marriage",
      enemies: "Enemies",
      siblings: "Siblings",
    },
    quotes: {
      friends:
        "A true friend is one of life’s quiet blessings.\nLaugh together, be there for each other, and never take that bond for granted.",
      love:
        "Love is not just about finding each other, but choosing each other every day.\nIf this is love… take care of it.",
      marriage:
        "A lifetime together starts with small moments like this.\nIf this is your story… cherish it, grow with it, and build something beautiful.",
      affection:
        "Sometimes it’s just a soft feeling, a quiet smile.\nNot everything needs a name… but it still matters.",
      enemies:
        "Not every connection is meant to bloom.\nSome people come into our lives to teach us what doesn’t belong.",
      siblings:
        "Some connections are less about romance and more about laughter, fights, and forever bonding.\nA little chaos… but always there.",
    },
  },
} as const;