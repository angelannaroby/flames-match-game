import type { PropsWithChildren } from "react";
import { Card, CardContent } from "@mui/material";
import { motion } from "motion/react";

type FeatureCardProps = PropsWithChildren<{
  maxWidth?: number;
  contentPaddingX?: {
    xs: number;
    sm: number;
  };
  contentPaddingY?: {
    xs: number;
    sm: number;
  };
}>;

const MotionCard = motion.create(Card);

export function FeatureCard({
  children,
  maxWidth = 560,
  contentPaddingX = { xs: 4, sm: 5 },
  contentPaddingY = { xs: 4.5, sm: 5 },
}: FeatureCardProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.98 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      sx={{
        width: "100%",
        maxWidth,
        mx: "auto",
        borderRadius: 5,
        boxShadow: "0 18px 50px rgba(0, 0, 0, 0.38)",
        backgroundColor: "rgba(20, 17, 31, 0.84)",
        backdropFilter: "blur(14px)",
      }}
    >
      <CardContent
        sx={{
          px: contentPaddingX,
          py: contentPaddingY,
        }}
      >
        {children}
      </CardContent>
    </MotionCard>
  );
}