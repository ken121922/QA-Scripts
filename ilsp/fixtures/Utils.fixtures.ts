import { test as base } from '@playwright/test';
import { APIHelper } from '../api/get.api';
import { LandingPage } from '../pages/page-references/LandingPage';



type Fixtures = {
    api: APIHelper;
    landingPage: LandingPage;
};

export const test = base.extend<Fixtures>({
    api: async ({ page }, use) => {
        const apiHelper = new APIHelper(page);
        await use(apiHelper);
    },
    landingPage: async ({ page }, use) => {
        const landingPage = new LandingPage(page);
        await use(landingPage);
    }
})


export { expect } from '@playwright/test';
export { credentials } from '../data/Credential';