import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import { FeatureCard } from "../../../shared/components";

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
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <FeatureCard>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <MotionBox
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "3px solid rgba(167, 139, 250, 0.18)",
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
            sx={{ fontWeight: 700 }}
          >
            {title}
          </MotionTypography>

          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        </Stack>
      </FeatureCard>
    </Box>
  );
}