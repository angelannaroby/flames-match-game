import { screen } from "@testing-library/react";

import { FlamesCalculatingState } from "../../src/features/components";
import { renderWithProviders } from "../../src/test/test-utils";

describe("FlamesCalculatingState", () => {
  it("renders the provided title and subtitle", () => {
    renderWithProviders(
      <FlamesCalculatingState
        title="Calculating your FLAMES..."
        subtitle="Let the names do their magic."
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Calculating your FLAMES..." }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Let the names do their magic."),
    ).toBeInTheDocument();
  });

  it("exposes a polite live status region", () => {
    renderWithProviders(
      <FlamesCalculatingState
        title="Calculating your FLAMES..."
        subtitle="Let the names do their magic."
      />,
    );

    const status = screen.getByRole("status");

    expect(status).toBeInTheDocument();
    expect(status).toHaveAttribute("aria-live", "polite");
  });
});