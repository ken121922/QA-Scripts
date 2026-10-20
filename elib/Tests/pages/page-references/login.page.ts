import { type Page, expect } from "@playwright/test";
import { LoginPageComponents } from "../../components/LoginPage.component";
import { APIHelper } from "../../api/get.api"

export class LoginPage {
    readonly loginpage: LoginPageComponents
    readonly apiHelper: APIHelper

    constructor(page: Page) {
        this.loginpage = new LoginPageComponents(page);
        this.apiHelper = new APIHelper(page);
    }

    async login( email: string, password: string ) {
        await this.loginpage.Header()
        await this.loginpage.ValidateLoginFields();
        await this.loginpage.FillValidCredentials(email, password);
        await this.loginpage.ClickLoginButton();
    }
}