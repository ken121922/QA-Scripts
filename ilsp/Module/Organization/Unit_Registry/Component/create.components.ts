import { expect, type Page, type Locator } from "@playwright/test";

export class UnitRegistryPage { 
    readonly page: Page;
    readonly newUnitBtn: Locator;
    readonly unitFormExpect: Locator;
    readonly unitNameField: Locator;
    readonly acronymField: Locator; 
    readonly staffCountField: Locator;
    readonly officerNameField: Locator;
    readonly officerEmailField: Locator;
    readonly designationField: Locator;
    readonly createUnitBtn: Locator;
    readonly createUnitSuccess: Locator;

    constructor(page: Page) {
    this.page = page;
    this.newUnitBtn = page.getByRole('button', { name: 'New Unit' });
    this.unitFormExpect = page.getByRole('heading', { name: 'Create New Unit' });
    this.unitNameField = page.getByRole('textbox', { name: 'Unit Name*' });
    this.acronymField = page.getByRole('textbox', { name: 'Acronym*' });
    this.staffCountField = page.getByRole('spinbutton', { name: 'Staff Count*' });
    this.officerNameField = page.getByRole('textbox', { name: 'Officer Name*' });
    this.officerEmailField = page.getByRole('textbox', { name: 'Officer Email*' });
    this.designationField = page.getByRole('textbox', { name: 'Designation*' }); 
    this.createUnitBtn = page.getByRole('button', { name: 'Create Unit' });
    this.createUnitSuccess = page.getByText('Unit has been created successfully', { exact: true })
    }

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
        await this.unitNameField.fill(data.unitName);
        await this.acronymField.fill(data.acronym);
        await this.staffCountField.fill(data.staffCount);
        await this.officerNameField.fill(data.officerName);
        await this.officerEmailField.fill(data.officerEmail);
        await this.designationField.fill(data.designation);
    }

    async submitUnitForm() {
        await this.createUnitBtn.click();
    }

    async success() {
        await expect(this.createUnitSuccess).toBeVisible();
    }

    
}
