import { expect, Page, test } from '@playwright/test';

async function login(page: Page) {
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

    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
}

test("Implement user authentication is in TODO w/ high priority & feature", async ({ page }) => {

    await login(page);

    const project = page.getByRole('button', { name: /Web Application/ });
    const toDo = page.getByRole('heading', {name:/To Do/}).locator('..');
    const task = toDo.getByRole('heading', { name: 'Implement user authentication' }).locator('..');
    const featureTag = task.getByText('Feature');
    const highPriorityTag = task.getByText('High Priority');

    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

    await expect(project).toBeVisible();
    await project.click();

    await expect(toDo).toBeVisible();

    await expect(task).toBeVisible();
    await expect(featureTag).toBeVisible();
    await expect(highPriorityTag).toBeVisible();
});