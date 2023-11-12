import { Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

// utility for generating a random number between min and max
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const havoc = async (page: Page) => {
  await page.route("**/*", async (route) => {
    await setTimeout(random(500, 1000));
    await route.continue();
  });
};
