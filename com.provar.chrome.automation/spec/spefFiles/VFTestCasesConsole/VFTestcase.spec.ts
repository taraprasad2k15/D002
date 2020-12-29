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

export class VFTestcaseConsoleSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Standard.homeTabPsi, VFTestcase.VFPSI.existing];
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

		this.zephyrTest('AutomationAPI', 'PROT-1849', 'SF_MAP_SF_CONSOLE_LX_VF.InputFields', () => {
			beforeAll(async done => {
				const tcName = 'VFTestcase.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
            it('Sleep for 15 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 15*1000);
            },17*1000);
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
				this.assertTestBuilderState([Standard.homeTabPsi, VFTestcase.VFPSI.new], VFTestcase.caseOriginSet.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
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
	}
}
