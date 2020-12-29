import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { GlobalSearchDataConsoleCX } from './GlobalSearchDataConsoleCX';

export class GlobalSearchConsoleCXSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		let rowLocator = [
			{
				"label": "Provar Custom Obj Name (PROVAR_CUSTOM_OBJ__C_NAME)",
				"selected": true,
				"value": /GlobalSearch.*/
			},
		];
		this.zephyrTest('AutomationAPI', 'PROT-2322', 'FS_MAP_SF_CONSOLE_CX_GLOBAL_SEARCH', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'GlobalSearch.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [Standard.notInAConsoleTabCXPsi, GlobalSearchDataConsoleCX.Psi];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Map Global search box on obj home screen', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				remoteWebdriver.switchTo().defaultContent();
				const element: WebElement = await this.findElement(remoteWebdriver, "//div[@class='unifiedSearchBox']//form//div[@class='headerSearchContainer']//input[contains(@title,'Search')]", 10 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", element);
				await this.findElement(remoteWebdriver, GlobalSearchDataConsoleCX.searchBox.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsoleCX.searchBox.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchDataConsoleCX.searchBox.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Global search box on obj home screen', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsoleCX.searchBox.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchDataConsoleCX.searchBox.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchDataConsoleCX.searchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for dropdown to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Map Search object Link', async () => {
				await this.findElement(remoteWebdriver, "//li[@role='presentation']/a/strong", 10*1000);
				await this.findElement(remoteWebdriver, "//div[@id='phSearchInput_autoCompleteBoxId']//span[@class='footerRow']/span[contains(text(),'GlobalSearch')]", 10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsoleCX.searchObject.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchDataConsoleCX.searchObject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Search object Link', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsoleCX.searchObject.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, GlobalSearchDataConsoleCX.searchObject.testCaseXML);
				this.assertExecutionStatus(testItemId, GlobalSearchDataConsoleCX.searchObject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for new screen', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping record from the Global search page', async () => {
				await this.findElement(remoteWebdriver, "//iframe[contains(@src,'UnifiedSearch')]", 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchDataConsoleCX.name.xpath, ["//iframe[contains(@src,'UnifiedSearch')]"]);
				this.assertTestBuilderState([Standard.CurrentTabCXPsi, GlobalSearchDataConsoleCX.PCOSearchPsi], GlobalSearchDataConsoleCX.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do record from the Global search page', async () => {
				await this.modifyAddToTestCase(GlobalSearchDataConsoleCX.name.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchDataConsoleCX.name.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchDataConsoleCX.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
