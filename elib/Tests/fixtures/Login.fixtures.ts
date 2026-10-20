import { test as base } from '@playwright/test'
import { LandingPage } from '../pages/page-references/landing.page';
import { LoginPage } from '../pages/page-references/login.page';

type Fixtures = {
    landing: LandingPage;
    login: LoginPage;
};

export const test = base.extend<Fixtures>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }

  landing: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    await use(landingPage);
  }
});

export { expect } from '@playwright/test';
export { LandingPage } from '../pages/page-references/landing.page';
export { LoginPage } from '../pages/page-references/login.page';
export { credentials } from '../fixtures/utils.fixtures'