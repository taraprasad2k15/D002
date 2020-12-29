import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfSendEmailCase } from './SfSendEmailCase';
import { join } from 'path';

export class SfSendEmailCaseSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfSendEmailCase.emailPubActionPSI];
        this.zephyrTest('AutomationAPI', "PROT-1065", 'FS_MAP_SF_QA_AF_LX_EMAIL.CLICK', () => {
            beforeAll(async done => {
                const tcName = 'Case SendEmail.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the From picklist', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const subjectField: WebElement = await this.findElement(remoteWebdriver, SfSendEmailCase.from.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.from.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.from.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('SetByIndex the From picklist', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.from.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.from.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.from.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.to.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.to.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the To field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.to.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.to.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.to.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Bcc field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.bcc.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.bcc.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the Bcc field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.bcc.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.bcc.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.bcc.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.subject.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.subject.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the Subject field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.subject.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.subject.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.subject.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Switching to Iframe', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, "//iframe[@title='CK Editor Container']", 10000);
                await remoteWebdriver.switchTo().frame(iFrame);
            });
            this.step('Removing any entry present in the field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrameNested: WebElement = await this.findElement(remoteWebdriver, "//iframe[@title='Email Body']", 10000);
                await remoteWebdriver.switchTo().frame(iFrameNested);
                const htmlBody: WebElement = await this.findElement(remoteWebdriver, SfSendEmailCase.htmlBody.XpathU, 10000);
                await htmlBody.sendKeys(" ");
                await remoteWebdriver.switchTo().defaultContent();
            });
            this.step('Mapping the Html Body field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.htmlBody.XpathB, ["//iframe[@title='CK Editor Container']"]);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.htmlBody.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Richtext.enterableMode2, response.testbuilderState);
            });
            this.step('Set the Html Body field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.htmlBody.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.htmlBody.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.htmlBody.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Save button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.createButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.createButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Mapping the To field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.to.Xpath1);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.to.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Asserting To field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.to.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.to.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.to.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Bcc field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfSendEmailCase.bcc.Xpath1);
                this.assertTestBuilderState(pageStructureInfoQA, SfSendEmailCase.bcc.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Asserting Bcc field', async () => {
                await this.modifyAddToTestCase(SfSendEmailCase.bcc.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfSendEmailCase.bcc.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SfSendEmailCase.bcc.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}