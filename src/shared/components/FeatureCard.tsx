import type { PropsWithChildren } from "react";
import { Box, Card, CardContent } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { motion } from "motion/react";

import {
  getFeatureCardGlowOverlayStyles,
  getFeatureCardInnerStyles,
  getFeatureCardRootStyles,
  getFeatureCardSvgStyles,
  type FeatureCardVariant,
} from "../styles/featureCard.styles";
import { appPalette } from "../theme/palette";

type FeatureCardProps = PropsWithChildren<{
  maxWidth?: number;
  variant?: FeatureCardVariant;
  contentPaddingX?: {
    xs: number;
    sm: number;
  };
  contentPaddingY?: {
    xs: number;
    sm: number;
  };
  contentSx?: SxProps<Theme>;
}>;

const MotionCard = motion.create(Card);
const MotionRect = motion.create("rect");

export function FeatureCard({
  children,
  maxWidth = 560,
  variant = "default",
  contentPaddingX = { xs: 4, sm: 5 },
  contentPaddingY = { xs: 4.5, sm: 5 },
  contentSx,
}: FeatureCardProps) {
  const shouldShowTravelGlow = variant === "glow";

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.985 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      sx={getFeatureCardRootStyles({ maxWidth, variant })}
    >
      <Box sx={getFeatureCardGlowOverlayStyles(variant)} />

      {shouldShowTravelGlow ? (
        <Box sx={getFeatureCardSvgStyles()} aria-hidden>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="feature-card-travel-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(124, 58, 237, 0)" />
                <stop offset="12%" stopColor="rgba(124, 58, 237, 0.18)" />
                <stop offset="30%" stopColor={appPalette.brand.secondary} />
                <stop offset="52%" stopColor={appPalette.brand.pink} />
                <stop offset="74%" stopColor={appPalette.brand.accent} />
                <stop offset="88%" stopColor="rgba(196, 181, 253, 0.35)" />
                <stop offset="100%" stopColor="rgba(124, 58, 237, 0)" />
              </linearGradient>

              <filter
                id="feature-card-glow"
                x="-80%"
                y="-80%"
                width="260%"
                height="260%"
              >
                <feGaussianBlur stdDeviation="1.1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect
              x="1"
              y="1"
              width="98"
              height="98"
              rx="6"
              ry="6"
              fill="none"
              stroke={appPalette.brand.pink}
              strokeWidth="0.5"
            />

            <MotionRect
              x="1"
              y="1"
              width="98"
              height="98"
              rx="6"
              ry="6"
              fill="none"
              stroke="url(#feature-card-travel-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.09 0.91"
              filter="url(#feature-card-glow)"
              animate={{
                strokeDashoffset: [0, -1],
                opacity: [1, 0.96, 1],
              }}
              transition={{
                strokeDashoffset: {
                  duration: 5.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
                opacity: {
                  duration: 2.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            />
          </svg>
        </Box>
      ) : null}

      <Box sx={getFeatureCardInnerStyles(variant)}>
        <CardContent
          sx={{
            px: contentPaddingX,
            py: contentPaddingY,
            position: "relative",
            zIndex: 2,
            ...contentSx,
          }}
        >
          {children}
        </CardContent>
      </Box>
    </MotionCard>
  );
}