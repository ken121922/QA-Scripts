import { test, credentials } from '../Fixtures/sign.up.fixtures';
import { validSignUpData, validInternalData, validInternalPartnerData } from '../Data/sign.up.data';



test.describe('Sign Up Form', () => {
    test.beforeEach(async ({ landingPage, signUpComponents }) => {
        await landingPage.navigateToLandingPage(credentials.baseUrl);
        await landingPage.goToSignUp();
        await signUpComponents.expectSignUpForm();
    });


    test('Verify if partner can able to submit registration form as external' , async ({ signUpComponents }) => {
        await signUpComponents.fillSignUpForm(validSignUpData);
        await signUpComponents.clickSubmitButton();
        await signUpComponents.expectOrganizationSuccessfullyCreated();
    });

    test('Verify if partner can able to submit registration form as internal' , async ({ signUpComponents}) => {
        await signUpComponents.goToInternalForm();
        await signUpComponents.fillInternalForm(validInternalData);
        await signUpComponents.createUnit();
        await signUpComponents.successfullyCreatedInternalUnit();
        await signUpComponents.goToInternalForm();
        await signUpComponents.fillInternalForm(validInternalPartnerData);
        await signUpComponents.createUnit();
        await signUpComponents.successfullyCreatedInternalUnit();
    })
})
