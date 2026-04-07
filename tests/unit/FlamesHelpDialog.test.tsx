import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FlamesHelpDialog } from "../../src/features/components";
import { renderWithProviders } from "../../src/test/test-utils";

describe("FlamesHelpDialog", () => {
  it("renders nothing visible when closed", () => {
    renderWithProviders(
      <FlamesHelpDialog
        open={false}
        title="How to play FLAMES"
        closeButtonLabel="Close"
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("heading", { name: "How to play FLAMES" }),
    ).not.toBeInTheDocument();
  });

  it("renders dialog content when open", () => {
    renderWithProviders(
      <FlamesHelpDialog
        open
        title="How to play FLAMES"
        closeButtonLabel="Close"
        onClose={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "How to play FLAMES" }),
    ).toBeInTheDocument();

    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Little rules")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderWithProviders(
      <FlamesHelpDialog
        open
        title="How to play FLAMES"
        closeButtonLabel="Close"
        onClose={onClose}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Close" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("has accessible dialog labelling", () => {
    renderWithProviders(
      <FlamesHelpDialog
        open
        title="How to play FLAMES"
        closeButtonLabel="Close"
        onClose={vi.fn()}
      />,
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog).toHaveAttribute("aria-labelledby", "flames-help-dialog-title");
    expect(dialog).toHaveAttribute(
      "aria-describedby",
      "flames-help-dialog-description",
    );
  });
});