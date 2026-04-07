import type { SxProps, Theme } from "@mui/material";

export type FeatureCardVariant = "default" | "glow";

type GetFeatureCardRootStylesParams = {
  maxWidth: number;
  variant: FeatureCardVariant;
};

export const getFeatureCardRootStyles = ({
  maxWidth,
  variant,
}: GetFeatureCardRootStylesParams): SxProps<Theme> => {
  const sharedStyles: SxProps<Theme> = {
    width: "100%",
    maxWidth,
    mx: "auto",
    position: "relative",
    overflow: "hidden",
  };

  if (variant === "glow") {
    return {
      ...sharedStyles,
      borderRadius: { xs: "32px", sm: "40px" },
      p: "1px",
      background: `linear-gradient(
        180deg,
        rgba(167, 139, 250, 0.46) 0%,
        rgba(196, 181, 253, 0.22) 52%,
        rgba(167, 139, 250, 0.18) 100%
      )`,
      boxShadow: `
        0 0 0 1px rgba(167, 139, 250, 0.12),
        0 0 28px rgba(124, 58, 237, 0.1)
      `,
      isolation: "isolate",
    };
  }

  return {
    ...sharedStyles,
    borderRadius: { xs: "32px", sm: "40px" },
    p: "1px",
    background: `linear-gradient(
      180deg,
      rgba(167, 139, 250, 0.3) 0%,
      rgba(167, 139, 250, 0.16) 100%
    )`,
    boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.08)",
    isolation: "isolate",
  };
};

export const getFeatureCardInnerStyles = (
  variant: FeatureCardVariant,
): SxProps<Theme> => {
  const baseInner: SxProps<Theme> = {
    position: "relative",
    borderRadius: { xs: "31px", sm: "39px" },
    background: `linear-gradient(
      180deg,
      rgba(20, 17, 31, 0.985) 0%,
      rgba(9, 7, 15, 0.985) 100%
    )`,
    backdropFilter: "blur(14px)",
    zIndex: 1,
  };

  if (variant === "glow") {
    return {
      ...baseInner,
      border: `1px solid rgba(196, 181, 253, 0.22)`,
    };
  }

  return {
    ...baseInner,
    border: `1px solid rgba(167, 139, 250, 0.16)`,
  };
};

export const getFeatureCardGlowOverlayStyles = (
  variant: FeatureCardVariant,
): SxProps<Theme> => {
  if (variant !== "glow") {
    return { display: "none" };
  }

  return {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    background: `
      radial-gradient(circle at top center, rgba(167, 139, 250, 0.1), transparent 42%),
      radial-gradient(circle at bottom center, rgba(236, 72, 153, 0.06), transparent 40%)
    `,
    filter: "blur(24px)",
  };
};

export const getFeatureCardSvgStyles = (): SxProps<Theme> => ({
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 1,
});