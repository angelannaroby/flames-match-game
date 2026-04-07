const isDebugMode =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("debug") === "1";

export const flamesTokens = {
  layout: {
    cardMaxWidth: 640,
    contentMaxWidth: 720,
    cardMinHeight: {
      xs: 420,
      sm: 500,
    },
    helpButtonOffset: 24,
  },
  animation: {
    introTitleDelayMs: 3000,
    resultRevealDelayMs: isDebugMode ? 5000 : 1600,
    cardEnterDuration: 0.45,
    cardExitDuration: 0.35,
    spinnerDuration: 1.8,
    titleLetterDuration: 2,
  },
  resultPalette: {
    friends: {
      accent: "#F6C86D",
      glow: "rgba(246, 200, 109, 0.24)",
      imageGlow: "rgba(246, 200, 109, 0.18)",
    },
    love: {
      accent: "#E98AA8",
      glow: "rgba(233, 138, 168, 0.24)",
      imageGlow: "rgba(233, 138, 168, 0.18)",
    },
    affection: {
      accent: "#C79AEF",
      glow: "rgba(199, 154, 239, 0.24)",
      imageGlow: "rgba(199, 154, 239, 0.18)",
    },
    marriage: {
      accent: "#D9B46B",
      glow: "rgba(217, 180, 107, 0.24)",
      imageGlow: "rgba(217, 180, 107, 0.18)",
    },
    enemies: {
      accent: "#D48383",
      glow: "rgba(212, 131, 131, 0.22)",
      imageGlow: "rgba(212, 131, 131, 0.16)",
    },
    siblings: {
      accent: "#7FA7E8",
      glow: "rgba(127, 167, 232, 0.24)",
      imageGlow: "rgba(127, 167, 232, 0.18)",
    },
  },
} as const;