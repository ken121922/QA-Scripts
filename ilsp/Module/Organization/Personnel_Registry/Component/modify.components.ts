import { expect, type Page, type Locator } from '@playwright/test';


export class ModifyPersonnelPage {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly editBtn: Locator;
    readonly expectEditPersonnel: Locator;
    readonly password: Locator;
    readonly updatePersonnelBtn: Locator;
    readonly expectUpdatePersonnel: Locator;
    readonly status: Locator;
    readonly deactivatePersonnelStatus: Locator;
    readonly activatePersonnelStatus: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByRole('textbox', { name: 'Search personnel...' });
        this.editBtn = page.getByRole('button', { name: 'Edit' });
        this.expectEditPersonnel = page.getByRole('heading', { name: 'Edit Personnel' });
        this.password = page.getByRole('textbox', { name: 'Password*' });
        this.updatePersonnelBtn = page.getByRole('button', { name: 'Update Personnel' });
        this.expectUpdatePersonnel = page.getByText('Personnel has been updated successfully!', { exact: true });
        this.status = page.locator('#v-0-3-163');
        this.deactivatePersonnelStatus = page.getByText('Personnel has been deactivated successfully!', { exact: true });
        this.activatePersonnelStatus = page.getByText('Personnel has been activated successfully!', { exact: true });
    }

    async searchPersonnel() {
        await this.searchBar.fill('Maureen Delaho');

        const expectPersonnel = 
            this.page.getByRole('cell', { 
                name: 'Maureen Delaho' }
            ); await expect(expectPersonnel).toBeVisible();
    }

    async modifyPersonnel() {
        await this.editBtn.click();
        await expect(this.expectEditPersonnel).toBeVisible();
        await this.password.fill('Password1234!');
        await this.updatePersonnelBtn.click();
    }

    async successfullyUpdatePersonnel() {
        await expect(this.expectUpdatePersonnel).toBeVisible();
    }

    async setStatus() {
        await this.status.click();
    }

    async successfullyDeactivatePersonnel() {
        await expect(this.deactivatePersonnelStatus).toBeVisible();
    }

    async successfullyActivatePersonnel() {
        await expect(this.activatePersonnelStatus).toBeVisible();
    }


}
