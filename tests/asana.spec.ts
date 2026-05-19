import {test, expect } from '@playwright/test';

test("user can login", async ({ page }) => {

    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    
    const usernameInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    const signInButton = page.getByRole('button', { name: 'Sign in' });

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(signInButton).toBeVisible();
    
    await usernameInput.fill('admin');
    await passwordInput.fill('password123');

    await expect(usernameInput).toHaveValue('admin');
    await expect(passwordInput).toHaveValue('password123');

    await signInButton.click();

    await page.getByRole('heading', { name: 'Projects' }).click();
});