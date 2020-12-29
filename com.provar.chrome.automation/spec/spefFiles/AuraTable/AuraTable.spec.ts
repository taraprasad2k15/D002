import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { AuraTableData } from './AuraTable.data';
import { join } from 'path';

export class AuraTableSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = true;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = AuraTableData.PSI;
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
		this.zephyrTest('AutomationAPI', 'PROT-2539', 'FS_MAP_SF_DT_LX_EMBEDDED_VF_DATA_TABLE', () => {
			beforeAll(async done => {
				const tcName = 'AuraTable.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			// afterAll(async done => {
			// 	await this.endTestSession(done);
			// });
			this.step('Mapping productName field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(AuraTableData.productName.xpath);
				this.assertTestBuilderState(pageStructureInfo, AuraTableData.productName.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do productName field', async () => {
				await this.modifyAddToTestCase(AuraTableData.productName.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				// const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				// this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				// await this.assertTestCaseXML(testItemId, AuraTableData.productName.testcaseXML);
				// this.assertExecutionStatus(testItemId, AuraTableData.productName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}