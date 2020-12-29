import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { Account } from '../../testdata/sfObjects/Account';
import { SfAccountCustomObjRLViewAllData } from './SfAccountCustomObjRLViewAll';

export class SfAccountCustomObjRLViewAllSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Account.customObjViewAllPSI];
		this.zephyrTest('AutomationAPI', 'PROT-2246', 'FS_MAP_SF_RL_LX_VIEWALL_CustomObjRL.Account', () => {
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
			this.step('Mapping CustomObj Name', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regression');
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.name.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.customObjName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do CustomObj Name', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfAccountCustomObjRLViewAllData.name.testCaseXML);
				this.assertExecutionStatus("0", SfAccountCustomObjRLViewAllData.name.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping CustomObj Name field for column assertion', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.name.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.name.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.customObjName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do CustomObj Name field for column assertion', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.name.columnInteractionParameter);
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
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.name.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'listViewContent ')]//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
			});

			it('Waiting for dropdown to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Edit Button for assertion', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.editButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do Edit Button for Assertion', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingChildPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.editButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button for Assertion', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.deleteButton.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.deleteButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do Delete Button for Assertion', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.deleteButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.editButton.xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.editButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.editButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//button[@title='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			});
			it('Waiting for edit modal window to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'listViewContent ')]//span[text()='Show More' or text()='Show more actions']/..", 20000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.deleteButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.deleteButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfAccountCustomObjRLViewAllData.rowLocators);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.deleteButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.deleteButton.executionStatusClickViewAll, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Delete Alert to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping New Button', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
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
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 6*1000);
			},8*1000);
			this.step('Click on Cancel', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'isModal inlinePanel')]//button/span[normalize-space()='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			});
			it('Waiting for New Screen to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Change Owner Button', async () => {
				await this.findElement(remoteWebdriver, SfAccountCustomObjRLViewAllData.changeOwner.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.changeOwner.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.changeOwner, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Case Change Owner Button', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.changeOwner.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountCustomObjRLViewAllData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, Account.RL.customObj.heading, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Add & Do Heading for Row Count Assertion', async () => {
				await this.modifyAddToTestCase(SfAccountCustomObjRLViewAllData.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfAccountCustomObjRLViewAllData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfAccountCustomObjRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}