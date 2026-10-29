import { test as base, expect } from '../../../Shared/fixtures/Utils.fixtures';
import { SignUpPage } from '../Component/create.components';


type Fixtures = {
    signUpComponents: SignUpPage;
};

export const test = base.extend<Fixtures>({
    signUpComponents: async ({ page }, use) => {
        const signUpComponents = new SignUpPage(page);
        await use(signUpComponents);
    }
});

export { expect } from '@playwright/test';
export { SignUpNames } from '../Data/sign.up.module';
export { credentials } from '../../../Shared/fixtures/Utils.fixtures';