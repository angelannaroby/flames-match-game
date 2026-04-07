import { useEffect, useRef, useState } from "react";

import { calculateFlamesResult } from "../lib/calculateFlamesResult";
import { flamesTokens } from "../constants/flames.tokens";
import type {
  FlamesFormValues,
  FlamesResultKey,
  FlamesScreenStage,
} from "../types/flames.types";

export function useFlamesFlow() {
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);
  const [screenStage, setScreenStage] =
    useState<FlamesScreenStage>("introTitle");
  const [result, setResult] = useState<FlamesResultKey | null>(null);

  const resultTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setScreenStage("introCard");
    }, flamesTokens.animation.introTitleDelayMs);

    return () => {
      window.clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (resultTimerRef.current !== null) {
        window.clearTimeout(resultTimerRef.current);
      }
    };
  }, []);

  const openHelpDialog = () => setIsHelpDialogOpen(true);
  const closeHelpDialog = () => setIsHelpDialogOpen(false);
  const showEntryCard = () => setScreenStage("entry");

  const handleEntrySubmit = (values: FlamesFormValues) => {
    const computedResult = calculateFlamesResult(
      values.firstPlayerName,
      values.secondPlayerName,
    );

    setScreenStage("calculating");

    resultTimerRef.current = window.setTimeout(() => {
      setResult(computedResult);
      setScreenStage("result");
    }, flamesTokens.animation.resultRevealDelayMs);
  };

  const handleRestart = () => {
    setResult(null);
    setScreenStage("entry");
  };

  return {
    isHelpDialogOpen,
    screenStage,
    result,
    openHelpDialog,
    closeHelpDialog,
    showEntryCard,
    handleEntrySubmit,
    handleRestart,
  };
}