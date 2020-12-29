import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFPOTestcase } from './VFPO.data';
import { join } from 'path';

export class VFPOSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [VFPOTestcase.VFPSI.new];

		let VFframeId = ["(//iframe)[1]"];
		this.zephyrTest('AutomationAPI', 'PROT-2405', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_ONLY.1.INPUT.SET', () => {
			beforeAll(async done => {
				const tcName = 'VFPO.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const frame1WE: WebElement = await this.findElement(remoteWebdriver, "//iframe[contains(@name,'vfVFframeId_') or contains(@name,'vfFrameId_')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(frame1WE);
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].click();", selectBtWE);
				await this.findElement(remoteWebdriver, VFPOTestcase.caseOriginSet.Xpath, 20 * 1000);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.caseOriginSet.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.caseOriginSet.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", VFPOTestcase.caseOriginSet.testCaseXML);
				this.assertExecutionStatus("0", VFPOTestcase.caseOriginSet.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2406', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_ONLY.1.INPUT.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.caseOrigin.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2407', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.subject.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2408', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.description.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2409', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_ONLY.1.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2410', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_ONLY.1.INPUT.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2411', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_ONLY.1.INPUT.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2412', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2413', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customDate.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2414', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customDateTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customDateTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date-Time field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2415', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RADIOBT.VF_ONLY.1.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Radio button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customRadioButton.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customRadioButton.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Radio button', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customRadioButton.interactionParameters1)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customRadioButton.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customRadioButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2416', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CURRENCY.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Currency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customCurrency.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customCurrency.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Currency field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customCurrency.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2417', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customNumber.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Number field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customNumber.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2418', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MOBILE.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Mobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customMobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customMobile.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Mobile field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customMobile.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2419', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customURL.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customURL.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2420', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_EMAIL.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Web Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.webEmail.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.webEmail.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Web Email field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.webEmail.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2421', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Percent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customPercent.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customPercent.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Percent field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customPercent.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2422', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREALONG.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Internal Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.internalComments.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.internalComments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Internal Comments field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.internalComments.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.internalComments.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.internalComments.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2423', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.VF_ONLY.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//td/div[contains(@class,'Delegate_Custom_Rich_text_Field__c cke')]", VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customRichText.fieldDetails, Standard.interaction.clear, Standard.applicableInteractions.Richtext.enterableMode1, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdOnScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemIdOnScreen, VFPOTestcase.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemIdOnScreen, VFPOTestcase.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2424', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Case Number field', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, VFPOTestcase.caseNumber.Xpath1, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				await remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.caseNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Case Number field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.caseNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.caseNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomCurrency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customCurrency.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomCurrency field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customCurrency.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customCurrency.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomNumber field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomNumber field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customNumber.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomMobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customMobile.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomMobile field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customMobile.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customMobile.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2425', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.subject.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.subject.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.subject.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2426', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Escalated field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.escalated.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Escalated field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.escalated.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.escalated.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2427', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customDate.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDate field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customDate.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customDate.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2428', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customDateTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDateTime field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customDateTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customDateTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2429', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPercent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customPercent.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPercent field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customPercent.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customPercent.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2430', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CaseOrigin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.caseOrigin.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CaseOrigin field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.caseOrigin.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.caseOrigin.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2431', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MULTI SELECT PICKLIST.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPicklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customPicklist.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPicklist field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customPicklist.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2432', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.description.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.description.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2433', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomTextArea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customTextArea.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTextArea field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customTextArea.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customTextArea.testCaseXML);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2434', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping the CustomTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTime field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2435', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.VF_ONLY.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the WebEmail field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.webEmail.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the WebEmail field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.webEmail.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.webEmail.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomURL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFPOTestcase.customURL.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, VFPOTestcase.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the CustomURL field', async () => {
				await this.modifyAddToTestCase(VFPOTestcase.customURL.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, VFPOTestcase.customURL.testCaseXML1);
				this.assertExecutionStatus(testItemId, VFPOTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
