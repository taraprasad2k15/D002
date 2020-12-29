import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFTestcase } from './VFTestcase';
import { join } from 'path';
import { Case } from '../../testdata/sfObjects/Case';

export class VFTestcaseSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [VFTestcase.VFPSI.existing];
		let pageStructureInfoLookup = [{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfLookupUiTargetExtension',
			},
			pageDetails: {
				title: 'Case Lookup Screen',
			},
		}];
		let VFframeId = ["(//iframe)[1]"];

		this.zephyrTest('AutomationAPI', 'PROT-1247', 'FS_MAP_SF_DT_CX_PICKLIST_VF_ONLY_INPUT.SET', () => {
			beforeAll(async done => {
				const tcName = 'VFTestcase.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const frame1WE: WebElement = await this.findElement(remoteWebdriver, "//iframe[contains(@name,'vfFrameId_')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(frame1WE);
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				selectBtWE.click();
				await this.findElement(remoteWebdriver, VFTestcase.caseOriginSet.Xpath, 20 * 1000);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.caseOriginSet.Xpath, VFframeId);
				this.assertTestBuilderState([VFTestcase.VFPSI.new], VFTestcase.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(VFTestcase.caseOriginSet.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", VFTestcase.caseOriginSet.testCaseXML);
				this.assertExecutionStatus("0", VFTestcase.caseOriginSet.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1248', 'FS_MAP_SF_DT_CX_PICKLIST_VF_ONLY_INPUT.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach(); 
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.caseOrigin.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(VFTestcase.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1249', 'FS_MAP_SF_DT_CX_TEXT_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.subject.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(VFTestcase.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1250', 'FS_MAP_SF_DT_CX_TEXTAREA_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.description.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(VFTestcase.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.description.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1251', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_ONLY_INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1252', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_ONLY_INPUT.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsExisting, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1253', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_ONLY_INPUT.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsExisting, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1254', 'FS_MAP_SF_DT_CX_TIME_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1255', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_ONLY_INPUT.SELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customPicklistSelect.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customPicklistSelect.fieldDetails, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1256', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_ONLY_INPUT.DESELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customPicklistDeselect.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customPicklistDeselect.fieldDetails, Standard.interaction.sfDeselect,Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1258', 'FS_MAP_SF_DT_CX_DATETIME_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customDateTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customDateTime.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date-Time field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1259', 'FS_MAP_SF_DT_CX_RADIOBT_VF_ONLY_INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Radio button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customRadioButton.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customRadioButton.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Radio button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customRadioButton.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customRadioButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1260', 'FS_MAP_SF_DT_CX_CURRENCY_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Currency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCurrency.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCurrency.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Currency field', async () => {
				this.modifyAddToTestCase(VFTestcase.customCurrency.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1261', 'FS_MAP_SF_DT_CX_NUMBER_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customNumber.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Number field', async () => {
				this.modifyAddToTestCase(VFTestcase.customNumber.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1262', 'FS_MAP_SF_DT_CX_MOBILE_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Mobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customMobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customMobile.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Mobile field', async () => {
				this.modifyAddToTestCase(VFTestcase.customMobile.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1263', 'FS_MAP_SF_DT_CX_URL_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customURL.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customURL.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field', async () => {
				this.modifyAddToTestCase(VFTestcase.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1264', 'FS_MAP_SF_DT_CX_EMAIL_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Web Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.webEmail.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.webEmail.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Web Email field', async () => {
				this.modifyAddToTestCase(VFTestcase.webEmail.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1265', 'FS_MAP_SF_DT_CX_PERCENT_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Percent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customPercent.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customPercent.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Percent field', async () => {
				this.modifyAddToTestCase(VFTestcase.customPercent.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1266', 'FS_MAP_SF_DT_CX_TEXTAREALONG_VF_ONLY_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Internal Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.internalComments.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.internalComments.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Internal Comments field', async () => {
				this.modifyAddToTestCase(VFTestcase.internalComments.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.internalComments.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.internalComments.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1268', 'FS_MAP_SF_DT_CX_LOOKUP_VF_ONLY_INPUT.LOOKUP', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Parent Case field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.parentCase.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.parentCase.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup1, response.testbuilderState);
			});
			this.step('Add & Do Parent Case field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFTestcase.parentCase.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.parentCase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search box on Case lookup', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.searchbox.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
				this.assertTestBuilderState(pageStructureInfoLookup, Standard.searchBoxLookup, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search box field', async () => {
				await this.modifyAddToTestCase(VFTestcase.searchbox.interactionParameters)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdOnScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemIdOnScreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.searchbox.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.searchbox.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first case number on case lookup screen ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.caseNumber.Xpath, ["//frame[@id='resultsFrame']"]);
				const rowLocators = [
					{
						"label": "Case (CaseNumber)",
						"selected": true,
						"value": /[0-9]{8}/,
					},
					{
						"label": "Subject (CASES_SUBJECT)",
						"selected": false,
					},
					{
						"label": "Status (CASES_STATUS)",
						"selected": false,
					},
					{
						"label": "Date/Time Opened (CASES_CREATED_DATE)",
						"selected": false,
						"value": /.*/,
					},
					{
						"label": "Case Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, Case.caseNumberField, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do case number field on lookup screen', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.caseNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		// this.zephyrTest('AutomationAPI', 'PROT-1269', 'FS_MAP_SF_DT_CX_RICHTEXT_VF_ONLY_INPUT.SET', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	afterAll(async done => {
		// 		await this.endTestSession(done);
		// 	});
		// 	it('waiting for the lookup to be closed', async done => {
		// 		expect(true).toEqual(true);
		// 		setTimeout(async () => {
		// 			done();
		// 		}, 10000);
		// 	});
		// 	this.step('Mapping Custom Rich Text field', async () => {
		// 		remoteWebdriver = await this.getRemoteWebDriver('Regmain');
		// 		remoteWebdriver.switchTo().frame(0);
		// 		await this.findElement(remoteWebdriver, VFTestcase.customRichText.Xpath, 20000);
		// 		remoteWebdriver.switchTo().defaultContent();
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customRichText.Xpath, VFframeId);
		// 		this.assertTestBuilderState(pageStructureInfo, VFTestcase.customRichText.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
		// 	});
		// 	this.step('Add & Do Custom Rich Text field', async () => {
		// 		await this.modifyAddToTestCase(VFTestcase.customRichText.interactionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemIdOnScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
		// 		this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemIdOnScreen);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
		// 		const newValues: any = {
		// 			'type': 'Icon-Successful',
		// 			'executionStatus': 'Executed',
		// 			'successfulCount': 1
		// 		};
		// 		this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
		// 		await this.assertTestCaseXML(testItemIdOnScreen, VFTestcase.customRichText.testCaseXML);
		// 		this.assertExecutionStatus(testItemIdOnScreen, VFTestcase.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
	}
}
