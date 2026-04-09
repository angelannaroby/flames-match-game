import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { FlamesEntryCard } from "../../src/features/components";
import { flamesContent } from "../../src/shared/content/locale";
import { renderWithProviders } from "../../src/test/test-utils";

describe("FlamesEntryCard", () => {
  it("renders form fields and submit button", () => {
    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    expect(
      screen.getByLabelText(flamesContent.form.firstNameLabel),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(flamesContent.form.secondNameLabel),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    ).toBeInTheDocument();
  });

  it("keeps submit disabled initially", () => {
    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    ).toBeDisabled();
  });

  it("enables submit when both names are valid", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    await user.type(
      screen.getByLabelText(flamesContent.form.firstNameLabel),
      "Anna",
    );
    await user.type(
      screen.getByLabelText(flamesContent.form.secondNameLabel),
      "Raj",
    );

    expect(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    ).toBeEnabled();
  });

  it("shows validation messages on submit for invalid values", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    await user.type(
      screen.getByLabelText(flamesContent.form.firstNameLabel),
      "Ann",
    );
    await user.type(
      screen.getByLabelText(flamesContent.form.secondNameLabel),
      "R@j",
    );

    await user.click(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    );

    expect(
      screen.getByText(flamesContent.validation.lettersOnly),
    ).toBeInTheDocument();
  });

  it("calls onSubmit with normalized values when form is valid", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    renderWithProviders(<FlamesEntryCard onSubmit={onSubmit} />);

    await user.type(
      screen.getByLabelText(flamesContent.form.firstNameLabel),
      "  Anna   Maria ",
    );
    await user.type(
      screen.getByLabelText(flamesContent.form.secondNameLabel),
      "  Raj  ",
    );

    await user.click(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      firstPlayerName: "Anna Maria",
      secondPlayerName: "Raj",
    });
  });

  it("clears a field error after the user edits that field again", async () => {
    const user = userEvent.setup();

    renderWithProviders(<FlamesEntryCard onSubmit={vi.fn()} />);

    const firstNameInput = screen.getByLabelText(flamesContent.form.firstNameLabel);
    const partnerNameInput = screen.getByLabelText(
      flamesContent.form.secondNameLabel,
    );

    await user.type(firstNameInput, "An@");
    await user.type(partnerNameInput, "Raj");
    await user.click(
      screen.getByRole("button", { name: flamesContent.form.submitButtonLabel }),
    );

    expect(
      screen.getByText(flamesContent.validation.lettersOnly),
    ).toBeInTheDocument();

    await user.clear(firstNameInput);
    await user.type(firstNameInput, "Anna");

    expect(
      screen.queryByText(flamesContent.validation.lettersOnly),
    ).not.toBeInTheDocument();
  });
});