import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { CampaignHistoryData } from './CampaignHistory';
import { Contact } from '../../testdata/sfObjects/Contact';
import { Lead } from '../../testdata/sfObjects/Lead';

export class CampaignHistorySpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfoContact: any[];
		let rowLocators = [
			{
				"label": "Campaign Name (CAMPAIGN_NAME)",
				"selected": true,
				"value": /.*/,
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

		this.zephyrTest('AutomationAPI', 'PROT-1873', 'FS_MAP_SF_LAYOUT_LX_CAMPAIGN_HISTORY_RL', () => {
			beforeAll(async done => {
				const tcName = 'CampaignHistory.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfoContact = [Lead.leadViewPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Add To Campaign Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, CampaignHistoryData.addToCampaign.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.addToCampaign.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.addToCampaign, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Add to Campaign Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.addToCampaign.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.addToCampaign.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Campaign Field', async () => {
				await this.findElement(remoteWebdriver, CampaignHistoryData.campaign.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.campaign.xpath);
				this.assertTestBuilderState([CampaignHistoryData.addToCampaignPSI], CampaignHistoryData.campaign.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Campaign Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.campaign.set)
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", CampaignHistoryData.campaign.testCaseXML);
				this.assertExecutionStatus("0", CampaignHistoryData.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Next Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.next.xpath);
				this.assertTestBuilderState([CampaignHistoryData.addToCampaignPSI], CampaignHistoryData.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Next Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.next.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.next.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				await this.findElement(remoteWebdriver, CampaignHistoryData.status.xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.status.xpath);
				this.assertTestBuilderState([CampaignHistoryData.campaignMemberPSI], CampaignHistoryData.status.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Status Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.status.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", CampaignHistoryData.status.testCaseXML);
				this.assertExecutionStatus("0", CampaignHistoryData.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.save.xpath);
				this.assertTestBuilderState([CampaignHistoryData.campaignMemberPSI], CampaignHistoryData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do Save Field', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.save.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('waiting for record to be saved', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4 * 1000);
			}, 5 * 1000);
			this.step('Mapping Campaign Name Field', async () => {
				// const element1: WebElement = await this.findElement(remoteWebdriver, CampaignHistoryData.heading.xpath, 20 * 1000);
				// remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element1);
				await remoteWebdriver.navigate().refresh();
				const element: WebElement = await this.findElement(remoteWebdriver, CampaignHistoryData.campaignName.xpath, 20 * 1000);
				remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.campaignName.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.campaignName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Campaign Name Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
				await this.assertTestCaseXML("0", CampaignHistoryData.campaignName.testCaseXML);
				this.assertExecutionStatus("0", CampaignHistoryData.campaignName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Start Date Field for blank value assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.startDate.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.startDate, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Start Date Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.startDate.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Type Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.type.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.type, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Type Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.type.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Status Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.status.xpathViewScreen);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.status, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Status Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.valueAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.status.testCaseXML1);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//a[contains(@class,'rowAction')]", 10000);
				// await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				// await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				dropDown.sendKeys(" ");
				await this.findElement(remoteWebdriver, CampaignHistoryData.deleteActionButton.Xpath, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.deleteActionButton.Xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.deleteButton, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click and Cancel Delete Button', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.delete.clickAndCancel);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.deleteActionButton.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.deleteActionButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, CampaignHistoryData.heading.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.heading, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.heading.rowCount);
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
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.heading.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			//column assertion
			this.step('Mapping Type Field for Column Assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.type.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.type, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Type Field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.type.columnAssertion);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.type.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping View All field', async () => {
				await this.findElement(remoteWebdriver, CampaignHistoryData.viewAll.xpath, 10000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CampaignHistoryData.viewAll.xpath);
				this.assertTestBuilderState(pageStructureInfoContact, Contact.RL.campaignHistory.viewAll, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
			});
			this.step('Add & Do View all field', async () => {
				await this.modifyAddToTestCase(CampaignHistoryData.viewAll.click);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CampaignHistoryData.viewAll.testCaseXML);
				this.assertExecutionStatus(testItemId, CampaignHistoryData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});

	}
}