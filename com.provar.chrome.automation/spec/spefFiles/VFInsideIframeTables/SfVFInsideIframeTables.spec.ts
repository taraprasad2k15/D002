import { By, WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfVfInsideIframeTables } from './SfVFInsideIframeTables';
import { join } from 'path';

export class SfVfInsideIframeTablesSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA_DTN = SfVfInsideIframeTables.masterPagePSI.dataTable.new;
        const pageStructureInfoQA_DTE = SfVfInsideIframeTables.masterPagePSI.dataTable.existing;
        const pageStructureInfoQA_PBN = SfVfInsideIframeTables.masterPagePSI.pageBlockTable.new;
        const pageStructureInfoQA_PBE = SfVfInsideIframeTables.masterPagePSI.pageBlockTable.existing;
        const pageStructureInfoQA_NTON = SfVfInsideIframeTables.masterPagePSI.nestedTable.newOuter;
        const pageStructureInfoQA_NTOE = SfVfInsideIframeTables.masterPagePSI.nestedTable.existingOuter;
        const pageStructureInfoQA_NTIN = SfVfInsideIframeTables.masterPagePSI.nestedTable.newInner;
        const pageStructureInfoQA_NTIE = SfVfInsideIframeTables.masterPagePSI.nestedTable.existingInner;
        this.zephyrTest('AutomationAPI', "PROT-1378", 'FS_MAP_SF_VF_VF INSIDE IFRAME_DATA TABLE.NP-NT-NF', () => {
            beforeAll(async done => {
                const tcName = 'VFInsideIframeTables.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
            this.step('Mapping the Account Name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                const iFrame: WebElement = await this.findElement(remoteWebdriver, SfVfInsideIframeTables.iframe.Xpath, 10000);
				remoteWebdriver.switchTo().frame(iFrame);
                console.log("switched to first frame");
                const iframe1: WebElement = await this.findElement(remoteWebdriver, SfVfInsideIframeTables.iframe1.Xpath, 10000);
				remoteWebdriver.switchTo().frame(iframe1);
                console.log("switched to second frame");
				const actions: WebElement = await this.findElement(remoteWebdriver, SfVfInsideIframeTables.dataTable.accountName.Xpath, 20000);
                console.log(actions);
				console.log("element successfully located by remote webdriver");
				remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.accountName.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath,]);
                this.assertTestBuilderState(pageStructureInfoQA_DTN, SfVfInsideIframeTables.dataTable.accountName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfVfInsideIframeTables.dataTable.accountName.testCaseXML);
                this.assertExecutionStatus("0", SfVfInsideIframeTables.dataTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1379", 'FS_MAP_SF_VF_VF INSIDE IFRAME_DATA TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.owner.Xpath2, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.dataTable.owner.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Owner field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.owner.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.actions.Xpath1, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.dataTable.actions.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX,  response.testbuilderState);
            });
            this.step('Assert the Select button', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1380", 'FS_MAP_SF_VF_VF INSIDE IFRAME_DATA TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.accountName.Xpath1, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.dataTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.accountName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.owner.Xpath2, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.dataTable.owner.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Owner Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.owner.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.owner.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.dataTable.actions.Xpath1, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.dataTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.dataTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1381", 'FS_MAP_SF_VF_VF INSIDE IFRAME_PAGE BLOCK TABLE.EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.caseNumber.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, SfVfInsideIframeTables.pageBlockTable.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1382", 'FS_MAP_SF_VF_VF INSIDE IFRAME_PAGE BLOCK TABLE.EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.accountName.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.accountName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.accountName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.subject.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.subject.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Subject field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.subject.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.subject.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Actions button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.actions.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.actions.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX,  response.testbuilderState);
            });
            this.step('Assert the Actions button', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.actions.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.dataTable.actions.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.dataTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1383", 'FS_MAP_SF_VF_VF INSIDE IFRAME_PAGE BLOCK TABLE.EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.caseNumber.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            it('Sleep for 10 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10*1000);
            },12*1000);
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.accountName.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.accountName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.accountName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.accountName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Subject field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.subject.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, SfVfInsideIframeTables.pageBlockTable.subject.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Subject Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.subject.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.subject.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.subject.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.pageBlockTable.actions.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_DTE, SfVfInsideIframeTables.pageBlockTable.actions.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ButtonCX,  response.testbuilderState);
            });
            this.step('Assert the Actions Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.pageBlockTable.actions.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.pageBlockTable.actions.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.pageBlockTable.actions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1384", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.OCD:EP-NT-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.caseNumber.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTON, SfVfInsideIframeTables.nestedTable.caseNumber.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Case Number field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.caseNumber.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.caseNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.caseNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1385", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.OCD:EP-ET-NF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.date.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideIframeTables.nestedTable.date.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Date field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.date.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.email.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideIframeTables.nestedTable.email.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Email field', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.email.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-1386", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.OCH:EP-ET-EF', () => {
            beforeEach(() => {
                this.beforeEach();
            });
             afterAll(async done => {
                 await this.endTestSession(done);
             });
            this.step('Mapping the Case Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.caseNumber.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideIframeTables.nestedTable.caseNumber.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode,  response.testbuilderState);
            });
            this.step('Assert the Case Number Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.caseNumber.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.caseNumber.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.caseNumber.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.date.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideIframeTables.nestedTable.date.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Date Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.date.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.date.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.email.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
                this.assertTestBuilderState(pageStructureInfoQA_NTOE, SfVfInsideIframeTables.nestedTable.email.fieldDetailsExisting.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.ReadOnlyLink,  response.testbuilderState);
            });
            this.step('Assert the Email Column', async () => {
                await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.email.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.email.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.email.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        // this.zephyrTest('AutomationAPI', "PROT-1342", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.ICD:EP-ET-NT-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.name.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIN, SfVfInsideIframeTables.nestedTable.name.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.name.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.name.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.name.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1343", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.ICD:EP-ET-ET-NF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.phone.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         console.log(response);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideIframeTables.nestedTable.phone.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.phone.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.phone.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.emailInner.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideIframeTables.nestedTable.emailInner.fieldDetails, Standard.interaction.click, response.testbuilderState);
        //     });
        //     this.step('Assert the Email field', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.emailInner.interactionParameters.readAssertRow);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.emailInner.testCaseXML);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
        // this.zephyrTest('AutomationAPI', "PROT-1340", 'FS_MAP_SF_VF_VF INSIDE IFRAME_NESTED TABLE.OCH:EP-ET-EF', () => {
        //     beforeEach(() => {
        //         this.beforeEach();
        //     });
        //     this.step('Mapping the Name field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.name.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideIframeTables.nestedTable.name.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Name Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.name.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
        //         const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
        //         this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.name.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.name.executionStatusColumn, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Phone field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.phone.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideIframeTables.nestedTable.phone.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Phone Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.phone.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.phone.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.phone.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        //     this.step('Mapping the Email field', async () => {
        //         const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfVfInsideIframeTables.nestedTable.emailInner.Xpath, [SfVfInsideIframeTables.iframe.Xpath, SfVfInsideIframeTables.iframe1.Xpath]);
        //         this.assertTestBuilderState(pageStructureInfoQA_NTIE, SfVfInsideIframeTables.nestedTable.emailInner.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, response.testbuilderState);
        //     });
        //     this.step('Assert the Email Column', async () => {
        //         await this.modifyAddToTestCase(SfVfInsideIframeTables.nestedTable.emailInner.interactionParameters.readAssertColumn);
        //         const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
        //         const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
        //         await this.assertTestCaseXML(testItemId, SfVfInsideIframeTables.nestedTable.emailInner.testCaseXMLColumn);
        //         this.assertExecutionStatus(testItemId, SfVfInsideIframeTables.nestedTable.emailInner.executionStatus, response.runExecutionStatus.currentTestCase);
        //     });
        // });
    }
}