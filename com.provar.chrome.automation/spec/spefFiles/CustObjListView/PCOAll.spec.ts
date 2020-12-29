import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfPCOAll } from './PCOAll';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfPCOAllSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const assertInteractionParameters = {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: true,
				assertValue: true,
			},
		}};
		let pageStructureInfo: any[] = [PCO.PCOAllPsi];
		let rowLocator = [
			{
				"label": "Provar Custom Obj Name (Name)",
                "selected": true,
                "value": "Automation Object"
			},
		];
		const assertColumnInteractionParameters = {
			interactionParameters: {
			id: 'Read/Assert',
			settings: {
				extractValue: false,
				assertColumnAttributes: true,
				extractColumnAttributes: true,
				expectedAttributes:{
					columnHeaderText: {
						value: 'Provar Custom Obj Name',
						caseSensitive: true,
						normalise: true,
					},
					columnVisible: {
						value: true,
					},
				},
			},
		}};
		this.zephyrTest('AutomationAPI', 'PROT-998', 'FS_MAP_SF_LV_LX_LIST SEARCH FIELD.SET.Custom' , () => {
			beforeAll(async done => {
				const tcName = 'PCO All.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping List Search Box', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCommonFIeld.listSearchBox.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.listSearchBox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.listSearchBox, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do List Search Box', async () => {
				await this.modifyAddToTestCase(SfPCOAll.listSearchBox.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAll.listSearchBox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOAll.listSearchBox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-997', 'FS_MAP_SF_LV_LX_SEARCHTYPE.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Search Type', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.searchType.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.searchType, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search Type', async () => {
				await this.modifyAddToTestCase(SfPCOAll.searchType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAll.searchType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOAll.searchType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-992', 'FS_MAP_SF_LV_LX_ACTION BUTTON.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {				
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//button/span[normalize-space(.)='Cancel'])[2]"); // on this screen, the cancel button doesn't have title
				await element.click();
				expect(true).toEqual(true);
			});	
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
		});		
		this.zephyrTest('AutomationAPI', 'PROT-991', 'FS_MAP_SF_LV_LX_COLUMN HEADINGS.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAll.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field for column assertion', async () => {
				await this.modifyAddToTestCase(assertColumnInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAll.name.testCaseXMLAssertColumn);
				this.assertExecutionStatus(testItemId, SfPCOAll.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-990', 'FS_MAP_SF_LV_LX_SELECT ROW.CHECK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Select Row', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAll.selectRow.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Select Row Checkbox', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAll.selectRow.testCaseXML);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, SfPCOAll.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-996', 'FS_MAP_SF_LV_LX_REFERENCE FIELD.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAll.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOAll.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOAll.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-995', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.EDIT.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Click on Show more actions dropdown', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show More'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]");
				await element.click();
			});
			this.step('Mapping Edit action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.editActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Edit button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});	
		});
		this.zephyrTest('AutomationAPI', 'PROT-994', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.DEL.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});		
			it('Click on Show more actions dropdown', async done => {
				// remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});
			this.step('Mapping Delete action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Delete button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});	
		});
		this.zephyrTest('AutomationAPI', 'PROT-993', 'FS_MAP_SF_LV_LX_ROW DROPDOWN.CO.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			it('Click on Show more actions dropdown', async done => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "(//tbody//span[normalize-space(.)='Show more actions'])[1]|(//tbody//span[normalize-space(.)='Show Actions'])[1]", 15000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});	
			this.step('Mapping Change Owner action button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Change Owner button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.changeOwnerActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.changeOwnerActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel via remotedriver', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				await element.click();
				expect(true).toEqual(true);
			});
		});
		// these are commented because they does not have zephry test cases, not required at the moment
			// this.step('Mapping Import Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.importButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.importButton, Standard.interaction.click, response.testbuilderState);
			// });
			// this.step('Mapping Change Owner Button', async () => {
			// 	const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.changeOwnerButton.Xpath);
			// 	this.assertTestBuilderState(pageStructureInfo, Standard.changeOwnerButton, Standard.interaction.click, response.testbuilderState);
			// });
	}
}