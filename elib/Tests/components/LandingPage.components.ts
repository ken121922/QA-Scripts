import { expect, type Page, type Locator} from '@playwright/test';

export class LandingPageComponents {
    readonly campusName: Locator;
    readonly loginLink: Locator;

    constructor(private page: Page) {
        this.campusName = this.page.getByText('Central Bicol State');
        this.loginLink = this.page.getByRole('button', { name: 'lock Login' });
    }

    async verifyCampusName() {
        await expect(this.campusName).toBeVisible();
    }
    
    async clickLogin() {
        await this.loginLink.click();
    }
}