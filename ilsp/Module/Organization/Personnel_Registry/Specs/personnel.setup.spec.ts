import { test, credentials } from '../Fixtures/personnel.fixtures';
import { personnelData } from '../Data/personnel.data';

test.describe('Personnel Module', () => {
    test.beforeEach(async ({ landingPage, loginPage, sideBarComponents }) => {
        await landingPage.navigateToLandingPage(credentials.baseUrl);
        await landingPage.gotoLoginPage();
        await loginPage.login(credentials.username, credentials.password);
        await sideBarComponents.goToOrganization();
    });


    test('Verify if user can add personnel', async ({ addPersonnelPage }) => {
        
        await addPersonnelPage.goToPersonnelTab();
        await addPersonnelPage.createPersonnel(personnelData);
        await addPersonnelPage.successfullyCreatedPersonnel();
    }); 

    test('Verify if user can edit the information of personnel', async ({ addPersonnelPage, modifyPersonnelPage }) => {
        await addPersonnelPage.goToPersonnelTab();
        await modifyPersonnelPage.searchPersonnel();
        await modifyPersonnelPage.modifyPersonnel();
        await modifyPersonnelPage.successfullyUpdatePersonnel();
    })

    test('Verify if user can set the status of personnel ', async ({ addPersonnelPage, modifyPersonnelPage }) => {
        await addPersonnelPage.goToPersonnelTab();
        await modifyPersonnelPage.searchPersonnel();
        await modifyPersonnelPage.setStatus();
        await modifyPersonnelPage.successfullyDeactivatePersonnel();
        await modifyPersonnelPage.setStatus();
        await modifyPersonnelPage.successfullyActivatePersonnel();
    })
})