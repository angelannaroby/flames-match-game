import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";

import { appPalette } from "../../shared/theme/palette";

type FlamesIntroTitleProps = {
  title: string;
};

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function FlamesIntroTitle({ title }: FlamesIntroTitleProps) {
  const titleLetters = title.split("");
  const titleGradient = `linear-gradient(90deg, ${appPalette.brand.gradient.join(", ")})`;

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98, y: -16 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 0.5, sm: 1 },
        }}
      >
        {titleLetters.map((letter, index) => (
          <MotionTypography
            key={`${letter}-${index}`}
            variant="h1"
            initial={{ opacity: 0, y: 40, backgroundPosition: "0% center" }}
            animate={{
              opacity: 1,
              y: [0, -10, 6, -6, 0],
              backgroundPosition: ["0% center", "100% center"],
            }}
            transition={{
              delay: index * 0.12,
              duration: 2,
              ease: "easeInOut",
            }}
            sx={{
              fontSize: { xs: "3.2rem", sm: "5.5rem", md: "6.5rem" },
              lineHeight: 1,
              fontWeight: 800,
              background: titleGradient,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `0 0 30px ${appPalette.brand.primary}59`,
            }}
          >
            {letter}
          </MotionTypography>
        ))}
      </Box>
    </MotionBox>
  );
}
