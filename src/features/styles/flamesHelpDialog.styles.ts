import type { SxProps, Theme } from "@mui/material/styles";

import { appPalette } from "../../../shared/theme/palette";

export const flamesHelpDialogStyles = {
  dialogPaper: {
    background: "transparent",
    boxShadow: "none",
    overflow: "visible",
  } satisfies SxProps<Theme>,

  dialogContent: {
    p: 0,
    overflow: "visible",
  } satisfies SxProps<Theme>,

  cardContent: {
    position: "relative",
    overflow: "hidden",
  } satisfies SxProps<Theme>,

  closeButton: {
    position: "absolute",
    right: { xs: 14, sm: 16 },
    top: { xs: 14, sm: 16 },
    color: "text.secondary",
    zIndex: 3,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.04)",
    },
  } satisfies SxProps<Theme>,

  ambientGlow: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "radial-gradient(circle at top, rgba(167, 139, 250, 0.14) 0%, rgba(255,255,255,0) 58%)",
    zIndex: 0,
  } satisfies SxProps<Theme>,

  stack: {
    position: "relative",
    zIndex: 1,
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 800,
    fontSize: {
      xs: "1.5rem",
      sm: "1.85rem",
    },
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    pr: 5,
    textAlign: "center",
  } satisfies SxProps<Theme>,

  introText: {
    maxWidth: 500,
    lineHeight: 1.75,
    textAlign: "center",
  } satisfies SxProps<Theme>,

  sectionCard: {
    borderRadius: 3,
    border: `1px solid ${appPalette.border.subtle}`,
    backgroundColor: "rgba(255,255,255,0.02)",
    p: { xs: 2, sm: 2.5 },
  } satisfies SxProps<Theme>,
} as const;