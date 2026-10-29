import { expect, type Page, type Locator } from '@playwright/test'

export class UnitApprovalPage {
    readonly page: Page;
    readonly pendingUnits: Locator;
    readonly selectPendingUnit: Locator;
    readonly pendingUnitModal: Locator;
    readonly rejectUnit: Locator;
    readonly approveUnit: Locator;
    readonly cancelunit: Locator;
    readonly successReject: Locator;
    readonly successApprove: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pendingUnits = page.getByRole('tab', { name: 'Pending Units' });
        this.selectPendingUnit = page.locator('.grid.grid-cols-1');
        this.pendingUnitModal = page.getByRole('heading', { name: 'Approve Pending Unit' });
        this.rejectUnit = page.getByRole('button', { name: 'Reject Unit' });
        this.successReject = page.getByText('Pending unit has been rejected successfully', { exact: true });
        this.approveUnit = page.getByRole('button', { name: 'Approve Unit' });
        this.successApprove = page.getByText('Pending unit has been approved successfully', { exact: true });
        this.cancelunit = page.getByRole('button', { name: 'Cancel' });
    }

    async goToPendingTab() {
        await this.pendingUnits.click();
    }

    async approveUnitPartner(
    ): Promise<void> {

        const unitOption = this.page.getByText('RDOPendingResearch and');
        await this.pendingUnits.click();
        await unitOption.click();
        await this.approveUnit.click();
        await expect(this.pendingUnitModal).toBeVisible();
    }

    async successfullyApproveUnit() {
        await expect(this.successApprove).toBeVisible();
    }

    async rejectUnitPartner(
    ): Promise<void> {
        const unitOption = this.page.getByText('CISDIPendingCenter for');
        await this.pendingUnits.click();
        await unitOption.click();
        await this.rejectUnit.click();
        await expect(this.pendingUnitModal).toBeVisible();
    }

    async successfullyRejectUnit() {
        await expect(this.successReject).toBeVisible();
    }
}

