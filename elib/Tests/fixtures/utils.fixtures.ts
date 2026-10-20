import { test as base } from '@playwright/test';
import { APIHelper } from '../api/get.api';
import { LandingPage } from '../pages/page-references/landing.page';
import { LoginPage } from '../pages/page-references/login.page'

type Fixtures = {
    api: APIHelper;
    landing: LandingPage;
    login: LoginPage;
};

export const test = base.extend<Fixtures>({
    api: async ({ page }, use) => {
        await use(new APIHelper(page));
    },

    landing: async ({ page }, use) => {
        await use(new LandingPage(page));
    },

    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';
export { credentials } from '../data/Credentials';