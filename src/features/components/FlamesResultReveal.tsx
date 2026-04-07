import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import { flamesContent } from "../../shared/content/locale";
import { appPalette } from "../../shared/theme/palette";
import { flamesTokens } from "../constants/flames.tokens";
import type { FlamesResultKey } from "../types/flames.types";

import affectionImage from "../assets/affection.PNG";
import enemiesImage from "../assets/enemies.PNG";
import friendsImage from "../assets/friends.PNG";
import loveImage from "../assets/love.PNG";
import marriageImage from "../assets/marriage.PNG";
import siblingsImage from "../assets/siblings.PNG";
import { flamesResultRevealStyles } from "../styles/flamesResultReveal.styles";
import { FlamesCardShell } from "./FlamesCardShell";

type FlamesResultRevealProps = {
  result: FlamesResultKey;
  onRestart: () => void;
};

const MotionTypography = motion.create(Typography);
const MotionBox = motion.create(Box);

const resultArtworkMap: Record<FlamesResultKey, string> = {
  friends: friendsImage,
  love: loveImage,
  affection: affectionImage,
  marriage: marriageImage,
  enemies: enemiesImage,
  siblings: siblingsImage,
};

export function FlamesResultReveal({
  result,
  onRestart,
}: FlamesResultRevealProps) {
  const resultPalette = flamesTokens.resultPalette[result];
  const resultLabel = flamesContent.result.labels[result];
  const resultQuote = flamesContent.result.quotes[result];
  const resultArtwork = resultArtworkMap[result];

  return (
    <FlamesCardShell
      backgroundSlot={
        <Box
          aria-hidden="true"
          sx={flamesResultRevealStyles.ambientGlow(resultPalette.glow)}
        />
      }
      contentSx={flamesResultRevealStyles.cardContent}
    >
      <Stack
        spacing={{ xs: 2.5, sm: 3 }}
        alignItems="center"
        textAlign="center"
        sx={flamesResultRevealStyles.stack}
      >
        <MotionBox
          initial={{ opacity: 0, y: 12, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          sx={flamesResultRevealStyles.artworkFrame}
        >
          <Box
            component="img"
            src={resultArtwork}
            alt={resultLabel}
            sx={flamesResultRevealStyles.artworkImage}
          />
        </MotionBox>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={flamesResultRevealStyles.title}
        >
          {flamesContent.result.title}
        </Typography>

        <MotionTypography
          variant="h2"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ duration: 0.65 }}
          sx={flamesResultRevealStyles.label(
            resultPalette.accent,
            resultPalette.glow,
          )}
        >
          {resultLabel}
        </MotionTypography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={flamesResultRevealStyles.quote}
        >
          {resultQuote}
        </Typography>

        <Button
          variant="outlined"
          onClick={onRestart}
          sx={flamesResultRevealStyles.button(
            appPalette.border.subtle,
            resultPalette.accent,
          )}
        >
          {flamesContent.result.restartButtonLabel}
        </Button>
      </Stack>
    </FlamesCardShell>
  );
}