import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfSmax} from './Smax';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfSmaxWorkOrderViewSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Smax';
        let remoteWebdriver: WebDriver;
        const pageStructureInfo: any[] = [SfSmax.workOrderViewPsiCx];
        

        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Basics_Fields', () => {
            beforeAll(async done => {
                const tcName = 'SMAX.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping Priority Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfSmax.basics.priority.xpath, 10000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.basics.priority.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.basics.priority.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do Priority Picklist for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.basics.priority.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping SLA Onsite Response field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.basics.slaOnsiteResponse.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.basics.slaOnsiteResponse.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do SLA Onsite Response field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.basics.slaOnsiteResponse.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping OptiMax Error Occurred field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.basics.optimaxErrorOccured.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.basics.optimaxErrorOccured.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do OptiMax Error Occurred field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.basics.optimaxErrorOccured.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.basics.contact.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.basics.contact.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Contact field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.basics.contact.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Enititlement Notes field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.basics.enititlementNotes.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.basics.enititlementNotes.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Enititlement Notes field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.basics.enititlementNotes.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Product & Entitlement', () => {
            beforeEach(() => {
				this.beforeEach();
			});
            this.step('Mapping Warranty field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.productsAndEntitlement.warranty.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.productsAndEntitlement.warranty.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Warranty field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.productsAndEntitlement.warranty.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'New Section', () => {
            beforeEach(() => {
				this.beforeEach();
			});
            this.step('Mapping Actual Initial Response field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.actualInitialResponse.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.actualInitialResponse.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do Actual Initial Response field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.actualInitialResponse.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Actual Initial Response field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.actualInitialResponse.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.actualInitialResponse.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do Actual Initial Response field for "Start Inline Edit" interaction ', async () => {
                this.modifyAddToTestCase(SfSmax.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.actualInitialResponse.testCaseXMLInline);
                this.assertExecutionStatus(testItemId, SfSmax.newSection.actualInitialResponse.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Type field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.billingType.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.billingType.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Type field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.billingType.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Skill field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.skill.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.skill.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Skill field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.skill.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Invoice Created field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.invoiceCreated.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.invoiceCreated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do Invoice Created field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.invoiceCreated.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Idle Time field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.idleTime.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.idleTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Idle Time field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.idleTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Total Estimate field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.totalEstimate.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.totalEstimate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do Total Estimate field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.totalEstimate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Total Estimate field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.newSection.totalEstimate.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.newSection.totalEstimate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do Total Estimate field for "Hover" interaction', async () => {
                this.modifyAddToTestCase(SfSmax.hover);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.newSection.totalEstimate.testCaseXMLHover);
                this.assertExecutionStatus(testItemId, SfSmax.newSection.totalEstimate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Service Location', () => {
            beforeEach(() => {
            this.beforeEach();
            });
                this.step('Mapping Street field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.serviceLocation.street.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.serviceLocation.street.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Street field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.serviceLocation.street.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping State field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.serviceLocation.state.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.serviceLocation.state.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do State field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.serviceLocation.state.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
             this.step('Mapping Country field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.serviceLocation.country.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.serviceLocation.country.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do Country field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.serviceLocation.country.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'SLA Date Fields', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            this.step('Mapping Restoration Customer By field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.slaDateField.restorationCustomerBy.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.slaDateField.restorationCustomerBy.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do Restoration Customer By field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.slaDateField.restorationCustomerBy.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sla Terms field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.slaDateField.slaTerms.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.slaDateField.slaTerms.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Sla Terms field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.slaDateField.slaTerms.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sla Clock Paused field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.slaDateField.slaClockPaused.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.slaDateField.slaClockPaused.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do Sla Clock Paused field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.slaDateField.slaClockPaused.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sla Clock Pause Hours field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.slaDateField.slaClockPauseHours.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.slaDateField.slaClockPauseHours.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Sla Clock Pause Hours field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.slaDateField.slaClockPauseHours.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Assignment', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            this.step('Mapping Service Team field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.assignment.serviceTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.assignment.serviceTeam.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Service Team field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.assignment.serviceTeam.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Service Team field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.assignment.serviceTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.assignment.serviceTeam.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Service Team field for "Start Inline Edit" interaction ', async () => {
                this.modifyAddToTestCase(SfSmax.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.assignment.serviceTeam.testCaseXMLInline);
                this.assertExecutionStatus(testItemId, SfSmax.assignment.serviceTeam.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Closure', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            this.step('Mapping Work Performed field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.closure.workPerformed.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.closure.workPerformed.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Work Performed field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.closure.workPerformed.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Failure Location field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.closure.failureLocation.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.closure.failureLocation.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do Failure Location field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.closure.failureLocation.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Dispatch Information', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            this.step('Mapping Dispatch Process field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.dispatchInformation.dispatchProcess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.dispatchInformation.dispatchProcess.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Dispatch Process field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.dispatchInformation.dispatchProcess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Optimax Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.dispatchInformation.optimaxStatus.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.dispatchInformation.optimaxStatus.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Optimax Status field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.dispatchInformation.optimaxStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Qualified Technicians field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.dispatchInformation.qualifiedTechnicians.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.dispatchInformation.qualifiedTechnicians.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Qualified Technicians field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.dispatchInformation.qualifiedTechnicians.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Preferred Start Time field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.dispatchInformation.preferredStartTime.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.dispatchInformation.preferredStartTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do Preferred Start Time field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.dispatchInformation.preferredStartTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Preventive Maintenance', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            this.step('Mapping Is PMWork Order field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.preventiveMaintenance.isPMWorkOrder.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.preventiveMaintenance.isPMWorkOrder.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do Is PMWork Order field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.preventiveMaintenance.isPMWorkOrder.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Scheduled Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.preventiveMaintenance.scheduledDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.preventiveMaintenance.scheduledDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do Scheduled Date field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.preventiveMaintenance.scheduledDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Preventive Maintenance Plan field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.preventiveMaintenance.preventiveMaintenancePlan.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.preventiveMaintenance.preventiveMaintenancePlan.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
            });
            this.step('Add & Do Preventive Maintenance Plan field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.preventiveMaintenance.preventiveMaintenancePlan.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Created By field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.preventiveMaintenance.createdBy.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.preventiveMaintenance.createdBy.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do Created By field for Value and Label Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.valueandlabel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.preventiveMaintenance.createdBy.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT - 2686', 'Work Order Action', () => {
            beforeEach(() => {
            this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping Dispatch Console field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSmax.workOrderAction.dispatchConsole.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfSmax.workOrderAction.dispatchConsole.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
            });
            this.step('Add & Do Dispatch Console field for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfSmax.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSmax.workOrderAction.dispatchConsole.testCaseXML);
                this.assertExecutionStatus(testItemId, SfSmax.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
    
}
