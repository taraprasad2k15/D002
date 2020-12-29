import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { NewTaskData } from './NewTask';
import { join } from 'path';

export class NewTaskSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [NewTaskData.NewTaskViewPSI];
		this.zephyrTest('AutomationAPI', "PROT-1791", 'FS_MAP_SF_GQA_LX_NEW TASK', () => {
			beforeAll(async done => {
				const tcName = 'NewTask.testcase';
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
				await this.findElement(remoteWebdriver, NewTaskData.subject.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewTaskData.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewTaskData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(NewTaskData.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewTaskData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, NewTaskData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Due Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewTaskData.dueDate.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewTaskData.dueDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
			});
			this.step('Set the Due Date field', async () => {
				await this.modifyAddToTestCase(NewTaskData.dueDate.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewTaskData.dueDate.testCaseXML);
				this.assertExecutionStatus(testItemId, NewTaskData.dueDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Name Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewTaskData.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewTaskData.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Name Lookup field', async () => {
                await this.modifyAddToTestCase(NewTaskData.contactName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, NewTaskData.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, NewTaskData.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Related To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewTaskData.relatedTo.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, NewTaskData.relatedTo.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the Related To field', async () => {
                await this.modifyAddToTestCase(NewTaskData.relatedTo.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, NewTaskData.relatedTo.testCaseXML);
                this.assertExecutionStatus(testItemId, NewTaskData.relatedTo.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewTaskData.save.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewTaskData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewTaskData.save.testCaseXML);
				this.assertExecutionStatus(testItemId, NewTaskData.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}