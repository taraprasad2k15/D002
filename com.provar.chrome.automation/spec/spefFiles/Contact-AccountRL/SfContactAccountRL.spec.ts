import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { Account } from '../../testdata/sfObjects/Account';
import { Opportunity } from '../../testdata/sfObjects/Opportunity';
import { SfContactAccountRL } from './SfContactAccountRLData';
import { Contact } from '../../testdata/sfObjects/Contact';

export class SfContactAccountRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfoContact: any[];
		const connectionName: string = 'Regression';
		let rowLocators = [
			{
				"label": "Account Name (ACCOUNT_NAME)",
				"selected": true,
				"value": /Acc.*/,
			},
			{
				"label": "Billing City (ACCOUNT_ADDRESS1_CITY)",
				"selected": false,
				"value": "CA",
			},
			{
				"label": "Phone (ACCOUNT_PHONE1)",
				"selected": false,
				"value": "",
			},
		];
		this.zephyrTest('AutomationAPI', 'PROT-2238', 'FS_MAP_SF_RL_LX_ACCOUNTS', () => {
			beforeAll(async done => {
				const tcName = 'Contact.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfoContact = [Contact.contactViewTest1Psi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Account Name Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const element = await this.findElement(remoteWebdriver, "//a[text()='Related']", 20 * 1000);
				await remoteWebdriver.executeScript("arguments[0].click();",element);
				await remoteWebdriver.executeScript("window.scrollBy(0,250)");
				const acc : WebElement = await this.findElement(remoteWebdriver,"//span[@title='Accounts']/ancestor::article",20*1000);
				remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);",acc);
				await this.findElement(remoteWebdriver, SfContactAccountRL.accName.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.accName.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.accountName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Account Name Field', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.accName.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.accName.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Billing City Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.billingCity.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.billingCity, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Billing City Field', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.billingCity.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Phone Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.phone.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.phone, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Value Assertion on Phone Field', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.phone.testCaseXMLAssertion);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
		this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//article//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfContactAccountRL.deleteActionButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.deleteButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click and Cancel Delete Button', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.delete.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//article//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfContactAccountRL.editActionButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.editButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Clicking on Cancel Button', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			}, 10 * 1000);		
			it('Waiting for Edit Screen to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping Billing City Field', async () => {
				await this.findElement(remoteWebdriver, SfContactAccountRL.billingCity.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.billingCity.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.billingCity, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Column Assertion on Billing City Field', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.billingCity.columnAssertion);
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
				await this.assertTestCaseXML(testItemId1, SfContactAccountRL.billingCity.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId1, SfContactAccountRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Phone Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.phone.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.phone, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState, rowLocators);
			});
			this.step('Performing Column Assertion on Phone Field', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.phone.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.phone.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping New Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.newBtn.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Performing Click on New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.newBtn.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.newBtn.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Clicking on Cancel Button', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			}, 10 * 1000);		
			it('Waiting for New Screen to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, SfContactAccountRL.heading.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.heading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => {
				await this.modifyAddToTestCase(SfContactAccountRL.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All field', async () => {
				await this.findElement(remoteWebdriver, SfContactAccountRL.viewAll.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactAccountRL.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.Account.viewAll, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View all field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactAccountRL.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactAccountRL.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}