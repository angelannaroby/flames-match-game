import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import { appPalette } from "../../shared/theme/palette";
import { flamesTokens } from "../constants/flames.tokens";
import { FlamesCardShell } from "./FlamesCardShell";

type FlamesCalculatingStateProps = {
  title: string;
  subtitle: string;
};

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function FlamesCalculatingState({
  title,
  subtitle,
}: FlamesCalculatingStateProps) {
  return (
    <FlamesCardShell>
      <Stack
        role="status"
        aria-live="polite"
        spacing={{ xs: 2.5, sm: 3 }}
        alignItems="center"
        textAlign="center"
        sx={{ width: "100%", position: "relative", zIndex: 1 }}
      >
        <MotionBox
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{
            duration: flamesTokens.animation.spinnerDuration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: `3px solid ${appPalette.border.subtle}`,
            borderTopColor: "primary.main",
          }}
        />

        <MotionTypography
          variant="h4"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "1.8rem",
              sm: "2.1rem",
            },
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </MotionTypography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 360,
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </Typography>
      </Stack>
    </FlamesCardShell>
  );
}