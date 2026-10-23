import { test as setup, expect, credentials } from '../../fixtures/LoginFixtures';

setup.describe('LoginPage', () => {
    let baseUrl = credentials.baseUrl
    let username = credentials.username
    let password = credentials.password
    let welcomeBack = credentials.welcomeBack

    setup.beforeEach(async ({ landingPage }) => {
        await landingPage.navigateToLandingPage(baseUrl);
        await landingPage.gotoLoginPage();
        await landingPage.welcomeBack(welcomeBack);
    });

    setup('Login with valid credentials', async ({ loginPage }) => {
        await loginPage.login(username, password);
    });
})