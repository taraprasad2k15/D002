import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VFInsideIframePageSCV } from './VFInsideIframePageSCV';
import { join } from 'path';


export class VFInsideIframePageSCVSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let frameId = ["(//iframe)[1]", "(//iframe)[1]"];

		this.zephyrTest('AutomationAPI', 'PROT-1417', 'FS_MAP_SF_DT_CX_NUMBER_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeAll(async done => {
				const tcName = 'VFInsideIframePageSCV.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Case Number field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to first frame")
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to second frame")
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				selectBtWE.click();
				const element: WebElement = await this.findElement(remoteWebdriver, VFInsideIframePageSCV.caseNumber.Xpath, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				await remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.caseNumber.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.new, VFInsideIframePageSCV.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);

			});
			this.step('Assert the Case Number field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.caseNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", VFInsideIframePageSCV.caseNumber.testCaseXML);
				this.assertExecutionStatus("0", VFInsideIframePageSCV.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomCurrency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customCurrency.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomCurrency field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customCurrency.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});


			this.step('Mapping the CustomNumber field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customNumber.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomNumber field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomMobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customMobile.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomMobile field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customMobile.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});

		this.zephyrTest('AutomationAPI', 'PROT-1418', 'FS_MAP_SF_DT_CX_TEXT_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.subject.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.subject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1419', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Escalated field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.escalated.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.escalated.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Escalated field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.escalated.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.escalated.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.escalated.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1420', 'FS_MAP_SF_DT_CX_DATE_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customDate.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customDate.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDate field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1421', 'FS_MAP_SF_DT_CX_DATETIME_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customDateTime.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomDateTime field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customDateTime.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1422', 'FS_MAP_SF_DT_CX_PERCENT_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPercent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customPercent.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomPercent field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customPercent.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1423', 'FS_MAP_SF_DT_CX_PICKLIST_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CaseOrigin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.caseOrigin.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CaseOrigin field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.caseOrigin.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1424', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPicklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customPicklist.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customPicklist.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPicklist field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customPicklist.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customPicklist.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1425', 'FS_MAP_SF_DT_CX_TEXTAREA_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.description.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.description.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.description.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.description.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1426', 'FS_MAP_SF_DT_CX_RICHTEXT_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomTextArea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customTextArea.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
			});
			this.step('Assert the CustomTextArea field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customTextArea.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customTextArea.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customTextArea.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1427', 'FS_MAP_SF_DT_CX_TIME_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping the CustomTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customTime.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customTime.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTime field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customTime.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1428', 'FS_MAP_SF_DT_CX_URL_VF_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the WebEmail field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.webEmail.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.webEmail.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the WebEmail field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.webEmail.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomURL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VFInsideIframePageSCV.customURL.Xpath, frameId);
				this.assertTestBuilderState(VFInsideIframePageSCV.VFPSI.existing, VFInsideIframePageSCV.customURL.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the CustomURL field', async () => {
				await this.modifyAddToTestCase(VFInsideIframePageSCV.customURL.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, VFInsideIframePageSCV.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, VFInsideIframePageSCV.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}