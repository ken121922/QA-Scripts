import { test as base, expect } from '../../../../Shared/fixtures/Utils.fixtures';
import { UnitRegistryPage } from '../Component/create.components';
import { ViewActiveWorkflowPage } from '../Component/view.components';
import { UnitApprovalPage } from '../Component/approval.components';

type Fixtures = {
    unitRegistryPage: UnitRegistryPage;
    viewActiveWorkflowPage: ViewActiveWorkflowPage;
    unitApprovePage: UnitApprovalPage;
};

export const test = base.extend<Fixtures>({
    unitRegistryPage: async ({ page }, use) => {
        const unitRegistryPage = new UnitRegistryPage(page);
        await use(unitRegistryPage);
    },
    viewActiveWorkflowPage: async ({ page }, use) => {
        const viewActiveWorkflowPage = new ViewActiveWorkflowPage(page);
        await use(viewActiveWorkflowPage);
    },
    unitApprovePage: async ({ page }, use) => {
        const unitApprovePage = new UnitApprovalPage(page);
        await use(unitApprovePage);
    }
});

export { expect } from '@playwright/test';
export { credentials } from '../../../../Shared/data/Credential';