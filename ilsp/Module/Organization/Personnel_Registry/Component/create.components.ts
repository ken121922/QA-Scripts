import { expect, type Page, type Locator } from '@playwright/test';


export class AddPersonnelPage {
    readonly page: Page;
    readonly personnelTab: Locator;
    readonly addPersonnelBtn: Locator;
    readonly expectPersonnelForm: Locator;
    readonly organizationUnitField: Locator;
    readonly designationField: Locator;
    readonly fullNameField: Locator;
    readonly emailAddressField: Locator;
    readonly passwordField: Locator;
    readonly createPersonnelBtn: Locator;
    readonly validateCreatedPersonnel: Locator;

    constructor(page:Page) {
        this.page = page;
        this.personnelTab = page.getByRole('tab', { name: 'Personnel' });
        this.addPersonnelBtn = page.getByRole('button', { name: 'Add Personnel' });
        this.expectPersonnelForm = page.getByRole('heading', { name: 'Organization Details' });
        this.organizationUnitField = page.getByRole('button', { name: 'Organization/Unit*' });
        this.designationField = page.getByRole('textbox', { name: 'Designation*' });
        this.fullNameField = page.getByRole('textbox', { name: 'Full Name*' });
        this.emailAddressField = page.getByRole('textbox', { name: 'Email Address*' });
        this.passwordField = page.getByRole('textbox', { name: 'Password*' });
        this.createPersonnelBtn = page.getByRole('button', { name: 'Create Personnel' });   
        this.validateCreatedPersonnel = page.getByText('Personnel has been created successfully!', { exact: true });
    }

    async goToPersonnelTab() {
        await this.personnelTab.click();
    }

    async createPersonnel(
        data: {
            designation: string;
            fullName: string;
            emailAddress: string;
            password: string;
        }
    ): Promise<void> {
        await this.addPersonnelBtn.click();
        await expect(this.expectPersonnelForm).toBeVisible();
        await this.organizationUnitField.click();

        const unitOption = 
            this.page.getByRole('option', { 
                name: 'Angat Buhay Foundation, Inc.' }
            ); await unitOption.click();

        await this.designationField.fill(data.designation);
        await this.fullNameField.fill(data.fullName);
        await this.emailAddressField.fill(data.emailAddress);
        await this.passwordField.fill(data.password);
        await this.createPersonnelBtn.click();
    }

    async successfullyCreatedPersonnel () {
        await expect(this.validateCreatedPersonnel).toBeVisible();
    }
}

