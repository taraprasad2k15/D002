import { SfRecordTypeScreen } from '../RecordTypeScreen/SfRecordTypeScreen';
import { BaseSpec } from '../BaseSpec';
import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';

export class SfRecordTypeScreenSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfo: any[] = [Standard.recordTypePsi];
		const rowLocators:any[] = [
			{
				"label": "Record Type Name (recordTypeName)",
				"selected": true,
				"value": "Default Layout"
			},
			{
				"label": "Description (recordTypeDescription)",
				"selected": false,
				"value": "Standard Salesforce Page"
			}
		];

		this.zephyrTest('AutomationAPI', 'PROT-1131', 'FS_MAP_SF_LAYOUT_LX_RECORD TYPE.SET', () => {
			beforeAll(async done => {
				const tcName = 'Record Type Screen.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Default Record Type Radio Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfRecordTypeScreen.recordTypeRdBt.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfRecordTypeScreen.recordTypeRdBt.xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.recordTypeRdBt, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Default Record Type Radio Button', async () => {
				await this.modifyAddToTestCase(SfRecordTypeScreen.recordTypeRdBt.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfRecordTypeScreen.recordTypeRdBt.testCaseXML);
				this.assertExecutionStatus(testItemId, SfRecordTypeScreen.recordTypeRdBt.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1132', 'FS_MAP_SF_LAYOUT_LX_RECORD TYPE.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			})
			this.step('Mapping Record Type Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfRecordTypeScreen.description.xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.recordTypeDescription, Standard.interaction.set, Standard.applicableInteractions.ReadOnly, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Record Type Description field', async () => {
				await this.modifyAddToTestCase(SfRecordTypeScreen.description.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate  = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, "type", "Icon-ExecutingChildPaused", testItemId);
				await this.assertTestCaseXML(testItemId, SfRecordTypeScreen.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfRecordTypeScreen.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Next Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfRecordTypeScreen.nextBt.xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.nextBt, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Next Button', async () => {
				await this.modifyAddToTestCase(SfRecordTypeScreen.nextBt.interactionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate  = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, "type", "Icon-ExecutingPaused", testItemId);
				const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);				
				await this.assertTestCaseXML(testItemId, SfRecordTypeScreen.nextBt.testCaseXML);
				this.assertExecutionStatus(testItemId, SfRecordTypeScreen.nextBt.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		
	};

}