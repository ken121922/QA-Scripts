import { expect, type Page } from '@playwright/test';

export class ValidateTemplateBuilder {
    constructor(private readonly page: Page) {}

    async validateCreatedRequirements(
        requirements: Record<string, string>
    ): Promise<void> {
        for (const requirement of Object.values(requirements)) {
            await expect(
                this.page.getByText(requirement, { exact: true })
            ).toBeVisible();
        }
    }
}
