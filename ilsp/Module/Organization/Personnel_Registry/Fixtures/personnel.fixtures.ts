import { test as base } from '../../../../Shared/fixtures/Utils.fixtures';
import { AddPersonnelPage } from '../Component/create.components';
import { ModifyPersonnelPage } from '../Component/modify.components';

type Fixtures = {
    addPersonnelPage: AddPersonnelPage;
    modifyPersonnelPage: ModifyPersonnelPage;
};

export const test = base.extend<Fixtures>({
    addPersonnelPage: async ({ page }, use) => {
        const addPersonelPage = new AddPersonnelPage(page);
        await use(addPersonelPage);
    },
    modifyPersonnelPage: async ({ page }, use) => {
        const modifyPersonnelPage = new ModifyPersonnelPage(page);
        await use(modifyPersonnelPage);
    }
});

export { expect } from '@playwright/test';
export { credentials } from '../../../../Shared/data/Credential';