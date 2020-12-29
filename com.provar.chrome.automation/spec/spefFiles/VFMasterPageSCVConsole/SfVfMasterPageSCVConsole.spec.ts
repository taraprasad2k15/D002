import { WebDriver } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfMasterPageSCVConsole } from './SfVfMasterPageSCVConsole';
import { join } from 'path';

export class SfVfMasterPageSCVConsoleSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQAN: any[] = [Standard.homeTabPsi, SfVfMasterPageSCVConsole.masterPagePSI.new];
        const pageStructureInfoQA: any[] = [Standard.homeTabPsi, SfVfMasterPageSCVConsole.masterPagePSI.existing];

        this.zephyrTest('AutomationAPI', 'PROT-1825', 'FS_MAP_SF_CONSOLE_DT_LX_NUMBER_VF_ONLY.RA', () => {
            beforeAll(async done => {
                const tcName = 'VFMasterPage SCV.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 300000);
            beforeEach(() => {
                this.beforeEach();
            });
            it('Sleep for 15 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 15*1000);
            },17*1000);
            this.step('Mapping the Actions button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.actions.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQAN, SfVfMasterPageSCVConsole.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Click the Actions button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfMasterPageSCVConsole.actions.testCaseXML);
                this.assertExecutionStatus("0", SfVfMasterPageSCVConsole.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.caseNumber.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.caseNumber.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomCurrency field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customCurrency.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customCurrency.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomCurrency field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customCurrency.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customCurrency.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customCurrency.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomNumber field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customNumber.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomNumber field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customNumber.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomMobile field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customMobile.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customMobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomMobile field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customMobile.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customMobile.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customMobile.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1826', 'FS_MAP_SF_CONSOLE_DT_LX_TEXT_VF_ONLY.RA', () => {
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.subject.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.subject.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1827', 'FS_MAP_SF_CONSOLE_DT_LX_CHECKBOX_VF_ONLY.RA', () => {
            this.step('Mapping the Escalated field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.escalated.Xpath, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.escalated.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Escalated field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.escalated.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.escalated.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.escalated.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1828', 'FS_MAP_SF_CONSOLE_DT_LX_DATE_VF_ONLY.RA', () => {
            this.step('Mapping the CustomDate field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customDate.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomDate field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customDate.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1830', 'FS_MAP_SF_CONSOLE_DT_LX_DATE AND TIME_VF_ONLY.RA', () => {
            this.step('Mapping the CustomDateTime field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customDateTime.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customDateTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomDateTime field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customDateTime.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customDateTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customDateTime.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1831', 'FS_MAP_SF_CONSOLE_DT_LX_URL_VF_ONLY.RA', () => {
            this.step('Mapping the WebEmail field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.webEmail.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.webEmail.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the WebEmail field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.webEmail.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.webEmail.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.webEmail.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the CustomURL field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customURL.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customURL.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the CustomURL field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customURL.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customURL.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customURL.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1832', 'FS_MAP_SF_CONSOLE_DT_LX_PERCENTAGE_VF_ONLY.RA', () => {
            this.step('Mapping the CustomPercent field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customPercent.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customPercent.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomPercent field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customPercent.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customPercent.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customPercent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1833', 'FS_MAP_SF_CONSOLE_DT_LX_PICKLIST_VF_ONLY.RA', () => {
            this.step('Mapping the CaseOrigin field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.caseOrigin.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.caseOrigin.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CaseOrigin field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.caseOrigin.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.caseOrigin.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.caseOrigin.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1835', 'FS_MAP_SF_CONSOLE_DT_LX_MULTI-SELECT_VF_ONLY.RA', () => {
            this.step('Mapping the CustomPicklist field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customPicklist.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customPicklist.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomPicklist field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customPicklist.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customPicklist.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customPicklist.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1836', 'FS_MAP_SF_CONSOLE_DT_LX_TEXT AREA_VF_ONLY.RA', () => {
            this.step('Mapping the Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.description.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Description field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.description.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.description.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.description.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1837', 'FS_MAP_SF_CONSOLE_DT_LX_RICH TEXT_VF_ONLY.RA', () => {
            this.step('Mapping the CustomTextArea field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customTextArea.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customTextArea.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomTextArea field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customTextArea.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customTextArea.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customTextArea.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1838', 'FS_MAP_SF_CONSOLE_DT_LX_TIME_VF_ONLY.RA', () => {
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the CustomTime field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageSCVConsole.customTime.Xpath1, [SfVfMasterPageSCVConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA, SfVfMasterPageSCVConsole.customTime.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the CustomTime field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageSCVConsole.customTime.interactionParameters.readAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageSCVConsole.customTime.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageSCVConsole.customTime.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    };
}