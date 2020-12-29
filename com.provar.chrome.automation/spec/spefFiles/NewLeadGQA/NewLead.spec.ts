import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { NewLeadData } from './NewLead.data';
import { join } from 'path';

export class NewLeadSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const pageStructureInfoQA: any[] = [NewLeadData.NewLeadPSI];
		this.zephyrTest('AutomationAPI', "PROT-1793", 'FS_MAP_SF_GQA_LX_NEW LEAD', () => {
			beforeAll(async done => {
				const tcName = 'NewLead.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the Salutation field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, NewLeadData.salutation.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.salutation.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.salutation.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Salutation field', async () => {
				await this.modifyAddToTestCase(NewLeadData.salutation.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.salutation.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.salutation.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the First Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.firstName.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.firstName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the First Name field', async () => {
				await this.modifyAddToTestCase(NewLeadData.firstName.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.firstName.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Last Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.lastName.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Last Name field', async () => {
				await this.modifyAddToTestCase(NewLeadData.lastName.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.lastName.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.email.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.email.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Email field', async () => {
				await this.modifyAddToTestCase(NewLeadData.email.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.email.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.email.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Phone field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.phone.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.phone.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Phone field', async () => {
				await this.modifyAddToTestCase(NewLeadData.phone.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.phone.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.phone.executionStatus, response.runExecutionStatus.currentTestCase);
			});			
			this.step('Mapping the company field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.company.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.company.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the company field', async () => {
				await this.modifyAddToTestCase(NewLeadData.company.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.company.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.company.executionStatus, response.runExecutionStatus.currentTestCase);
			});		
			this.step('Mapping the title field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.title.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.title.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the title field', async () => {
				await this.modifyAddToTestCase(NewLeadData.title.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.title.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.title.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewLeadData.save.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, NewLeadData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewLeadData.save.testCaseXML);
				this.assertExecutionStatus(testItemId, NewLeadData.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}