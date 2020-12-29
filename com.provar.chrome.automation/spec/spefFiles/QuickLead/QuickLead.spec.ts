import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { QuickLead } from './QuickLead.data';
import { join } from 'path';

export class QuickLeadSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [QuickLead.PSI];
        this.zephyrTest('AutomationAPI', "PROT-2226", 'FS_MAP_SF_QA_LX_QUICKLEAD', () => {
            beforeAll(async done => {
                const tcName = 'QuickLead.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            /*
            afterAll(async done => {
                await this.endTestSession(done);
            });
            */
            this.step('Mapping the salutation field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, QuickLead.salutation.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.salutation.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.salutation.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add the salutation field', async () => {
                await this.modifyAddToTestCase(QuickLead.salutation.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML('0', QuickLead.salutation.testCaseXML);
                this.assertExecutionStatus('0', QuickLead.salutation.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the firstName field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.firstName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.firstName.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the firstName field', async () => {
                await this.modifyAddToTestCase(QuickLead.firstName.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.firstName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.firstName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the lastName field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.lastName.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.lastName.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the lastName field', async () => {
                await this.modifyAddToTestCase(QuickLead.lastName.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.lastName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the company field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.company.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.company.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the company field', async () => {
                await this.modifyAddToTestCase(QuickLead.company.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.company.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.company.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.email.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.email.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the email field', async () => {
                await this.modifyAddToTestCase(QuickLead.email.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.email.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the phone field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.phone.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.phone.fieldDetails, Standard.interaction.set, [], response.testbuilderState);
            });
            this.step('Set the phone field', async () => {
                await this.modifyAddToTestCase(QuickLead.phone.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the save field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.save.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.save.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
            });
            this.step('Set the save field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the cancel field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuickLead.cancel.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, QuickLead.cancel.fieldDetails, Standard.interaction.click, [], response.testbuilderState);
            });
            this.step('Set the cancel field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuickLead.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, QuickLead.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}