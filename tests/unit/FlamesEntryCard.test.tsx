import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FlamesEntryCard } from "../../src/features/components";
import { renderWithProviders } from "../../src/test/test-utils";

describe("FlamesEntryCard", () => {
  it("renders form fields and submit button", () => {
    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    expect(screen.getByLabelText("Your name")).toBeInTheDocument();
    expect(screen.getByLabelText("Partner name")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Let's find out" }),
    ).toBeInTheDocument();
  });

  it("keeps submit disabled initially", () => {
    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: "Let's find out" }),
    ).toBeDisabled();
  });

  it("enables submit when both names are valid", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText("Your name"), "Anna");
    await user.type(screen.getByLabelText("Partner name"), "Raj");

    expect(
      screen.getByRole("button", { name: "Let's find out" }),
    ).toBeEnabled();
  });

  it("shows validation messages on submit for invalid values", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    await user.type(screen.getByLabelText("Your name"), "Ann");
    await user.type(screen.getByLabelText("Partner name"), "R@j");

    await user.click(screen.getByRole("button", { name: "Let's find out" }));

    expect(
      screen.getByText(
        "Only letters, spaces, apostrophes, and hyphens are allowed.",
      ),
    ).toBeInTheDocument();
  });

  it("calls onSubmit with normalized values when form is valid", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    renderWithProviders(<FlamesEntryCard onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Your name"), "  Anna   Maria ");
    await user.type(screen.getByLabelText("Partner name"), "  Raj  ");

    await user.click(screen.getByRole("button", { name: "Let's find out" }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      firstPlayerName: "Anna Maria",
      secondPlayerName: "Raj",
    });
  });

  it("clears a field error after the user edits that field again", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    const firstNameInput = screen.getByLabelText("Your name");
    const partnerNameInput = screen.getByLabelText("Partner name");

    await user.type(firstNameInput, "An@");
    await user.type(partnerNameInput, "Raj");
    await user.click(screen.getByRole("button", { name: "Let's find out" }));

    expect(
      screen.getByText(
        "Only letters, spaces, apostrophes, and hyphens are allowed.",
      ),
    ).toBeInTheDocument();

    await user.clear(firstNameInput);
    await user.type(firstNameInput, "Anna");

    expect(
      screen.queryByText(
        "Only letters, spaces, apostrophes, and hyphens are allowed.",
      ),
    ).not.toBeInTheDocument();
  });
});