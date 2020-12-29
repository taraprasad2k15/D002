import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfIframeInsideIframeTables } from './SfVFIframeInsideIframe';
import { join } from 'path';

export class SfIframeInsideIframeTablesSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const pageStructureInfoQA_DTN = SfIframeInsideIframeTables.masterPagePSI.dataTable.new;
        const pageStructureInfoQA_DTE = SfIframeInsideIframeTables.masterPagePSI.dataTable.existing;
        const pageStructureInfoQA_PBN = SfIframeInsideIframeTables.masterPagePSI.pageBlockTable.new;
        const pageStructureInfoQA_PBE = SfIframeInsideIframeTables.masterPagePSI.pageBlockTable.existing;
        const pageStructureInfoQA_NTON = SfIframeInsideIframeTables.masterPagePSI.nestedTable.newOuter;
        const pageStructureInfoQA_NTOE = SfIframeInsideIframeTables.masterPagePSI.nestedTable.existingOuter;
        
        this.zephyrTest('AutomationAPI', "PROT-1387", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_DATA TABLE.NP-NT-NF', () => {
            beforeAll(async done => {
                const tcName = 'IframeInsideIframeTables.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            it('Sleep for 8 seconds for Page to load completely', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 8000);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.accountName.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTN, SfIframeInsideIframeTables.dataTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfIframeInsideIframeTables.dataTable.accountName.testCaseXML);
                this.assertExecutionStatus("0", SfIframeInsideIframeTables.dataTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1388", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_DATA TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.owner.Xpath1, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.dataTable.owner.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Owner field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.owner.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.actions.Xpath1, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.dataTable.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Select button', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1389", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_DATA TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.accountName.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.dataTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.accountName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.owner.Xpath1, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.dataTable.owner.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Owner Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.owner.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.owner.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.dataTable.actions.Xpath1, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.dataTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.dataTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1390", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_PAGE BLOCK TABLE.EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.caseNumber.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, SfIframeInsideIframeTables.pageBlockTable.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1391", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_PAGE BLOCK TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.accountName.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.subject.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.subject.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.actions.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions button', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1392", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_PAGE BLOCK TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.caseNumber.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.accountName.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.subject.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfIframeInsideIframeTables.pageBlockTable.subject.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Subject Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.subject.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.subject.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.actions.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfIframeInsideIframeTables.pageBlockTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX,  response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.pageBlockTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.pageBlockTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.pageBlockTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1393", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.OCD:EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.caseNumber.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTON, SfIframeInsideIframeTables.nestedTable.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1394", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.OCD:EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach(); 
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.date.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfIframeInsideIframeTables.nestedTable.date.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Date field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.date.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.email.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfIframeInsideIframeTables.nestedTable.email.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Email field', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.email.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1395", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.OCH:EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
             afterAll(async done => {
                 await this.endTestSession(done);
             });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.caseNumber.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfIframeInsideIframeTables.nestedTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.date.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfIframeInsideIframeTables.nestedTable.date.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Date Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.date.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.date.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.email.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfIframeInsideIframeTables.nestedTable.email.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Email Column', async () => {
                await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.email.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.email.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        // this.zephyrTest('AutomationAPI', "PROT-1342", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.ICD:EP-ET-NT-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.name.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIN, SfIframeInsideIframeTables.nestedTable.name.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name field', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.name.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.name.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.name.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1343", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.ICD:EP-ET-ET-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.phone.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfIframeInsideIframeTables.nestedTable.phone.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone field', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.phone.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.phone.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.emailInner.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfIframeInsideIframeTables.nestedTable.emailInner.fieldDetails, Standard.interaction.click, response.testbuilderState);
        //     });
        //     this.step('Assert the Email field', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.emailInner.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.emailInner.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1340", 'FS_MAP_SF_VF_IFRAME INSIDE IFRAME_NESTED TABLE.OCH:EP-ET-EF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.name.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfIframeInsideIframeTables.nestedTable.name.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name Column', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.name.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
        //         const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.name.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.name.executionStatusColumn, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.phone.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfIframeInsideIframeTables.nestedTable.phone.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone Column', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.phone.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.phone.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfIframeInsideIframeTables.nestedTable.emailInner.Xpath, [SfIframeInsideIframeTables.iframe.Xpath, SfIframeInsideIframeTables.iframe1.Xpath, SfIframeInsideIframeTables.iframe2.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfIframeInsideIframeTables.nestedTable.emailInner.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Email Column', async () => {
        //         await this.modifyAddToTestCase(SfIframeInsideIframeTables.nestedTable.emailInner.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfIframeInsideIframeTables.nestedTable.emailInner.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfIframeInsideIframeTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
    }
}