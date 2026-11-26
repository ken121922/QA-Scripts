import { expect, Locator, type Page } from '@playwright/test';

export class ValidateTemplateBuilder {

    readonly radiosSpecialProject: Record<string, Locator>;
    readonly radioLinkages: Record<string, Locator>;

    constructor(private readonly page: Page) {

         this.radiosSpecialProject = {
            projectProposal: page.getByRole('radio', { name: 'Project Proposal' }),
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
            legalReview: page.getByRole('radio', { name: 'Legal Review' }),
            finalizationOfTheAgreement: page.getByRole('radio', { name: 'Finalization of the Agreement' }),
            approvalAndSigningOfAgreement: page.getByRole('radio', { name: 'Approval and Signing of' }),
            documentationAndFiling: page.getByRole('radio', { name: 'Documentation and Filing' }),
            implementationAndMonitoring: page.getByRole('radio', { name: 'Implementation and Monitoring' }),
            consolidationAndEndorsement: page.getByRole('radio', { name: 'Consolidation and Endorsement' }),
        };
    }

    async validateCreatedRequirements(
        requirements: {
            initiationOfPartnership: string;
            submissionOfDocuments: string;
            coordinationAndFacilitation: string;
            finalizationOfTheAgreement: string;
            approvalAndSigningOfAgreement: string;
            documentationAndFiling: string;
            implementationAndMonitoring: string;
            consolidationAndEndorsement: string;
            
        }
    ): Promise<void> {
        for (const [key, requirement] of Object.entries(requirements)) {
            const radioLocator = this.radioLinkages[key];
            if (radioLocator && requirement) {
                await radioLocator.click();
            }
            await expect(
                this.page.getByText(requirement, { exact: true })
            ).toBeVisible();
        }
    }
    
    async validateCreatedRequirementsSpecialProject(
        requirements: {
            projectProposal: string;
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
        for (const [key, requirement] of Object.entries(requirements)) {
            const radioLocator = this.radiosSpecialProject[key];
            if (radioLocator && requirement) {
                await radioLocator.click();
            }
            await expect(
                this.page.getByText(requirement, { exact: true })
            ).toBeVisible();
        }
    }
}
