import { useEffect, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";

import { flamesContent } from "../../shared/content/locale";
import { flamesCalculatingStateStyles } from "../styles/flamesCalculatingState.styles";
import type {
  FlamesVisualLetter,
  FlamesVisualStep,
} from "../types/flames.types";
import { FlamesCardShell } from "./FlamesCardShell";

type FlamesCalculatingStateProps = {
  steps: FlamesVisualStep[];
  onComplete: () => void;
};

const MotionBox = motion.create(Box);

function LetterChip({
  letter,
  variant,
  dense = false,
}: {
  letter: FlamesVisualLetter;
  variant: "name" | "remaining" | "flames";
  dense?: boolean;
}) {
  const isRemoved = letter.state === "removed";

  const getSx = () => {

    if (variant === "flames") {
      return flamesCalculatingStateStyles.flamesLetterChip(letter.state);
    }

    return flamesCalculatingStateStyles.nameLetterChip(letter.state, dense);
  };

  return (
    <MotionBox
      layout="position"
      initial={false}
      animate={{
        scale: letter.state === "active" ? 1.03 : 1,
        opacity: isRemoved ? (variant === "flames" ? 0.22 : 0.32) : 1,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      sx={getSx()}
    >
      <Typography
        component="span"
        sx={{
          fontWeight: 700,
          fontSize:
            variant === "flames"
              ? "1.3rem"
              : variant === "remaining"
                ? "0.92rem"
                : dense
                  ? "0.92rem"
                  : "0.98rem",
          lineHeight: 1,
        }}
      >
        {letter.value}
      </Typography>

      {isRemoved && variant !== "remaining" ? (
        <MotionBox
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          sx={flamesCalculatingStateStyles.strikeLine}
        />
      ) : null}
    </MotionBox>
  );
}

function RowLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        ...flamesCalculatingStateStyles.sectionLabel,
        mb: 0.75,
      }}
    >
      {children}
    </Typography>
  );
}

function StatusPill({ message }: { message?: string }) {
  return (
    <Box sx={flamesCalculatingStateStyles.statusPill}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 700,
          lineHeight: 1.35,
          color: "text.primary",
          opacity: message ? 1 : 0,
          transition: "opacity 180ms ease",
          minHeight: 20,
        }}
      >
        {message ?? ""}
      </Typography>
    </Box>
  );
}

function NameLetterRow({
  letters,
  label,
  tone,
}: {
  letters: FlamesVisualLetter[];
  label: string;
  tone: "primary" | "secondary";
}) {
  const isDense = letters.length >= 10;

  return (
    <Box sx={flamesCalculatingStateStyles.nameGroupWrap(tone)}>
      <RowLabel>{label}</RowLabel>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: isDense ? 0.75 : 1,
          flexWrap: "wrap",
          minHeight: isDense ? 96 : 58,
        }}
      >
        {letters.map((letter) => (
          <LetterChip
            key={letter.id}
            letter={letter}
            variant="name"
            dense={isDense}
          />
        ))}
      </Box>
    </Box>
  );
}

function FlamesLetterRow({ letters }: { letters: FlamesVisualLetter[] }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1.15,
          flexWrap: "wrap",
          minHeight: 84,
        }}
      >
        {letters.map((letter) => (
          <LetterChip key={letter.id} letter={letter} variant="flames" />
        ))}
      </Box>
    </Box>
  );
}

function MatchingStage({
  step,
}: {
  step: FlamesVisualStep;
}) {
  return (
    <Stack
      spacing={1.5}
      alignItems="center"
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
      }}
    >
      <Stack alignItems="center">
        <Typography
          variant="h4"
          sx={{
            ...flamesCalculatingStateStyles.title,
            maxWidth: 560,
            textAlign: "center",
          }}
        >
          {step.title}
        </Typography>
      </Stack>

      <StatusPill message={step.message} />

      <Stack spacing={1.} sx={{ width: "100%" }}>
        <NameLetterRow
          label={flamesContent.calculating.firstNameLabel}
          letters={step.firstNameLetters}
          tone="primary"
        />

        <NameLetterRow
          label={flamesContent.calculating.secondNameLabel}
          letters={step.secondNameLetters}
          tone="secondary"
        />
      </Stack>

      <Stack spacing={0.75} alignItems="center">
        <RowLabel>{flamesContent.calculating.remainingCountLabel}</RowLabel>

        <Box
          sx={{
            ...flamesCalculatingStateStyles.countWrap,
            minWidth: 112,
            px: 2.8,
            py: 1.35,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              ...flamesCalculatingStateStyles.remainingCountValue,
              fontSize: { xs: "2.5rem", sm: "3rem" },
            }}
          >
            {step.remainingCount}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

