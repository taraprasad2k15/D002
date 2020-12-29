import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { NewAccQAData } from './NewAccQA.data';
import { WebDriver } from 'selenium-webdriver';
import { join } from 'path';

export class NewAccQASpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const frameXpath = ["(//iframe)[2]"];
		let pageStructureInfo: any[] = [
			Standard.CurrentTabCXPsi,
			{
				itemDefinition: {
					itemClass: 'Page',
					itemTypeId: 'SfLayoutUiTargetExtension',
				},
				pageDetails: {
					title: 'Opportunity.Create_Account publisher action screen',
				},
			}];

		this.zephyrTest('AutomationAPI', 'PROT-2495', 'FS_MAP_SF_LX_NEW SERVICE CONTRACT', () => {
			beforeAll(async done => {
				const tcName = 'NewAccQA.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				done;
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping accountName field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.accountName.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do accountName field', async () => {
				await this.modifyAddToTestCase(NewAccQAData.accountName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", NewAccQAData.accountName.testCaseXML);
				this.assertExecutionStatus("0", NewAccQAData.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping customDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.customDate.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.customDate.fieldDetails, Standard.interaction.sfToday, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do customDate field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewAccQAData.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping approved field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.approved.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.approved.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do approved field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewAccQAData.approved.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.approved.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping type field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.type.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.type.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do type field', async () => {
				await this.modifyAddToTestCase(NewAccQAData.type.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewAccQAData.type.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.type.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping parentAcc field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.parentAcc.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.parentAcc.fieldDetails, Standard.interaction.sfLookup, [], response.testbuilderState);
			});
			this.step('Add & Do parentAcc field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NewAccQAData.parentAcc.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.parentAcc.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping parentAccName field', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.parentAccName.xpath, ["//frame[@id='resultsFrame']"], windowUrl, windowTitle);
				const rowLocators = [
					{
						"label": "Account Name (Name)",
						"selected": true,
						"value": /.*/,
					},
					{
						"label": "col 1",
						"selected": false,
					},
					{
						"label": "col 2",
						"selected": false,
					},
				];
				this.assertTestBuilderState([Standard.notInAConsoleTabCXPsi, {
					itemDefinition: {
						itemClass: 'Page',
						itemTypeId: 'SfLookupUiTargetExtension',
					},
					pageDetails: {
						title: 'Account Lookup Screen',
					},
				}], NewAccQAData.parentAccName.fieldDetails, Standard.interaction.click, [], response.testbuilderState, rowLocators);
			});
			this.step('Add & Do parentAccName field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, NewAccQAData.parentAccName.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.parentAccName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping createBt field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NewAccQAData.createBt.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, NewAccQAData.createBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do createBt field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdlookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdlookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdlookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdlookup);
				await this.assertTestCaseXML(testItemId, NewAccQAData.createBt.testCaseXML);
				this.assertExecutionStatus(testItemId, NewAccQAData.createBt.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}