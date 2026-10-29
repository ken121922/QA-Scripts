import { expect, type Page, type Locator } from "@playwright/test";

export class LogoutComponents {
    readonly page: Page;
    readonly logoutBtn: Locator;
    readonly yesBtn: Locator;
    readonly cancelBtn: Locator;
    readonly logoutModal: Locator;

    constructor(page:Page) {
        this.page = page;
        this.logoutBtn = page.getByRole('button', { name: 'Logout' });
        this.yesBtn = page.getByRole('button', { name: 'Yes, Logout' });
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
        this.logoutModal = page.getByRole('heading', { name: 'Confirm Logout' });
    }

    async VerifyLogout() {
        await expect(this.logoutBtn).toBeVisible();
    }

    async logoutSystem() {
        await this.logoutBtn.click();
        await expect(this.logoutModal).toBeVisible();
        await this.yesBtn.click();
    }

}