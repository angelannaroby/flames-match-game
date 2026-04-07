import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Box } from "@mui/material";
import { motion } from "motion/react";

import { appPalette } from "../../shared/theme/palette";

const MotionBox = motion.create(Box);

const floatingHeartItems = [
  { left: "10%", delay: 0, duration: 7.2, size: 20, drift: -16, opacity: 0.2, startVisible: true },
  { left: "22%", delay: 1.2, duration: 8.4, size: 16, drift: 12, opacity: 0.16, startVisible: false },
  { left: "34%", delay: 0.4, duration: 7.8, size: 24, drift: -10, opacity: 0.2, startVisible: true },
  { left: "48%", delay: 1.8, duration: 8.8, size: 18, drift: 14, opacity: 0.18, startVisible: false },
  { left: "61%", delay: 0.2, duration: 7.4, size: 22, drift: -12, opacity: 0.2, startVisible: true },
  { left: "74%", delay: 1.5, duration: 8.2, size: 17, drift: 10, opacity: 0.16, startVisible: false },
  { left: "86%", delay: 0.6, duration: 7.6, size: 21, drift: -14, opacity: 0.18, startVisible: true },
];

export function FlamesFloatingHearts() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {floatingHeartItems.map((heart, index) => (
        <MotionBox
          key={`${heart.left}-${index}`}
          initial={{
            opacity: heart.startVisible ? heart.opacity * 0.7 : 0,
            y: heart.startVisible ? -60 : 0,
            scale: heart.startVisible ? 0.95 : 0.8,
          }}
          animate={{
            opacity: [
              heart.startVisible ? heart.opacity * 0.7 : 0,
              heart.opacity,
              heart.opacity,
              0,
            ],
            y: heart.startVisible
              ? [-60, -180, -340, -520]
              : [0, -180, -340, -520],
            x: [0, heart.drift, -heart.drift, 0],
            scale: [0.9, 1, 1.05, 0.92],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 0,
            ease: "easeInOut",
          }}
          sx={{
            position: "absolute",
            left: heart.left,
            bottom: -32,
            color: appPalette.brand.pink,
            filter: `drop-shadow(0 0 10px ${appPalette.brand.pink}40)`,
          }}
        >
          <FavoriteRoundedIcon sx={{ fontSize: heart.size }} />
        </MotionBox>
      ))}
    </Box>
  );
}