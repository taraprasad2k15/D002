import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCase } from './TabSwitching';
import { join } from 'path';

export class TabSwitchingSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo:any[] = [Standard.CurrentTabPsi, Case.caseNewPsi];

		this.zephyrTest('AutomationAPI', 'PROT-1851', 'SF_MAP_SF_CONSOLE_LX_CurTab_To_ExiTab', () => {
			beforeAll(async done => {
				const tcName = 'TabSwitching.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Casetype field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfNewCase.caseType.caseTypeXpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.caseType.caseTypeXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseTypeField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Casetype field', async () => {
				await this.modifyAddToTestCase(SfNewCase.caseType.withPrimaryandSecondaryTabName);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfNewCase.caseType.testCaseXML);
				this.assertExecutionStatus("0", SfNewCase.caseType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1852', 'SF_MAP_SF_CONSOLE_LX_CurTab_To__NewTab', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfNewCase.caseOrigin.withPrimaryandSecondaryTabName);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfNewCase.caseOrigin.testCaseXML);
				this.assertExecutionStatus("0", SfNewCase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}