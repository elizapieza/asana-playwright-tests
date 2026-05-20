import { expect, Page, test } from '@playwright/test';
import { taskCases } from './testData';

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

    for (const taskCase of taskCases) {
        test(`${taskCase.task} is in ${taskCase.column} w/ tags ${taskCase.tags.join(', ')}`, async ({ page}) => {
            await login(page);

            const project = page.getByRole('button', { name: new RegExp(taskCase.project) });


            await expect(project).toBeVisible();
            await project.click();

            await expect(
                page.getByRole('banner').getByRole('heading', { name: taskCase.project })).toBeVisible();

            const column = page.getByRole('heading', { name: new RegExp(taskCase.column) }).locator('..');
            const task = column.getByRole('heading', { name: new RegExp(taskCase.task) }).locator('..');

            await expect(column).toBeVisible();
            await expect(task).toBeVisible();

                        for (const tag of taskCase.tags) {
                await expect(task.getByText(tag, { exact: true })).toBeVisible();
            }
        });
    }