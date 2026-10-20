import { expect, type Page, type Locator } from "@playwright/test";

export class LogoutPageComponents {
    readonly logoutButton: Locator;
    readonly confirmationLogout: Locator;
    readonly continueLogout: Locator;
    readonly landingPage: Locator;

    constructor(protected page: Page) {
        this.logoutButton = page.getByRole('menuitem', { name: 'logout Logout' });
        this.confirmationLogout = page.getByText('Do you want to logout?');
        this.continueLogout = page.getByRole('button', { name: 'Continue' });
        this.landingPage = page.getByText('Central Bicol State');
    }

    async ClickLogoutButton() {
        await this.logoutButton.click();
    }

    async ValidateLogoutConfirmation() {
        await expect(this.confirmationLogout).toBeVisible();
    }

    async ClickContinueLogout() {
        await this.continueLogout.click();
    }

    async ValidateLandingPage() {
        await expect(this.landingPage).toBeVisible();
    }
}