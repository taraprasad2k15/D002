import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseCommentRL } from './SfCaseCommentRL';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfCaseCommentRLSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		let remoteWebdriver: WebDriver;
		let pageStructureInfo: any[] = [Case.caseViewPsi];
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
		const rowLocators: any[] = [
			{
				"label": "User (CreatedById)",
				"selected": true,
				"value": /.*/
			},
			{
				"label": "Public (IsPublished)",
				"selected": false,
				"value": "false"
			},
			{
				"label": "Created Date (CreatedDate)",
				"selected": false,
				"value": /.*/
			},
			{
				"label": "Comment (CommentBody)",
				"selected": false,
				"value": "Sample Comment for Automation Testing"
			}
		];

		this.zephyrTest('AutomationAPI', 'PROT-1000', 'FS_MAP_SF_RL_LX_ACTION BUTTONS', () => {
			beforeAll(async done => {
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping New Button', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a/span[(.)='Related'] | //a[(.)='Related']", 20 * 1000);
				await relatedTabWE.click()
				const newButtonWE: WebElement = await this.findElement(remoteWebdriver, SfCaseCommentRL.newCommentButton.Xpath, 30 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.newCommentButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do New Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.newCommentButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.newCommentButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRL.saveButton.Xpath, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.saveButton.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsi], Case.RL.caseComment.saveButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRL.saveButton.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRL.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Page Error', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.pageError.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsi], SfCaseCommentRL.pageError.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Page Error', async () => {
				await this.modifyAddToTestCase(SfCommonFIeld.pageError.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCommonFIeld.pageError.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCommonFIeld.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Body Field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRL.body.Xpath, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.body.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsi], Case.RL.caseComment.body, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Body Field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRL.body.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.body.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.body.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Body Field to perform field error assertion', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRL.body.Xpath, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.body.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsi], Case.RL.caseComment.body, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Add & Do Body Field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRL.body.assertMessage);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.body.testCaseXML1);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.body.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Save Button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.saveButton.Xpath);
				this.assertTestBuilderState([Case.RL.caseComment.commentNewPsi], Case.RL.caseComment.saveButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.saveButton.testCaseXML1);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.saveButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1001', 'FS_MAP_SF_RL_LX_REFERENCE FIELDS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping User Field', async () => {
				// const relatedTabWE: WebElement = await this.findElement(remoteWebdriver, "//a/span[(.)='Related']", 15 * 1000);
				// await relatedTabWE.click();
				await this.findElement(remoteWebdriver, SfCaseCommentRL.user.Xpath, 15 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.user.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.user, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
				await remoteWebdriver.navigate().refresh();
			});
			this.step('Add & Do User Field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRL.user.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRL.user.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1054', 'FS_MAP_SF_RL_LX_CHECKBOX', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Public Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.public.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.public, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Public Field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.public.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1041', 'FS_MAP_SF_RL_LX_TEXT_FIELDS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Created Date Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.createdDate.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.createdDate, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do CreatedDate Field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.createdDate.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Comment Field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.comment.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Comment Field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.comment.testCaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1042', 'FS_MAP_SF_RL_LX_ROW.EditButton', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Edit Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Case Comments']/../../../../../following-sibling::div//a[@role='button']");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, SfCaseCommentRL.editButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.editButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.editButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Cancel button', async () => {
				await this.findElement(remoteWebdriver, SfCommonFIeld.cancelButton.Xpath2, 15000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath2);
				this.assertTestBuilderState([Case.RL.caseComment.commentEditPsi], Case.RL.caseComment.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
				await this.assertTestCaseXML("0", SfCaseCommentRL.cancelButtonOnEdit.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRL.cancelButtonOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1043', 'FS_MAP_SF_RL_LX_ROW.DeleteButton', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Delete Button', async () => {
				const showmoreactionWE: WebElement = await this.findElement(remoteWebdriver, "//span[@title='Case Comments']/../../../../../following-sibling::div//a[@role='button']");
				showmoreactionWE.sendKeys(" ");
				await this.findElement(remoteWebdriver, SfCaseCommentRL.deleteButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.deleteButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRL.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRL.deleteButton.testCaseXML);
				this.assertExecutionStatus("0", SfCaseCommentRL.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-999', 'FS_MAP_SF_RL_LX_HEADING HYPERLINKS', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping RL Heading', async () => {
				await this.findElement(remoteWebdriver, "//span[@title='Case Comments']");
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase("//span[@title='Case Comments']");
				this.assertTestBuilderState(pageStructureInfo, { disposition: "Existing", text: "Case Comments (CaseComments)" }, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
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
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.rowcountAssertionXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1045', 'FS_MAP_SF_RL_LX_COLUMN_ASSERTION', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping Subject Field ', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.comment.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Subject Field ', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRL.comment.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.comment.assertColumntestcaseXML);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1044', 'FS_MAP_SF_RL_LX_ROW.ViewAllButton', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping ViewAll button', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRL.viewAllButton.Xpath);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRL.viewAllButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, Case.RL.caseComment.viewAllButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Add & Do ViewAll button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRL.viewAllButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRL.viewAllButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	}
}