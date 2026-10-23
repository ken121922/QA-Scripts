import { expect, type Page, type Locator } from '@playwright/test';


export class LandingPageComponents {
    readonly page: Page;
    readonly landingPageLink: Locator;
    readonly SignIn: Locator;
    readonly expectLoginLink: Locator;
    readonly SignUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.landingPageLink = page.getByText('Institutional Linkages and');
        this.SignIn = page.getByRole('link', { name: 'Sign in', exact: true });
        this.expectLoginLink = page.getByText('Welcome back');
        this.SignUp = page.getByRole('link', { name: 'Sign up' });

    }

    async getLandingPageLink() {
        await expect(this.landingPageLink).toBeVisible();
    }

    async goToSignUp() {
        await this.SignUp.click();
    }

       async clickSignIn() {
        await this.SignIn.click();
    }

    async welcomeBackText() {
        await expect(this.expectLoginLink).toBeVisible();
    }
}