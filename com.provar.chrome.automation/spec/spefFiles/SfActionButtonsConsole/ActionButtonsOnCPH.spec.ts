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
import { Account } from 'spec/testdata/sfObjects/Account';
import { SfActionButtonsConsoleData } from './ActionButtonsOnCPH';

export class SfActionButtonsConsoleSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Standard.CurrentTabPsi, SfActionButtonsConsoleData.accountViewPsi];
		this.zephyrTest('AutomationAPI', 'PROT-2169', 'FS_MAP_SF_CONSOLE_HEADER_ACTIONBUTTONS.RP.CPH', () => {
			beforeAll(async done => {
				const tcName = 'Account.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Case Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.caseButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.caseButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.caseButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Case Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfActionButtonsConsoleData.caseButton.testCaseXML);
				this.assertExecutionStatus("0", SfActionButtonsConsoleData.caseButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const close: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.closeIcon, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", close);
			});
			this.step('Mapping Candidates Button', async () => {
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.candidatesButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.candidatesButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.candidatesButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Candidates Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfActionButtonsConsoleData.candidatesButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfActionButtonsConsoleData.candidatesButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const close: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.closeIcon, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", close);
			});
			this.step('Mapping Book Appointment Button', async () => {
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.bookAppointmentButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.bookAppointmentButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.bookAppointmentButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Value Assertion on Book Appointment Button', async () => {
				await this.modifyAddToTestCase(SfActionButtonsConsoleData.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfActionButtonsConsoleData.bookAppointmentButton.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfActionButtonsConsoleData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping New Note Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.dropdown, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", dropdown);
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.newNoteButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.newNoteButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.newNoteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction New Note Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfActionButtonsConsoleData.newNoteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfActionButtonsConsoleData.newNoteButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const close: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.closeIcon, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", close);
			});
			this.step('Mapping Add To Campaign Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.dropdown, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", dropdown);
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.addToCampaignButton.Xpath1, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.addToCampaignButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.addToCampaignButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click Interaction Add To Campaign Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfActionButtonsConsoleData.addToCampaignButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfActionButtonsConsoleData.addToCampaignButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const close: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.closeIcon, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", close);
			});
			this.step('Mapping New Opportunity Button', async () => {
				const dropdown: WebElement = await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.dropdown, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].click();", dropdown);
				await this.findElement(remoteWebdriver, SfActionButtonsConsoleData.newOpportunityButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfActionButtonsConsoleData.newOpportunityButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfActionButtonsConsoleData.newOpportunityButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Value Assertion on New Opportunity Button', async () => {
				await this.modifyAddToTestCase(SfActionButtonsConsoleData.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfActionButtonsConsoleData.newOpportunityButton.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfActionButtonsConsoleData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}