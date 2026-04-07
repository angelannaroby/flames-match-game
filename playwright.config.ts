import { defineConfig, devices } from "@playwright/test";

const isDebugMode = process.env.PWDEBUG === "1";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: !isDebugMode,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: isDebugMode ? 1 : process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: isDebugMode ? 2000 : 0,
    },
  },
  webServer: {
    command: "pnpm dev --host 127.0.0.1 --port 4173",
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});