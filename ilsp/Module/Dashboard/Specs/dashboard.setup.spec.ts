import { test, credentials } from '../Fixtures/dashboard.fixtures';


test.describe('Dashboard', () => {
    test.beforeEach(async ({ landingPage, loginPage }) => {
            await landingPage.navigateToLandingPage(credentials.baseUrl);
            await landingPage.gotoLoginPage();
            await loginPage.login(credentials.username, credentials.password);
    });

    test('Verify if user can view and manage the scheduled overview', async ({ dashboardPage }) => {
        await dashboardPage.validateCardStatusData();
        await dashboardPage.selectOnStatusMOU();
        await dashboardPage.successfullyOpenMOU();
    });

});