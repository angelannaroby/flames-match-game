import { flamesContent } from "../../shared/content/locale";
import { flamesTokens } from "../constants/flames.tokens";
import { FLAMES_RESULT_SEQUENCE } from "../constants/flames.constants";
import type {
  FlamesResultKey,
  FlamesVisualLetter,
  FlamesVisualLetterState,
  FlamesVisualStep,
} from "../types/flames.types";

type WorkingLetter = {
  id: string;
  value: string;
  state: FlamesVisualLetterState;
  isAvailable: boolean;
};

function sanitizeName(name: string) {
  return name.replace(/\s/g, "").toUpperCase();
}

function createWorkingLetters(name: string, prefix: "first" | "second") {
  return sanitizeName(name).split("").map<WorkingLetter>((letter, index) => ({
    id: `${prefix}-${letter}-${index}`,
    value: letter,
    state: "idle",
    isAvailable: true,
  }));
}

function toVisualLetters(letters: WorkingLetter[]): FlamesVisualLetter[] {
  return letters.map((letter) => ({
    id: letter.id,
    value: letter.value,
    state: letter.state,
  }));
}

function getRemainingLetters(
  firstNameLetters: WorkingLetter[],
  secondNameLetters: WorkingLetter[],
): FlamesVisualLetter[] {
  return [...firstNameLetters, ...secondNameLetters]
    .filter((letter) => letter.isAvailable)
    .map((letter) => ({
      id: `remaining-${letter.id}`,
      value: letter.value,
      state: "survived" as const,
    }));
}

function getRemainingCount(
  firstNameLetters: WorkingLetter[],
  secondNameLetters: WorkingLetter[],
) {
  return (
    firstNameLetters.filter((letter) => letter.isAvailable).length +
    secondNameLetters.filter((letter) => letter.isAvailable).length
  );
}

function createFlamesLetters(
  activeIndex: number | null,
  removedIndices: number[],
): FlamesVisualLetter[] {
  return FLAMES_RESULT_SEQUENCE.map((resultKey, index) => {
    const isRemoved = removedIndices.includes(index);

    let state: FlamesVisualLetterState = "idle";

    if (isRemoved) {
      state = "removed";
    } else if (activeIndex === index) {
      state = "active";
    } else {
      state = "survived";
    }

    return {
      id: resultKey,
      value: resultKey.charAt(0).toUpperCase(),
      state,
    };
  });
}

function calculateFlamesResultFromCount(count: number): FlamesResultKey {
  const sequence = [...FLAMES_RESULT_SEQUENCE];
  let index = 0;

  while (sequence.length > 1) {
    index = (index + count - 1) % sequence.length;
    sequence.splice(index, 1);
  }

  return sequence[0];
}

