import { WebDriver, WebElement, Actions, Key } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCaseQA} from './ContactQANewCase';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { remote } from 'electron';

export class SfNewCaseQACXSpec extends BaseSpec {
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

        this.zephyrTest('AutomationAPI', 'PROT-2660', 'QuickAction_NewCase', () => {
            beforeAll(async done => {
                const tcName = 'NewCase.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
				await this.endTestSession(done);
			});
            this.step('Mapping Status Picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfNewCaseQA.statusPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.statusPicklist.Xpath);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.statusPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Status Picklist for "Set By Value" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.statusPicklist.interactionParameters.setByValue);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.statusPicklist.testCaseXML.setByValue);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.statusPicklist.executionStatus.setByValue, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Status Picklist', async () => {
                await this.findElement(remoteWebdriver, SfNewCaseQA.statusPicklist.Xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.statusPicklist.Xpath);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.statusPicklist.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Status Picklist for "Set By Index" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.statusPicklist.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.statusPicklist.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.statusPicklist.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.subject.Xpath);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Subject field for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.uiAssert.value);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.subject.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.subject.Xpath);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Subject field for "Set" interaction ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.subject.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.subject.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.description.Xpath);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.description.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field for "Set" interaction', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.description.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.description.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact Name field', async () => {
                await this.findElement(remoteWebdriver, SfNewCaseQA.contactName.XpathText, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.contactName.XpathText);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.contactName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Contact Name field for "Set" Interaction ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.contactName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.contactName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.contactName.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact Name field', async () => {
                await this.findElement(remoteWebdriver, SfNewCaseQA.contactName.XpathLookup, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.contactName.XpathLookup);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.contactName.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Contact Name field for "SF Lookup" Interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.contactName.testCaseXML.lookup);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.contactName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Contact in Lookup', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.contactId.Xpath, ["//frame[@id='resultsFrame']"]);
                const rowLocators = [
                        {
                                 "label": "Name (Name)",
                                 "selected": true,
                                 "value": /.*/,
                        },
                        {
                                "label": "Account Name (ACCOUNT_NAME)",
                                "selected": false,
                                "value": '',
                        },
                        
                ];
                this.assertTestBuilderState([SfNewCaseQA.contactLookupPsiCX], SfNewCaseQA.contactId.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLinkCX, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Contact in Lookup', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                        'type': 'Icon-ExecutingChildPaused',
                        'executionStatus': 'Executing',
                        'successfulCount': 0
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.contactId.testCaseXML);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.contactId.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[0]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
                let windowTitle = await remoteWebdriver.getTitle();
                await this.findElement(remoteWebdriver, SfNewCaseQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.create.Xpath,[],windowUrl, windowTitle);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for Value Assertion ', async () => {
                this.modifyAddToTestCase(SfNewCaseQA.uiAssert.value);
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
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.create.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.uiAssert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Create Button', async () => {
                windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[0]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
                let windowTitle = await remoteWebdriver.getTitle();
                await this.findElement(remoteWebdriver, SfNewCaseQA.create.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseQA.create.Xpath,[],windowUrl, windowTitle);
                this.assertTestBuilderState([SfNewCaseQA.contactViewPsiCX], SfNewCaseQA.create.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Create Button for "Click" interaction ', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfNewCaseQA.create.testCaseXML.click);
                this.assertExecutionStatus(testItemId, SfNewCaseQA.create.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
     }
    
}
