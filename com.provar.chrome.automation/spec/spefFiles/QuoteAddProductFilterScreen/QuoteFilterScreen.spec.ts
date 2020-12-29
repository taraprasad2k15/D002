import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { QuoteFilterScreenData } from './QuoteFilterScreenData';

export class QuoteFilterScreenSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let PSIExistingPage: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1983', 'FS_MAP_SF_CPQ_Quote_EditLine.AddProduct.FilterScreen', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FilterScreen.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteFilterScreenData.Psi];
                PSIExistingPage = [QuoteFilterScreenData.existingPSI];

            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Add Products button on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteFilterScreenData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteFilterScreenData.addProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.addProducts.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuoteFilterScreenData.addProducts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Add Products Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteFilterScreenData.addProducts.testCaseXML);
                this.assertExecutionStatus("0", QuoteFilterScreenData.addProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to load', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            });
            this.step('Mapping Filter button on Product Selection Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteFilterScreenData.filter.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.filter.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.filter.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Filter Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.filter.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.filter.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Filter Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteFilterScreenData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productCode.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productCode.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.productCode.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productCode.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.productCode.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productName.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.productName.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.productName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Family field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productFamily.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productFamily.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set By Index on Product Family field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.productFamily.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productFamily.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.productFamily.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Filter Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteFilterScreenData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productCode.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productCode.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productCode.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productName.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productName.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Family field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productFamily.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productFamily.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Family field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productFamily.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Clear Fields Link on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.clearFields.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.clearFields.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Clear Fields Link', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.clearFields.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Apply Button on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.apply.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.apply.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Apply Button', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.apply.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Clear Fields Link on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.clearFields.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.clearFields.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Clear Fields Link', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.clearFields.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.clearFields.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Filter Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteFilterScreenData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productCode.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productCode.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Blank Value Assertion on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productCode.testCaseXMLBlankValue);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productName.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productName.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Blank Value Assertion on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productName.testCaseXMLBlankValue);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Family field on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.productFamily.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.productFamily.fieldDetailsExisting, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Blank Value Assertion on Product Family field', async () => {
                await this.modifyAddToTestCase(QuoteFilterScreenData.valueAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.productFamily.testCaseXMLBlankValue);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Apply Button on Filter Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteFilterScreenData.apply.xpath, QuoteFilterScreenData.iframe);
                this.assertTestBuilderState(PSIExistingPage, QuoteFilterScreenData.apply.fieldDetailsExisting, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Apply Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteFilterScreenData.apply.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteFilterScreenData.apply.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
