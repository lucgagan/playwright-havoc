# Playwright Flakiness Detector (Havoc)

A tool for automatically identifying and analyzing flaky tests in your Playwright test suite.

## Setup

1. Install `playwright-havoc` dependency:

```bash
$ npm install playwright-havoc -D
```

2. Import and use the `havoc` function:

```ts
import { test } from "@playwright/test";
import { havoc } from "playwright-havoc";

test.beforeEach(async ({ page }) => {
  await havoc(page);
});
```

## How does it work?

In short, it is designed to cause havoc in your test suite. It does this by intercepting and randomly modifying HTTP response times. It then analyzes the results to determine if any tests are flaky.
