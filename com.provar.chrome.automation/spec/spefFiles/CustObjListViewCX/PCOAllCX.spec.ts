import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfPCOAllCX } from './PCOAllCX';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfPCOAllCXSpec extends BaseSpec {
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
			}
		};
		let pageStructureInfo: any[] = [PCO.PCOAllPsiCX];
		let rowLocator = [
			{
				"label": "Provar Custom Obj Name (Name)",
				"selected": true,
				"value": /.*/
			},
		];
		const assertColumnInteractionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: false,
					assertColumnAttributes: true,
					extractColumnAttributes: true,
					expectedAttributes: {
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
			}
		};
		this.zephyrTest('AutomationAPI', 'PROT-1106', 'FS_MAP_SF_LV_CX_SEARCHTYPE.RA.Custom', () => {
			beforeAll(async done => {
				const tcName = 'PCO AllCX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Search Type', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfCommonFIeld.searchTypeCX.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.searchTypeCX.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.searchType, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search Type', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.searchTypeCX.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.searchTypeCX.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.searchTypeCX.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1107', 'FS_MAP_SF_LV_CX_COLUMN HEADINGS.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAllCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field for column assertion', async () => {
				await this.modifyAddToTestCase(assertColumnInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAllCX.name.testCaseXMLAssertColumn);
				this.assertExecutionStatus(testItemId, SfPCOAllCX.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1108', 'FS_MAP_SF_LV_CX_SELECT ROW.CHECK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Select Row', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAllCX.selectRow.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.selectRow, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Select Row Checkbox', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOAllCX.selectRow.testCaseXML);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, SfPCOAllCX.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1109', 'FS_MAP_SF_LV_CX_REFERENCE FIELD.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOAllCX.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOAllCX.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfPCOAllCX.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1110', 'FS_MAP_SF_LV_CX_ROW DROPDOWN.DEL.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Delete action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.XpathCX);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.XpathCX);
				this.assertTestBuilderState(pageStructureInfo, Standard.deleteActionButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Delete button', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Click and Cancel',
					}
				})
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOAllCX.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOAllCX.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1111', 'FS_MAP_SF_LV_CX_ROW DROPDOWN.EDIT.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit action button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.XpathCX);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.XpathCX);
				this.assertTestBuilderState(pageStructureInfo, Standard.editActionButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocator);
			});
			this.step('Add & Do Edit button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel button', async () => {
				const CancelBtWE: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath);
				CancelBtWE.click();
				expect(true).toEqual(true);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1112', 'FS_MAP_SF_LV_CX_ACTION BUTTON.CLICK.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping New Button', async () => {
				await this.findElement(remoteWebdriver, "//input[@title='New Provar Custom Obj']", 20000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//input[@title='New Provar Custom Obj']");
				this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click Cancel Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element: WebElement = await this.findElement(remoteWebdriver, "//input[@title='Cancel']");
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
	}
}