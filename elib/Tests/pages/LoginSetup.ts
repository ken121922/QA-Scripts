import { test as setup, expect, credentials } from '../fixtures/Login.fixtures';


setup.describe('Login Page', () => {
    let baseUrl = credentials.baseUrl;
    let userName = credentials.userEmail;
    let password = credentials.userPassword;
    let portalUrl = credentials.portalUrl;
    let applicationName = credentials.applicationName;
    let envName = credentials.envName;
    let n8nwebhookUrl = credentials.n8nwebhookUrl;

    setup.beforeEach(async ({landing, slack}) => {
        await landing.navigateToLoginPage(baseUrl);
        await landing.goToLogin(applicationName);
    });

    setup('Login', async ({login, pageHelper}) => {
        await login.login(userName, password);
        await login.validateLogin();
        await pageHelper.saveState(`login-${envName}.json`);
    });
})
