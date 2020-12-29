import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { PCO } from '../../testdata/sfObjects/PCO';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { CustObjCloneData } from './CustObjClone.data';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class CustObjCloneSpec extends BaseSpec {
	public runTest() {
		const connectionName = 'Regmain';
		let remoteWebdriver: WebDriver;
		const debug: boolean = false;
		let pageStructureInfo: any[] = [PCO.PCOClonePsi];

		this.zephyrTest('AutomationAPI', 'PROT-912', 'FS_MAP_SF_LAYOUT_LX_CustomObj.Clone', () => {
			beforeAll(async done => {
				const tcName = 'PCO Clone.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Test Status Checkbox field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				await this.findElement(remoteWebdriver, CustObjCloneData.testStatus.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.testStatus.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testStatusField, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Test Status field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.testStatus.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.testStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.testStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Test Date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.testDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.testDate, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Test Date field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.testDate.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.testDate.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.testDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.pathStage.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Path Stages field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.pathStage.interactionParameters.setByIndex);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.pathStage.testCaseXML.setByIndex);
				this.assertExecutionStatus(testItemId, CustObjCloneData.pathStage.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Path Stages field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.pathStage.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.pathStage, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Path Stages field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.pathStage.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.pathStage.testCaseXML.set);
				this.assertExecutionStatus(testItemId, CustObjCloneData.pathStage.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save & New button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveAndNewButton2, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save & New button field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveAndNewButton2.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveAndNewButton2.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const firstele = await this.findElement(remoteWebdriver, CustObjCloneData.customPicklistSelect.Xpath);
				await remoteWebdriver.executeScript("arguments[0].click()", firstele);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.customPicklistDeselect.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Longitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.longitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.longitude, Standard.interaction.set, CustObjCloneData.longitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Longitude field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.longitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.longitude.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.longitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Lattitude field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.latitude.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.latitude, Standard.interaction.set, CustObjCloneData.longitude.applicableInteractions, response.testbuilderState);
			});
			this.step('Add & Do Lattitude field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.latitude.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.latitude.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.latitude.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Errors', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageErrorNew.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.pageError, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do Page Errors field', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.pageErrorNew.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageErrorNew.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageErrorNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field for Assertions', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field for Assertions', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.name.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.name.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, CustObjCloneData.name.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.name.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.name, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Name field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.name.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Short Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.shortDescription.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.shortDescription, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Short Description field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.shortDescription.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.shortDescription.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.shortDescription.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CustObjCloneData.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(CustObjCloneData.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CustObjCloneData.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, CustObjCloneData.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Mapping Save button field', async () => {
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
	}
}