import { test as base } from '../../../../Shared/fixtures/Utils.fixtures';
import { TemplateBuilderPage } from '../Component/create.components';
import { ValidateTemplateBuilder } from '../Component/validate.componens';
import { HeaderComponents } from '../../../../Shared/components/Header_Component';

type Fixtures = { 
    templateBuilderPage: TemplateBuilderPage;
    validateTemplateBuilder: ValidateTemplateBuilder;
    headerComponents: HeaderComponents;
};

export const test = base.extend<Fixtures>({
    templateBuilderPage: async ({ page }, use) => {
        const templateBuilderPage = new TemplateBuilderPage(page);
        await use(templateBuilderPage);
    },
    validateTemplateBuilder: async ({ page }, use) => {
        const validateTemplateBuilder = new ValidateTemplateBuilder(page);
        await use(validateTemplateBuilder);
    },
    headerComponents: async ({ page }, use) => {
        const headerComponents = new HeaderComponents(page);
        await use(headerComponents);
    },
})

export { expect } from '@playwright/test'
export { credentials } from '../../../../Shared/data/Credential';
