import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfLeadQuickTask} from './LeadQuickTask';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfLeadQAQuickTaskCXSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        let windowUrl;
        let windowTitle;
        let windowHandles;
        let windowUrlMain;
        let windowTitleMain;
        let currHandle1;

        this.zephyrTest('AutomationAPI', 'PROT-2675', 'Lead_QuickTask', () => {
            beforeAll(async done => {
                const tcName = 'QuickTask.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            // afterAll(async done => {
			// 	await this.endTestSession(done);
			// });
            this.step('Mapping Subject field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfLeadQuickTask.subject.Xpathtext, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.subject.Xpathtext);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Subject field for "Clear" Interaction ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.subject.interactionParameters.clear);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.subject.testCaseXML.clear);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.subject.executionStatusClear, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.subject.Xpathtext);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Subject field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.subject.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.subject.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Comments field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.comments.Xpath);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.comments.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Comments field for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.comments.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.comments.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.comments.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Call Result field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.callResult.Xpath);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.callResult.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Call Result field for "Hover" interaction ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.callResult.interactionParameters.hover);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.callResult.testCaseXML.hover);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.callResult.executionStatus.hover, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Call Result field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.callResult.Xpath);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.callResult.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Call Result field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.callResult.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.callResult.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.callResult.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Related To field', async () => {
                await this.findElement(remoteWebdriver, SfLeadQuickTask.relatedTo.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.relatedTo.Xpath);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.relatedTo.fieldDetails, Standard.interaction.sfReferenceType, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Related To field for "SF Reference" Interaction ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.relatedTo.interactionParameters.sfreference);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.relatedTo.testCaseXML.sfreference);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.relatedTo.executionStatus.sfreference, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Related To field', async () => {
                await this.findElement(remoteWebdriver, SfLeadQuickTask.relatedTo.XpathLookup, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.relatedTo.XpathLookup);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.relatedTo.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Related To field for "SF Lookup" Interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.relatedTo.testCaseXML.lookup);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.relatedTo.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account in Lookup', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[1]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
                let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.accountId.Xpath, ["//frame[@id='resultsFrame']"],windowUrl, windowTitle);
                const rowLocators = [
                        {
                                 "label": "Account Name (Name)",
                                 "selected": true,
                                 "value": /.*/,
                        },
                        {
                                "label": "Account Site (ACCOUNT_SITE)",
                                "selected": false,
                                "value": /.*/,
                        },
                        {
                                "label": "Account Owner Alias (CORE_USERS_ALIAS)",
                                "selected": false,
                                "value": /.*/,
                        },
                        {
                               "label": "Type (ACCOUNT_TYPE)",
                               "selected": false,
                               "value": /.*/,
                        },
                        
                ];
                this.assertTestBuilderState([SfLeadQuickTask.accountLookupPsiCX], SfLeadQuickTask.accountId.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Account in Lookup', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                        'type': 'Icon-ExecutingChildPaused',
                        'executionStatus': 'Executing',
                        'successfulCount': 0
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.accountId.testCaseXML);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.accountId.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Log a Call Button', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[0]);
                var windowUrl = await remoteWebdriver.getCurrentUrl();
                var windowTitle = await remoteWebdriver.getTitle();
                await this.findElement(remoteWebdriver, SfLeadQuickTask.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.create.Xpath,[],windowUrl, windowTitle);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Log a Call Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfLeadQuickTask.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
					'type': 'Icon-ExecutingPaused',
                    'executionStatus': 'Executing',
                    'successfulCount': 0
				};
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen',true)
                const newValues2: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues2, testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Log a Call Button', async () => {
                await this.findElement(remoteWebdriver, SfLeadQuickTask.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfLeadQuickTask.create.Xpath,[],windowUrl, windowTitle);
                this.assertTestBuilderState([SfLeadQuickTask.leadViewPsiCX], SfLeadQuickTask.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Log a Call Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfLeadQuickTask.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfLeadQuickTask.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
     }
    
}
