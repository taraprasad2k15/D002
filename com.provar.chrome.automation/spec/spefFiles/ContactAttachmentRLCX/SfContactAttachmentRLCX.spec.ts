import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfContactAttachmentRLCX } from './SfContactAttachmentRLCX';
import { Contact } from '../../testdata/sfObjects/Contact';

export class SfContactAttachmentRLCXSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Contact.contactViewEmployeePsiCX];
		let pageStructureInfoNote: any[] = [SfContactAttachmentRLCX.newNotePSI];

		this.zephyrTest('AutomationAPI', 'PROT-1781', 'FS_MAP_SF_RL_CX_NOTES&ATTACHMENTS', () => {
			beforeAll(async done => {
				const tcName = 'Contact View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping upload files Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfContactAttachmentRLCX.uploadFiles.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.uploadFiles.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.uploadFile, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do upload files Button', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.uploadFiles.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.uploadFiles.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.uploadFiles.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping upload files Button for Assertion', async () => {
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfContactAttachmentRLCX.heading.xpath, 30 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", newButtonWE);
				newButtonWE.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.uploadFiles.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.uploadFile, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			// this.step('Add & Do upload field button for assertion', async () => {
			// 	await this.modifyAddToTestCase(SfContactAttachmentRLCX.assertInteractionParameters);
			// 	const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
			// 	const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
			// 	await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.uploadFiles.testCaseXMLAssert);
			// 	this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			// });
			this.step('Mapping Title Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.title.xpath); 
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.title2, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Title Field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.title.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusWithRow, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Last Modified Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.fileLastModified.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.lastModified, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Last Modified Field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.fileLastModified.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Created By Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.createdBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.createdBy, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Created By Field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.createdBy.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.type.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.type, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Type Field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.type.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Download button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.downloadBtn.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.downloadButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Download button', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.downloadInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.downloadBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusDownload, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.deleteBtn.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.deleteButton2, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState,SfContactAttachmentRLCX.rowLocators);
			});
			this.step('Add & Do Delete button', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.deleteBtn.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.deleteBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.deleteBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping New Note button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.newNote.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.newNoteButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do New Note button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemId1);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.newNote.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.newNote.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping private field on New Note Screen', async () => {
				await this.findElement(remoteWebdriver,SfContactAttachmentRLCX.private.xpath, 20*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.private.xpath);
				this.assertTestBuilderState(pageStructureInfoNote, SfContactAttachmentRLCX.private.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Private field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemId);
				await this.assertTestCaseXML("0", SfContactAttachmentRLCX.private.testCaseXML);
				this.assertExecutionStatus("0", SfContactAttachmentRLCX.private.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping title field on New Note Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.titleOnNoteEdit.xpath);
				this.assertTestBuilderState(pageStructureInfoNote, SfContactAttachmentRLCX.titleOnNoteEdit.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do title field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.titleOnNoteEdit.setInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.titleOnNoteEdit.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.titleOnNoteEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping body field on New Note Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.body.xpath);
				this.assertTestBuilderState(pageStructureInfoNote, SfContactAttachmentRLCX.body.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do body field', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.body.setInteraction);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.body.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.body.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping save button on New Note Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.savebtn
				.xpath);
				this.assertTestBuilderState(pageStructureInfoNote, SfContactAttachmentRLCX.savebtn.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do save field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.savebtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.savebtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type field for Column Assertion', async () => {
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfContactAttachmentRLCX.heading.xpath, 30 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", newButtonWE);
				newButtonWE.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.type.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.type, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Add & Do Type field ', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.type.columnAssertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemId);
				await this.assertTestCaseXML("0", SfContactAttachmentRLCX.type.testCaseXMLColumnAssert);
				this.assertExecutionStatus("0", SfContactAttachmentRLCX.type.executionStatusColumn, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Title field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.title.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.title2, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Add & Do Title field ', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.title.columnAssertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.title.testCaseXMLColumnAssert);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Last Modified field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.fileLastModified.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.lastModified, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Add & Do last Modified field ', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.fileLastModified.columnAssertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.fileLastModified.testCaseXMLColumnAssert);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Created By field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.createdBy.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.createdBy, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState);
			});
			this.step('Add & Do Created By field ', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.createdBy.columnAssertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.createdBy.testCaseXMLColumnAssert);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.attachmentHeading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => {
				await this.modifyAddToTestCase(SfContactAttachmentRLCX.heading.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAttachmentRLCX.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo, Contact.RL.attachments.viewAllLink, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAttachmentRLCX.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAttachmentRLCX.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}