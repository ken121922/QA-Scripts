import { test as base, expect } from '../fixtures/Utils.fixtures';
import { SignUpComponents } from '../components/SignUp.Components';

type Fixtures = {
    signUpComponents: SignUpComponents;
};

export const test = base.extend<Fixtures>({
    signUpComponents: async ({ page }, use) => {
        const signUpComponents = new SignUpComponents(page);
        await use(signUpComponents);
    }
});

export { expect } from '@playwright/test';
export { SignUpNames } from '../data/SignUp_Module';
export { credentials } from '../fixtures/Utils.fixtures';