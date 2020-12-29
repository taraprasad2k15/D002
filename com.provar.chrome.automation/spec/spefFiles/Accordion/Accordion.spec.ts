import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { Accordion } from './Accordion.data';
import { join } from 'path';

export class AccordionSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		const assertInteractionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		};
		this.zephyrTest('AutomationAPI', 'PROT-1776', 'FS_MAP_SF_STD_Accordion', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'Accordion.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200 * 1000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Map Search Case Field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const section2WE: WebElement = await this.findElement(remoteWebdriver, "(//lightning-accordion-section)[1]//span[contains(text(),'Linked')]");
				await section2WE.click();
				await this.findElement(remoteWebdriver, Accordion.searchCase.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Accordion.searchCase.xpath);
				this.assertTestBuilderState([Accordion.relatedRecordPSI], Accordion.searchCase.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Search Case Field', async () => {
				await this.modifyAddToTestCase(Accordion.searchCase.modificationParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Accordion.searchCase.testcaseXML);
				this.assertExecutionStatus("0", Accordion.searchCase.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Remove Button', async () => {
				// await for page load to complete
				const showactionWE: WebElement = await this.findElement(remoteWebdriver, "//lightning-accordion-section[1]//span[contains(text(),'actions')]");
				remoteWebdriver.executeScript("arguments[0].click();", showactionWE);
				await this.findElement(remoteWebdriver, Accordion.removeButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Accordion.removeButton.xpath);
				this.assertTestBuilderState([Accordion.relatedRecordPSI], Accordion.removeButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Remove Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Accordion.removeButton.testcaseXML);
				this.assertExecutionStatus(testItemId, Accordion.removeButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map New Case button', async () => {
				const section2WE: WebElement = await this.findElement(remoteWebdriver, "(//lightning-accordion-section)[2]//span[contains(text(),'Related List')]");
				await section2WE.click();
				await this.findElement(remoteWebdriver, Accordion.newButton.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Accordion.newButton.xpath);
				this.assertTestBuilderState([Accordion.relatedListPSI], Accordion.newButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Case Button', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Accordion.newButton.testcaseXML);
				this.assertExecutionStatus("0", Accordion.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Aura Component', async () => {
				const section2WE: WebElement = await this.findElement(remoteWebdriver, "(//lightning-accordion-section)[3]//span[contains(text(),'Aura')]");
				await section2WE.click();
				const firstNameWE: WebElement = await this.findElement(remoteWebdriver, Accordion.firstName.xpath);
				firstNameWE.sendKeys("title");
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Accordion.firstName.xpath);
				this.assertTestBuilderState([Accordion.auraCompPSI], Accordion.firstName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Aura Component', async () => {
				await this.modifyAddToTestCase(Accordion.firstName.modificationParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Accordion.firstName.testCaseXML);
				this.assertExecutionStatus("0", Accordion.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map Details Component', async () => {
				const section2WE: WebElement = await this.findElement(remoteWebdriver, "(//lightning-accordion-section)[4]//span[contains(text(),'Details')]");
				await section2WE.click();
				await this.findElement(remoteWebdriver, Accordion.stage.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Accordion.stage.xpath);
				this.assertTestBuilderState([Accordion.detailsPSI], Accordion.stage.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
			});
			this.step('Add & Do New Case Button', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Accordion.stage.testcaseXML);
				this.assertExecutionStatus("0", Accordion.stage.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
};