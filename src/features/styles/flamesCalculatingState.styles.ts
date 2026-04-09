import type { SxProps, Theme } from "@mui/material/styles";

import { appPalette } from "../../shared/theme/palette";

export const flamesCalculatingStateStyles = {
  stack: {
    width: "100%",
    position: "relative",
    zIndex: 1,
  } satisfies SxProps<Theme>,

  content: {
    width: "100%",
    minHeight: {
      xs: 500,
      sm: 580,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 700,
    fontSize: {
      xs: "1.6rem",
      sm: "1.95rem",
    },
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
  } satisfies SxProps<Theme>,

  subtitle: {
    maxWidth: 430,
    lineHeight: 1.7,
  } satisfies SxProps<Theme>,

  sectionLabel: {
    fontWeight: 700,
    letterSpacing: "0.02em",
  } satisfies SxProps<Theme>,

  statusPill: {
    minHeight: 42,
    px: 1.6,
    py: 1,
    borderRadius: "999px",
    border: "1px solid rgba(196,181,253,0.22)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  } satisfies SxProps<Theme>,

  nameGroupWrap: (tone: "primary" | "secondary") =>
    ({
      width: "100%",
      px: { xs: 1.1, sm: 1.35 },
      py: { xs: 1.2, sm: 1.35 },
      borderRadius: "20px",
      border:
        tone === "primary"
          ? "1px solid rgba(167,139,250,0.14)"
          : "1px solid rgba(244,114,182,0.10)",
      background:
        tone === "primary"
          ? "linear-gradient(180deg, rgba(167,139,250,0.05), rgba(167,139,250,0.02))"
          : "linear-gradient(180deg, rgba(244,114,182,0.04), rgba(244,114,182,0.015))",
    }) satisfies SxProps<Theme>,

  nameLetterChip: (
    state: "idle" | "active" | "matched" | "removed" | "survived",
    dense = false,
  ) =>
    ({
      position: "relative",
      minWidth: dense ? 40 : 44,
      height: dense ? 40 : 44,
      px: dense ? 1 : 1.2,
      borderRadius: dense ? "12px" : "14px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      border: `1px solid ${
        state === "active" || state === "matched"
          ? appPalette.brand.secondary
          : state === "survived"
            ? "rgba(196,181,253,0.24)"
            : appPalette.border.subtle
      }`,
      color:
        state === "removed"
          ? appPalette.text.secondary
          : appPalette.text.primary,
      background:
        state === "active"
          ? "linear-gradient(180deg, rgba(124,58,237,0.54), rgba(167,139,250,0.30))"
          : state === "matched"
            ? "linear-gradient(180deg, rgba(236,72,153,0.34), rgba(244,114,182,0.18))"
            : state === "survived"
              ? "linear-gradient(180deg, rgba(167,139,250,0.12), rgba(167,139,250,0.06))"
              : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      boxShadow:
        state === "active"
          ? "0 0 12px rgba(167,139,250,0.18)"
          : state === "matched"
            ? "0 0 10px rgba(244,114,182,0.14)"
            : "none",
      opacity: state === "removed" ? 0.26 : 1,
    }) satisfies SxProps<Theme>,

  flamesLetterChip: (
    state: "idle" | "active" | "matched" | "removed" | "survived",
  ) =>
    ({
      position: "relative",
      minWidth: 72,
      height: 72,
      px: 1.8,
      borderRadius: "22px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      border: `1px solid ${
        state === "active"
          ? appPalette.brand.secondary
          : state === "survived"
            ? "rgba(196,181,253,0.28)"
            : appPalette.border.subtle
      }`,
      color:
        state === "removed"
          ? appPalette.text.secondary
          : appPalette.text.primary,
      background:
        state === "active"
          ? "linear-gradient(180deg, rgba(124,58,237,0.74), rgba(167,139,250,0.36))"
          : state === "survived"
            ? "linear-gradient(180deg, rgba(167,139,250,0.18), rgba(167,139,250,0.08))"
            : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      boxShadow:
        state === "active" ? "0 0 16px rgba(167,139,250,0.22)" : "none",
      opacity: state === "removed" ? 0.18 : 1,
    }) satisfies SxProps<Theme>,

  strikeLine: {
    position: "absolute",
    left: 8,
    right: 8,
    top: "50%",
    height: 2,
    borderRadius: 999,
    backgroundColor: appPalette.brand.pink,
    transformOrigin: "left center",
  } satisfies SxProps<Theme>,

  countWrap: {
    minWidth: 100,
    px: 2.4,
    py: 1.2,
    borderRadius: "20px",
    border: "1px solid rgba(196,181,253,0.24)",
    background: "rgba(167,139,250,0.10)",
  } satisfies SxProps<Theme>,

  remainingCountValue: {
    fontWeight: 800,
    color: appPalette.brand.accent,
    lineHeight: 1,
    fontSize: {
      xs: "2.2rem",
      sm: "2.7rem",
    },
  } satisfies SxProps<Theme>,

  revealOverlay: {
    position: "absolute",
    inset: 0,
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2.5, sm: 3.5 },
    py: { xs: 3, sm: 4 },
    borderRadius: "28px",
    background:
      "linear-gradient(180deg, rgba(10,10,18,0.92), rgba(20,14,40,0.98))",
    backdropFilter: "blur(8px)",
  } satisfies SxProps<Theme>,

  revealPanel: {
    width: "100%",
    maxWidth: 520,
    px: { xs: 2.8, sm: 3.6 },
    py: { xs: 3.4, sm: 4.2 },
    borderRadius: "28px",
    border: "1px solid rgba(196,181,253,0.18)",
    background:
      "linear-gradient(180deg, rgba(167,139,250,0.18), rgba(124,58,237,0.12))",
    boxShadow:
      "0 24px 80px rgba(124,58,237,0.28), inset 0 0 0 1px rgba(255,255,255,0.03)",
  } satisfies SxProps<Theme>,

  flamesStageWrap: {
    width: "100%",
    maxWidth: 600,
    flex: 1,
    minHeight: {
      xs: 300,
      sm: 360,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: 1,
    py: 0.5,
  } satisfies SxProps<Theme>,

  countingNumber: {
    fontWeight: 800,
    lineHeight: 1,
    color: appPalette.brand.secondary,
    textShadow: "0 0 30px rgba(167,139,250,0.18)",
  } satisfies SxProps<Theme>,

  progressTrack: {
    width: "100%",
    maxWidth: 300,
    height: 6,
    borderRadius: 999,
    overflow: "hidden",
    background: "rgba(255,255,255,0.08)",
  } satisfies SxProps<Theme>,

  progressBar: {
    height: "100%",
    borderRadius: 999,
    background:
      "linear-gradient(90deg, rgba(244,114,182,0.9), rgba(167,139,250,0.95))",
    boxShadow: "none",
  } satisfies SxProps<Theme>,
} as const;