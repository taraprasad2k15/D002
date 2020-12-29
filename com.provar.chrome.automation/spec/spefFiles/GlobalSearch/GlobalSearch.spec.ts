import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { GlobalSearchData } from './GlobalSearchData';
import { join } from 'path';

export class GlobalSearchSpec extends BaseSpec {
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
		this.zephyrTest('AutomationAPI', 'PROT-1556', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.SeachBox', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'GlobalSearch.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [GlobalSearchData.Psi];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Global search box on obj home screen', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, GlobalSearchData.searchBox.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.searchBox.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.searchBox.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Global search box on obj home screen', async () => {
				await this.modifyAddToTestCase(GlobalSearchData.searchBox.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchData.searchBox.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchData.searchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1557', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.SearchObjectLink', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Search object Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.searchObject.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.searchObject.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Search object Link', async () => {
				await this.modifyAddToTestCase(GlobalSearchData.searchObject.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, GlobalSearchData.searchObject.testCaseXML);
				this.assertExecutionStatus(testItemId, GlobalSearchData.searchObject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1558', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.ResultTable', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping record from the Global search page', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.name.xpath);
				this.assertTestBuilderState([GlobalSearchData.PCOSearchPsi], GlobalSearchData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do record from the Global search page', async () => {
				await this.modifyAddToTestCase(GlobalSearchData.name.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", GlobalSearchData.name.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchData.name.executionStatus, response.runExecutionStatus.currentTestCase);
				const searchboxWE: WebElement = await this.findElement(remoteWebdriver, GlobalSearchData.searchBox.xpath, 20 * 1000);
				await searchboxWE.sendKeys("Global");
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1559', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.SearchGlobalLink', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			it('Waiting for global search link to appear', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Map Search global link', async () => {
				await this.findElement(remoteWebdriver, GlobalSearchData.searchGlobal.xpath, 20 * 1000);
				this.beginAddToTestCase(GlobalSearchData.searchGlobal.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.searchGlobal.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.searchGlobal.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Search global link', async () => {
				await this.modifyAddToTestCase(GlobalSearchData.searchGlobal.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				await this.assertTestCaseXML("0", GlobalSearchData.searchGlobal.testCaseXML);
				this.assertExecutionStatus("0", GlobalSearchData.searchGlobal.executionStatus, response.runExecutionStatus.currentTestCase);
				const searchboxWE: WebElement = await this.findElement(remoteWebdriver, GlobalSearchData.searchBox.xpath, 20 * 1000);
				await searchboxWE.clear();
				await searchboxWE.sendKeys("GlobalSearch");
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1560', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.InlineResult.Object', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			it('Waiting for record link to appear', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Map Record Object link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.recordObjectLink.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.recordObjectLink.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator2);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1561', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.InlineResult.Name', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Map Record Name link', async () => {
				await this.findElement(remoteWebdriver, GlobalSearchData.recordNameLink.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.recordNameLink.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.recordNameLink.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator2);
			});
			this.step('Add & Do Record Name link', async () => {
				// await this.modifyAddToTestCase(GlobalSearchData.recordNameLink.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, GlobalSearchData.recordNameLink.testCaseXML);
				this.assertExecutionStatus(testItemId, GlobalSearchData.recordNameLink.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1562', 'FS_MAP_SF_LAYOUT_LX_GLOBAL SEARCH.FilterSearchLink', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
	    	});
			it('Setting the search text to Provar custom', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					const searchboxWE: WebElement = await this.findElement(remoteWebdriver, GlobalSearchData.searchBox.xpath, 20 * 1000);
					await searchboxWE.clear();
					await searchboxWE.sendKeys("Provar Custom");
					done();
				}, 4 * 1000);
			}, 100 * 1000);
			it('Waiting for filter search link to appear', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Map Filter search link', async () => {
				await this.findElement(remoteWebdriver, GlobalSearchData.filterSearch.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(GlobalSearchData.filterSearch.xpath);
				this.assertTestBuilderState(pageStructureInfo, GlobalSearchData.filterSearch.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Filter search link', async () => {
				await this.modifyAddToTestCase(GlobalSearchData.filterSearch.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				await this.assertTestCaseXML(testItemId, GlobalSearchData.filterSearch.testCaseXML);
				this.assertExecutionStatus(testItemId, GlobalSearchData.filterSearch.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
