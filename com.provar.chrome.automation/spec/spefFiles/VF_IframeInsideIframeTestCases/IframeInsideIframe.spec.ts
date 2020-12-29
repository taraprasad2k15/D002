import { WebDriver, WebElement, By } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFTestcase } from './IframeInsideIframeData';
import { join } from 'path';
import { Case } from '../../testdata/sfObjects/Case';

export class VFIframeInsideIframeSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any = VFTestcase.VFPSI.existing;
		let pageStructureInfoLookup = [{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfLookupUiTargetExtension',
			},
			pageDetails: {
				title: 'Case Lookup Screen',
			},
		}];
		let VFframeId = ["(//iframe)[1]", "(//iframe)[1]", "(//iframe)[1]"];

		this.zephyrTest('AutomationAPI', 'PROT-1300', 'FS_MAP_SF_DT_CX_PICKLIST_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to first frame")
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to second frame")
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to third frame")
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				selectBtWE.click();
				const element: WebElement  =await this.findElement(remoteWebdriver, VFTestcase.caseOriginSet.Xpath, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.caseOriginSet.Xpath, VFframeId);
				this.assertTestBuilderState(VFTestcase.VFPSI.new, VFTestcase.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
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
		this.zephyrTest('AutomationAPI', 'PROT-1301', 'FS_MAP_SF_DT_CX_PICKLIST_VF_IFRAME_INSIDE_IFRAME_INPUT.SETBYINDEX', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1304', 'FS_MAP_SF_DT_CX_TEXT_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.subject.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.subject.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(VFTestcase.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1305', 'FS_MAP_SF_DT_CX_TEXTAREA_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.description.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(VFTestcase.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.description.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1306', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_IFRAME_INSIDE_IFRAME_INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check,  Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1307', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_IFRAME_INSIDE_IFRAME_INPUT.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsExisting, Standard.interaction.check,  Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1308', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_IFRAME_INSIDE_IFRAME_INPUT.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customCheckbox.fieldDetailsExisting, Standard.interaction.check,  Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, VFTestcase.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1309', 'FS_MAP_SF_DT_CX_TIME_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1310', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_IFRAME_INSIDE_IFRAME_INPUT.SELECT', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customPicklistSelect.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customPicklistSelect.fieldDetails, Standard.interaction.sfSelect,  Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1311', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_IFRAME_INSIDE_IFRAME_INPUT.DESELECT', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1312', 'FS_MAP_SF_DT_CX_DATE_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customDate.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTimeCX.enterableMode1, response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1313', 'FS_MAP_SF_DT_CX_DATETIME_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customDateTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customDateTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTimeCX.enterableMode1, response.testbuilderState);
			});
			this.step('Add & Do Custom Date-Time field', async () => {
				await this.modifyAddToTestCase(VFTestcase.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1314', 'FS_MAP_SF_DT_CX_RADIOBT_VF_IFRAME_INSIDE_IFRAME_INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Radio button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customRadioButton.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customRadioButton.fieldDetails, Standard.interaction.check,  Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Radio button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customRadioButton.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customRadioButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1315', 'FS_MAP_SF_DT_CX_CURRENCY_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1316', 'FS_MAP_SF_DT_CX_NUMBER_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1317', 'FS_MAP_SF_DT_CX_MOBILE_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1318', 'FS_MAP_SF_DT_CX_URL_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customURL.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.customURL.fieldDetails, Standard.interaction.set,  Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field', async () => {
				this.modifyAddToTestCase(VFTestcase.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1319', 'FS_MAP_SF_DT_CX_EMAIL_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Web Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.webEmail.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.webEmail.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Web Email field', async () => {
				this.modifyAddToTestCase(VFTestcase.webEmail.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1320', 'FS_MAP_SF_DT_CX_PERCENT_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1321', 'FS_MAP_SF_DT_CX_TEXTAREALONG_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
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
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.internalComments.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.internalComments.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1322', 'FS_MAP_SF_DT_CX_LOOKUP_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Account Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.accountName.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Account Name field', async () => {
				this.modifyAddToTestCase(VFTestcase.accountName.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.accountName.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		// this.zephyrTest('AutomationAPI', 'PROT-1323', 'FS_MAP_SF_DT_CX_RICHTEXT_VF_IFRAME_INSIDE_IFRAME_INPUT.SET', () => {
		// 	beforeEach(() => {
		// 		this.beforeEach();
		// 	});
		// 	it('waiting for the lookup to be closed', async done => {
		// 		expect(true).toEqual(true);
		// 		setTimeout(async () => {
		// 			done();
		// 		}, 10000);
		// 	});
		// 	this.step('Mapping Custom Rich Text field', async () => {
		// 		const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.customRichText.Xpath, VFframeId);
		// 		this.assertTestBuilderState(pageStructureInfo, VFTestcase.customRichText.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Richtext.enterableMode1, response.testbuilderState);
		// 	});
		// 	this.step('Add & Do Custom Rich Text field', async () => {
		// 		await this.modifyAddToTestCase(VFTestcase.customRichText.interactionParameters);
		// 		const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
		// 		const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
		// 		await this.assertTestCaseXML(testItemId, VFTestcase.customRichText.testCaseXML);
		// 		this.assertExecutionStatus(testItemId, VFTestcase.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
		// 	});
		// });
		this.zephyrTest('AutomationAPI', 'PROT-1324', 'FS_MAP_SF_DT_CX_LOOKUP_VF_IFRAME_INSIDE_IFRAME_INPUT.LOOKUP', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Parent Case field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.parentCase.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFTestcase.parentCase.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup1, response.testbuilderState);
			});
			this.step('Add & Do Parent Case field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.parentCase.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.parentCase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Search box on Case lookup', async () => {
				var windowHandles = await remoteWebdriver.getAllWindowHandles();
				await remoteWebdriver.switchTo().window(windowHandles[1]);
				let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFTestcase.searchbox.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
				this.assertTestBuilderState(pageStructureInfoLookup, Standard.searchBoxLookup, Standard.interaction.set,  Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search box field', async () => {
				await this.modifyAddToTestCase(VFTestcase.searchbox.interactionParameters)
				const testItemIdOuterScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemIdOuterScreen);
				const testItemIdInnerScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemIdInnerScreen);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
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
				this.assertTestBuilderState(pageStructureInfoLookup, Case.caseNumberField, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do case number field on lookup screen', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFTestcase.caseNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFTestcase.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
	}
}
