import { test, expect } from "@playwright/test";

test("Starting point", async ({ page }) => {
  console.log(page);
  console.log("Hello World");
});
