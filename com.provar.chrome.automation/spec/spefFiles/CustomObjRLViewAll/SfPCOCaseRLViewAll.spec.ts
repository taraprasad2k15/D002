import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { join } from 'path';
import { SfPCOCaseRLViewAllData } from './SfPCOCaseRLViewAll';
import { PCO } from '../../testdata/sfObjects/PCO';

export class SfPCOCaseRLViewAllSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [SfPCOCaseRLViewAllData.caseViewPsi];
		this.zephyrTest('AutomationAPI', 'PROT-2239', 'FS_MAP_SF_RL_LX_VIEWALL_VALUE ASSERTION.PCO', () => {
			beforeAll(async done => {
				const tcName = 'CaseRL_ViewAll.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Number field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.caseNumber.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.caseNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.caseNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Case Number field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfPCOCaseRLViewAllData.caseNumber.testCaseXML);
				this.assertExecutionStatus("0", SfPCOCaseRLViewAllData.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.subject, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping DateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.dateTime.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.dateTimeOpened, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do DateTime field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.dateTime.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.priority, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Priority field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.priority.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2240', 'FS_MAP_SF_RL_LX_VIEWALL_COLUMN ASSERTION.PCO', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Number field for column assertion', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.caseNumber.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.caseNumber.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.caseNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Case Number field for column assertion', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.caseNumber.columnInteractionParameter);
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
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.caseNumber.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.subject.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.subject, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Subject field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.subject.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.subject.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping DateTime field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.dateTime.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.dateTimeOpened, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do DateTime field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.dateTime.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.dateTime.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.priority.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.priority, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Priority field', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.priority.columnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.priority.testCaseXMLColumn);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-2241', 'FS_MAP_SF_RL_LX_VIEWALL_ACTION BUTTONS.PCO', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Click on Show more actions dropdown', async () => {
				expect(true).toEqual(true);
				//const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'listViewContent ')]//span[text()='Show More' or text()='Show more actions']/..", 10000);
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'listViewContent ')]//span[text()='Show More' or text()='Show more actions' or text()='Show Actions']/..", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
			});
			this.step('Mapping Edit Button for assertion', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.editButton.xpathViewAll, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.editButton.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Edit Button for Assertion', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingChildPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.editButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button for Assertion', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.deleteButton.xpathViewAll);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.deleteButton.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Delete Button for Assertion', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.deleteButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.editButton.xpathViewAll);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.editButton.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.editButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
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
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.deleteButton.xpathViewAll, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.deleteButton.xpathViewAll);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, SfPCOCaseRLViewAllData.rowLocators);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.deleteButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.deleteButton.executionStatusClickViewAll, response.runExecutionStatus.currentTestCase);
			});
			it('Waiting for Delete Alert to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Cases New Button', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.newButton.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click on Cancel', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'isModal inlinePanel')]//button/span[normalize-space()='Cancel']", 20000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			});
			it('Waiting for New Screen to close', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 3 * 1000);
			});
			this.step('Mapping Cases Change Owner Button', async () => {
				await this.findElement(remoteWebdriver, SfPCOCaseRLViewAllData.changeOwner.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.changeOwner.xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.changeOwnerButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Case Change Owner Button', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.changeOwner.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfPCOCaseRLViewAllData.heading.xpath);
				this.assertTestBuilderState(pageStructureInfo, SfPCOCaseRLViewAllData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
			});
			this.step('Add & Do Heading for Row Count Assertion', async () => {
				await this.modifyAddToTestCase(SfPCOCaseRLViewAllData.heading.rowCount);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfPCOCaseRLViewAllData.heading.testCaseXML);
				this.assertExecutionStatus(testItemId, SfPCOCaseRLViewAllData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}