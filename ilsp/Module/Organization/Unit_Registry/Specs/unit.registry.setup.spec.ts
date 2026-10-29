import { test, credentials } from '../Fixtures/unit.registry.fixtures';
import { unitData } from '../Data/unit.registry.data';


test.describe('Unit Registry', () => {
    test.beforeEach(async ({ landingPage, loginPage }) => {
        await landingPage.navigateToLandingPage(credentials.baseUrl);
        await landingPage.gotoLoginPage();
        await loginPage.login(credentials.username, credentials.password);
    });

    test('Verify if user can create new unit', async ({ unitRegistryPage, sideBarComponents, headerComponent }) => {
        await sideBarComponents.goToOrganization();
        await unitRegistryPage.openUnitForm();
        await headerComponent.cancelButton();
        await unitRegistryPage.fillUnitForm(unitData);
        await unitRegistryPage.submitUnitForm();
        await unitRegistryPage.success();
    });

    test('Verify if user can view the active workflow of unit partner', async ({ viewActiveWorkflowPage, sideBarComponents, headerComponent }) => {
        await sideBarComponents.goToOrganization();
        await viewActiveWorkflowPage.searchUnit();
        await viewActiveWorkflowPage.selectInternalUnit();
        await viewActiveWorkflowPage.validateUnitInformation();
        await headerComponent.cancelButton();
        await viewActiveWorkflowPage.selectActiveWorkflow();
        await viewActiveWorkflowPage.validateSpecialProjects();
    });

    test('Verify if user can able to approve the unit', async ({ sideBarComponents, headerComponent, unitApprovePage }) => {
        await sideBarComponents.goToOrganization();
        await unitApprovePage.goToPendingTab();
        await headerComponent.cancelButton();
        await unitApprovePage.approveUnitPartner();
        await unitApprovePage.successfullyApproveUnit();
    });

    test('Verify if user can able to reject the unit ', async ({ sideBarComponents, headerComponent, unitApprovePage }) => {
        await sideBarComponents.goToOrganization();
        await unitApprovePage.goToPendingTab();
        await headerComponent.cancelButton();
        await unitApprovePage.rejectUnitPartner();
        await unitApprovePage.successfullyRejectUnit();
    });

});