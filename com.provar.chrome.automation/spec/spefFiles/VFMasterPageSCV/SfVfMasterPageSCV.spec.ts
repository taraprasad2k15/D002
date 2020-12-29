import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfMasterPageSCV } from './SfVfMasterPageSCV';
import { join } from 'path';

export class SfVfMasterPageSCVSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQAN: any[] = [SfVfMasterPageSCV.masterPagePSI.new];
        const pageStructureInfoQA: any[] = [SfVfMasterPageSCV.masterPagePSI.existing];
        this.zephyrTest('AutomationAPI', "dummy", 'dummy', () => {
            beforeAll(async done => {
                const tcName = 'VFMasterPage SCV.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Enable mapping for action button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageSCV.iframe.Xpath, 20000);
                await remoteWebdriver.switchTo().frame(iFrame);
                const actions: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageSCV.actions.Xpath1, 20000);
                console.log(actions);
                await remoteWebdriver.switchTo().defaultContent();
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.actions.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQAN, SfVfMasterPageSCV.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Click the Actions button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfMasterPageSCV.actions.testCaseXML);
                this.assertExecutionStatus("0", SfVfMasterPageSCV.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1405', 'FS_MAP_SF_DT_CX_NUMBER_VF_ONLY.RA', () => {
            this.step('Mapping the Case Number field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await remoteWebdriver.switchTo().defaultContent();
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageSCV.iframe.Xpath, 10000);
                await remoteWebdriver.switchTo().frame(iFrame);
                const caseNumber: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageSCV.caseNumber.Xpath1, 10000);
                console.log(caseNumber);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.caseNumber.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.caseNumber.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomCurrency field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customCurrency.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomCurrency field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customCurrency.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customCurrency.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomNumber field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customNumber.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomNumber field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customNumber.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomMobile field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customMobile.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomMobile field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customMobile.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customMobile.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1406', 'FS_MAP_SF_DT_CX_TEXT_VF_ONLY.RA', () => {
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.subject.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.subject.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1407', 'FS_MAP_SF_DT_CX_CHECKBOX_VF_ONLY.RA', () => {
            this.step('Mapping the Escalated field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.escalated.Xpath, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Escalated field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.escalated.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.escalated.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.escalated.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1408', 'FS_MAP_SF_DT_CX_DATE_VF_ONLY.RA', () => {
            this.step('Mapping the CustomDate field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customDate.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomDate field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customDate.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1409', 'FS_MAP_SF_DT_CX_DATE AND TIME_VF_ONLY.RA', () => {
            this.step('Mapping the CustomDateTime field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customDateTime.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomDateTime field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customDateTime.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customDateTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1410', 'FS_MAP_SF_DT_CX_URL_VF_ONLY.RA', () => {
            this.step('Mapping the WebEmail field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.webEmail.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the WebEmail field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.webEmail.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.webEmail.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomURL field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customURL.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the CustomURL field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customURL.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customURL.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1411', 'FS_MAP_SF_DT_CX_PERCENTAGE_VF_ONLY.RA', () => {
            this.step('Mapping the CustomPercent field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customPercent.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomPercent field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customPercent.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customPercent.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1412', 'FS_MAP_SF_DT_CX_PICKLIST_VF_ONLY.RA', () => {
            this.step('Mapping the CaseOrigin field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.caseOrigin.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CaseOrigin field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.caseOrigin.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.caseOrigin.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1413', 'FS_MAP_SF_DT_CX_MULTI-SELECT_VF_ONLY.RA', () => {
            this.step('Mapping the CustomPicklist field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customPicklist.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomPicklist field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customPicklist.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customPicklist.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customPicklist.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1414', 'FS_MAP_SF_DT_CX_TEXT AREA_VF_ONLY.RA', () => {
            this.step('Mapping the Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.description.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Description field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.description.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.description.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.description.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1415', 'FS_MAP_SF_DT_CX_RICH TEXT_VF_ONLY.RA', () => {
            this.step('Mapping the CustomTextArea field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customTextArea.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomTextArea field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customTextArea.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customTextArea.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customTextArea.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1416', 'FS_MAP_SF_DT_CX_TIME_VF_ONLY.RA', () => {
            
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the CustomTime field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCV.customTime.Xpath1, [SfVfMasterPageSCV.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCV.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomTime field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCV.customTime.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCV.customTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCV.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}