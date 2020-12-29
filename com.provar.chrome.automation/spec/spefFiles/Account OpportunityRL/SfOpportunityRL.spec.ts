import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfAccountOpportunityRL } from './SfOpportunityRLData';
import { Account } from '../../testdata/sfObjects/Account';
import { Opportunity } from '../../testdata/sfObjects/Opportunity';

export class SfAccountOpportunityRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfoAccount: any[];
		let pageStructureInfoNewOpp: any[];
		const connectionName: string = 'Regmain';
		let rowLocators = [
			{
				"label": "Opportunity Name (OPPORTUNITY_NAME)",
				"selected": true,
				"value": /Opp.*/,
			},
			{
				"label": "Stage (OPPORTUNITY_STAGE_NAME)",
				"selected": false,
				"value": "Qualification",
			},
			{
				"label": "Amount (OPPORTUNITY_AMOUNT)",
				"selected": false,
				"value": "",
			},
			{
				"label": "Close Date (OPPORTUNITY_CLOSE_DATE)",
				"selected": false,
				"value": /.*/,
			},
		];
		this.zephyrTest('AutomationAPI', 'PROT-2224', 'FS_MAP_SF_RL_LX_OPPORTUNITIES', () => {
			beforeAll(async done => {
				const tcName = 'Account.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfoAccount = [Account.accountViewPsi];
				pageStructureInfoNewOpp = [Opportunity.opportunityNewPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const element = await this.findElement(remoteWebdriver, "//a[text()='Related']", 20 * 1000);
				element.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.newBtn.xpath);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.newButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.newBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.newBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Opportunity Name Field', async () => {
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.oppName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.oppName.xpath);
				this.assertTestBuilderState(pageStructureInfoNewOpp, Opportunity.opportunityNameField, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set Interaction on Opportunity Name Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.oppName.set)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfAccountOpportunityRL.oppName.testCaseXML);
				this.assertExecutionStatus("0", SfAccountOpportunityRL.oppName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Stage Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.stage.xpath);
				this.assertTestBuilderState(pageStructureInfoNewOpp, Opportunity.stageField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set interaction on Stage Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.stage.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.stage.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.stage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.closeDate.Xpath1);
				this.assertTestBuilderState(pageStructureInfoNewOpp, Opportunity.closeDateField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Performing Set interaction on Close Date Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.closeDate.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.closeDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.closeDate.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.save.Xpath1);
				this.assertTestBuilderState(pageStructureInfoNewOpp, SfAccountOpportunityRL.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.save.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 5 * 1000);
			});
			this.step('Mapping Opportunity Name Field', async () => {
				const opp: WebElement = await this.findElement(remoteWebdriver, SfAccountOpportunityRL.oppName.xpathView, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", opp);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.oppName.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.oppName, Standard.interaction.click, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Opportunity Name Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfAccountOpportunityRL.oppName.testCaseXMLAssertion);
				this.assertExecutionStatus("0", SfAccountOpportunityRL.oppName.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Stage Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.stage.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.stage, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Stage Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.stage.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Amount Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.amount.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.amount, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Amount Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.amount.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.closeDate.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.closeDate, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Close Date Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.closeDate.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.deleteActionButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.delete, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click and Cancel Delete Button', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.delete.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.editActionButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.edit, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Clicking on Cancel Button', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			}, 10 * 1000);
			
 it('Waiting for New Screen to open', async done => {
	expect(true).toEqual(true);
		setTimeout(async () => {
		 done();
		 }, 4*1000);
	 });
			this.step('Mapping Stage Field', async () => {
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.stage.xpathView, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.stage.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.stage, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Column Assertion on Stage Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.stage.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, SfAccountOpportunityRL.stage.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Amount Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.amount.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.amount, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Column Assertion on Amount Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.amount.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.amount.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Close Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.closeDate.xpathView);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.closeDate, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Close Date Field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.closeDate.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.closeDate.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.heading.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.heading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.heading.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All field', async () => {
				await this.findElement(remoteWebdriver, SfAccountOpportunityRL.viewAll.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountOpportunityRL.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfoAccount, Account.RL.opportunities.viewAll, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View all field', async () => {
				await this.modifyAddToTestCase(SfAccountOpportunityRL.viewAll.click);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountOpportunityRL.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountOpportunityRL.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}