export function buildFlamesVisualSteps(
  firstName: string,
  secondName: string,
): {
  steps: FlamesVisualStep[];
  result: FlamesResultKey;
} {
  const firstNameLetters = createWorkingLetters(firstName, "first");
  const secondNameLetters = createWorkingLetters(secondName, "second");

  const steps: FlamesVisualStep[] = [];

  const pushStep = (
    step: Omit<FlamesVisualStep, "remainingLetters" | "remainingCount">,
  ) => {
    steps.push({
      ...step,
      remainingLetters: getRemainingLetters(firstNameLetters, secondNameLetters),
      remainingCount: getRemainingCount(firstNameLetters, secondNameLetters),
    });
  };

  for (let firstIndex = 0; firstIndex < firstNameLetters.length; firstIndex += 1) {
    const firstLetter = firstNameLetters[firstIndex];

    if (!firstLetter.isAvailable) {
      continue;
    }

    firstLetter.state = "active";

    pushStep({
      phase: "matchingScan",
      title: flamesContent.calculating.matchingTitle,
      subtitle: flamesContent.calculating.matchingSubtitle,
      message: `Checking ${firstLetter.value}...`,
      firstNameLetters: toVisualLetters(firstNameLetters),
      secondNameLetters: toVisualLetters(secondNameLetters),
      flamesLetters: [],
      stepDurationMs: flamesTokens.animation.matchingScanDurationMs,
    });

    const matchingSecondIndex = secondNameLetters.findIndex(
      (secondLetter) =>
        secondLetter.isAvailable && secondLetter.value === firstLetter.value,
    );

    if (matchingSecondIndex === -1) {
      pushStep({
        phase: "matchingNoMatch",
        title: flamesContent.calculating.matchingTitle,
        subtitle: flamesContent.calculating.matchingSubtitle,
        message: `No pair found for ${firstLetter.value}`,
        firstNameLetters: toVisualLetters(firstNameLetters),
        secondNameLetters: toVisualLetters(secondNameLetters),
        flamesLetters: [],
        stepDurationMs: flamesTokens.animation.matchingNoMatchDurationMs,
      });

      firstLetter.state = "idle";
      continue;
    }

    const secondLetter = secondNameLetters[matchingSecondIndex];
    secondLetter.state = "matched";

    pushStep({
      phase: "matchingPair",
      title: flamesContent.calculating.matchingTitle,
      subtitle: flamesContent.calculating.matchingSubtitle,
      message: `Match found: ${firstLetter.value}`,
      firstNameLetters: toVisualLetters(firstNameLetters),
      secondNameLetters: toVisualLetters(secondNameLetters),
      flamesLetters: [],
      stepDurationMs: flamesTokens.animation.matchingPairFocusDurationMs,
    });

    firstLetter.state = "removed";
    firstLetter.isAvailable = false;
    secondLetter.state = "removed";
    secondLetter.isAvailable = false;

    pushStep({
      phase: "matchingStrike",
      title: flamesContent.calculating.matchingTitle,
      subtitle: flamesContent.calculating.matchingSubtitle,
      message: `Crossing out ${firstLetter.value}`,
      firstNameLetters: toVisualLetters(firstNameLetters),
      secondNameLetters: toVisualLetters(secondNameLetters),
      flamesLetters: [],
      stepDurationMs: flamesTokens.animation.matchingStrikeDurationMs,
    });
  }

  firstNameLetters.forEach((letter) => {
    if (letter.isAvailable) {
      letter.state = "survived";
    }
  });

  secondNameLetters.forEach((letter) => {
    if (letter.isAvailable) {
      letter.state = "survived";
    }
  });

  pushStep({
    phase: "transitionToFlames",
    title: flamesContent.calculating.transitionTitle,
    subtitle: flamesContent.calculating.transitionSubtitle,
    message: undefined,
    firstNameLetters: [],
    secondNameLetters: [],
    flamesLetters: createFlamesLetters(null, []),
    stepDurationMs: flamesTokens.animation.revealDurationMs,
  });

  const remainingCount = getRemainingCount(firstNameLetters, secondNameLetters);
  const activeSequence = [...FLAMES_RESULT_SEQUENCE];
  const removedFlamesIndices: number[] = [];
  let currentIndex = 0;

  while (activeSequence.length > 1) {
    const removeAtIndex =
      (currentIndex + remainingCount - 1) % activeSequence.length;
    const activeKey = activeSequence[removeAtIndex];
    const activeOriginalIndex = FLAMES_RESULT_SEQUENCE.indexOf(activeKey);

    for (let countStep = 1; countStep <= remainingCount; countStep += 1) {
      const highlightedIndex =
        (currentIndex + countStep - 1) % activeSequence.length;
      const highlightedKey = activeSequence[highlightedIndex];
      const highlightedOriginalIndex =
        FLAMES_RESULT_SEQUENCE.indexOf(highlightedKey);

      pushStep({
        phase: "flamesCounting",
        title: flamesContent.calculating.flamesStartTitle,
        subtitle: flamesContent.calculating.flamesStartSubtitle,
        message: undefined,
        firstNameLetters: [],
        secondNameLetters: [],
        flamesLetters: createFlamesLetters(
          highlightedOriginalIndex,
          removedFlamesIndices,
        ),
        currentCountNumber: countStep,
        stepDurationMs: flamesTokens.animation.flamesCountStepDurationMs,
      });
    }

    removedFlamesIndices.push(activeOriginalIndex);
    removedFlamesIndices.sort((left, right) => left - right);
    activeSequence.splice(removeAtIndex, 1);

    pushStep({
      phase: "flamesEliminated",
      title: flamesContent.calculating.flamesStrikeTitle,
      subtitle: flamesContent.calculating.flamesStrikeSubtitle,
      message: undefined,
      firstNameLetters: [],
      secondNameLetters: [],
      flamesLetters: createFlamesLetters(null, removedFlamesIndices),
      stepDurationMs: flamesTokens.animation.flamesEliminationDurationMs,
    });

    currentIndex =
      activeSequence.length === 0 ? 0 : removeAtIndex % activeSequence.length;
  }

  const result = calculateFlamesResultFromCount(remainingCount);
  const finalOriginalIndex = FLAMES_RESULT_SEQUENCE.indexOf(result);

  pushStep({
    phase: "final",
    title: flamesContent.calculating.finalStepTitle,
    subtitle: flamesContent.calculating.finalStepSubtitle,
    message: undefined,
    firstNameLetters: [],
    secondNameLetters: [],
    flamesLetters: createFlamesLetters(finalOriginalIndex, removedFlamesIndices),
    stepDurationMs: flamesTokens.animation.finalPauseMs,
  });

  return {
    steps,
    result,
  };
}