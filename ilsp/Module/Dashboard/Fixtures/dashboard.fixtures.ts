import { test as base, expect } from '../../../Shared/fixtures/Utils.fixtures';
import { DashboardPage } from '../Component/dashboard.page.component';

type Fixtures = {
    dashboardPage: DashboardPage;
};

export const test = base.extend<Fixtures>({
    dashboardPage: async ({ page }, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }
});


export { expect } from '@playwright/test';
export { DashboardName} from '../Data/dashboard.module';
export { credentials } from '../../../Shared/data/Credential';