import { test as base } from '@playwright/test';
import { APIHelper } from '../api/get.api';
import { LandingPage } from '../pages/page-references/landing.page';
import { HeaderComponents } from '../../Shared/components/Header_Component';
import { SideBarComponents } from '../../Shared/components/Sidebar_Component';
import { LogoutComponents } from '../components/Logout_Component';
import { LoginPage } from '../pages/page-references/LoginPage';




type Fixtures = {
    api: APIHelper;
    landingPage: LandingPage;
    headerComponent: HeaderComponents;
    sideBarComponents: SideBarComponents;
    logoutComponents: LogoutComponents;
    loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
    api: async ({ page }, use) => {
        const apiHelper = new APIHelper(page);
        await use(apiHelper);
    },
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    },
    headerComponent: async ({ page }, use) => {
        const headerComponents = new HeaderComponents(page);
        await use(headerComponents);
    },
    sideBarComponents: async ({ page }, use) => {
        const sideBarComponents = new SideBarComponents(page);
        await use(sideBarComponents);
    },
    logoutComponents: async ({ page }, use) => {
        const logoutComponents = new LogoutComponents(page);
        await use(logoutComponents);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})


export { expect } from '@playwright/test';
export { credentials } from '../data/Credential';