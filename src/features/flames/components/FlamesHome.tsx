import { useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

import { flamesContent } from "../../../shared/content/locale";
import { FlamesHelpButton } from "./FlamesHelpButton";
import { FlamesHelpDialog } from "./FlamesHelpDialog";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export function FlamesHome() {
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);

  const titleLetters = useMemo(
    () => flamesContent.home.title.split(""),
    [],
  );

  const openHelpDialog = () => {
    setIsHelpDialogOpen(true);
  };

  const closeHelpDialog = () => {
    setIsHelpDialogOpen(false);
  };

  return (
    <>
      <MotionBox
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 720,
          mx: "auto",
        }}
      >
        <Stack spacing={3} alignItems="center" textAlign="center">
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

          <MotionTypography
            variant="h6"
            color="text.secondary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
            sx={{
              maxWidth: 520,
              fontWeight: 400,
            }}
          >
            {flamesContent.home.subtitle}
          </MotionTypography>
        </Stack>
      </MotionBox>

      <FlamesHelpButton
        label={flamesContent.help.buttonLabel}
        onClick={openHelpDialog}
      />

      <FlamesHelpDialog
        open={isHelpDialogOpen}
        title={flamesContent.help.dialogTitle}
        steps={flamesContent.help.steps}
        closeButtonLabel={flamesContent.help.closeButtonLabel}
        onClose={closeHelpDialog}
      />
    </>
  );
}