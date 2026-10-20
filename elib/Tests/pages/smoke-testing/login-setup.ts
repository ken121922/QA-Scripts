import { test as setup, expect, credentials } from '../../fixtures/Login.fixtures';

setup.describe('Login Page', () => {
    let baseUrl = credentials.baseUrl;
    let email = credentials.email; 
    let password = credentials.password;
    let welcome = credentials.welcome;

    setup.beforeEach(async ({ Landing }) => {
        await Landing.navigateToLogin(baseUrl);
        await Landing.gotoLoginPage(welcome);
    });

    setup('Login using valid credentials', ({ login }) => {
        await login.ValidateLoginFields();
        await login.FillValidCredentials(email, password);
        await login.ClickLoginButton();
    });
});