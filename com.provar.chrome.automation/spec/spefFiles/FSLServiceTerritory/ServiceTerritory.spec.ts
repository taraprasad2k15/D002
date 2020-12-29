import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { ServiceTerritoryData } from './ServiceTerritory.data';
import { join } from 'path';

export class ServiceTerritorySpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		let pageStructureInfoLookup: any[];
		this.zephyrTest('AutomationAPI', 'PROT-2112', 'FS_MAP_SF_FSL_ST_VIEW', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'ServiceTerritory.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [ServiceTerritoryData.PSIView];
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Map Name for Inline Edit', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, ServiceTerritoryData.name.xpathView, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.name.xpathView);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.name.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do Name', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.name.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.name.testCaseXMLInlineEdit);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.name.executionStatusInlineEdit, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Name for Set', async () => {
				await this.findElement(remoteWebdriver, ServiceTerritoryData.name.xpathIE, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.name.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.name.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Name', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.name.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map active for Check', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.active.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.active.fieldDetails, Standard.interaction.check, [], response.testbuilderState);
			});
			this.step('Add & Do active', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.active.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.active.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.active.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Street for Set', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.address.xpathIE);
				this.assertTestBuilderState(pageStructureInfo,{
					disposition: "Existing",
					fieldName: 'Street',
				}, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Street Field', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.address.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.address.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.address.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Operating hours for assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.OperatingHours.xpathIE);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.OperatingHours.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
			});
			this.step('Add & Do Operating hours', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.OperatingHours.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping parentTerritory for "SF Lookup" interaction', async () => {
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, ServiceTerritoryData.parentTerritory.Xpath.input);
				await LinkedCaseWE.sendKeys('00');
				await this.findElement(remoteWebdriver, ServiceTerritoryData.parentTerritory.Xpath.lookup);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.parentTerritory.Xpath.lookup);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.parentTerritory.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do parentTerritory for Lookup', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.parentTerritory.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.parentTerritory.testCaseXML.lookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.parentTerritory.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first territoryName for Click', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.territoryName.xpath);
				const rowLocators = [
					{
						"label": "Name (Name)",
						"selected": true,
						"value": "AutomationAPI"
					},
					{
						"label": "Active (IsActive)",
						"selected": false,
						"value": "false"
					},
					{
						"label": "Operating Hours (OperatingHours)",
						"selected": false,
						"value": /.*/
					},
					{
						"label": "Parent Territory (ParentTerritory)",
						"selected": false,
					},
					{
						"label": "Last Modified (LAST_UPDATE)",
						"selected": false,
						"value": /.*/
					},
					{
						"label": "Last Modified By (LastModifiedBy)",
						"selected": false,
						"value": /.*/
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, ServiceTerritoryData.territoryName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do territoryName field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.territoryName.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.territoryName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping SaveEdit Button', async () => {
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, "//span[(.)='AutomationAPI']/following-sibling::a[contains(@class,'delete')]");
				await LinkedCaseWE.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'SaveEdit (SaveEdit)',
				}, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do SaveEdit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				const testItemIdlookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
									'type': 'Icon-Successful',
									'executionStatus': 'Executed',
									'successfulCount': 1
								};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdlookup);
				await this.assertTestCaseXML(testItemId, ServiceTerritoryData.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			const assertInteractionParameters = {
				interactionParameters: {
					id: 'Read/Assert',
					settings: {
						extractValue: true,
						assertValue: true,
						extractLabel: true,
						assertLabel: true,
					},
				}
			};
			const executionStatusAssert = [{
				"name": "UiAssert",
				"type": "Icon-Successful",
				"text": "UI Assert",
				"executionStatus": "Executed",
			}];
			this.step('Mapping Name for assertions', async () => {
				await this.findElement(remoteWebdriver, ServiceTerritoryData.name.xpathView, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.name.xpathView);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.name.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do Name for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping active for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.active.xpathView);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.active.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do active for assertions', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractLabel: true,
							assertLabel: true,
						},
					}
				});
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});			
			this.step('Mapping address for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.address.xpathView);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.address.fieldDetails, Standard.interaction.readAssert, [], response.testbuilderState);
			});
			this.step('Add & Do address for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping createdDate for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.createdDate.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.createdDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do createdDate for assertions', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractValue: true,
							assertValue: true,
							extractLabel: true,
							assertLabel: true,
							expectedLabel: {
								value: 'Created By',
								caseSensitive: true,
								normalise: true,
							}
						},
					}
				});
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping lastModifiedBy for assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.lastModifiedBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.lastModifiedBy.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do lastModifiedBy for assertions', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping delete button', async () => {
				const dropdownWE = await this.findElement(remoteWebdriver, "//a[contains(@title,'more actions')]");
				dropdownWE.click();
				await this.findElement(remoteWebdriver, ServiceTerritoryData.delete.xpath)
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(ServiceTerritoryData.delete.xpath);
				this.assertTestBuilderState(pageStructureInfo, ServiceTerritoryData.delete.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do delete', async () => {
				await this.modifyAddToTestCase(ServiceTerritoryData.delete.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.assertExecutionStatus(testItemId, ServiceTerritoryData.delete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}; 