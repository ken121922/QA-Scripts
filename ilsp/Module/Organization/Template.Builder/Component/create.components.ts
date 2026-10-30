import { expect, type Page, type Locator } from '@playwright/test';

export class TemplateBuilderPage {
    readonly page: Page;
    readonly workflowTab: Locator;
    readonly expectWorkflowTab: Locator;
    readonly specialProjectBuilder: Locator;
    readonly enterRequirementField: Locator;
    readonly addBtn: Locator;

    readonly radiosSpecialProject: Record<string, Locator>;
    readonly radioLinkages: Record<string, Locator>;

    constructor(page: Page) {
        this.page = page;
        this.workflowTab = page.getByRole('tab', { name: 'Workflow' });
        this.expectWorkflowTab = page.getByRole('heading', { name: 'Template Builder' });
        this.specialProjectBuilder = page.locator('label').filter({ hasText: 'Special Project' });
        this.enterRequirementField = page.getByRole('textbox', { name: 'Enter requirement name...' });
        this.addBtn = page.getByRole('button', { name: 'Add' });

        this.radiosSpecialProject = {
            technicalVetting: page.getByRole('radio', { name: 'Technical Vetting' }),
            budgetApproval: page.getByRole('radio', { name: 'Budget Approval' }),
            moaDrafting: page.getByRole('radio', { name: 'MOA Drafting' }),
            legalReview: page.getByRole('radio', { name: 'Legal Review' }),
            executiveApproval: page.getByRole('radio', { name: 'Executive Approval' }),
            implementation: page.getByRole('radio', { name: 'Implementation' }),
            impactAssessment: page.getByRole('radio', { name: 'Impact Assessment' }),
            archived: page.getByRole('radio', { name: 'Archived' }),
        };

        this.radioLinkages = {
            initiationOfPartnership: page.getByRole('radio', { name: 'Initiation of Partnership' }),
            submissionOfDocuments: page.getByRole('radio', { name: 'Submission of Documents' }),
            coordinationAndFacilitation: page.getByRole('radio', { name: 'Coordination and Facilitation' }),
            finalizationOfTheAgreement: page.getByRole('radio', { name: 'Finalization of the Agreement' }),
            approvalAndSigningOfAgreement: page.getByRole('radio', { name: 'Approval and Signing of' }),
            documentationAndFiling: page.getByRole('radio', { name: 'Implementation and Monitoring' }),
            implementationAndMonitoring: page.getByRole('radio', { name: 'Implementation and Monitoring' }),
            consolidationAndEndorsement: page.getByRole('radio', { name: 'Consolidation and Endorsement' }),
        };
    }

    async goToWorkflowTab() {
        await this.workflowTab.click();
        await expect(this.expectWorkflowTab).toBeVisible();
    }


    async validateLinkageProtocolStages() {
        const linkageProtocolStages = [
            this.radioLinkages.initiationOfPartnership,
            this.radioLinkages.submissionOfDocuments,
            this.radioLinkages.coordinationAndFacilitation,
            this.radioLinkages.finalizationOfTheAgreement,
            this.radioLinkages.approvalAndSigningOfAgreement,
            this.radioLinkages.documentationAndFiling,
            this.radioLinkages.implementationAndMonitoring,
            this.radioLinkages.consolidationAndEndorsement,
        ];

        for (const linkageStage of linkageProtocolStages) {
            await expect(linkageStage).toBeVisible();
        }
    }

    async addNewRequirementLinkages(
        data: {
            initiationOfPartnership: string;
            submissionOfDocuments: string;
            coordinationAndFacilitation: string;
            legalReview: string;
            finalizationOfTheAgreement: string;
            approvalAndSigningOfAgreement: string;
            documentationAndFiling: string;
            implementationAndMonitoring: string;
            consolidationAndEndorsement: string;
        }
    ): Promise<void> {
        for (const [key, value] of Object.entries(data)) {
            const radioLocator = this.radioLinkages[key];
            if (radioLocator && value) {
                await radioLocator.click();
                await this.enterRequirementField.fill(value);
                await this.addBtn.click();
            }
        }
    }


       async selectSpecialProject() {
        await this.specialProjectBuilder.click();
    }

    async validateSpecialProtocolStages() {
        const specialProtocolStages = [
            this.radiosSpecialProject.technicalVetting,
            this.radiosSpecialProject.budgetApproval,
            this.radiosSpecialProject.moaDrafting,
            this.radiosSpecialProject.legalReview,
            this.radiosSpecialProject.executiveApproval,
            this.radiosSpecialProject.implementation,
            this.radiosSpecialProject.impactAssessment,
            this.radiosSpecialProject.archived,
        ];

        for (const stage of specialProtocolStages) {
            await expect(stage).toBeVisible();
        }
    }

    async addNewRequirementSpecialProject(
        data: {
            technicalVetting: string;
            budgetApproval: string;
            moaDrafting: string;
            legalReview: string;
            executiveApproval: string;
            implementation: string;
            impactAssessment: string;
            archived: string;
        }
    ): Promise<void> {
        for (const [key, value] of Object.entries(data)) {
            const radioLocator = this.radiosSpecialProject[key];
            if (radioLocator && value) {
                await radioLocator.click();
                await this.enterRequirementField.fill(value);
                await this.addBtn.click();
            }
        }
    }


}