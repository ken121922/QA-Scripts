import { expect, type Page, type Locator } from'@playwright/test';

export class LoginPageComponents{
    readonly userfield: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly loginlock: Locator;
    readonly LoginPage: Locator;

    constructor(protected page: Page) {
        this.userfield = page.locator('getByRole("textbox", { name: "Email" })');
        this.passwordField = page.locator('getByRole("textbox", { name: "Password" })');
        this.loginlock = page.locator('getByRole("button", { name: "lock Login" })');
        this.loginButton = page.locator('getByRole("button", { name: "Login" })');
        this.LoginPage = page.locator('getByText("Welcome")');
    }

    async Header() {
        await expect(this.LoginPage).toBeVisible();
    }

    async ValidateLoginFields() {
        await expect(this.userfield).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    async FillValidCredentials(libraryData) {
        await this.userfield.fill(libraryData.email);
        await this.passwordField.fill(libraryData.password);
    }

    async ClickLoginButton() {
        await this.loginButton.click();
    }

}