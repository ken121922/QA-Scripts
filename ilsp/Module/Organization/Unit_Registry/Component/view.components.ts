import { expect, type Page, type Locator } from '@playwright/test';


export class ViewActiveWorkflowPage {
    readonly page: Page;
    readonly selectUnit: Locator;
    readonly validateUnit: Locator;
    readonly selectWorkflow: Locator;
    readonly validateMOA: Locator;
    readonly searchBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByRole('textbox', { name: 'Search approved units...' });
        this.selectUnit = page.getByText('CBSUA - COECentral Bicol');
        this.validateUnit = page.getByRole('heading', { name: 'Central Bicol State' });
        this.selectWorkflow = page.locator('div').filter({ hasText: /^Memorandum of Understanding \(MOU\) CBSUA ProjectsSPECIAL_PROJECT 12$/ }).first();
        this.validateMOA = page.getByRole('heading', { name: 'Memorandum of Understanding (' });
    }

    async searchUnit() {
        await this.searchBar.fill('Central Bicol State University');
    }

    async selectInternalUnit() {
        await expect(this.selectUnit).toBeVisible();
        await this.selectUnit.click();
    }

    async validateUnitInformation() {
        await expect(this.validateUnit).toBeVisible();
    }

    async selectActiveWorkflow() {
        await this.selectWorkflow.click();
    }

    async validateSpecialProjects() {
        await expect(this.validateMOA).toBeVisible();
    }
}