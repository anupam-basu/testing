import { defineConfig, devices, TraceMode } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./test/",
  /* Run tests in files in parallel */
  fullyParallel: false,
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 100000000,

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chrome",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
