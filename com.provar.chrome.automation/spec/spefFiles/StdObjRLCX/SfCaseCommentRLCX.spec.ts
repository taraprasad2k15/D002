import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseCommentRLCX } from './SfCaseCommentRLCX';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfCaseCommentRLCXSpec extends BaseSpec {
	public runTest() { 
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Case.caseViewPsiCX];
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
		const rowLocators:any[] = [
            {
                "label": "Public (IsPublished)",
                "selected": true,
                "value": "false"
            },
            {
                "label": "Comment (CommentBody)",
                "selected": false,
                "value": /.*Sample Comment for Automation Testing/
            }
        ];

		this.zephyrTest('AutomationAPI', 'PROT-1118', 'FS_MAP_SF_RL_CX_ACTION BUTTONS', () => {
			beforeAll(async done => {
				const tcName = 'Case ViewCX.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfCaseCommentRLCX.newCommentButton.Xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.newCommentButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.newButtonCX, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.newCommentButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLCX.newCommentButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 4*1000);
			},5*1000);
			this.step('Mapping Comment Field', async () => {
				const commentWE = await this.findElement(remoteWebdriver, SfCaseCommentRLCX.body.Xpath, 15000);
				commentWE.click();
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.body.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsiCX], Case.RL.caseComment.commentCX, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Comment Field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLCX.body.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRLCX.body.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRLCX.body.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.saveButton.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsiCX], Case.RL.caseComment.saveButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.saveButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLCX.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1119', 'FS_MAP_SF_RL_CX_REFERENCE FIELDS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Comment Field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLCX.user.Xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.user.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX , response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Comment Field', async () => {
				await this.modifyAddToTestCase({
					interactionParameters: {
						id: 'Read/Assert',
						settings: {
							extractValue: true,
						},
					}
				});
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRLCX.user.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRLCX.user.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1120', 'FS_MAP_SF_RL_CX_CHECKBOX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Public Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.public.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.public, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Public Field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.public.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1121', 'FS_MAP_SF_RL_CX_ROW.EditButton', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLCX.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath, 25000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentEditPsiCX], Case.RL.caseComment.cancelButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
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
				await this.assertTestCaseXML("0", SfCaseCommentRLCX.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRLCX.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1122', 'FS_MAP_SF_RL_CX_ROW.DeleteButton', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			it('Sleep for 4 seconds', async done => {
				expect(true).toEqual(true);
				setTimeout(async () =>{
					done();
				},4000);
			}, 5000);
			this.step('Mapping Delete Button', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLCX.deleteButton.Xpath, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.deleteButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.deleteButton, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Delete Button', async () => { 
				await this.modifyAddToTestCase(SfCaseCommentRLCX.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRLCX.deleteButton.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRLCX.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1123', 'FS_MAP_SF_RL_CX_HEADING HYPERLINKS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping RL Heading', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//*[text()='Case Comments']");
				this.assertTestBuilderState(pageStructureInfo, {disposition:"Existing", text:"Case Comments (CaseComments)"}, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
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
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		}); 
		this.zephyrTest('AutomationAPI', 'PROT-1124', 'FS_MAP_SF_RL_CX_COLUMN_ASSERTION', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping Comment Field for col assertion', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLCX.user.Xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLCX.user.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Comment Field  for col assertion', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLCX.comment.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLCX.comment.assertColumntestcaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}