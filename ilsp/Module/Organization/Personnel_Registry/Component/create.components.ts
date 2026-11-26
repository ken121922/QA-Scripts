import { expect, type Page, type Locator } from '@playwright/test';


export class AddPersonnelPage {
    readonly page: Page;
    readonly personnelTab: Locator;
    readonly addPersonnelBtn: Locator;
    readonly expectPersonnelForm: Locator;
    readonly createPersonnelBtn: Locator;
    readonly validateCreatedPersonnel: Locator;
    
    readonly personnelPArtner: Record<string, Locator>;

    constructor(page:Page) {
        this.page = page;
        this.personnelTab = page.getByRole('tab', { name: 'Personnel' });
        this.addPersonnelBtn = page.getByRole('button', { name: 'Add Personnel' });
        this.createPersonnelBtn = page.getByRole('button', { name: 'Create Personnel' });   
        this.validateCreatedPersonnel = page.getByText('Personnel has been created successfully!', { exact: true });
        this.expectPersonnelForm = page.getByRole('heading', { name: 'Organization Details' });
       
        this.personnelPArtner = {
            organizationUnitField: page.getByRole('combobox', { name: 'Organization Unit*' }),
            designationField: page.getByRole('textbox', { name: 'Designation*' }),
            fullNameField: page.getByRole('textbox', { name: 'Full Name*' }),
            emailAddressField: page.getByRole('textbox', { name: 'Email Address*' }),
            passwordField: page.getByRole('textbox', { name: 'Password*' })
        };
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
        await this.personnelPArtner.organizationUnitField.click();

        const unitOption = 
            this.page.getByRole('option', { 
                name: 'Angat Buhay Foundation, Inc.' }
            ); await unitOption.click();

        for (const [field, value] of Object.entries(data)) {
            const fieldLocator = this.personnelPArtner[field as keyof typeof this.personnelPArtner];
            if (fieldLocator) {
                await fieldLocator.fill(value);
            } 
        }
    }

    async successfullyCreatedPersonnel () {
        await expect(this.validateCreatedPersonnel).toBeVisible();
    }
}

