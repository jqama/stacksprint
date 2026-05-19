// Import the Playwright testing tools
import { test, expect } from '@playwright/test';

test('homepage has correct title and text', async ({ page }) => {
  // Tell the invisible browser to navigate to our local Next.js app
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  // Assert: Check if the title of the browser tab contains "Next.js"
  await expect(page).toHaveTitle(/Create Next App/);


  // Assert: Check if the page contains a specific heading or link
  // (Next.js 14 default page has a link to "Learn")
   const learnLink = page.getByRole('link', { name: /Learn/i });
   await expect(learnLink).toBeVisible();

});
