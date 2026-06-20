import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('Mohammed');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('Test@123');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();
    await page.locator('[data-test="error"]').click();
    await page.locator('[data-test="error"]').click();
    await page.locator('[data-test="error"]').click();
    await page.locator('[data-test="error"]').click();
});