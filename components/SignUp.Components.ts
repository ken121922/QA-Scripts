import { expect, Locator, Page } from '@playwright/test';

export class SignUpComponents {
    readonly signUpForm: Locator;
    readonly organizationName: Locator;
    readonly acronym: Locator;
    readonly officialWebsite: Locator;
    readonly principalLegalAddress: Locator;
    readonly principalLiaisonOfficer: Locator;
    readonly liaisonEmailAddress: Locator;
    readonly organizationEntity: Locator;
    readonly privateEntity: Locator;
    readonly publicEntity: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly organizationSuccessfullyCreated: Locator;
    readonly internalForm: Locator;
    readonly unitName: Locator;
    readonly staffCount: Locator;
    readonly officerName: Locator;
    readonly officerEmail: Locator;
    readonly designation: Locator;
    readonly internalOrgEntity: Locator;
    readonly clickCreateUnit: Locator;
    readonly internalOrgSuccessCreated: Locator;

    constructor(private page: Page) {
    this.signUpForm = page.getByRole('link', { name: 'Sign up' })
    this.organizationName = page.getByRole('textbox', { name: 'Full Organizational Indentity' });
    this.acronym = page.getByRole('textbox', { name: 'Acronym' });
    this.officialWebsite = page.getByRole('textbox', { name: 'Official Website' });
    this.principalLegalAddress = page.getByRole('textbox', { name: 'Principal Legal Address' });
    this.principalLiaisonOfficer = page.getByRole('textbox', { name: 'Principal Liaison Officer' });
    this.liaisonEmailAddress = page.getByRole('textbox', { name: 'Liaison Email Address' });
    this.organizationEntity = page.getByRole('button', { name: 'Organization / Entity' });
    this.privateEntity = page.getByRole('option', { name: 'Private' });
    this.publicEntity = page.getByRole('option', { name: 'Public' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.organizationSuccessfullyCreated = page.getByRole('listitem').filter({ hasText: 'Successorganization has been' });
    this.internalForm = page.getByRole('tab', { name: 'Internal' });
    this.unitName = page.getByRole('textbox', { name: 'Unit Name*' });
    this.staffCount = page.getByRole('spinbutton', { name: 'Staff Count*' });
    this.officerName = page.getByRole('textbox', { name: 'Officer Name*' });
    this.officerEmail = page.getByRole('textbox', { name: 'Officer Email*' });
    this.designation = page.getByRole('textbox', { name: 'Designation*' });
    this.internalOrgEntity = page.getByRole('combobox', { name: 'Organization / Entity*' });
    this.clickCreateUnit = page.getByRole('button', { name: 'Create Unit' });
    this.internalOrgSuccessCreated = page.getByRole('listitem').filter({ hasText: 'SuccessUnit has been' });

    }

    private partnerForm(): Locator { 
        return this.page.locator('form').filter({ 
            has: this.page.getByRole('textbox', { name: 'Full Organizational Indentity' }) 
        });
    }

    externalForm(): Locator {
        return this.partnerForm(); 
    }

    async expectSignUpForm(): Promise<void> {
        await expect(this.partnerForm()).toBeVisible();
    }

    async fillSignUpForm(
        data: {
            organizationName: string;
            acronym: string;
            officialWebsite: string;
            principalLegalAddress: string;
            principalLiaisonOfficer: string;
            liaisonEmailAddress: string;
            password: string;
        }
    ): Promise<void> { 
        await this.organizationName.fill(data.organizationName);
        await this.acronym.fill(data.acronym);
        await this.officialWebsite.fill(data.officialWebsite);
        await this.principalLegalAddress.fill(data.principalLegalAddress);
        await this.principalLiaisonOfficer.fill(data.principalLiaisonOfficer);
        await this.liaisonEmailAddress.fill(data.liaisonEmailAddress);
        await this.organizationEntity.click();
        await this.privateEntity.click();
        await this.password.fill(data.password);
    }

    async clickSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }

    async expectOrganizationSuccessfullyCreated(): Promise<void> {
        await expect(this.organizationSuccessfullyCreated).toBeVisible();
    }

    async goToInternalForm(): Promise<void> {
        await this.internalForm.click();
    }

    async fillInternalForm(
        data: {
            unitName: string;
            acronym: string;
            staffCount: string;
            officerName: string;
            officerEmail: string;
            password: string;
            designation: string;
        }
    ): Promise<void> {
        await this.unitName.fill(data.unitName);
        await this.acronym.fill(data.acronym);
        await this.staffCount.fill(data.staffCount);
        await this.officerName.fill(data.officerName);
        await this.officerEmail.fill(data.officerEmail);
        await this.password.fill(data.password);
        await this.designation.fill(data.designation);
        await this.internalOrgEntity.click();
        await this.publicEntity.click();
    }

    async createUnit(): Promise<void> {
        await this.clickCreateUnit.click();
    }

    async successfullyCreatedInternalUnit(): Promise<void> {
        await expect(this.internalOrgSuccessCreated).toBeVisible();
    }
}

// await page.getByRole('button', { name: 'Create Unit' }).click();
// await page.getByRole('listitem').filter({ hasText: 'SuccessUnit has been' }).click();
// await page.getByText('Unit has been submitted for approval successfully', { exact: true }).click();