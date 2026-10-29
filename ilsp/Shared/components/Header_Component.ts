import { expect, type Page, type Locator } from '@playwright/test';

export class HeaderComponents {
    readonly page: Page;
    readonly helpTutorial: Locator;
    readonly fullscreen: Locator;
    readonly accessbility: Locator; 
    readonly srtButton: Locator;
    readonly nxtButton: Locator;
    readonly dashOverview: Locator;
    readonly keyMatrix: Locator;
    readonly recordActions: Locator;
    readonly workflowDistribution: Locator;
    readonly needAnytime: Locator;
    readonly finishBtn: Locator;
    readonly cancelBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.helpTutorial = page.getByRole('button', { name: 'Help and Tutorials' });
        this.srtButton = page.getByRole('button', { name: 'Start Analytics & Overview' });
        this.dashOverview = page.getByText('Dashboard Overview');
        this.keyMatrix = page.getByText('Key Metrics');
        this.recordActions = page.getByText('Records & Actions');
        this.workflowDistribution = page.getByText('Workflow Distribution');
        this.nxtButton = page.getByRole('button', { name: 'Next' });
        this.fullscreen = page.getByRole('button').nth(3);
        this.accessbility = page.locator('.flex.items-center.h-5');
        this.needAnytime = page.getByText('Need Help Anytime?');
        this.finishBtn = page.getByRole('button', { name: 'Finish' });
        this.cancelBtn = page.getByRole('button', { name: 'Close' });
    }

    async validateHeader() {
        await expect(this.helpTutorial).toBeVisible();
        await expect(this.fullscreen).toBeVisible();
        await expect(this.accessbility).toBeVisible();
    }

    async helpersTutorial() {
        await this.helpTutorial.click();
        await this.srtButton.click()
        await expect(this.dashOverview).toBeVisible();
        await this.nxtButton.click();
        await expect(this.keyMatrix).toBeVisible();
        await this.nxtButton.click();
        await expect(this.recordActions).toBeVisible();
        await this.nxtButton.click();
        await expect(this.workflowDistribution).toBeVisible();
        await this.nxtButton.click();
        await expect(this.needAnytime).toBeVisible();
        await this.finishBtn.click();
    }

    async fullScreen() { 
        await this.fullscreen.click();
    }

    async darkMode() {
        await this.accessbility.click()
    }

    async cancelButton() {
        await this.cancelBtn.click();
    }
}