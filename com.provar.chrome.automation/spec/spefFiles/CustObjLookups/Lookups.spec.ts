import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { Lookups } from './LookupsData';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfCustObjLookupsSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		let pageStructureInfoLookup: any[];

		this.zephyrTest('AutomationAPI', 'PROT-1026', 'FS_MAP_SF_DT_LX_LOOKUP.NEWINSF.Custom', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'PCO New.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [PCO.PCONewPsi];
				pageStructureInfoLookup = [Case.caseLookupPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Linked Case for "New in SF" interaction', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, Lookups.linkedCase.Xpath.input, 20 * 1000);
				await LinkedCaseWE.click();   // to expand the suggestion list on the field which includes the option to create a new record as well
				await this.findElement(remoteWebdriver, Lookups.linkedCase.Xpath.newInSF);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.newInSF);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.newInSfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case for New In SF Lookup', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.newInSF);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.linkedCase.testCaseXML.newInSF);
				this.assertExecutionStatus(testItemId, Lookups.linkedCase.executionStatus.newInSF, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4000);
			});
			this.step('Mapping Cancel button', async () => {
				const CancelbuttonWE: WebElement = await this.findElement(remoteWebdriver, Lookups.cancelButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.cancelButton.Xpath);
				this.assertTestBuilderState([Case.caseNewPsi], Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Lookups.cancelButton.testCaseXML);
				this.assertExecutionStatus("0", Lookups.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1027', 'FS_MAP_SF_DT_LX_LOOKUP.SET.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Linked Case for "Set" interaction', async () => {
				await this.findElement(remoteWebdriver, Lookups.linkedCase.Xpath.input);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.input);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case for Set', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", Lookups.linkedCase.testCaseXML.set);
				this.assertExecutionStatus("0", Lookups.linkedCase.executionStatus.set, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-880', 'FS_MAP_SF_DT_LX_LOOKUP.LOOKUP.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Linked Case for "SF Lookup" interaction', async () => {
				const deleteIcon: WebElement = await this.findElement(remoteWebdriver, 
					"//label[normalize-space(.)='Linked Case']/following-sibling::div//span[contains(@class, 'deleteIcon')] | //label[normalize-space(.)='Linked Case']/following-sibling::div//button[contains(@title,'Clear')]",15000);
				deleteIcon.click();    // this is to clear the existing value
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, Lookups.linkedCase.Xpath.input);
				await LinkedCaseWE.sendKeys('00');
				await this.findElement(remoteWebdriver, Lookups.linkedCase.Xpath.lookup);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.lookup);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case for Lookup', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.linkedCase.testCaseXML.lookup);
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
				this.assertExecutionStatus(testItemId, Lookups.linkedCase.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the first case number on case lookup screen ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.caseId.caseIdXpath);
				const rowLocators = [
					{
						"label": "Case (CaseNumber)",
						"selected": true,
						"value": /[0-9]{8}/,
					},
					{
						"label": "Subject (CASES_SUBJECT)",
						"selected": false,
						"value": "Sample Case for Automation Testing",
					},
					{
						"label": "Status (CASES_STATUS)",
						"selected": false,
						"value": 'On Hold',
					},
					{
						"label": "Date/Time Opened (CASES_CREATED_DATE)",
						"selected": false,
						"value": /.*/,
					},
					{
						"label": "Case Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, Case.caseNumberField, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do case number field on lookup screen', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, Lookups.caseId.testCaseXML);
				this.assertExecutionStatus(testItemId, Lookups.caseId.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-881', 'FS_MAP_SF_DT_LX_LOOKUP.SET.Custom.ILEMode', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'PCO View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g,'/',).replace('/target/build/','/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [PCO.PCOviewPsi];
				pageStructureInfoLookup = [Case.caseLookupPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Linked Case field for Activating Inline Edit on View Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.view);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case field for Inline Edit', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.inlineEdit);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.linkedCase.testCaseXML.inlineEdit);
				this.assertExecutionStatus(testItemId, Lookups.linkedCase.executionStatus.inlineEdit, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Linked Case field for "Set" interaction on View Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.prefilled);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case for Set on View Screen', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.setLinked);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.linkedCase.testCaseXML.setLinked);
				this.assertExecutionStatus(testItemId, Lookups.linkedCase.executionStatus.setLinked, response.runExecutionStatus.currentTestCase);
			});
			this.step('Map SaveEdit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveEditButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do SaveEdit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveEditButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.saveEditButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-883', 'FS_MAP_SF_DT_LX_LOOKUP.RA.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Linked Case field for Read/Assert on View Screen', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Lookups.linkedCase.Xpath.view);
				this.assertTestBuilderState(pageStructureInfo, PCO.linkedCase, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode, response.testbuilderState);
			});
			this.step('Add & Do Linked Case field for Read Assert', async () => {
				await this.modifyAddToTestCase(Lookups.linkedCase.interactionParameters.assert);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, Lookups.linkedCase.testCaseXML.assert);
				this.assertExecutionStatus(testItemId, Lookups.linkedCase.executionStatus.assert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}