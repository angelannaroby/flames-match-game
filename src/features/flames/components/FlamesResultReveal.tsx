import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import { FeatureCard } from "../../../shared/components";
import { flamesContent } from "../../../shared/content/locale";
import type { FlamesResultKey } from "../types/flames.types";

type FlamesResultRevealProps = {
  result: FlamesResultKey;
  onRestart: () => void;
};

const MotionTypography = motion.create(Typography);

export function FlamesResultReveal({
  result,
  onRestart,
}: FlamesResultRevealProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <FeatureCard>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h5" color="text.secondary">
            {flamesContent.result.title}
          </Typography>

          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6 }}
            sx={{
              fontWeight: 800,
              color: "primary.main",
              textShadow: "0 0 24px rgba(124, 58, 237, 0.35)",
            }}
          >
            {flamesContent.result.labels[result]}
          </MotionTypography>

          <Button
            variant="outlined"
            onClick={onRestart}
            sx={{
              borderRadius: 999,
              px: 3,
            }}
          >
            {flamesContent.result.restartButtonLabel}
          </Button>
        </Stack>
      </FeatureCard>
    </Box>
  );
}