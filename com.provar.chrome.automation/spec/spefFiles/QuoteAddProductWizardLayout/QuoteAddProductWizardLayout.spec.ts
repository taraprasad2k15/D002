import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { QuoteAddProductWizardLayoutData } from './QuoteAddProductWizardLayoutData';

export class QuoteAddProductWizardLayoutSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoExisting: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1975', 'FS_MAP_SF_CPQ_Quote_EditLine.AddProduct.WizardLayout', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteAddProductWizardLayoutData.newPagePSI];
                pageStructureInfoExisting = [QuoteAddProductWizardLayoutData.existingPagePSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Add Products button on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.addProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.addProducts.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuoteAddProductWizardLayoutData.addProducts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductWizardLayoutData.addProducts.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductWizardLayoutData.addProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Product field on Product Tab Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.searchProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.searchProducts.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.searchProducts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Search Product Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.searchProducts.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.searchProducts.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.searchProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Button on Product Tab Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.searchIcon.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.searchIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Search Buton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.searchIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.searchIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for list to get loaded', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            });
            this.step('Mapping checkbox from Product Tab Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.selectCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.selectCheckbox.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTablePSI, QuoteAddProductWizardLayoutData.selectCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Performing check Interaction on select checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.selectCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.selectCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Select Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.selectButton.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.selectButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing click Interaction on select button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdWithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.selectButton.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.selectButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from Memory Cards Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.memoryCardsCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.memoryCardsCheckbox.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.newPageTabTablelePSI, QuoteAddProductWizardLayoutData.memoryCardsCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Check Interaction on checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteAddProductWizardLayoutData.memoryCardsCheckbox.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductWizardLayoutData.memoryCardsCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Memory Cards Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.memoryCardsQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.memoryCardsQuantity.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTabTablelePSI, QuoteAddProductWizardLayoutData.memoryCardsQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.memoryCardsQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.memoryCardsQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.memoryCardsQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Next Button', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.nextButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.nextButton.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTabPSI, QuoteAddProductWizardLayoutData.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Next Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
                await this.assertTestCaseXML(testItemId1, QuoteAddProductWizardLayoutData.nextButton.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductWizardLayoutData.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox of first row from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.mobileCasesCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.mobileCasesCheckbox.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTabTablePSI, QuoteAddProductWizardLayoutData.mobileCasesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Check Interaction on checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.mobileCasesCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.mobileCasesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.mobileCasesQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.mobileCasesQuantity.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTabTablelePSI, QuoteAddProductWizardLayoutData.mobileCasesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Quantity Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.mobileCasesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.mobileCasesQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.mobileCasesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Next Button', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.nextButton.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.nextButton.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTabPSI, QuoteAddProductWizardLayoutData.nextButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Next Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId1);
                await this.assertTestCaseXML(testItemId1, QuoteAddProductWizardLayoutData.nextButton.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductWizardLayoutData.nextButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from HeadPhones Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.headphonesCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.headphonesCheckbox.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTabTablePSI, QuoteAddProductWizardLayoutData.headphonesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Check Interaction on checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
                await this.assertTestCaseXML(testItemId1, QuoteAddProductWizardLayoutData.headphonesCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductWizardLayoutData.headphonesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from HeadPhones Table', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.headphonesQuantity.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTabTablelePSI, QuoteAddProductWizardLayoutData.headphonesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.headphonesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.headphonesQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.headphonesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.save.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Quote Edit Line Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductWizardLayoutData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.productCode.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageNewTablePSI, QuoteAddProductWizardLayoutData.productCode.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteAddProductWizardLayoutData.productCode.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductWizardLayoutData.productCode.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.productName.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.productName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.productName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.quantity.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.quantity.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.quantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping List Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.listUnitPrice.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.listUnitPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on List Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.listUnitPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Discount field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.addDiscount.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.addDiscount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Additional Discount field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.addDiscount.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.netPrice.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.netPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.netPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.netTotal.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductWizardLayoutData.existingPageTablePSI, QuoteAddProductWizardLayoutData.netTotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.netTotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sub Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.subtotal.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.subtotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Sub total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                 const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                // const newValues: any = {
                //     'type': 'Icon-Successful',
                //     'executionStatus': 'Executed',
                //     'successfulCount': 1
                // };
                // this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                // const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                // this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.subtotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quote Total Field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.quotetotal.xpath, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.quotetotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quote Total Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductWizardLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                // const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.quotetotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductWizardLayoutData.save.xpath1, QuoteAddProductWizardLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductWizardLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductWizardLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductWizardLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
