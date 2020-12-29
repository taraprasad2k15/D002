import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { PCO } from '../../testdata/sfObjects/PCO';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfCustObjAttachmentRL } from './SfCustObjAttachmentRL';

export class SfCustObjAttachmentRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [PCO.PCOviewPsi];

		this.zephyrTest('AutomationAPI', 'PROT-2304', 'FS_MAP_SF_RL_LX_ENHANCED_RL_NOTES&ATTACHMENTS', () => {
			beforeAll(async done => {
				const tcName = 'PCO View.testcase';
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
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a/span[(.)='Related'] | //a[(.)='Related']", 30 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", relatedTabWE);
				await remoteWebdriver.executeScript("arguments[0].click();", relatedTabWE)
				//	await relatedTabWE.click()
				await this.findElement(remoteWebdriver, SfCustObjAttachmentRL.uploadFiles.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.uploadFiles.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.uploadFile, Standard.interaction.chooseFile, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do upload files Button', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.uploadFiles.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.uploadFiles.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.uploadFiles.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping upload files Button present in RL header', async () => {
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfCustObjAttachmentRL.uploadFiles.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.uploadFiles.xpath1);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.uploadFile, Standard.interaction.chooseFile, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do upload present in RL header', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.uploadFiles.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.uploadFiles.testCaseXML1);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.uploadFiles.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping upload files Button for Assertion', async () => {
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfCustObjAttachmentRL.uploadFiles.xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.uploadFiles.xpath1);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.uploadFile, Standard.interaction.chooseFile, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do upload field button for assertion', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.uploadFiles.testCaseXMLAssert);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping File Name Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.fileName.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.fileName, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,SfCustObjAttachmentRL.rowLocators);
			});
			this.step('Add & Do File Name Field', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				// const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.fileName.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusWithRow, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping File Name Field for download interaction', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.fileName.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.fileName, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,SfCustObjAttachmentRL.rowLocators);
			});
			this.step('Add & Do File Name Field for download interaction', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.downloadInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.fileName.testCaseXML1);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusDownload, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Modified Date Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const relatedLM: WebElement = await this.findElement(remoteWebdriver, SfCustObjAttachmentRL.fileLastModified.xpath, 30 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", relatedLM);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.fileLastModified.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.fileLastModified, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,SfCustObjAttachmentRL.rowLocators);
			});
			this.step('Add & Do Modified Date Field', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.fileLastModified.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping File Size Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.fileSize.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.fileSize, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,SfCustObjAttachmentRL.rowLocators);
			});
			this.step('Add & Do File Size Field', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.fileSize.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping File Extension Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.fileExtension.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.fileExtension, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState,SfCustObjAttachmentRL.rowLocators);
			});
			this.step('Add & Do File Extension Field', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.fileExtension.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.attachmentHeading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => {
				await this.modifyAddToTestCase(SfCustObjAttachmentRL.heading.interactionParameters);
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
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All Link', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCustObjAttachmentRL.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfCustObjAttachmentRL.attachments.viewAllLink, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View All Link', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCustObjAttachmentRL.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCustObjAttachmentRL.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}