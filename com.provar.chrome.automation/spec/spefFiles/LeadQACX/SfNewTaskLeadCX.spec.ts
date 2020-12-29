import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewTaskLeadCX } from './SfNewTaskLeadCX';
import { join } from 'path';
import { BrowserWindow } from 'electron';

export class SfNewTaskLeadCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfNewTaskLeadCX.NewTaskViewPSI];
		const pageStructureInfoLookup: any[] = [SfNewTaskLeadCX.oppLookupPSI];
        const pageStructureInfoCB: any[] = [SfNewTaskLeadCX.comboBoxPSI];
        this.zephyrTest('AutomationAPI', "PROT-1105", 'FS_MAP_SF_QA_AF_CX_NEW TASK.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Lead NewTask CX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
            });
			this.step('Navigate to New Task on Feed Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                if (await this.verifyElement(remoteWebdriver, SfNewTaskLeadCX.feedTab.Xpath, 10000) != null) {
                    const feedTab: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLeadCX.feedTab.Xpath, 10000);
					await remoteWebdriver.executeScript("arguments[0].click();", feedTab);
                }
				const newTaskTab: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLeadCX.newTaskTab.Xpath, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", newTaskTab);
			});
			this.step('Mapping the Subject field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLeadCX.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.subject.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLeadCX.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfNewTaskLeadCX.subject.testCaseXML);
				this.assertExecutionStatus("0", SfNewTaskLeadCX.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.dueDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.dueDate.fieldDetails, Standard.interaction.sfToday, Standard.applicableInteractions.DateTimeCX.enterableMode, response.testbuilderState);
			});
			this.step('Set the Due Date field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLeadCX.dueDate.interactionParameters.sfToday);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.dueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.dueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Related To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.relatedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.relatedTo.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('SfLookup the Related To field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLeadCX.relatedTo.interactionParameters.sfLookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.relatedTo.testCaseXMLlookup);
                this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.relatedTo.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the SearchText field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.searchText.Xpath, ["//frame[@id='searchFrame']"]);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewTaskLeadCX.searchText.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the SearchText field', async () => {
                await this.modifyAddToTestCase(SfNewTaskLeadCX.searchText.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.searchText.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.searchText.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Go! button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.go.Xpath, ["//frame[@id='searchFrame']"]);
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewTaskLeadCX.go.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go! button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.go.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.go.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.opportunityName.Xpath, ["//frame[@id='resultsFrame']"]);
                const rowLocators = [
                    {
						"label": "Opportunity Name (Name)",
						"selected": true,
						"value": "AutomationOpportunity",
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
						"value": "",
					},
                ];
                this.assertTestBuilderState(pageStructureInfoLookup, SfNewTaskLeadCX.opportunityName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Contact Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.opportunityName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.opportunityName.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Assigned To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.assignedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.assignedTo.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Assigned To field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLeadCX.assignedTo.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
				await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.assignedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.assignedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.name.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Name field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLeadCX.name.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLeadCX.create.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLeadCX.create.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLeadCX.create.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLeadCX.create.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
    };
}