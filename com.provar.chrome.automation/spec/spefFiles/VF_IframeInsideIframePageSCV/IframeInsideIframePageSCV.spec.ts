import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { IframeInsideIframePageSCV } from './IframeInsideIframePageSCV';
import { join } from 'path';


export class VFIframeInsideIframePageSCVSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let frameId = ["(//iframe)[1]", "(//iframe)[1]", "(//iframe)[1]"];

		this.zephyrTest('AutomationAPI', 'PROT-1433', 'FS_MAP_SF_DT_CX_NUMBER_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeAll(async done => {
				const tcName = 'IframeInsideIframePageSCV.testcase';
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
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to third frame")
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "(//input[contains(@onclick,'selectedCase')])[1]", 20 * 1000);
				selectBtWE.click();
				const element: WebElement = await this.findElement(remoteWebdriver, IframeInsideIframePageSCV.caseNumber.Xpath, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.caseNumber.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.new, IframeInsideIframePageSCV.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);

			});
			this.step('Assert the Case Number field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.caseNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", IframeInsideIframePageSCV.caseNumber.testCaseXML);
				this.assertExecutionStatus("0", IframeInsideIframePageSCV.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomCurrency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customCurrency.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomCurrency field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customCurrency.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});


			this.step('Mapping the CustomNumber field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customNumber.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomNumber field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomMobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customMobile.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomMobile field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customMobile.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1434', 'FS_MAP_SF_DT_CX_TEXT_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.subject.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.subject.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1435', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Escalated field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.escalated.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Escalated field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.escalated.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.escalated.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.escalated.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1436', 'FS_MAP_SF_DT_CX_DATE_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customDate.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDate field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customDate.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1437', 'FS_MAP_SF_DT_CX_DATETIME_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customDateTime.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDateTime field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customDateTime.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1438', 'FS_MAP_SF_DT_CX_PERCENT_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPercent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customPercent.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPercent field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customPercent.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1439', 'FS_MAP_SF_DT_CX_PICKLIST_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CaseOrigin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.caseOrigin.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CaseOrigin field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.caseOrigin.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1440', 'FS_MAP_SF_DT_CX_MULTI SELECT PICKLIST_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPicklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customPicklist.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPicklist field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customPicklist.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customPicklist.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1441', 'FS_MAP_SF_DT_CX_TEXTAREA_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.description.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.description.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.description.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1442', 'FS_MAP_SF_DT_CX_RICHTEXT_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomTextArea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customTextArea.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTextArea field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customTextArea.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customTextArea.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customTextArea.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1443', 'FS_MAP_SF_DT_CX_TIME_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping the CustomTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customTime.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTime field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customTime.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1444', 'FS_MAP_SF_DT_CX_URL_VF_IFRAME_INSIDE_IFRAME_OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the WebEmail field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.webEmail.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the WebEmail field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.webEmail.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomURL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(IframeInsideIframePageSCV.customURL.Xpath, frameId);
				this.assertTestBuilderState(IframeInsideIframePageSCV.VFPSI.existing, IframeInsideIframePageSCV.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomURL field', async () => {
				await this.modifyAddToTestCase(IframeInsideIframePageSCV.customURL.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, IframeInsideIframePageSCV.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, IframeInsideIframePageSCV.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}