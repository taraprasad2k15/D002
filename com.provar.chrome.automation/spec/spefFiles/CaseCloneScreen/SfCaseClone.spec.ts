import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfCaseCloneData } from './SfCaseClone';

export class SfCaseCloneScreenSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		const connectionName = 'Regmain';
		let pageStructureInfoView: any[] = [Case.caseViewPsi];
		let pageStructureInfoClone: any[] = [SfCaseCloneData.caseClonePsi];

		this.zephyrTest('AutomationAPI', 'PROT-2265', 'FS_MAP_SF_LAYOUT_LX_CASE.CLONE', () => {
			beforeAll(async done => {
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
                await this.endTestSession(done);
            });
			this.step('Mapping Clone Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'slds-page-header_record-home ')]//lightning-button-menu//lightning-primitive-icon", 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", dropdown);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.clone.xpath);
				this.assertTestBuilderState(pageStructureInfoView, SfCaseCloneData.clone.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click interaction on Clone', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.clone.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.clone.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCloneData.status.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.status.Xpath1);
				this.assertTestBuilderState(pageStructureInfoClone, Case.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Performing Clear Interaction on Status field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.status.clearInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCloneData.status.testCaseXML1);
				this.assertExecutionStatus("0", SfCaseCloneData.status.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCloneData.status.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.status.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Performing Field Error Assertion on Status field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.status.assertMessage);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.status.testCaseXML2);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Error', async () => {
				await this.findElement(remoteWebdriver, SfCaseCloneData.pageError.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.pageError.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, SfCaseCloneData.pageError.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Assertion on Page Error', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCloneData.caseStatus.caseTypeXpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.caseStatus.caseTypeXpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.status, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.caseStatus.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.caseStatus.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.caseStatus.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Case Origin field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.caseOrigin.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.caseOrigin.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.subject, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.subject.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Description field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.description.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customCheckbox.interactionParameters.check);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customCheckbox.testCaseXML.check);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customCheckbox.interactionParameters.uncheck);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customCheckbox.testCaseXML.uncheck);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Checkbox field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customCheckbox.interactionParameters.toggle);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customCheckbox.testCaseXML.toggle);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customTime.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customTime, Standard.interaction.set, Standard.applicableInteractions.Time.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Time field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customRichText.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customRichText.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customRichText.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist(multi) Select field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customPicklistSelect.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customPicklistMulti, Standard.interaction.sfSelect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Select field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customPicklistSelect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customPicklistSelect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customPicklistSelect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Picklist(multi) Deselect field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customPicklistDeselect.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customPicklistMulti, Standard.interaction.sfDeselect, Standard.applicableInteractions.MultiPicklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Picklist(multi) Deselect field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customPicklistDeselect.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customPicklistDeselect.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customPicklistDeselect.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Date- Time field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customDateTime.xpath);
				this.assertTestBuilderState(pageStructureInfoClone, SfCaseCloneData.customDateTime.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Custom Date- Time field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.customDateTime.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customDateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contacts field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.Contacts.xpath);
				this.assertTestBuilderState(pageStructureInfoClone, SfCaseCloneData.Contacts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Performing SF Lookup Interaction Contacts field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.Contacts.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.Contacts.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.Contacts.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Name field from Lookup Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.name.xpath);
				this.assertTestBuilderState([SfCaseCloneData.name.psi], SfCaseCloneData.name.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing Click on Name field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true);
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.name.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Origin field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.caseOrigin.caseOriginXpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.caseOriginField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Case Origin field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.caseOrigin.interactionParametersAssert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.caseOrigin.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Checkbox field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customCheckbox.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customCheckbox, Standard.interaction.check, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Custom Checkbox field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customCheckbox.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Contact Name field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.Contacts.xpath1);
				this.assertTestBuilderState(pageStructureInfoClone, SfCaseCloneData.Contacts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Contact Name field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.Contacts.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Custom Rich Text field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCloneData.customRichText.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Case.customRichText, Standard.interaction.set, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Value and Label Assertion on Custom Rich Text field', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.customRichText.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.DateTime.enterableMode, response.testbuilderState);
			});
			this.step('Performing Assertion on Cancel Button', async () => {
				await this.modifyAddToTestCase(SfCaseCloneData.cancel.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCloneData.cancel.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCloneData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoClone, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}