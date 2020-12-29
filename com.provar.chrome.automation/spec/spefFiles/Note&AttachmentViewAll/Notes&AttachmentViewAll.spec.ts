import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { PCO } from '../../testdata/sfObjects/PCO';
import { NotesAttachmentViewAllData } from './Notes&AttachmentViewAll';
import { Account } from 'spec/testdata/sfObjects/Account';

export class NotesAttachmentViewAllSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [NotesAttachmentViewAllData.PSI];
		this.zephyrTest('AutomationAPI', 'PROT-2321', 'FS_MAP_SF_RL_LX_NOTES&ATTACHMENTS.VIEWALL', () => {
			beforeAll(async done => {
				const tcName = 'Account.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 250000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Title field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, NotesAttachmentViewAllData.title.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.title.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.title.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Value Assertion on Title Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", NotesAttachmentViewAllData.title.testCaseXML);
				this.assertExecutionStatus("0", NotesAttachmentViewAllData.title.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Owner field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.owner.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.owner.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Value Assertion on Owner Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.owner.testCaseXML);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Last Modified field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.lastModified.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.lastModified.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Value Assertion on Last Modified Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.lastModified.testCaseXML);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Size field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.size.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.size.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Value Assertion on Size Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.size.testCaseXML);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//tbody//td[5]/span");
				dropdown.click();
				await this.findElement(remoteWebdriver, NotesAttachmentViewAllData.delete.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.delete.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.delete.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.delete.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.delete.testCaseXML);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.delete.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Screen to get loaded', async done => {
				expect(true).toEqual(true);
				const dropdown: WebElement = await this.findElement(remoteWebdriver, "//tbody//td[5]/span");
				dropdown.click();
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping Download Button', async () => {	
				await this.findElement(remoteWebdriver, NotesAttachmentViewAllData.download.xpath, 20 * 1000);	
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.download.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.download.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Download Interaction on Download Button', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.download.downloadInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.download.testCaseXML);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.download.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Upload Files Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.uploadFiles.Xpath1);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.uploadFiles.fieldDetails, Standard.interaction.chooseFile, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Performing Click on Upload Files Button', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.uploadFiles.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
				await this.assertTestCaseXML(testItemId1, NotesAttachmentViewAllData.uploadFiles.testCaseXML);
				this.assertExecutionStatus(testItemId1, NotesAttachmentViewAllData.uploadFiles.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Title field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.title.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.title.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Column Assertion on Title Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.title.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.title.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Owner field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.owner.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.owner.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Column Assertion on Owner Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.owner.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.owner.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Last Modified field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.lastModified.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.lastModified.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Column Assertion on Last Modified Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.lastModified.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.lastModified.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Size field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(NotesAttachmentViewAllData.size.xpath);
				this.assertTestBuilderState(pageStructureInfo, NotesAttachmentViewAllData.size.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, NotesAttachmentViewAllData.rowLocators);
			});
			this.step('Performing Column Assertion on Size Field', async () => {
				await this.modifyAddToTestCase(NotesAttachmentViewAllData.size.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, NotesAttachmentViewAllData.size.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, NotesAttachmentViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}