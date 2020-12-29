import { WebDriver, WebElement, By } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { Case } from '../../testdata/sfObjects/Case';
import { SfCommonFIeld } from '../SfCommonField'
import { POIframeInsideIframeData } from './POIframeInsideIframe';

export class POIframeInsideIframeSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = POIframeInsideIframeData.VFPSI.new;
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
		this.zephyrTest('AutomationAPI', 'PROT-2436', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeAll(async done => {
				const tcName = 'VFTestcase.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            },);
			this.step('Mapping Case Origin field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				remoteWebdriver.switchTo().defaultContent();
				await this.findElement(remoteWebdriver, "//iframe[contains(@name,'vfVFframeId_') or contains(@name,'vfFrameId_')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to first frame");
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to second frame");
				remoteWebdriver.switchTo().frame(0);
				console.log("switched to third frame");
				const selectBtWE: WebElement = await this.findElement(remoteWebdriver, "//input[contains(@onclick,'selectedCase')][1]", 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].click();", selectBtWE);
				await this.findElement(remoteWebdriver, POIframeInsideIframeData.caseOriginSet.Xpath, 20 * 1000);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.caseOriginSet.Xpath, VFframeId);
				console.log(response.testbuilderState.pageStructureItems);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
			const resp=	await this.modifyAddToTestCase(POIframeInsideIframeData.caseOriginSet.interactionParameters);
			console.log("respp "+resp);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", POIframeInsideIframeData.caseOriginSet.testCaseXML);
				this.assertExecutionStatus("0", POIframeInsideIframeData.caseOriginSet.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2437', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.IFRAME_INSIDE_IFRAME.3.INPUT.SETBYINDEX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.caseOrigin.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.caseOrigin.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2438', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.subject.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2439', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.description.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2440', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.IFRAME_INSIDE_IFRAME.3.1.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2441', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.IFRAME_INSIDE_IFRAME.3.INPUT.UNCHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2442', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.IFRAME_INSIDE_IFRAME.3.INPUT.TOGGLE', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customCheckbox.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customCheckbox.fieldDetailsNew, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2443', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2444', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customDate.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2445', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Date-Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customDateTime.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customDateTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date-Time field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2446', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RADIOBT.IFRAME_INSIDE_IFRAME.3.INPUT.CHECK', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Radio button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customRadioButton.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customRadioButton.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Radio button', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customRadioButton.interactionParameters1)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customRadioButton.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customRadioButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2447', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CURRENCY.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Currency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customCurrency.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customCurrency.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Currency field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customCurrency.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2448', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customNumber.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Number field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customNumber.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2449', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MOBILE.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Mobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customMobile.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customMobile.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Mobile field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customMobile.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customMobile.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2450', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customURL.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customURL.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom URL field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2451', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_EMAIL.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Web Email field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.webEmail.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.webEmail.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Web Email field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.webEmail.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.webEmail.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2452', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Percent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customPercent.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customPercent.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Percent field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customPercent.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2453', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREALONG.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Internal Comments field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.internalComments.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.internalComments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Internal Comments field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.internalComments.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.internalComments.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.internalComments.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2454', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.IFRAME_INSIDE_IFRAME.3.INPUT.SET', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//td/div[contains(@class,'Delegate_Custom_Rich_text_Field__c cke')]", VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customRichText.fieldDetails, Standard.interaction.clear, Standard.applicableInteractions.Richtext.enterableMode1, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdOnScreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemIdOnScreen, POIframeInsideIframeData.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemIdOnScreen, POIframeInsideIframeData.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2455', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_NUMBER.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Case Number field', async () => {
				const element: WebElement = await this.findElement(remoteWebdriver, POIframeInsideIframeData.caseNumber.Xpath1, 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				console.log("element successfully located by remote webdriver");
				await remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.caseNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Case Number field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.caseNumber.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.caseNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomCurrency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customCurrency.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomCurrency field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customCurrency.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customCurrency.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomNumber field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customNumber.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomNumber field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customNumber.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomMobile field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customMobile.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomMobile field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customMobile.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customMobile.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2456', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXT.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.subject.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Subject field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.subject.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.subject.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2457', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_CHECKBOX.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Escalated field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.escalated.Xpath, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Escalated field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.escalated.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.escalated.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2458', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATE.IFRAME_INSIDE_IFRAME.31.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDate field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customDate.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDate field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customDate.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customDate.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2459', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_DATETIME.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomDateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customDateTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomDateTime field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customDateTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customDateTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2460', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PERCENT.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPercent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customPercent.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPercent field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customPercent.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customPercent.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2461', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_PICKLIST.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CaseOrigin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.caseOrigin.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CaseOrigin field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.caseOrigin.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.caseOrigin.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2462', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_MULTI SELECT PICKLIST.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomPicklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customPicklist.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomPicklist field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customPicklist.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2463', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TEXTAREA.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.description.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the Description field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.description.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.description.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2464', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_RICHTEXT.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping the CustomTextArea field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customTextArea.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTextArea field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customTextArea.interactionParameters.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customTextArea.testCaseXML);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2465', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_TIME.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping the CustomTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customTime.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the CustomTime field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customTime.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customTime.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2466', 'FS_MAP_SF_DT_LX_VF_PO_VF_DT_URL.IFRAME_INSIDE_IFRAME.3.OUTPUT.RA', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the WebEmail field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.webEmail.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Assert the WebEmail field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.webEmail.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.webEmail.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the CustomURL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POIframeInsideIframeData.customURL.Xpath1, VFframeId);
				this.assertTestBuilderState(pageStructureInfo, POIframeInsideIframeData.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Assert the CustomURL field', async () => {
				await this.modifyAddToTestCase(POIframeInsideIframeData.customURL.interactionParameters1.readAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POIframeInsideIframeData.customURL.testCaseXML1);
				this.assertExecutionStatus(testItemId, POIframeInsideIframeData.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
