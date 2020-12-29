import { until, By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Case } from '../../testdata/sfObjects/Case';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseCommentRLViewAll } from './SfCaseCommentRLViewAll';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfCaseCommentRL } from '../StdObjRL/SfCaseCommentRL';

export class SfCaseCommentRLViewAllSpec extends BaseSpec {
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
		this.zephyrTest('AutomationAPI', 'PROT-1728', 'FS_MAP_SF_RL_LX_TEXT_FIELDS.VIEWALL', () => {
			beforeAll(async done => {
				const tcName = 'Case View.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 200000);
			beforeEach(() => {
				this.beforeEach();
			});

			this.step('Mapping Comments field', async () => {
				remoteWebdriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.comment.xpathViewAll, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.comment.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do comments field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML("0", SfCaseCommentRLViewAll.comment.testCaseXMLViewAll);
				this.assertExecutionStatus("0", SfCaseCommentRLViewAll.comment.executionStatusViewAll, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping created date field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.createdDate.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.createdDate, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do created date field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.createdDate.testCaseXMLViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1729', 'FS_MAP_SF_RL_LX_CHECKBOX.VIEWALL', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping public field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.public.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.public, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do public field', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.public.testCaseXMLViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1730', 'FS_MAP_SF_RL_LX_REFERENCE FIELDS.VIEWALL', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping user field', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.user.xpathViewAll, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.user.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.user, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do user field for value assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.user.testCaseXMLValueAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping user field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.user.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.user, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do user field for click', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.user.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLViewAll.user.executionStatusClickViewAll, response.runExecutionStatus.currentTestCase);
				remoteWebdriver.navigate().back();
				remoteWebdriver.navigate().refresh();
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1731', 'FS_MAP_SF_RL_LX_COLUMN_ASSERTION.VIEWALL', () => {
			beforeEach(() => {
				this.beforeEach();
			});
			this.step('Mapping user field for column assertion', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.user.xpathViewAll, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.user.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.user, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do user field for column assertion', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLViewAll.user.assertColumnInteractionParameter);
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
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.user.testCaseXMLColumnAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Comments field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.comment.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.comment, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do comments field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLViewAll.comment.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.comment.testCaseXMLColumnAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping public field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.public.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.public, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do public field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLViewAll.public.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.public.testCaseXMLColumnAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping created date field for column assertion', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.createdDate.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.createdDate, Standard.interaction.readAssert, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do created date field', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLViewAll.createdDate.assertColumnInteractionParameter);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.createdDate.testCaseXMLColumnAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
		});
		this.zephyrTest('AutomationAPI', 'PROT-1732', 'FS_MAP_SF_RL_LX_ACTION BUTTONS.VIEWALL', () => {
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
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.editButton.xpathViewAll, 10 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.editButton.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button for Assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-ExecutingChildPaused',
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.editButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLViewAll.editButton.executionStatus1, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Delete Button for Assertion', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.deleteButton.xpathViewAll);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.deleteButton.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Delete Button for Assertion', async () => {
				await this.modifyAddToTestCase(assertInteractionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.deleteButton.testCaseXMLAssertViewAll);
				this.assertExecutionStatus(testItemId, executionStatusAssert, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Edit Button', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.editButton.xpathViewAll);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.editButton.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.editButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Edit Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.editButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLViewAll.editButton.executionStatus, response.runExecutionStatus.currentTestCase);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//button[@title='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			});
			it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
			this.step('Mapping Delete Button', async () => {
				const dropDown: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'listViewContent ')]//span[text()='Show More' or text()='Show more actions']/..", 20000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", dropDown);
				await remoteWebdriver.executeScript("arguments[0].click();", dropDown);
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.deleteButton.xpathViewAll);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.deleteButton.xpathViewAll);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.deleteButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState, rowLocators);
			});
			this.step('Add & Do Delete Button', async () => {
				await this.modifyAddToTestCase(SfCaseCommentRLViewAll.deleteButton.interactionParameters);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.deleteButton.testCaseXMLClickViewAll);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLViewAll.deleteButton.executionStatusClickViewAll, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping Case Comment New Button', async () => {
				await this.findElement(remoteWebdriver, SfCaseCommentRLViewAll.newButton.xpath, 20 * 1000);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseCommentRLViewAll.newButton.xpath);
				this.assertTestBuilderState([Case.caseCommentViewAllPsi], Case.RL.caseComment.newButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
				await this.assertTestCaseXML(testItemId, SfCaseCommentRLViewAll.newButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfCaseCommentRLViewAll.newButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Click on Cancel', async () => {
				expect(true).toEqual(true);
				const cancel: WebElement = await this.findElement(remoteWebdriver, "//div[contains(@class,'isModal inlinePanel')]//button/span[normalize-space()='Cancel']", 10000);
				await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", cancel);
				await remoteWebdriver.executeScript("arguments[0].click();", cancel);
			});
		});
	}
}