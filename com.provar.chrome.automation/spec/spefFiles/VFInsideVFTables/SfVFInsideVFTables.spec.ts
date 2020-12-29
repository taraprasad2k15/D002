import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfInsideVFTables } from './SfVFInsideVFTables';
import { join } from 'path';

export class SfVfInsideVFTablesSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA_DTN = SfVfInsideVFTables.masterPagePSI.dataTable.new;
        const pageStructureInfoQA_DTE = SfVfInsideVFTables.masterPagePSI.dataTable.existing;
        const pageStructureInfoQA_PBN = SfVfInsideVFTables.masterPagePSI.pageBlockTable.new;
        const pageStructureInfoQA_PBE = SfVfInsideVFTables.masterPagePSI.pageBlockTable.existing;
        const pageStructureInfoQA_NTON = SfVfInsideVFTables.masterPagePSI.nestedTable.newOuter;
        const pageStructureInfoQA_NTOE = SfVfInsideVFTables.masterPagePSI.nestedTable.existingOuter;
        const pageStructureInfoQA_NTIN = SfVfInsideVFTables.masterPagePSI.nestedTable.newInner;
        const pageStructureInfoQA_NTIE = SfVfInsideVFTables.masterPagePSI.nestedTable.existingInner;
        this.zephyrTest('AutomationAPI', "PROT-1396", 'FS_MAP_SF_VF_VF INSIDE VF_DATA TABLE.NP-NT-NF', () => {
            beforeAll(async done => {
                const tcName = 'VFInsideVFTables.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfInsideVFTables.iframe.Xpath, 10000);
                await remoteWebdriver.switchTo().frame(iFrame);
                const actions: WebElement = await this.findElement(remoteWebdriver, SfVfInsideVFTables.dataTable.accountName.Xpath, 10000);
                console.log(actions);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.accountName.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                console.log(response);
                this.assertTestBuilderState(pageStructureInfoQA_DTN, SfVfInsideVFTables.dataTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfInsideVFTables.dataTable.accountName.testCaseXML);
                this.assertExecutionStatus("0", SfVfInsideVFTables.dataTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1397", 'FS_MAP_SF_VF_VF INSIDE VF_DATA TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.owner.Xpath2, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.dataTable.owner.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Owner field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.owner.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.actions.Xpath1, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.dataTable.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX,response.testbuilderState);
            });
            this.step('Assert the Select button', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1398", 'FS_MAP_SF_VF_VF INSIDE VF_DATA TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.accountName.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.dataTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.accountName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.owner.Xpath2, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.dataTable.owner.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Owner Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.owner.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.owner.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.dataTable.actions.Xpath1, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.dataTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.dataTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1399", 'FS_MAP_SF_VF_VF INSIDE VF_PAGE BLOCK TABLE.EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.caseNumber.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, SfVfInsideVFTables.pageBlockTable.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1400", 'FS_MAP_SF_VF_VF INSIDE VF_PAGE BLOCK TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.accountName.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.subject.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.subject.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.subject.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.actions.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.actions.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions button', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1401", 'FS_MAP_SF_VF_VF INSIDE VF_PAGE BLOCK TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.caseNumber.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.accountName.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.subject.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideVFTables.pageBlockTable.subject.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.subject.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.subject.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.pageBlockTable.actions.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideVFTables.pageBlockTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.pageBlockTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.pageBlockTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.pageBlockTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1402", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.OCD:EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.caseNumber.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTON, SfVfInsideVFTables.nestedTable.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            it('Sleep for 15 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 15*1000);
            },17*1000);
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1403", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.OCD:EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.date.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideVFTables.nestedTable.date.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Date field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.date.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.email.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideVFTables.nestedTable.email.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink,response.testbuilderState);
            });
            this.step('Assert the Email field', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.email.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1404", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.OCH:EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.caseNumber.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideVFTables.nestedTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.date.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideVFTables.nestedTable.date.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Date Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.date.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.date.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.email.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideVFTables.nestedTable.email.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Email Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.email.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.email.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        // this.zephyrTest('AutomationAPI', "PROT-1342", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.ICD:EP-ET-NT-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.name.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIN, SfVfInsideVFTables.nestedTable.name.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.name.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.name.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.name.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1343", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.ICD:EP-ET-ET-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.phone.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideVFTables.nestedTable.phone.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.phone.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.phone.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.emailInner.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideVFTables.nestedTable.emailInner.fieldDetails, Standard.interaction.click, response.testbuilderState);
        //     });
        //     this.step('Assert the Email field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.emailInner.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.emailInner.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1340", 'FS_MAP_SF_VF_VF INSIDE VF_NESTED TABLE.OCH:EP-ET-EF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.name.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideVFTables.nestedTable.name.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.name.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
        //         const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.name.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.name.executionStatusColumn, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.phone.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideVFTables.nestedTable.phone.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.phone.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.phone.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideVFTables.nestedTable.emailInner.Xpath, [SfVfInsideVFTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideVFTables.nestedTable.emailInner.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Email Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideVFTables.nestedTable.emailInner.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfInsideVFTables.nestedTable.emailInner.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideVFTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
    }
}