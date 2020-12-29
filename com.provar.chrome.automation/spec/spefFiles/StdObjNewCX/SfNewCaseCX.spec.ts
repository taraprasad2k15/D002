import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { PCO } from '../../testdata/sfObjects/PCO';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCaseCX } from './SfNewCaseCX';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfNewCaseCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Case.caseNewPsiCX];

		this.zephyrTest('AutomationAPI', 'PROT-1067', 'FS_MAP_SF_DT_CX_PICKLIST.SET', () => {
			beforeAll(async done => {
				const tcName = 'Case NewCX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Casetype field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, SfNewCaseCX.caseType.caseTypeXpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.caseType.caseTypeXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseTypeField, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode , response.testbuilderState);
			});
			this.step('Add & Do Casetype field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.caseType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.caseType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.caseType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1068', 'FS_MAP_SF_DT_CX_PICKLIST.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1069', 'FS_MAP_SF_DT_CX_TEXT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1070', 'FS_MAP_SF_DT_CX_TEXTAREA.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.description.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.description, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1071', 'FS_MAP_SF_DT_CX_CHECKBOX.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1072', 'FS_MAP_SF_DT_CX_CHECKBOX.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1073', 'FS_MAP_SF_DT_CX_CHECKBOX.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1074', 'FS_MAP_SF_DT_CX_TIME.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customTime, Standard.interaction.set, Standard.applicableInteractions.TimeCX.enterableMode , response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2638', 'FS_MAP_SF_DT_CX_DATE.SFTODAY', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, {
					disposition: 'Existing',
					text: 'Custom Date-Time Field (Custom_Date_Time_Field__c)',
				}, Standard.interaction.sfToday, [] , response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1076', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST.SELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1077', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST.DESELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customPicklistDeselect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1075', 'FS_MAP_SF_DT_CX_RICH TEXT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1078', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.SAVE&NEW.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Save & New button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveAndNewButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save & New button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveAndNewButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveAndNewButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1079', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.SAVE.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Save button field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const element: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath, 20000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1080', 'FS_MAP_SF_DT_CX_VALIDATION ERROR.PAGE.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Page Errors', async () => {
				await this.findElement(remoteWebdriver, "//div[@class='pbError' and contains(text(),'Error')]", 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//div[@class='pbError' and contains(text(),'Error')]");
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				const modifyResponse = await this.modifyAddToTestCase(SfCommonFIeld.pageError.interactionParametersCX);
				console.log("modify response is :", JSON.stringify(modifyResponse, null, 4));
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageError.testCaseXMLCX);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1081', 'FS_MAP_SF_DT_CX_VALIDATION ERROR.FIELD.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin for Assertions', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.caseOrigin.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.caseOrigin.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.caseOrigin.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1082', 'FS_MAP_SF_DT_CX_STANDARD BUTTON.CANCEL.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1117', 'FS_MAP_SF_DT_CX_LOOKUP.LOOKUP', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Provar_Custom_Obj for "SF Lookup" interaction', async () => {
				const remotewebdriver = await this.getRemoteWebDriver("Regmain");
				await this.findElement(remotewebdriver, SfNewCaseCX.provarCustObj.Xpath, 20000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.provarCustObj.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.provarCustObj, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Parent Case for Lookup', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.provarCustObj.testCaseXML.lookup);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.provarCustObj.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Search box field', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.searchText.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
				this.assertTestBuilderState([PCO.PCOLookupPsi], SfNewCaseCX.searchText.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add&Do the Search box field', async () => {
				await this.modifyAddToTestCase(SfNewCaseCX.searchText.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.searchText.testCaseXML.set);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.searchText.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Go! button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.go.Xpath, ["//frame[@id='searchFrame']"]);
				this.assertTestBuilderState([PCO.PCOLookupPsi], SfNewCaseCX.go.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add&Do Go! button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.go.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.go.executionStatus.click, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping PCO Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseCX.PCOName.Xpath, ["//frame[@id='resultsFrame']"]);
				const rowLocators = [
					{
						"label": "Provar Custom Obj Name (Name)",
						"selected": true,
						"value": /Automation.*/
					},
				];
				this.assertTestBuilderState([PCO.PCOLookupPsi], SfNewCaseCX.PCOName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add&Do PCO Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, SfNewCaseCX.PCOName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseCX.PCOName.executionStatus.click, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}