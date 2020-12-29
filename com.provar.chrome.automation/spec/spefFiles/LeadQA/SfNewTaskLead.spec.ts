import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewTaskLead } from './SfNewTaskLead';
import { join } from 'path';

export class SfNewTaskLeadSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfNewTaskLead.NewTaskViewPSI];
		const pageStructureInfoLookup: any[] = [SfNewTaskLead.accountLookupPSI];
		const pageStructureInfoAT: any[] = [SfNewTaskLead.activityTimelinePSI];
		this.zephyrTest('AutomationAPI', "PROT-1059", 'FS_MAP_SF_QA_AF_LX_NEW TASK.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Lead NewTask.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Navigate to New Task on Activity Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activityTab: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLead.activityTab.Xpath, 10000);
				await activityTab.click();
				const newTaskTab: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLead.newTaskTab.Xpath, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", newTaskTab);
				// await newTaskTab.click();
			});
			this.step('Mapping the Subject field', async () => {
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLead.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLead.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML('0', SfNewTaskLead.subject.testCaseXML);
				this.assertExecutionStatus('0', SfNewTaskLead.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.dueDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.dueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Set the Due Date field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLead.dueDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.dueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.dueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Account Lookup field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.accountLookup.XpathInpUpdated);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.accountLookup.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('SF lookup the Account Lookup field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLead.accountLookup.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.accountLookup.testCaseXML.lookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.accountLookup.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contact Name', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.accountName.Xpath);
				const rowLocators = [
					{
						"label": "Account Name (Name)",
						"selected": true,
						"value": "AutomationAPIAccount",
					},
					{
						"label": "Phone (ACCOUNT_PHONE1)",
						"selected": false,
						"value": "9990000999",
					},
					{
						"label": "Account Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					},
				];
				this.assertTestBuilderState(pageStructureInfoLookup, SfNewTaskLead.accountName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click the Account Name', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Assigned To field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.assignedTo.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.assignedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Assigned To field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLead.assignedTo.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.assignedTo.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.assignedTo.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.name.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.name.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Name field', async () => {
				await this.modifyAddToTestCase(SfNewTaskLead.name.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.save.XpathProvar);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.save.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Remove the Related To Account', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const deleteIcon: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLead.accountLookup.XpathDeleteIcon, 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", deleteIcon);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.save.XpathProvar);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewTaskLead.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewTaskLead.save.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewTaskLead.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "PROT-1060", 'FS_MAP_SF_QA_AF_LX_NEW TASK.RA', () => {
			beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
			});
			this.step('Mapping the Activity Timeline entry', async() => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfNewTaskLead.activityTabSubject.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewTaskLead.activityTabSubject.Xpath);
                this.assertTestBuilderState(pageStructureInfoAT, SfNewTaskLead.activityTabSubject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
				});
			this.step('Assert the Activity Timeline entry', async() => {
				await this.modifyAddToTestCase(SfNewTaskLead.activityTabSubject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML('0', SfNewTaskLead.activityTabSubject.testCaseXML);
				this.assertExecutionStatus('0', SfNewTaskLead.activityTabSubject.executionStatus, response.runExecutionStatus.currentTestCase);});
		});
	};
}