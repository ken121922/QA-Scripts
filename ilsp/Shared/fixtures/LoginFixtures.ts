import { test as base } from '@playwright/test';
import { LandingPage } from "../pages/page-references/LandingPage";
import { LoginPage } from "../pages/page-references/LoginPage";

type Fixtures = {
    landingPage: LandingPage;
    loginPage: LoginPage;   
};

export const test = base.extend<Fixtures>({
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});

export { expect } from '@playwright/test';
export { LandingPageComponents } from '../../Module/Landing/Component/LandingPage.Components';
export { LoginPageComponents } from '../../Shared/components/LoginPage.Components';
export { credentials } from './utils.fixtures'; 