import { test as base } from '../../../../Shared/fixtures/Utils.fixtures';
import { TemplateBuilderPage } from '../Component/create.components';
import { ValidateTemplateBuilder } from '../Component/validate.componens';

type Fixtures = { 
    templateBuilderPage: TemplateBuilderPage;
    validateTemplateBuilder: ValidateTemplateBuilder;
};

export const test = base.extend<Fixtures>({
    templateBuilderPage: async ({ page }, use) => {
        const templateBuilderPage = new TemplateBuilderPage(page);
        await use(templateBuilderPage);
    },
    validateTemplateBuilder: async ({ page }, use) => {
        const validateTemplateBuilder = new ValidateTemplateBuilder(page);
        await use(validateTemplateBuilder);
    }
})

export { expect } from '@playwright/test'
export { credentials } from '../../../../Shared/data/Credential';
