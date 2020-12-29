import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { CaseHistoryRLData } from './CaseHistoryRL.data';
import { join } from 'path';

export class CaseHistoryRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [CaseHistoryRLData.PSI];
		const assertParams = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		};
		const executionStatusAssert = [
			{
				name: 'UiAssert',
				type: 'Icon-Successful',
				text: 'UI Assert',
				executionStatus: 'Executed',
			},
		]
		const testcaseXMLAssert =[{
			name: ['UiAssert'],
			title: ['UI Assert'],
		}]
		const rowLocators = [
			{
				"label": "Date (CreatedDate)",
				"selected": true,
			},
			{
				"label": "Field (Field)",
				"selected": false,
				"value": /.*/
			},
			{
				"label": "User (CreatedById)",
				"selected": false,
			},
			{
				"label": "Original Value (OldValue)",
				"selected": false,
			},
			{
				"label": "New Value (NewValue)",
				"selected": false,
			}
		];
		this.zephyrTest('AutomationAPI', 'PROT-2325', 'FS_MAP_SF_RL_LX_Case_History', () => {
			beforeAll(async done => {
				const tcName = 'CaseHistoryRL.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			/*
			afterAll(async done => {
				await this.endTestSession(done);
			});
			*/
			this.step('Mapping date field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, CaseHistoryRLData.date.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseHistoryRLData.date.xpath);
				console.log(JSON.stringify(response.testbuilderState.whereColumns, null, 4))
				this.assertTestBuilderState(pageStructureInfo, CaseHistoryRLData.date.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, rowLocators);
			});
			/*
			this.step('Add & Do date field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CaseHistoryRLData.date.testcaseXML);
				this.assertExecutionStatus(testItemId, CaseHistoryRLData.date.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping field field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseHistoryRLData.field.xpath);
				this.assertTestBuilderState(pageStructureInfo, CaseHistoryRLData.field.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, rowLocators);
			});
			this.step('Add & Do field field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping user field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseHistoryRLData.user.xpath);
				this.assertTestBuilderState(pageStructureInfo, CaseHistoryRLData.user.fieldDetails, Standard.interaction.click, [], response.testbuilderState, rowLocators);
			});
			this.step('Add & Do user field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping originalVal field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseHistoryRLData.originalVal.xpath);
				this.assertTestBuilderState(pageStructureInfo, CaseHistoryRLData.originalVal.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState, rowLocators);
			});
			this.step('Add & Do originalVal field', async () => {
				await this.modifyAddToTestCase(CaseHistoryRLData.originalVal.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping heading field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseHistoryRLData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, CaseHistoryRLData.heading.fieldDetails, Standard.interaction.hover, [], response.testbuilderState);
			});
			this.step('Add & Do heading field', async () => {
				await this.modifyAddToTestCase(CaseHistoryRLData.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			*/
		});
	}
}