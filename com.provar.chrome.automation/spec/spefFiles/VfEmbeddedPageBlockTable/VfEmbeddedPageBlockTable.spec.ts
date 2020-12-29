import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { VfEmbeddedPageBlockTableData } from './VfEmbeddedPageBlockTableData';
import { join } from 'path';
import { SfCommonFIeld } from '../SfCommonField';

export class VfEmbeddedPageBlockTableSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        let iframe = ["(//iframe)[1]"];
        const pageStructureInfoQA_PBN = VfEmbeddedPageBlockTableData.PSI.new;
        const pageStructureInfoQA_PBE = VfEmbeddedPageBlockTableData.PSI.existing;
        this.zephyrTest('AutomationAPI', "PROT-2541", 'FS_MAP_SF_VF_EMBEDDED_VF_PAGE BLOCK TABLE', () => {
            beforeAll(async done => {
                const tcName = 'Contact.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
            	await this.endTestSession(done);
            });
            this.step('Mapping the Last Name field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const iFrame: WebElement = await this.findElement(remoteWebdriver, "(//iframe)[1]", 10000);
                await remoteWebdriver.switchTo().frame(iFrame);
                await this.findElement(remoteWebdriver, VfEmbeddedPageBlockTableData.lastName.Xpath, 10000);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.lastName.Xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBN, VfEmbeddedPageBlockTableData.lastName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Last Name field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.lastName.interactionParameters.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.lastName.testCaseXML);
                this.assertExecutionStatus(testItemId, VfEmbeddedPageBlockTableData.lastName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Delete Button field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.deleteButton.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click and Cancel Interaction on Delete Button field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.deleteButton.clickAndCancel);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, VfEmbeddedPageBlockTableData.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Delete link field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.deleteLink.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.deleteLink.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion Interaction on Delete link field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.deleteLink.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.deleteLink.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.email.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.email.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Email field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.email.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.email.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Mobile field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.mobile.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.mobile.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Mobile field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.mobile.readAssertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.mobile.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Last Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.lastName.Xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.lastName.fieldDetailsExisting.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Column and Attribute Assertion on Last Name field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.lastName.interactionParameters.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.lastName.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, VfEmbeddedPageBlockTableData.lastName.executionStatusColumn, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Delete Button field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.deleteButton.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.deleteButton.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Column Assertion on Delete Button field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.deleteButton.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Email field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.email.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.email.fieldDetailsExisting.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Column Assertion on Email field', async () => {
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.readAssertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.email.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Download PDF field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(VfEmbeddedPageBlockTableData.pdf.xpath, iframe);
                this.assertTestBuilderState(pageStructureInfoQA_PBE, VfEmbeddedPageBlockTableData.pdf.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Download PDF field', async () => {
                const windowHandle = await remoteWebdriver.getWindowHandle();
                await this.modifyAddToTestCase(VfEmbeddedPageBlockTableData.pdf.click);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, VfEmbeddedPageBlockTableData.pdf.testCaseXML);
                this.assertExecutionStatus(testItemId, VfEmbeddedPageBlockTableData.pdf.executionStatus, response.runExecutionStatus.currentTestCase);
                //    await remoteWebdriver.close();
                //    await remoteWebdriver.switchTo().window(windowHandle);
            });
        });
    }
}