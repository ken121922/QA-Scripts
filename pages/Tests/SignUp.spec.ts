import { test, credentials } from '../../fixtures/SignUp.Fixtures';
import { validSignUpData, validInternalData } from '../../data/SignUpData';



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
    })
})
