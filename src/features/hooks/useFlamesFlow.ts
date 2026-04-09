import { useEffect, useState } from "react";

import { flamesTokens } from "../constants/flames.tokens";
import { buildFlamesVisualSteps } from "../lib/buildFlamesVisualSteps";
import type {
  FlamesFormValues,
  FlamesResultKey,
  FlamesScreenStage,
  FlamesVisualStep,
} from "../types/flames.types";

export function useFlamesFlow() {
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);
  const [screenStage, setScreenStage] =
    useState<FlamesScreenStage>("introTitle");
  const [result, setResult] = useState<FlamesResultKey | null>(null);
  const [calculationSteps, setCalculationSteps] = useState<FlamesVisualStep[]>(
    [],
  );

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setScreenStage("introCard");
    }, flamesTokens.animation.introTitleDelayMs);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  const openHelpDialog = () => setIsHelpDialogOpen(true);
  const closeHelpDialog = () => setIsHelpDialogOpen(false);
  const showEntryCard = () => setScreenStage("entry");

  const handleEntrySubmit = (values: FlamesFormValues) => {
    const { steps, result: computedResult } = buildFlamesVisualSteps(
      values.firstPlayerName,
      values.secondPlayerName,
    );

    setResult(computedResult);
    setCalculationSteps(steps);
    setScreenStage("calculating");
  };

  const handleCalculationComplete = () => {
    setScreenStage("result");
  };

  const handleRestart = () => {
    setResult(null);
    setCalculationSteps([]);
    setScreenStage("entry");
  };

  return {
    isHelpDialogOpen,
    screenStage,
    result,
    calculationSteps,
    openHelpDialog,
    closeHelpDialog,
    showEntryCard,
    handleEntrySubmit,
    handleCalculationComplete,
    handleRestart,
  };
}