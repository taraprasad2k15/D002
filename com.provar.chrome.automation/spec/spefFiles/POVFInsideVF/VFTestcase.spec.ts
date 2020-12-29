import { WebDriver, WebElement, By } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { POVFTestcase } from './VFInsideVF';
import { join } from 'path';
import { Case } from '../../testdata/sfObjects/Case';
import { SfCommonFIeld } from '../SfCommonField'

export class POVFInsideVFSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [POVFTestcase.VFPSI.new];
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
		this.zephyrTest('AutomationAPI', 'PROT-2343', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_INSIDE_VF.1.INPUT.SET', () => {
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
				const frame1WE: WebElement = await this.findElement(remoteWebdriver, "//iframe[contains(@name,'vfVFframeId_') or contains(@name,'vfFrameId_')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(frame1WE);
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].click();", selectBtWE);
				await this.findElement(remoteWebdriver, POVFTestcase.caseOriginSet.Xpath, 20 * 1000);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.caseOriginSet.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.caseOriginSet.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", POVFTestcase.caseOriginSet.testCaseXML);
				this.assertExecutionStatus("0", POVFTestcase.caseOriginSet.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2344', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_INSIDE_VF.1.INPUT.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.caseOrigin.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2345', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.subject.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2346', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.description.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2347', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_INSIDE_VF.1.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, POVFTestcase.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2348', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_INSIDE_VF.1.INPUT.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, POVFTestcase.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2349', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_INSIDE_VF.1.INPUT.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, POVFTestcase.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2350', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2351', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customDate.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2352', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customDateTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customDateTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date-Time field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2353', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RADIOBT.VF_INSIDE_VF.1.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Radio button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customRadioButton.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customRadioButton.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Radio button', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customRadioButton.interactionParameters1)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customRadioButton.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customRadioButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2354', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CURRENCY.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Currency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customCurrency.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customCurrency.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Currency field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customCurrency.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2355', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customNumber.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Number field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customNumber.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2356', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MOBILE.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Mobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customMobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customMobile.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Mobile field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customMobile.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2357', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customURL.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customURL.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2358', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_EMAIL.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Web Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.webEmail.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.webEmail.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Web Email field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.webEmail.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2359', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Percent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customPercent.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customPercent.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Percent field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customPercent.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2360', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREALONG.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Internal Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.internalComments.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.internalComments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Internal Comments field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.internalComments.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.internalComments.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.internalComments.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2361', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.VF_INSIDE_VF.1.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//td/div[contains(@class,'Delegate_Custom_Rich_text_Field__c cke')]", VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customRichText.fieldDetails, Standard.interaction.clear, Standard.applicableInteractions.Richtext.enterableMode1, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdOnScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemIdOnScreen, POVFTestcase.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemIdOnScreen, POVFTestcase.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2362', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Case Number field', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, POVFTestcase.caseNumber.Xpath1, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				await remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.caseNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Case Number field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.caseNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.caseNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomCurrency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customCurrency.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomCurrency field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customCurrency.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customCurrency.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomNumber field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomNumber field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customNumber.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomMobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customMobile.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomMobile field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customMobile.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customMobile.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2363', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.subject.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.subject.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.subject.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2364', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Escalated field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.escalated.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Escalated field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.escalated.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.escalated.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2365', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customDate.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDate field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customDate.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customDate.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2366', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customDateTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDateTime field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customDateTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customDateTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2367', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPercent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customPercent.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPercent field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customPercent.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customPercent.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2368', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CaseOrigin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.caseOrigin.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CaseOrigin field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.caseOrigin.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.caseOrigin.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2369', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MULTI SELECT PICKLIST.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPicklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customPicklist.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPicklist field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customPicklist.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2370', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.description.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.description.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2371', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomTextArea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customTextArea.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTextArea field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customTextArea.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customTextArea.testCaseXML);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2372', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping the CustomTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTime field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2373', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.VF_INSIDE_VF.1.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the WebEmail field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.webEmail.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the WebEmail field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.webEmail.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.webEmail.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomURL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POVFTestcase.customURL.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POVFTestcase.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the CustomURL field', async () => {
				await this.modifyAddToTestCase(POVFTestcase.customURL.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POVFTestcase.customURL.testCaseXML1);
				this.assertExecutionStatus(testItemId, POVFTestcase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
