import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfContactCampaignRL } from './SfCampaignRL';
import { Contact } from '../../testdata/sfObjects/Contact';
import { SfCommonFIeld } from '../SfCommonField';

export class SfContactCampaignRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfoContact: any[];
		const connectionName: string = 'Regmain';
		let rowLocators = [
			{
				"label": "Campaign Name (CAMPAIGN_NAME)",
				"selected": true,
				"value": "AutomationCampaign",
			},
			{
				"label": "Start Date (CAMPAIGN_START_DATE)",
				"selected": false,
				"value": /.*/,
			},
			{
				"label": "Type (CAMPAIGN_CAMPAIGN_TYPE)",
				"selected": false,
				"value": "Advertisement",
			},
			{
				"label": "Status (CM_STATUS)",
				"selected": false,
				"value": "Responded",
			},
		];

		this.zephyrTest('AutomationAPI', 'PROT-1788', 'FS_MAP_SF_LAYOUT_LX_CONTACT_RL_CAMPAIGN', () => {
			beforeAll(async done => {
				const tcName = 'Contact.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfoContact = [Contact.contactViewEmployeePsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Add To Campaign Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const element = await this.findElement(remoteWebdriver, "//a[text()='Related']", 30 * 1000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true)",element);
				await remoteWebdriver.executeScript("arguments[0].click()",element)
				//element.click();
				await remoteWebdriver.executeScript("scrollBy(0,300)");
				await this.findElement(remoteWebdriver, SfContactCampaignRL.addToCampaign.xpath, 20*10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.addToCampaign.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.addToCampaign, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Add to Campaign Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.addToCampaign.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.addToCampaign.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Campaign Field', async () => {
				await this.findElement(remoteWebdriver, SfContactCampaignRL.campaign.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.campaign.xpath);
				this.assertTestBuilderState([SfContactCampaignRL.addToCampaignPSI], SfContactCampaignRL.campaign.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Campaign Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.campaign.set)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfContactCampaignRL.campaign.testCaseXML);
				this.assertExecutionStatus("0", SfContactCampaignRL.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Next Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.next.xpath);
				this.assertTestBuilderState([SfContactCampaignRL.addToCampaignPSI], SfContactCampaignRL.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Next Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.next.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.next.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				await this.findElement(remoteWebdriver, SfContactCampaignRL.status.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.status.xpath);
				this.assertTestBuilderState([SfContactCampaignRL.campaignMemberPSI], SfContactCampaignRL.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.status.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfContactCampaignRL.status.testCaseXML);
				this.assertExecutionStatus("0", SfContactCampaignRL.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.save.xpath);
				this.assertTestBuilderState([SfContactCampaignRL.campaignMemberPSI], SfContactCampaignRL.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.save.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Campaign Name Field', async () => {
				// const element1: WebElement = await this.findElement(remoteWebdriver, SfContactCampaignRL.heading.xpath, 20 * 1000);
				// remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
				// remoteWebdriver.navigate().refresh();
				// const element: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Campaign History']", 20 * 1000);
				// remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				await this.findElement(remoteWebdriver, SfContactCampaignRL.campaignName.xpath,10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.campaignName.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.campaignName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Campaign Name Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", SfContactCampaignRL.campaignName.testCaseXML);
				this.assertExecutionStatus("0", SfContactCampaignRL.campaignName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.startDate.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.startDate, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Start Date Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.type.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.type, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Type Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.type.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.status.xpathViewScreen);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.status, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Status Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.status.testCaseXML1);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver,SfContactCampaignRL.deleteActionButton.Xpath,10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.deleteButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click and Cancel Delete Button', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.delete.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//lightning-icon//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver,SfContactCampaignRL.editActionButton.Xpath,10*1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.editActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.editButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.editActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.editActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Clicking on Cancel Button', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//span[normalize-space(.)='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			}, 10 * 1000);
			it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, SfContactCampaignRL.heading.xpath,10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.heading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => { 
				await this.modifyAddToTestCase(SfContactCampaignRL.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				const newValueswithrow: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValueswithrow, testItemIdwithrow);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.heading.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			//column assertion
			this.step('Mapping Campaign Name Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.campaignName.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.campaignName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Campaign Name Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.campaignName.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.campaignName.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.startDate.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.startDate, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Start Date Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.startDate.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.startDate.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.type.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.type, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Type Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.type.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.type.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.status.xpathViewScreen);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.status, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Status Field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.status.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.status.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All field', async () => {
				await this.findElement(remoteWebdriver, SfContactCampaignRL.viewAll.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfContactCampaignRL.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.viewAll, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View all field', async () => {
				await this.modifyAddToTestCase(SfContactCampaignRL.viewAll.click);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfContactCampaignRL.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, SfContactCampaignRL.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});

	}
}