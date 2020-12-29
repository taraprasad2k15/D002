import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { POCaseInsideVFData } from './POCaseInsideVFData';
import { join } from 'path';
import { Case } from '../../testdata/sfObjects/Case';
import { SfCommonFIeld } from '../SfCommonField';

export class POCaseInsideVFSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [POCaseInsideVFData.VFPSI.new];
		let pageStructureInfoLookup = [{
			itemDefinition: {
				itemClass: 'Page',
				itemTypeId: 'SfLookupUiTargetExtension',
			},
			pageDetails: {
				title: 'Case Lookup Screen',
			},
		}];
		let VFframeId = ["//iframe[contains(@title,'Case:')]"];
		this.zephyrTest('AutomationAPI', 'PROT-1247', 'FS_MAP_SF_DT_LX_VF_PO.1.CASE_INSIDE_VF.RA', () => {
			afterAll(async done => {
				await this.endTestSession(done);
			});
			beforeAll(async done => {
				const tcName = 'CaseInsideVF.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 300 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Owner field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const frame: WebElement = await this.findElement(remoteWebdriver, "//iframe[contains(@title,'Case:')]", 20 * 1000);
				remoteWebdriver.switchTo().frame(frame);
				await this.findElement(remoteWebdriver, POCaseInsideVFData.owner.Xpath, 20 * 1000);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.owner.Xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.owner.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Case Owner field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.owner.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", POCaseInsideVFData.owner.testCaseXML);
				this.assertExecutionStatus("0", POCaseInsideVFData.owner.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.contactName.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.contactName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Contact Name field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.contactName.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.contactName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customDate.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Date field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Date Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customDateTime.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Date Time field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customCheckbox.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customCheckbox.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Checkbox field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customCheckbox.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customCheckbox.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Currency field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customCurrency.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Currency field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customCurrency.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customCurrency.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Number field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customNumber.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Number field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customNumber.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customNumber.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Percent field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customPercent.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Percent field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customPercent.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customPercent.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Text Area Encrypted field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customTextAreaEncrypted.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customTextAreaEncrypted.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Text Area Encrypted field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customTextAreaEncrypted.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customTextAreaEncrypted.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom URL field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customURL.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom URL field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customURL.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customURL.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customTime.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Custom Time field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.status.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.status.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Status field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.status.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.status.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customRichText.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customRichText.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.description.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Description field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Date/Time Opened field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.dateTimeOpened.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.dateTimeOpened.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Date/Time Opened field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.dateTimeOpened.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.dateTimeOpened.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.customPicklist.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Custom Picklist field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.customPicklist.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.customPicklist.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Parent Case field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.parentCase.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.parentCase.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Parent Case field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.parentCase.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.parentCase.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Closed When Created field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.closedWhenCreated.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.closedWhenCreated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Blank Value Assertion on Closed When Created field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.closedWhenCreated.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.closedWhenCreated.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.edit.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.edit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Edit Button', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.edit.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.edit.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.delete.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.delete.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.delete.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.delete.testCaseXML);
				this.assertExecutionStatus(testItemId, POCaseInsideVFData.delete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for screent to load', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Provar Custom Obj Field', async () => {
				await this.findElement(remoteWebdriver, POCaseInsideVFData.provarCustomObj.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(POCaseInsideVFData.provarCustomObj.xpath, VFframeId);
				this.assertTestBuilderState(POCaseInsideVFData.VFPSI.new, POCaseInsideVFData.provarCustomObj.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Provar Custom Obj Field', async () => {
				await this.modifyAddToTestCase(POCaseInsideVFData.provarCustomObj.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, POCaseInsideVFData.provarCustomObj.testCaseXML);
				this.assertExecutionStatus(testItemId, POCaseInsideVFData.provarCustomObj.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}
