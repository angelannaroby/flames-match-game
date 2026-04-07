import { Box } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import { flamesContent } from "../../shared/content/locale";
import { flamesTokens } from "../constants/flames.tokens";
import { useFlamesFlow } from "../hooks/useFlamesFlow";
import {
  FlamesCalculatingState,
  FlamesEntryCard,
  FlamesFloatingHearts,
  FlamesHelpButton,
  FlamesHelpDialog,
  FlamesIntroCard,
  FlamesIntroTitle,
  FlamesResultReveal,
} from "./index";

const MotionBox = motion.create(Box);

export function FlamesHome() {
  const {
    isHelpDialogOpen,
    screenStage,
    result,
    openHelpDialog,
    closeHelpDialog,
    showEntryCard,
    handleEntrySubmit,
    handleRestart,
  } = useFlamesFlow();

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
        <FlamesFloatingHearts />

        <Box
          sx={{
            width: "100%",
            maxWidth: flamesTokens.layout.contentMaxWidth,
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
                transition={{
                  duration: flamesTokens.animation.cardEnterDuration,
                  ease: "easeOut",
                }}
              >
                <FlamesEntryCard onSubmit={handleEntrySubmit} />
              </MotionBox>
            ) : null}

            {!isHelpDialogOpen && screenStage === "calculating" ? (
              <MotionBox
                key="flames-home-calculating"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: flamesTokens.animation.cardExitDuration,
                  ease: "easeOut",
                }}
              >
                <FlamesCalculatingState
                  title={flamesContent.calculating.title}
                  subtitle={flamesContent.calculating.subtitle}
                />
              </MotionBox>
            ) : null}

            {!isHelpDialogOpen && screenStage === "result" && result ? (
              <MotionBox
                key="flames-home-result"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: flamesTokens.animation.cardEnterDuration,
                  ease: "easeOut",
                }}
              >
                <FlamesResultReveal result={result} onRestart={handleRestart} />
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
        closeButtonLabel={flamesContent.help.closeButtonLabel}
        onClose={closeHelpDialog}
      />
    </>
  );
}