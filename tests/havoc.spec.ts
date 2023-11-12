import { expect, test } from "@playwright/test";
import { havoc } from "../src/havoc";
import timeSpan from "time-span";

test("loads page quickly", async ({ page }) => {
  const time = timeSpan();

  await page.goto("/");

  expect(time()).toBeLessThan(500);
});

test("loads page with a delay", async ({ page }) => {
  await havoc(page);

  const time = timeSpan();

  await page.goto("/");

  expect(time()).toBeGreaterThan(500);
});
