import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfOppInvoiceStatementRLData } from './SfOppInvoiceStatementRL';
import { Opportunity } from '../../testdata/sfObjects/Opportunity';

export class SfOppInvoiceStatementRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfoOpp: any[] = [Opportunity.opportunityViewCXPsi];
		let pageStructureInfoIS: any[] = [Opportunity.invoiceStatementPsi];
		this.zephyrTest('AutomationAPI', 'PROT-2245', 'FS_MAP_SF_RL_CX_INVOICE_STATEMENT', () => {
			beforeAll(async done => {
				const tcName = 'Opportunity.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping New Invoice Statement Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regression');
				await this.findElement(remoteWebdriver, SfOppInvoiceStatementRLData.newBtn.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppInvoiceStatementRLData.newBtn.xpath);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.newButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Performing Click Interaction on New Invoice Statement Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfOppInvoiceStatementRLData.newBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfOppInvoiceStatementRLData.newBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				await this.findElement(remoteWebdriver, SfOppInvoiceStatementRLData.saveBtn.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppInvoiceStatementRLData.saveBtn.xpath);
				this.assertTestBuilderState(pageStructureInfoIS, SfOppInvoiceStatementRLData.saveBtn.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Performing Click Interaction on Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfOppInvoiceStatementRLData.saveBtn.testCaseXML);
				this.assertExecutionStatus("0", SfOppInvoiceStatementRLData.saveBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Click on Opportunity Name', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "//td[normalize-space()='OpportunityInvoice']/following-sibling::td//a", 15 * 1000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});
			this.step('Mapping Invoice Number Field on Opportunity View Screen', async () => {
				await this.findElement(remoteWebdriver, SfOppInvoiceStatementRLData.invoiceNumber.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppInvoiceStatementRLData.invoiceNumber.xpath);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.invoiceNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnly, response.testbuilderState, SfOppInvoiceStatementRLData.rowLocators);
			});
			this.step('Performing Value Assertion on Invoice Number Field', async () => {
				await this.modifyAddToTestCase(SfOppInvoiceStatementRLData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfOppInvoiceStatementRLData.invoiceNumber.testCaseXML);
				this.assertExecutionStatus("0", SfOppInvoiceStatementRLData.invoiceNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button on Opportunity View Screen', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.deleteActionButton.XpathCX, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.deleteActionButton.XpathCX);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.deleteButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState, SfOppInvoiceStatementRLData.rowLocators);
			});
			this.step('Performing Click and Cancel Interaction on Delete Button', async () => {
				await this.modifyAddToTestCase(SfOppInvoiceStatementRLData.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfOppInvoiceStatementRLData.deleteButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfOppInvoiceStatementRLData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button on Opportunity View Screen', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.editButton, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState, SfOppInvoiceStatementRLData.rowLocators);
			});
			this.step('Performing Click Interaction on Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfOppInvoiceStatementRLData.editBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfOppInvoiceStatementRLData.editBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Clicking on Cancel Button', async done => {
				expect(true).toEqual(true);
				const element: WebElement = await this.findElement(remoteWebdriver, "//input[@title='Cancel']", 15 * 1000);
				setTimeout(async () => {
					await element.click();
					done();
				}, 4000);
			});
			this.step('Mapping Invoice Number Field on Opportunity View Screen', async () => {
				await this.findElement(remoteWebdriver, SfOppInvoiceStatementRLData.invoiceNumber.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppInvoiceStatementRLData.invoiceNumber.xpath);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.invoiceNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Performing Column Assertion on Invoice Number Field', async () => {
				await this.modifyAddToTestCase(SfOppInvoiceStatementRLData.invoiceNumber.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, SfOppInvoiceStatementRLData.invoiceNumber.testCaseXML1);
				this.assertExecutionStatus(testItemId1, SfOppInvoiceStatementRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Invoice Statement Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfOppInvoiceStatementRLData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoOpp, Opportunity.RLCX.invoiceStatements.heading, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
			});
			this.step('Performing Row Count Assertion on Heading', async () => {
				await this.modifyAddToTestCase(SfOppInvoiceStatementRLData.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId1, SfOppInvoiceStatementRLData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId1, SfOppInvoiceStatementRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}