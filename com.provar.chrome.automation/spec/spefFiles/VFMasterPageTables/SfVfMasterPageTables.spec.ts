import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfMasterPageTables } from './SfVfMasterPageTables';
import { join } from 'path';

export class SfVFMasterPageTablesSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA_DTN = SfVfMasterPageTables.masterPagePSI.dataTable.new;
        const pageStructureInfoQA_DTE = SfVfMasterPageTables.masterPagePSI.dataTable.existing;
        const pageStructureInfoQA_PBN = SfVfMasterPageTables.masterPagePSI.pageBlockTable.new;
        const pageStructureInfoQA_PBE = SfVfMasterPageTables.masterPagePSI.pageBlockTable.existing;
        const pageStructureInfoQA_NTON = SfVfMasterPageTables.masterPagePSI.nestedTable.newOuter;
        const pageStructureInfoQA_NTOE = SfVfMasterPageTables.masterPagePSI.nestedTable.existingOuter;
        const pageStructureInfoQA_NTIN = SfVfMasterPageTables.masterPagePSI.nestedTable.newInner;
        const pageStructureInfoQA_NTIE = SfVfMasterPageTables.masterPagePSI.nestedTable.existingInner;
        this.zephyrTest('AutomationAPI', "PROT-1272", 'FS_MAP_SF_VF_VF ONLY_DATA TABLE.NP-NT-NF', () => {
            beforeAll(async done => {
                const tcName = 'VFMasterPageTables.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageTables.iframe.Xpath, 10000);
                await remoteWebdriver.switchTo().frame(iFrame);
                const actions: WebElement = await this.findElement(remoteWebdriver, SfVfMasterPageTables.dataTable.accountName.Xpath, 10000);
                console.log(actions);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.accountName.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                console.log(response);
                this.assertTestBuilderState(pageStructureInfoQA_DTN, SfVfMasterPageTables.dataTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfMasterPageTables.dataTable.accountName.testCaseXML);
                this.assertExecutionStatus("0", SfVfMasterPageTables.dataTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1273", 'FS_MAP_SF_VF_VF ONLY_DATA TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.owner.Xpath1, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.dataTable.owner.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink,response.testbuilderState);
            });
            this.step('Assert the Owner field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.owner.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.actions.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.dataTable.actions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Select button', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1297", 'FS_MAP_SF_VF_VF ONLY_DATA TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.accountName.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.dataTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.accountName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.owner.Xpath1, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.dataTable.owner.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink,response.testbuilderState);
            });
            this.step('Assert the Owner Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.owner.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.owner.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.dataTable.actions.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.dataTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.dataTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1299", 'FS_MAP_SF_VF_VF ONLY_PAGE BLOCK TABLE.EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.caseNumber.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, SfVfMasterPageTables.pageBlockTable.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1273", 'FS_MAP_SF_VF_VF ONLY_PAGE BLOCK TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.accountName.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.accountName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.subject.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.subject.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.actions.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.actions.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions button', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1303", 'FS_MAP_SF_VF_VF ONLY_PAGE BLOCK TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.caseNumber.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.accountName.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.subject.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfMasterPageTables.pageBlockTable.subject.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.subject.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.subject.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.pageBlockTable.actions.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfMasterPageTables.pageBlockTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.pageBlockTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.pageBlockTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.pageBlockTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1339", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.OCD:EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field failing in report', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.caseNumber.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTON, SfVfMasterPageTables.nestedTable.caseNumber.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Assert the Case Number field failing in report', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1341", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.OCD:EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.date.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTables.nestedTable.date.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Date field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.date.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.email.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTables.nestedTable.email.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Email field', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.email.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1340", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.OCH:EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.caseNumber.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTables.nestedTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.date.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTables.nestedTable.date.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode,response.testbuilderState);
            });
            this.step('Assert the Date Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.date.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.date.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.email.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfMasterPageTables.nestedTable.email.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Assert the Email Column', async () => {
                await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.email.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.email.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        // this.zephyrTest('AutomationAPI', "PROT-1342", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.ICD:EP-ET-NT-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.name.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIN, SfVfMasterPageTables.nestedTable.name.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name field', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.name.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.name.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.name.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1343", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.ICD:EP-ET-ET-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.phone.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfMasterPageTables.nestedTable.phone.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone field', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.phone.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.phone.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.emailInner.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfMasterPageTables.nestedTable.emailInner.fieldDetails, Standard.interaction.click, response.testbuilderState);
        //     });
        //     this.step('Assert the Email field', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.emailInner.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.emailInner.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1340", 'FS_MAP_SF_VF_VF ONLY_NESTED TABLE.OCH:EP-ET-EF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.name.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfMasterPageTables.nestedTable.name.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name Column', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.name.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
        //         const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.name.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.name.executionStatusColumn, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.phone.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfMasterPageTables.nestedTable.phone.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone Column', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.phone.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.phone.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfMasterPageTables.nestedTable.emailInner.Xpath, [SfVfMasterPageTables.iframe.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfMasterPageTables.nestedTable.emailInner.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Email Column', async () => {
        //         await this.modifyAddToTestCase(SfVfMasterPageTables.nestedTable.emailInner.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfMasterPageTables.nestedTable.emailInner.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfMasterPageTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
    }
}