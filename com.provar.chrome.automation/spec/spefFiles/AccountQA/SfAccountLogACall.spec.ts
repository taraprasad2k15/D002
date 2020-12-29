import { WebDriver, WebElement, TouchSequence, By } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAccountLogACall } from './SfAccountLogACall';
import { join } from 'path';

export class SfAccountLogACallSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [SfAccountLogACall.logACallPSI];
		const pageStructureInfoAT: any[] = [SfAccountLogACall.activityTimelinePSI];
		this.zephyrTest('AutomationAPI', "PROT-1061", 'FS_MAP_SF_QA_AF_LX_LOG A CALL.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Account LogACall.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Navigate to Log a Call on Feed Tab', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const feedTab: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.logACallTab.Xpath);
				await remoteWebdriver.executeScript('arguments[0].click();', feedTab);
				// await feedTab.click();
				const subjectField: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.subject.Xpath);
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACall.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field to Send Letter', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfAccountLogACall.subject.testCaseXML.set);
				this.assertExecutionStatus("0", SfAccountLogACall.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.comments.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACall.comments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Comments field', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.comments.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.comments.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.comments.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name Lookup field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.contactName.XpathProvar);
				this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACall.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
			});
			this.step('Set the Name Lookup field', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.contactName.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.contactName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.contactName.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.saveButton.XpathProvar);
				this.assertTestBuilderState(pageStructureInfoQA, SfAccountLogACall.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "PROT-1062", 'FS_MAP_SF_QA_AF_LX_LOG A CALL.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
			this.step('Mapping the Activity Timeline entry', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.activityTabSubject.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.activityTabSubject.Xpath);
				this.assertTestBuilderState(pageStructureInfoAT, SfAccountLogACall.activityTabSubject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the Activity Timeline entry', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.activityTabSubject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML('0', SfAccountLogACall.activityTabSubject.testCaseXML);
				this.assertExecutionStatus('0', SfAccountLogACall.activityTabSubject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', "PROT-2266", 'FS_MAP_SF_LAYOUT_LX_ACTIVITY TIMELINE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Activity Timeline Summary', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.activityTabSummary.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.activityTabSummary.Xpath);
				this.assertTestBuilderState(pageStructureInfoAT, SfAccountLogACall.activityTabSummary.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Assert the Activity Timeline Summary', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.activityTabSummary.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.activityTabSummary.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.activityTabSummary.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Activity Timeline Due Date', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.activityTabSDueDate.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.activityTabSDueDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoAT, SfAccountLogACall.activityTabSDueDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Assert the Activity Timeline Due Date', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.activityTabSDueDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.activityTabSDueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.activityTabSDueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Activity Timeline Task', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.activityTabTask.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.activityTabTask.Xpath);
				this.assertTestBuilderState(pageStructureInfoAT, SfAccountLogACall.activityTabTask.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the Activity Timeline Task', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.activityTabTask.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.activityTabTask.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.activityTabTask.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Activity Timeline Description', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const activitySubject: WebElement = await this.findElement(remoteWebdriver, SfAccountLogACall.activityTabDescription.Xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountLogACall.activityTabDescription.Xpath);
				this.assertTestBuilderState(pageStructureInfoAT, SfAccountLogACall.activityTabDescription.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Assert the Activity Timeline Description', async () => {
				await this.modifyAddToTestCase(SfAccountLogACall.activityTabDescription.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfAccountLogACall.activityTabDescription.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountLogACall.activityTabDescription.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};

}