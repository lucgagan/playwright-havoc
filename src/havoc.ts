import { Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

export const havoc = async (page: Page) => {
  await page.route("**/*", async (route) => {
    await setTimeout(500);
    await route.continue();
  });
};
