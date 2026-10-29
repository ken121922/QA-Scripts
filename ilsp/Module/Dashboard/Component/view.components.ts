import { expect, type Page, type Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly scheduleOverview: Locator;
    readonly recordOverview: Locator;
    readonly pendingActions: Locator;
    readonly workflowStatusDistribution: Locator;
    readonly trackMOU: Locator;
    readonly expectMOU: Locator;
    readonly cancelBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.scheduleOverview = page.getByRole('heading', { name: 'Schedule Overview' });
        this.recordOverview = page.getByRole('heading', { name: 'Records Overview' });
        this.pendingActions = page.getByRole('heading', { name: 'Pending Actions' });
        this.workflowStatusDistribution = page.getByRole('heading', { name: 'Workflow Status Distribution' });
        this.trackMOU = page.locator('.apexcharts-bar-area');
        this.expectMOU = page.getByRole('heading', { name: 'Memorandum of Understanding (' });
        this.cancelBtn = page.getByRole('button', { name: 'Close' });
    }

    async validateCardStatusData() {
        await expect(this.scheduleOverview).toBeVisible();
        await expect(this.recordOverview).toBeVisible();
        await expect(this.pendingActions).toBeVisible();
        await expect(this.workflowStatusDistribution).toBeVisible();
        await this.cancelBtn.click();
    }

    async selectOnStatusMOU() {
        await this.trackMOU.click();
    }

    async successfullyOpenMOU() {
        await expect(this.expectMOU).toBeVisible();
    }
}