import { test as base, expect } from '../../Shared/fixtures/Utils.fixtures';
import { HeaderComponents } from '../components/Header_Component';


type Fixture = { 
    headerComponents: HeaderComponents;
};

export const test = base.extend<Fixture>({
    headerComponents: async ({ page }, use) => {
        const headerComponents = new HeaderComponents(page);
        await use(headerComponents);
    }
});

export { expect } from '@playwright/test';
export { credentials } from '../../Shared/fixtures/Utils.fixtures';