import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfMasterPageTablesConsole } from './SfVfMasterPageTablesConsole';
import { join } from 'path';

export class SfVFMasterPageTablesConsoleSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA_DTN = SfVfMasterPageTablesConsole.masterPagePSI.dataTable.new;
        const pageStructureInfoQA_DTE = SfVfMasterPageTablesConsole.masterPagePSI.dataTable.existing;
        const pageStructureInfoQA_PBN = SfVfMasterPageTablesConsole.masterPagePSI.pageBlockTable.new;
        const pageStructureInfoQA_PBE = SfVfMasterPageTablesConsole.masterPagePSI.pageBlockTable.existing;
        const pageStructureInfoQA_NTON = SfVfMasterPageTablesConsole.masterPagePSI.nestedTable.newOuter;
        const pageStructureInfoQA_NTOE = SfVfMasterPageTablesConsole.masterPagePSI.nestedTable.existingOuter;
        const pageStructureInfoQA_NTIN = SfVfMasterPageTablesConsole.masterPagePSI.nestedTable.newInner;
        const pageStructureInfoQA_NTIE = SfVfMasterPageTablesConsole.masterPagePSI.nestedTable.existingInner;
        this.zephyrTest('AutomationAPI', "PROT-1829", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_DATA TABLE.NP-NT-NF', () => {
            beforeAll(async done => {
                const tcName = 'VFMasterPageTables.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Mapping the Account Name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                // const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageTablesConsole.iframe.Xpath, 10000);
                // await remoteWebdriver.switchTo().frame(iFrame);
                // const actions: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageTablesConsole.dataTable.accountName.Xpath, 10000);
                // console.log(actions);
                // await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.dataTable.accountName.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                console.log(response);
                this.assertTestBuilderState(pageStructureInfoQA_DTN, SfVfMasterPageTablesConsole.dataTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.dataTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfMasterPageTablesConsole.dataTable.accountName.testCaseXML);
                this.assertExecutionStatus("0", SfVfMasterPageTablesConsole.dataTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1839", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_DATA TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.dataTable.owner.Xpath1, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTablesConsole.dataTable.owner.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink,response.testbuilderState);
            });
            this.step('Assert the Owner field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.dataTable.owner.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.dataTable.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.dataTable.actions.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTablesConsole.dataTable.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Select button', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.dataTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1840", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_DATA TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.dataTable.accountName.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTablesConsole.dataTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.dataTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.dataTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.dataTable.accountName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1841", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_PAGE BLOCK TABLE.EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1842", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_PAGE BLOCK TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.subject.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTablesConsole.pageBlockTable.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.subject.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.actions.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTablesConsole.pageBlockTable.actions.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions button', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1843", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_PAGE BLOCK TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.pageBlockTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1844", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_NESTED TABLE.OCD:EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.caseNumber.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTON, SfVfMasterPageTablesConsole.nestedTable.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.nestedTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.nestedTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1845", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_NESTED TABLE.OCD:EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.date.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTablesConsole.nestedTable.date.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Date field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.date.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.nestedTable.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.email.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTablesConsole.nestedTable.email.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Email field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.email.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.nestedTable.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1846", 'FS_MAP_SF_CONSOLE_LX_VF_VF ONLY_NESTED TABLE.OCH:EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.caseNumber.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTablesConsole.nestedTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.nestedTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.nestedTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.date.Xpath, [SfVfMasterPageTablesConsole.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTablesConsole.nestedTable.date.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Date Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTablesConsole.nestedTable.date.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTablesConsole.nestedTable.date.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTablesConsole.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}