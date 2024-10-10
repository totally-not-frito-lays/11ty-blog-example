// @ts-check
const { test, expect } = require('@playwright/test');
const port = process.env.PORT || 8080;

// test('asserts that codespaces open port is working', async ({ page }) => {
//   await page.goto(`https://friendly-xylophone-vp49j6g69jwcr9p-${port}.app.github.dev/`);
//   await expect(page).toHaveTitle(/Codespaces Access Port/);
// });

test('has title', async ({ page }) => {
  await page.goto(`http://localhost:${port}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Eleventy Base Blog v8/);
});

// test('get started link', async ({ page }) => {
//   await page.goto(`https://friendly-xylophone-vp49j6g69jwcr9p-${port}.app.github.dev/`);

//   // Click the get started link.
//   await page.getByRole('link', { name: 'This is a fifth post (draft)' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'This is a fifth post (draft)' })).toBeVisible();
// });
