import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";

type FlamesIntroTitleProps = {
  title: string;
};

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function FlamesIntroTitle({ title }: FlamesIntroTitleProps) {
  const titleLetters = title.split("");

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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              delay: index * 0.08,
              duration: 0.7,
              ease: "easeOut",
            }}
            sx={{
              fontSize: { xs: "3rem", sm: "5rem", md: "6rem" },
              lineHeight: 1,
              color: "text.primary",
              textShadow: "0 0 24px rgba(124, 58, 237, 0.28)",
            }}
          >
            {letter}
          </MotionTypography>
        ))}
      </Box>
    </MotionBox>
  );
}