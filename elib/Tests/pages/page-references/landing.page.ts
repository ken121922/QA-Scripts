import { type Page } from "@playwright/test";
import { LandingPageComponents } from '../../components/LandingPage.components';

export class LandingPage {
    readonly landing: LandingPageComponents;

    constructor(protected page: Page) {
        this.landing = new LandingPageComponents(page);
    }

    async navigateToLogin(baseUrl: string) {
        await this.page.goto(baseUrl);
    }

    async gotoLoginPage() {
        await this.landing.verifyCampusName();
        await this.landing.clickLogin();
    }
}