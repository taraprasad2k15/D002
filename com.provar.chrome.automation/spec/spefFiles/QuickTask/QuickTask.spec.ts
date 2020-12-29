import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { QuickTask } from './QuickTask.data';
import { join } from 'path';

export class QuickTaskSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [QuickTask.PSI];
        this.zephyrTest('AutomationAPI', "PROT-2225", 'FS_MAP_SF_QA_LX_QUICKTASK', () => {
            beforeAll(async done => {
                const tcName = 'QuickTask.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Subject field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, QuickTask.subject.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.subject.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add the Subject field', async () => {
                await this.modifyAddToTestCase(QuickTask.subject.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', QuickTask.subject.testCaseXML);
                this.assertExecutionStatus('0', QuickTask.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the comment field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.comment.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.comment.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the comment field', async () => {
                await this.modifyAddToTestCase(QuickTask.comment.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.comment.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.comment.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the result field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.result.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.result.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the result field', async () => {
                await this.modifyAddToTestCase(QuickTask.result.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.result.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.result.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.name.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.name.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the name field', async () => {
                await this.modifyAddToTestCase(QuickTask.name.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.name.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.name.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the relatedTo field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.relatedTo.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.relatedTo.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the relatedTo field', async () => {
                await this.modifyAddToTestCase(QuickTask.relatedTo.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.relatedTo.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.relatedTo.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the save field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.save.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.save.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
            });
            this.step('Set the save field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the cancel field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickTask.cancel.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickTask.cancel.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
            });
            this.step('Set the cancel field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickTask.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickTask.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}