import { test, credentials } from '../Fixtures/template.fixtures';
import { linkageData, specialProjectData } from '../Data/template.builder.data';

test.describe('Template Builder', () => {
    test.beforeEach(async ({ landingPage, loginPage, sideBarComponents }) => {
        await landingPage.navigateToLandingPage(credentials.baseUrl);
        await landingPage.gotoLoginPage();
        await loginPage.login(credentials.username, credentials.password);
        await sideBarComponents.goToOrganization();
    });

    test('Verify if user can create requirement in linkage', async ({ templateBuilderPage, validateTemplateBuilder }) => {
        await templateBuilderPage.goToWorkflowTab();
        await templateBuilderPage.validateLinkageProtocolStages();
        await templateBuilderPage.addNewRequirementLinkages(linkageData);
        await validateTemplateBuilder.validateCreatedRequirements(linkageData);
    }) ;

})