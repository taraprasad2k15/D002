import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { CaseRL } from './CaseRL';
import { SfCommonFIeld } from '../SfCommonField';
import { PCO } from '../../testdata/sfObjects/PCO';
import { join } from 'path';

export class SfCaseRLSpec extends BaseSpec {
	public runTest() {
		const connectionName: string = 'Regmain';
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[];
		const assertInteractionParameters = {
			interactionParameters: {
				id: 'Read/Assert',
				settings: {
					extractValue: true,
					assertValue: true,
				},
			}
		};
		const executionStatusAssert = [{
			"name": "UiAssert",
			"type": "Icon-Successful",
			"text": "UI Assert",
			"executionStatus": "Executed",
			"successfulCount": 1,
		}];
		const rowLocators = [
            {
                "label": "Case (CASES_CASE_NUMBER)",
                "selected": true,
                "value": /[0-9]{8}/
            },
            {
                "label": "Subject (CASES_SUBJECT)",
                "selected": false,
                "value": "Testing Case RL on PCO"
            },
            {
                "label": "Date/Time Opened (CASES_CREATED_DATE)",
                "selected": false,
                "value": /.*/
            },
            {
                "label": "Priority (CASES_PRIORITY)",
                "selected": false,
                "value": "Medium"
            }
        ];
		this.zephyrTest('AutomationAPI', 'PROT-1046', 'FS_MAP_SF_RL_LX_ACTION BUTTONS.Custom', () => {
			beforeAll(async done => {
				const debug: boolean = false;
				const tcName = 'PCO View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
				pageStructureInfo = [PCO.PCOviewPsi];
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver(connectionName);
				const LinkedCaseWE: WebElement = await this.findElement(remoteWebdriver, "//a[@title='Related']/span[(.)='Related'] | //a[(.)='Related']", 20 * 1000);
				await LinkedCaseWE.click();   // to click on the Related tab
				await this.findElement(remoteWebdriver, CaseRL.newButton.Xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.newButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CaseRL.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, CaseRL.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
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
				await this.assertTestCaseXML("0", CaseRL.cancelButtonOnNew.testCaseXML);
				this.assertExecutionStatus("0", CaseRL.cancelButtonOnNew.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1047', 'FS_MAP_SF_RL_LX_REFERENCE FIELDS.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Case Number Field ', async () => {
				const CaseNumberWE: WebElement = await this.findElement(remoteWebdriver, CaseRL.caseNumber.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.caseNumber.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.caseNumber, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Case Number Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", CaseRL.caseNumber.testCaseXML);
				this.assertExecutionStatus("0", CaseRL.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1048', 'FS_MAP_SF_RL_LX_TEXT_FIELDS.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.subject, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Subject Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CaseRL.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping DateTime Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.dateTimeOpened.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.dateTimeOpened, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do DateTime Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CaseRL.dateTimeOpened.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Priority Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.priority.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.priority, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Priority Field ', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CaseRL.priority.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1049', 'FS_MAP_SF_RL_LX_ROW.EditButton.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Cases']/../../../../../following-sibling::div//a[@role='button']");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, CaseRL.editButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, CaseRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, CaseRL.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				const CancelbuttonWE: WebElement = await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
				this.assertTestBuilderState([Case.caseEditPsi], Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Cancel button', async () => {
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
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", CaseRL.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", CaseRL.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1050', 'FS_MAP_SF_RL_LX_ROW.DeleteButton.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Delete Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Cases']/../../../../../following-sibling::div//a[@role='button']");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, CaseRL.deleteButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.deleteButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Delete Button', async () => { 
				await this.modifyAddToTestCase(CaseRL.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", CaseRL.deleteButton.testCaseXML);
				this.assertExecutionStatus("0", CaseRL.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1051', 'FS_MAP_SF_RL_LX_HEADING HYPERLINKS.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, "//span[@title='Cases']");
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//span[@title='Cases']");
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Cases (Cases__r)"}, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
			});
			this.step('Add & Do RL Heading', async () => { 
				const assertRowcount = {
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							assertTableAttributes: true,
							extractTableAttributes: true,
							expectedAttributes: {
								displayRowCount: {
									value: 1,
								},
								totalRowCount: {
									value: 1,
								},
							},
						}
					},	
				};
				await this.modifyAddToTestCase(assertRowcount);
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
				await this.assertTestCaseXML(testItemId, CaseRL.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1052', 'FS_MAP_SF_RL_LX_COLUMN_ASSERTION.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.subject, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Subject Field ', async () => {
				await this.modifyAddToTestCase(CaseRL.subject.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CaseRL.subject.assertColumntestcaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1053', 'FS_MAP_SF_RL_LX_ROW.ViewAllButton.Custom', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping ViewAll button', async () => {
				await this.findElement(remoteWebdriver, CaseRL.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(CaseRL.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, PCO.RL.Cases.viewAllButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do ViewAll button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, CaseRL.viewAllButton.testCaseXML);
				this.assertExecutionStatus(testItemId, CaseRL.viewAllButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
	}
}
