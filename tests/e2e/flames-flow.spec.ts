import { expect, test } from "@playwright/test";

test.describe("FLAMES app flow", () => {
  test("completes the main journey from intro to result and restart", async ({
    page,
  }) => {
    // The calculation includes deliberately animated stages.
    test.setTimeout(120_000);
    await page.goto("/");

    // The opening FLAMES animation uses one heading per letter, not one
    // accessible heading named "FLAMES". Wait for the actual intro card.
    await expect(
      page.getByRole("heading", { name: "Welcome to FLAMES" }),
    ).toBeVisible({ timeout: 15_000 });
    await page.getByRole("button", { name: "Excited !!" }).click();

    const yourName = page.getByRole("textbox", { name: "Your name" });
    const partnerName = page.getByRole("textbox", { name: "Partner name" });
    const submitButton = page.getByRole("button", { name: "Let's find out" });

    await expect(yourName).toBeVisible();
    await expect(partnerName).toBeVisible();
    await expect(submitButton).toBeDisabled();

    await yourName.fill("Anna");
    await partnerName.fill("Raj");
    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    // Verify the calculation screen without relying on temporary headings.
    await expect(page.getByRole("status")).toBeVisible({ timeout: 10_000 });

    // The result is persistent, unlike the intermediate animation text.
    const restartButton = page.getByRole("button", { name: "Try again" });
    await expect(restartButton).toBeVisible({ timeout: 110_000 });
    await expect(
      page.getByText("Your result is", { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: /^(Friends|Love|Affection|Marriage|Enemies|Siblings)$/,
      }),
    ).toBeVisible();

    await restartButton.click();
    await expect(yourName).toBeVisible();
    await expect(partnerName).toBeVisible();
    await expect(yourName).toBeEmpty();
    await expect(partnerName).toBeEmpty();
    await expect(submitButton).toBeDisabled();
    await expect(restartButton).toHaveCount(0);
  });

  test("opens and closes the help dialog", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Help" }).click();

    const helpDialog = page.getByRole("dialog");
    await expect(helpDialog).toBeVisible();
    await expect(
      helpDialog.getByRole("heading", { name: "How to play FLAMES" }),
    ).toBeVisible();
    await expect(helpDialog.getByText("How it works")).toBeVisible();
    await expect(helpDialog.getByText("Little rules")).toBeVisible();

    await helpDialog.getByRole("button", { name: "Close" }).click();
    await expect(helpDialog).toHaveCount(0);
  });
});
