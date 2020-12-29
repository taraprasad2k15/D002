import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFT2Data } from './VFT2.data';
import { join } from 'path';

export class VFT2Spec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = VFT2Data.PSI;
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
		const frameXpath = ["(//iframe)[3]"];
		this.zephyrTest('AutomationAPI', 'PROT-2544', 'FS_MAP_SF_DT_LX_EMBEDDED_VF_NESTED_TABLE', () => {
			beforeAll(async done => {
				const tcName = 'VFT2.testcase';
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
				await this.findElement(remoteWebdriver, VFT2Data.lastname.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT2Data.lastname.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT2Data.lastname.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do lastname field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, VFT2Data.lastname.testcaseXML);
				this.assertExecutionStatus(testItemId, VFT2Data.lastname.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFT2Data.email.xpath, frameXpath);
				this.assertTestBuilderState(pageStructureInfo, VFT2Data.email.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
			});
			this.step('Add & Do email field', async () => {
				await this.modifyAddToTestCase(assertParams);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, testcaseXMLAssert);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}