import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCase } from './SfNewCase';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfNewCaseSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo:any[] = [Case.caseNewPsi];
		
		this.zephyrTest('AutomationAPI', 'PROT-915', 'FS_MAP_SF_DT_LX_PICKLIST.SET', () => {
			beforeAll(async done => {
				const tcName = 'Case New.testcase';
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
				await this.modifyAddToTestCase(SfNewCase.caseType.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.caseType.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.caseType.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-919', 'FS_MAP_SF_DT_LX_PICKLIST.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfNewCase.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-887', 'FS_MAP_SF_DT_LX_TEXT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfNewCase.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-897', 'FS_MAP_SF_DT_LX_TEXTAREA.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.description.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(SfNewCase.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-907', 'FS_MAP_SF_DT_LX_CHECKBOX.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, SfNewCase.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-908', 'FS_MAP_SF_DT_LX_CHECKBOX.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, SfNewCase.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-909', 'FS_MAP_SF_DT_LX_CHECKBOX.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, SfNewCase.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1028', 'FS_MAP_SF_DT_LX_TIME.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customTime.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customTime, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-901', 'FS_MAP_SF_DT_LX_RICH TEXT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-941', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.SELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-942', 'FS_MAP_SF_DT_LX_MULTI SELECT PICKLIST.DESELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.customPicklistDeselect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(SfNewCase.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCase.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1029', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.SAVE&NEW.CLICK', () => {
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
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
		});
		this.zephyrTest('AutomationAPI', 'PROT-1030', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.SAVE.CLICK', () => {
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
		this.zephyrTest('AutomationAPI', 'PROT-1031', 'FS_MAP_SF_DT_LX_VALIDATION ERROR.PAGE.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Page Errors', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageError.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
			});		
		});
		this.zephyrTest('AutomationAPI', 'PROT-1032', 'FS_MAP_SF_DT_LX_VALIDATION ERROR.FIELD.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});	
			this.step('Mapping Case Origin for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCase.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfo, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin for Assertions', async () => {
				await this.modifyAddToTestCase(SfNewCase.caseOrigin.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCase.caseOrigin.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfNewCase.caseOrigin.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1033', 'FS_MAP_SF_DT_LX_STANDARD BUTTON.CANCEL.CLICK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}