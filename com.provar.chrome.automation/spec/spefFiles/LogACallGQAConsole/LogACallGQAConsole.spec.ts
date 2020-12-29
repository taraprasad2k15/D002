import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { LogACallConsoleData } from './LogACallGQAConsole';
import { join } from 'path';

export class LogACallGQAConsoleSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [Standard.CurrentTabPsi, LogACallConsoleData.NewTaskViewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1848", 'FS_MAP_SF_CONSOLE_LX_GQA_LOG A CALL', () => {
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
				await this.findElement(remoteWebdriver, LogACallConsoleData.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallConsoleData.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, LogACallConsoleData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(LogACallConsoleData.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, LogACallConsoleData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, LogACallConsoleData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(LogACallConsoleData.save.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, LogACallConsoleData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, LogACallConsoleData.save.testCaseXML);
				this.assertExecutionStatus(testItemId, LogACallConsoleData.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}