import { expect, type Page, type Locator } from '@playwright/test'

export class SideBarComponents {
    readonly page: Page;
    readonly dashboard: Locator;
    readonly expectDashboard: Locator;
    readonly workflow: Locator;
    readonly expectWorkflow: Locator;
    readonly registry: Locator;
    readonly expectRegistry: Locator;
    readonly organization: Locator;
    readonly expectOrganization: Locator;


    constructor(page: Page) {
        this.page = page;
        this.dashboard = page.getByRole('link', { name: 'Dashboard' });
        this.expectDashboard = page.getByRole('heading', { name: 'Dashboard' });
        this.workflow = page.getByRole('link', { name: 'Workflow' });
        this.expectWorkflow = page.locator('#dashboard-panel-v-0-0-2').getByText('Workflow', { exact: true });
        this.registry = page.getByRole('link', { name: 'Registry' });
        this.expectRegistry = page.getByText('Registry Master');
        this.organization = page.getByRole('link', { name: 'Organization' });
        this.expectOrganization = page.getByText('Organization Manager');
    }

    async goToDashboard() {
        await this.dashboard.click
        await expect(this.expectDashboard).toBeVisible();
    }

    async goToWorkflow() {
        await this.workflow.click();
        await expect(this.expectWorkflow).toBeVisible();
    }

    async goToRegistry() {
        await this.registry.click();
        await expect(this.expectRegistry).toBeVisible();
    }

    async goToOrganization() {
        await this.organization.click();
        await expect(this.expectOrganization).toBeVisible();
    }

}