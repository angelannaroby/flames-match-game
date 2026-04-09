import { screen } from "@testing-library/react";
import { vi } from "vitest";

import { FlamesCalculatingState } from "../../src/features/components";
import type { FlamesVisualStep } from "../../src/features/types/flames.types";
import { renderWithProviders } from "../../src/test/test-utils";

describe("FlamesCalculatingState", () => {
  const baseStep: FlamesVisualStep = {
    phase: "matchingScan",
    title: "Checking letters",
    subtitle: "",
    message: "Looking for a match",
    remainingCount: 6,
    stepDurationMs: 1000,
    firstNameLetters: [
      { id: "f-1", value: "A", state: "idle" },
      { id: "f-2", value: "N", state: "active" },
    ],
    secondNameLetters: [
      { id: "s-1", value: "R", state: "idle" },
      { id: "s-2", value: "A", state: "idle" },
    ],
    remainingLetters: [
      { id: "r-1", value: "A", state: "survived" },
      { id: "r-2", value: "N", state: "survived" },
      { id: "r-3", value: "N", state: "survived" },
      { id: "r-4", value: "A", state: "survived" },
      { id: "r-5", value: "R", state: "survived" },
      { id: "r-6", value: "A", state: "survived" },
    ],
    flamesLetters: [
      { id: "l-1", value: "F", state: "idle" },
      { id: "l-2", value: "L", state: "idle" },
      { id: "l-3", value: "A", state: "idle" },
      { id: "l-4", value: "M", state: "idle" },
      { id: "l-5", value: "E", state: "idle" },
      { id: "l-6", value: "S", state: "idle" },
    ],
  };

  it("renders the current step title and message", () => {
    renderWithProviders(
      <FlamesCalculatingState steps={[baseStep]} onComplete={vi.fn()} />,
    );

    expect(
      screen.getByRole("heading", { name: "Checking letters" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Looking for a match")).toBeInTheDocument();
  });

  it("exposes a polite live status region", () => {
    renderWithProviders(
      <FlamesCalculatingState steps={[baseStep]} onComplete={vi.fn()} />,
    );

    const status = screen.getByRole("status");

    expect(status).toBeInTheDocument();
    expect(status).toHaveAttribute("aria-live", "polite");
  });
});