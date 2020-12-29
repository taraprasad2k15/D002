import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFT1Data } from './VFT1.data';
import { join } from 'path';

export class VFT1Spec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = VFT1Data.PSI;
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
		const frameXpath = ["(//iframe)[2]"];
		this.zephyrTest('AutomationAPI', 'PROT-2539', 'FS_MAP_SF_DT_LX_EMBEDDED_VF_DATA_TABLE', () => {
			beforeAll(async done => {
				const tcName = 'VFT1.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping lastname field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const frameWE = await this.findElement(remoteWebdriver, frameXpath[0]);
				await remoteWebdriver.switchTo().frame(frameWE);
				await this.findElement(remoteWebdriver, VFT1Data.lastname.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT1Data.lastname.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT1Data.lastname.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do lastname field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, VFT1Data.lastname.testcaseXML);
				this.assertExecutionStatus(testItemId, VFT1Data.lastname.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT1Data.email.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT1Data.email.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do email field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping phone field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT1Data.phone.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT1Data.phone.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do phone field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping phone2 field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT1Data.phone.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT1Data.phone.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do phone2 field', async () => {
				await this.modifyAddToTestCase(VFT1Data.phone.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}