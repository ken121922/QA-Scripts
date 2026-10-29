import { type Page, type Locator } from '@playwright/test';
import { LandingPageComponents } from '../../../Module/Landing/Component/landing.components';

export class LandingPage {
    readonly landingpage: LandingPageComponents;


    constructor(protected page: Page) {
        this.landingpage = new LandingPageComponents(page);
    }

    async navigateToLandingPage(baseUrl: string) {
        await this.page.goto(baseUrl);
    }

    async gotoLoginPage() {
        await this.landingpage.getLandingPageLink();
        await this.landingpage.clickSignIn();
    }

    async welcomeBack(welcomeBackText: string) {
        await this.landingpage.welcomeBackText();
    }

    async goToSignUp() {
        await this.landingpage.goToSignUp();
    }
}