import { expect, type Page, type Locator } from "@playwright/test";

export class UnitRegistryPage { 
    readonly page: Page;
    readonly newUnitBtn: Locator;
    readonly unitFormExpect: Locator;
    readonly createUnitBtn: Locator;
    readonly createUnitSuccess: Locator;

    readonly unitPartner: 
        Record<string, Locator>;

    constructor(page: Page) {
    this.page = page;
    this.newUnitBtn = page.getByRole('button', { name: 'New Unit' });
    this.unitFormExpect = page.getByRole('heading', { name: 'Create New Unit' });
    this.createUnitBtn = page.getByRole('button', { name: 'Create Unit' });
    this.createUnitSuccess = page.getByText('Unit has been created successfully', { exact: true })
    
    this.unitPartner = {
        unitNameField: page.getByRole('textbox', { name: 'Unit Name*' }),
        acronymField: page.getByRole('textbox', { name: 'Acronym*' }),
        staffCountField: page.getByRole('spinbutton', { name: 'Staff Count*' }),
        officerNameField: page.getByRole('textbox', { name: 'Officer Name*' }),
        officerEmailField: page.getByRole('textbox', { name: 'Officer Email*' }),
        designationField: page.getByRole('textbox', { name: 'Designation*' })
    };

    
};
    
    async openUnitForm() {
        await this.newUnitBtn.click()
        await expect(this.unitFormExpect).toBeVisible();
    }

    async fillUnitForm(
        data: {
            unitName: string;
            acronym: string;
            staffCount: string;
            officerName: string;
            officerEmail: string;
            designation: string;
        }
    ): Promise<void> {
        for (const [field, value] of Object.entries(data)) {
            const locator = this.unitPartner[field as keyof typeof this.unitPartner];
            if (locator) {
                await locator.fill(value);
            } else {
                throw new Error(`Locator for field "${field}" not found.`);
            }
        }
    }
       
    async submitUnitForm() {
        await this.createUnitBtn.click();
    }

    async success() {
        await expect(this.createUnitSuccess).toBeVisible();
    }

    
}
