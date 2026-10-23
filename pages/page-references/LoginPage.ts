import { type Page, expect } from '@playwright/test';
import { LoginPageComponents } from '../../components/LoginPage.Components';

export class LoginPage{
    readonly loginpage : LoginPageComponents

    constructor(protected page: Page) {
        this.loginpage = new LoginPageComponents(page);
    }

    async login(username: string, password: string) {
        await this.loginpage.validateInputFields();
        await this.loginpage.fillLoginForm(username, password);
        await this.loginpage.clickLoginButton();
    }
}

