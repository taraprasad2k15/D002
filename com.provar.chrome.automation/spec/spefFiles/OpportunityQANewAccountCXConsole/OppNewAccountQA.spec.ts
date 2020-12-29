import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewAccQA} from './OppNewAccountQA';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfNewAccQACXConsoleSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfo: any[] = [Standard.CurrentTabCXPsi, SfNewAccQA.oppViewPsiCx];
        let windowUrl;
        let windowTitle;
        let windowHandles;
        let windowUrlMain;
        let windowTitleMain;
        let currHandle1;

        this.zephyrTest('AutomationAPI', 'PROT-2663', 'Console_QuickAction_NewAccount', () => {
            beforeAll(async done => {
                const tcName = 'NewAccountQA.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            // afterAll(async done => {
			// 	await this.endTestSession(done);
			// });
            this.step('Mapping Type Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfNewAccQA.typePicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.typePicklist.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.typePicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Type Picklist for "Set By Value" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.typePicklist.interactionParameters.setByValue);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfNewAccQA.typePicklist.testCaseXML.setByValue);
                this.assertExecutionStatus("0", SfNewAccQA.typePicklist.executionStatus.setByValue, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Type Picklist', async () => {
                await this.findElement(remoteWebdriver, SfNewAccQA.typePicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.typePicklist.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.typePicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Type Picklist for "Set By Index" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.typePicklist.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.typePicklist.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfNewAccQA.typePicklist.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.account.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.account.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.account.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfNewAccQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.account.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.account.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.account.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.account.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewAccQA.account.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.phone.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.phone.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.phone.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.phone.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewAccQA.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.customDate.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Custom Date Field for "SF Today" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.customDate.interactionParameters.sfToday);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.customDate.testCaseXML.sfToday);
                this.assertExecutionStatus(testItemId, SfNewAccQA.customDate.executionStatus.sfToday, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.customDate.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.customDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Custom Date Field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.customDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.customDate.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewAccQA.customDate.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
           
            this.step('Mapping Approved Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.approved.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.approved.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved Checkbox for "Check" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.approved.interactionParameters.check);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.approved.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfNewAccQA.approved.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.approved.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.approved.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved Checkbox for "Uncheck" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.approved.interactionParameters.unCheck);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.approved.testCaseXML.unCheck);
                this.assertExecutionStatus(testItemId, SfNewAccQA.approved.executionStatus.unCheck, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.approved.Xpath,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.approved.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved Checkbox for "Toggle" interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.approved.interactionParameters.toggle);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.approved.testCaseXML.toggle);
                this.assertExecutionStatus(testItemId, SfNewAccQA.approved.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
            });
            
            this.step('Mapping Account Name field', async () => {
                await this.findElement(remoteWebdriver, SfNewAccQA.parentAccount.XpathLookup, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.parentAccount.XpathLookup,[SfNewAccQA.primaryTab.Xpath]);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.parentAccount.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "SF Lookup" Interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.parentAccount.testCaseXML.lookup);
                this.assertExecutionStatus(testItemId, SfNewAccQA.parentAccount.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account in Lookup', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[1]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
                let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.accountId.Xpath, ["//frame[@id='resultsFrame']"],windowUrl, windowTitle);
                const rowLocators = [
                        {
                                 "label": "Account Name (Name)",
                                 "selected": true,
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
                               "value": '',
                        },
                        
                ];
                this.assertTestBuilderState([Standard.notInAConsoleTabCXPsi, SfNewAccQA.accountLookupPsiCX], SfNewAccQA.accountId.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
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
                await this.assertTestCaseXML(testItemId, SfNewAccQA.accountId.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewAccQA.accountId.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[0]);
                var windowUrl = await remoteWebdriver.getCurrentUrl();
                var windowTitle = await remoteWebdriver.getTitle();
                //await this.findElement(remoteWebdriver, SfNewAccQA.parentAccount.XpathText, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.parentAccount.XpathText,[SfNewAccQA.primaryTab.Xpath],windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.parentAccount.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field for "Set" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.parentAccount.interactionParameters.set);
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
                await this.assertTestCaseXML(testItemId, SfNewAccQA.parentAccount.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewAccQA.parentAccount.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
               // await this.findElement(remoteWebdriver, SfNewAccQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.create.Xpath,[SfNewAccQA.primaryTab.Xpath],windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfNewAccQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfNewAccQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                //await this.findElement(remoteWebdriver, SfNewAccQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewAccQA.create.Xpath,[SfNewAccQA.primaryTab.Xpath],windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfo, SfNewAccQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewAccQA.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfNewAccQA.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
     }
    
}
