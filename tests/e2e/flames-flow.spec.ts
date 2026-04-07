import { expect, test } from "@playwright/test";

test.describe("FLAMES app flow", () => {
  test("completes the main journey from intro to result and restart", async ({
    page,
  }) => {
    await page.goto("/?debug=1");

    await expect(
      page.getByRole("heading", { name: "FLAMES" }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Welcome to FLAMES" }),
    ).toBeVisible({ timeout: 5000 });

    await page.getByRole("button", { name: "Excited !!" }).click();

    await expect(page.getByLabel("Your name")).toBeVisible();
    await expect(page.getByLabel("Partner name")).toBeVisible();

    const submitButton = page.getByRole("button", {
      name: "Let's find out",
    });

    await expect(submitButton).toBeDisabled();

    await page.getByLabel("Your name").fill("Anna");
    await page.getByLabel("Partner name").fill("Raj");

    await expect(submitButton).toBeEnabled();
    await submitButton.click();

    await expect(
      page.getByRole("heading", { name: "Calculating your FLAMES..." }),
    ).toBeVisible();

    await expect(
      page.getByText("Let the names do their magic."),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        name: /Friends|Love|Affection|Marriage|Enemies|Siblings/i,
      }),
    ).toBeVisible({ timeout: 7000 });

    await expect(
      page.getByRole("button", { name: "Try again" }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Try again" }).click();

    await expect(page.getByLabel("Your name")).toBeVisible();
    await expect(page.getByLabel("Partner name")).toBeVisible();
  });

  test("opens and closes the help dialog", async ({ page }) => {
    await page.goto("/?debug=1");

    const helpButton = page.getByRole("button", { name: "Help" });

    await expect(helpButton).toBeVisible();
    await helpButton.click();

    await expect(
      page.getByRole("heading", { name: "How to play FLAMES" }),
    ).toBeVisible();

    await expect(page.getByText("How it works")).toBeVisible();
    await expect(page.getByText("Little rules")).toBeVisible();

    await page.getByRole("button", { name: "Close" }).click();

    await expect(
      page.getByRole("heading", { name: "How to play FLAMES" }),
    ).not.toBeVisible();
  });
});