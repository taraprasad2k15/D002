import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { LogACallData } from './LogACall.data';
import { join } from 'path';

export class LogACallSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [LogACallData.NewTaskViewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1792", 'FS_MAP_SF_GQA_LX_LOG A CALL', () => {
			beforeAll(async done => {
				const tcName = 'LogACall.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Subject field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, LogACallData.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallData.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, LogACallData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(LogACallData.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, LogACallData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, LogACallData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Comment field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallData.comment.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, LogACallData.comment.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Comment field', async () => {
				await this.modifyAddToTestCase(LogACallData.comment.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, LogACallData.comment.testCaseXML);
				this.assertExecutionStatus(testItemId, LogACallData.comment.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallData.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, LogACallData.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Name Lookup field', async () => {
                await this.modifyAddToTestCase(LogACallData.contactName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, LogACallData.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, LogACallData.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Related To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallData.relatedTo.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, LogACallData.relatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Related To field', async () => {
                await this.modifyAddToTestCase(LogACallData.relatedTo.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, LogACallData.relatedTo.testCaseXML);
                this.assertExecutionStatus(testItemId, LogACallData.relatedTo.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallData.save.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, LogACallData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, LogACallData.save.testCaseXML);
				this.assertExecutionStatus(testItemId, LogACallData.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}