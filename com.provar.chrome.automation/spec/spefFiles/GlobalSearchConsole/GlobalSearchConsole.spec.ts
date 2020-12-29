import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { GlobalSearchDataConsole } from './GlobalSearchDataConsole';
import { join } from 'path';

export class GlobalSearchConsoleSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		let rowLocator = [
			{
				"label": "Provar Custom Obj Name (PROVAR_CUSTOM_OBJ__C_NAME)",
				"selected": true,
				"value": /.*/
			},
		];
		let rowLocator2 = [
			{
				"label": "Name (name)",
				"selected": true,
				"value": /GlobalSearch.*/
			},
			{
				"label": "Object (object)",
				"selected": false,
				"value": "Provar Custom Obj"
			},
			{
				"label": "Secondary Field (secondaryField)",
				"selected": false,
			}
		];
		this.zephyrTest('AutomationAPI', 'PROT-1847', 'FS_MAP_SF_CONSOLE_LX_GLOBAL_SEARCH', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'GlobalSearch.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [Standard.notInAConsoleTabPsi, GlobalSearchDataConsole.Psi];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			it('Waiting for Global Search text box', async done => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element: WebElement = await this.findElement(remoteWebdriver, "//header//div/div/input[contains(@placeholder,'Search')]", 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", element);
				element.sendKeys("  ");
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Map Global search box on obj home screen', async () => {
				await this.findElement(remoteWebdriver, GlobalSearchDataConsole.searchBox.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsole.searchBox.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchDataConsole.searchBox.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Global search box on obj home screen', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsole.searchBox.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchDataConsole.searchBox.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchDataConsole.searchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Search object Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsole.searchObject.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchDataConsole.searchObject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Search object Link', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsole.searchObject.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, GlobalSearchDataConsole.searchObject.testCaseXML);
				this.assertExecutionStatus(testItemId, GlobalSearchDataConsole.searchObject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping record from the Global search page', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsole.name.xpath);
				this.assertTestBuilderState([Standard.CurrentTabPsi, GlobalSearchDataConsole.PCOSearchPsi], GlobalSearchDataConsole.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do record from the Global search page', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsole.name.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchDataConsole.name.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchDataConsole.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
