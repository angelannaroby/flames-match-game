import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import { flamesContent } from "../../../shared/content/locale";
import type { FlamesFormValues, FlamesScreenStage } from "../types/flames.types";
import {
  FlamesEntryCard,
  FlamesHelpButton,
  FlamesHelpDialog,
  FlamesIntroCard,
  FlamesIntroTitle,
} from "./index";

const MotionBox = motion.create(Box);

export function FlamesHome() {
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);
  const [screenStage, setScreenStage] = useState<FlamesScreenStage>("introTitle");

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setScreenStage("introCard");
    }, 2200);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  const openHelpDialog = () => {
    setIsHelpDialogOpen(true);
  };

  const closeHelpDialog = () => {
    setIsHelpDialogOpen(false);
  };

  const showEntryCard = () => {
    setScreenStage("entry");
  };

  const handleEntrySubmit = (values: FlamesFormValues) => {
    console.log("Submitted names:", values);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 720,
            mx: "auto",
          }}
        >
          <AnimatePresence mode="wait">
            {!isHelpDialogOpen && screenStage === "introTitle" ? (
              <FlamesIntroTitle
                key="flames-home-intro-title"
                title={flamesContent.home.title}
              />
            ) : null}

            {!isHelpDialogOpen && screenStage === "introCard" ? (
              <FlamesIntroCard
                key="flames-home-intro-card"
                title={flamesContent.intro.title}
                description={flamesContent.intro.description}
                buttonLabel={flamesContent.intro.buttonLabel}
                onContinue={showEntryCard}
              />
            ) : null}

            {!isHelpDialogOpen && screenStage === "entry" ? (
              <MotionBox
                key="flames-home-entry"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <FlamesEntryCard onSubmit={handleEntrySubmit} />
              </MotionBox>
            ) : null}
          </AnimatePresence>
        </Box>
      </Box>

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