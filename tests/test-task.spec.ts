import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/en";

test.beforeEach(async ({ page }) => {
  await page.goto("https://mapon.com/test-task/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/Contact form/);
});

test("mandatory fields test", async ({ page }) => {
  const email = faker.internet.exampleEmail();
  const text = faker.lorem.text();

  await page.locator("#email").fill(email);
  await page.locator("#message").fill(text);

  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("xpath=/html/body/p[1]")).toHaveText(
    "Message sent!"
  );
});
