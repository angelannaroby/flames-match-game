import type { SxProps, Theme } from "@mui/material/styles";

export const flamesResultRevealStyles = {
  cardContent: {
    position: "relative",
    overflow: "hidden",
  } satisfies SxProps<Theme>,

  stack: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 600,
  } satisfies SxProps<Theme>,

  label: (accentColor: string, glowColor: string) =>
    ({
      fontWeight: 800,
      fontSize: { xs: "3rem", sm: "3.8rem" },
      lineHeight: 1,
      color: accentColor,
      letterSpacing: "-0.04em",
      textShadow: `0 0 28px ${glowColor}`,
    }) satisfies SxProps<Theme>,

  quote: {
    maxWidth: 420,
    lineHeight: 1.75,
    opacity: 0.92,
    whiteSpace: "pre-line",
  } satisfies SxProps<Theme>,

  artworkFrame: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 0.25,
  } satisfies SxProps<Theme>,

  artworkImage: {
    width: "100%",
    maxWidth: { xs: 240, sm: 270 },
    height: "auto",
    display: "block",
    userSelect: "none",
    pointerEvents: "none",
  } satisfies SxProps<Theme>,

  button: (borderColor: string, accentColor: string) =>
    ({
      borderRadius: 999,
      px: 3,
      minWidth: 132,
      color: accentColor,
      borderColor,
      "&:hover": {
        borderColor: accentColor,
        backgroundColor: "rgba(255,255,255,0.03)",
      },
    }) satisfies SxProps<Theme>,

  ambientGlow: (glowColor: string) =>
    ({
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: `radial-gradient(circle at top, ${glowColor} 0%, rgba(255,255,255,0) 58%)`,
      opacity: 0.9,
      zIndex: 0,
    }) satisfies SxProps<Theme>,
} as const;