function RevealOverlay({ remainingCount }: { remainingCount: number }) {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      sx={flamesCalculatingStateStyles.revealOverlay}
    >
      <MotionBox
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.36, ease: "easeOut" }}
        sx={flamesCalculatingStateStyles.revealPanel}
      >
        <Stack spacing={2} alignItems="center">
          <MotionBox
            initial={{ scale: 0.84, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.26 }}
            sx={{
              ...flamesCalculatingStateStyles.countWrap,
              minWidth: 136,
              px: 3,
              py: 1.55,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                ...flamesCalculatingStateStyles.remainingCountValue,
                fontSize: { xs: "2.8rem", sm: "3.2rem" },
              }}
            >
              {remainingCount}
            </Typography>
          </MotionBox>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            Now we count through FLAMES.
          </Typography>
        </Stack>
      </MotionBox>
    </MotionBox>
  );
}

function FlamesStage({ step }: { step: FlamesVisualStep }) {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
      }}
    >
      {typeof step.currentCountNumber === "number" ? (
        <Box>
          <Typography
            variant="h2"
            sx={{
              ...flamesCalculatingStateStyles.countingNumber,
              fontSize: { xs: "3.2rem", sm: "3.8rem" },
            }}
          >
            {step.currentCountNumber}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ height: 72 }} />
      )}

      <FlamesLetterRow letters={step.flamesLetters} />
    </Stack>
  );
}

export function FlamesCalculatingState({
  steps,
  onComplete,
}: FlamesCalculatingStateProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isRevealVisible, setIsRevealVisible] = useState(false);

  const safeSteps = useMemo(() => steps ?? [], [steps]);
  const currentStep = safeSteps[stepIndex];

  const isMatchingStage =
    currentStep?.phase === "matchingScan" ||
    currentStep?.phase === "matchingPair" ||
    currentStep?.phase === "matchingStrike" ||
    currentStep?.phase === "matchingNoMatch";

  const isFlamesStage =
    currentStep?.phase === "flamesCounting" ||
    currentStep?.phase === "flamesEliminated" ||
    currentStep?.phase === "final";

  useEffect(() => {
    setStepIndex(0);
    setIsRevealVisible(false);
  }, [safeSteps]);

  useEffect(() => {
    if (!currentStep || safeSteps.length === 0) {
      return;
    }

    if (currentStep.phase === "transitionToFlames") {
      setIsRevealVisible(true);

      const timer = window.setTimeout(() => {
        setIsRevealVisible(false);
        setStepIndex((previousStepIndex) => previousStepIndex + 1);
      }, currentStep.stepDurationMs);

      return () => {
        window.clearTimeout(timer);
      };
    }

    if (stepIndex >= safeSteps.length - 1) {
      const completeTimer = window.setTimeout(() => {
        onComplete();
      }, currentStep.stepDurationMs);

      return () => {
        window.clearTimeout(completeTimer);
      };
    }

    const stepTimer = window.setTimeout(() => {
      setStepIndex((previousStepIndex) => previousStepIndex + 1);
    }, currentStep.stepDurationMs);

    return () => {
      window.clearTimeout(stepTimer);
    };
  }, [currentStep, onComplete, safeSteps.length, stepIndex]);

  if (!currentStep) {
    return null;
  }

  return (
    <FlamesCardShell>
      <Stack
        role="status"
        aria-live="polite"
        alignItems="center"
        textAlign="center"
        sx={flamesCalculatingStateStyles.stack}
      >
        <Box
          sx={{
            ...flamesCalculatingStateStyles.content,
            position: "relative",
          }}
        >
          {!isFlamesStage ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: { xs: 1, sm: 1.5 },
                  py: { xs: 3, sm: 3.5 },
                }}
              >
                {isMatchingStage ? (
                  <Box sx={{ width: "100%" }}>
                    <MatchingStage step={currentStep} />
                  </Box>
                ) : null}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  pb: { xs: 0.25, sm: 0.5 },
                }}
              >
                <Box sx={flamesCalculatingStateStyles.progressTrack}>
                  <MotionBox
                    animate={{
                      width: `${((stepIndex + 1) / safeSteps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    sx={flamesCalculatingStateStyles.progressBar}
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, sm: 3 },
                pb: { xs: 4.5, sm: 5.5 },
              }}
            >
              <Box sx={flamesCalculatingStateStyles.flamesStageWrap}>
                <FlamesStage step={currentStep} />
              </Box>
            </Box>
          )}

          <AnimatePresence>
            {isRevealVisible ? (
              <RevealOverlay remainingCount={currentStep.remainingCount} />
            ) : null}
          </AnimatePresence>
        </Box>
      </Stack>
    </FlamesCardShell>
  );
}