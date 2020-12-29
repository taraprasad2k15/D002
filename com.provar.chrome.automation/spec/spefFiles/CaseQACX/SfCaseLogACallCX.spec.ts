import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseLogACallCX } from './SfCaseLogACallCX';
import { join } from 'path';

export class SfCaseLogACallCXSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfCaseLogACallCX.PublisherActionPSI];
        const pageStructureInfoLookup: any[] = [SfCaseLogACallCX.lookupPSI];
        this.zephyrTest('AutomationAPI', "PROT-1104", 'FS_MAP_SF_QA_AF_CX_LOG A CALL.CLICK', () => {
            beforeAll(async done => {
                const tcName = 'Case LogACall CX.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Navigate to Log A Call on Feed Tab', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const feedTab: WebElement = await this.findElement(remoteWebdriver, SfCaseLogACallCX.feedTab.Xpath, 10000);
                await feedTab.click();
                const logACallTab: WebElement = await this.findElement(remoteWebdriver, SfCaseLogACallCX.logACallTab.Xpath, 10000);
                await logACallTab.click();
            });
            this.step('Mapping the Comments field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.comments.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCaseLogACallCX.comments.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Set the Comments field', async () => {
                await this.modifyAddToTestCase(SfCaseLogACallCX.comments.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCaseLogACallCX.comments.testCaseXML.set); 
                this.assertExecutionStatus("0", SfCaseLogACallCX.comments.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Customer Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.customerName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCaseLogACallCX.customerName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupQACX.enterableMode, response.testbuilderState);
            });
            this.step('SfLookup the Customer Name field', async () => {
                await this.modifyAddToTestCase(SfCaseLogACallCX.customerName.interactionParameters.sfLookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.customerName.testCaseXMLlookup);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.customerName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the SearchText field', async () => {
                var windowHandles = await remoteWebdriver.getAllWindowHandles();
                await remoteWebdriver.switchTo().window(windowHandles[1]);
                let windowUrl = await remoteWebdriver.getCurrentUrl();
				let windowTitle = await remoteWebdriver.getTitle();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.searchText.Xpath, ["//frame[@id='searchFrame']"], windowUrl, windowTitle);
                this.assertTestBuilderState(pageStructureInfoLookup, SfCaseLogACallCX.searchText.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the SearchText field', async () => {
                await this.modifyAddToTestCase(SfCaseLogACallCX.searchText.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.searchText.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.searchText.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Go! button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.go.Xpath, ["//frame[@id='searchFrame']"]);
                this.assertTestBuilderState(pageStructureInfoLookup, SfCaseLogACallCX.go.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go! button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.go.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.go.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.contactName.Xpath, ["//frame[@id='resultsFrame']"]);
                const rowLocators = [
                    {
						"label": "Name (Name)",
						"selected": true,
						"value": "AutomationContact",
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
					},
                ];
                this.assertTestBuilderState(pageStructureInfoLookup, SfCaseLogACallCX.contactName.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Contact Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.contactName.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Comments field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.comments.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCaseLogACallCX.comments.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Comments field', async () => {
                await this.modifyAddToTestCase(SfCaseLogACallCX.comments.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executing', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 0, testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.comments.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.comments.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Customer Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.customerName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCaseLogACallCX.customerName.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.LookupQACX.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Customer Name field', async () => {
                await this.modifyAddToTestCase(SfCaseLogACallCX.customerName.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.customerName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.customerName.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseLogACallCX.logACallButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfCaseLogACallCX.logACallButton.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Click the Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseLogACallCX.logACallButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCaseLogACallCX.logACallButton.executionStatus.click, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}