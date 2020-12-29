import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { QuoteAddProductSectionsLayoutData } from './QuoteAddProductSectionsLayoutData';
import { remote } from 'electron';

export class QuoteAddProductSectionsLayoutSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoExisting: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1964', 'FS_MAP_SF_CPQ_Quote_EditLine.AddProduct.SectionsLayout', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteAddProductSectionsLayoutData.newPagePSI];
                pageStructureInfoExisting = [QuoteAddProductSectionsLayoutData.existingPagePSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Add Products button on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.addProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.addProducts.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuoteAddProductSectionsLayoutData.addProducts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductSectionsLayoutData.addProducts.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductSectionsLayoutData.addProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Product field on Product Selection Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.searchProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.searchProducts.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.searchProducts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Search Product Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.searchProducts.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.searchProducts.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.searchProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Button on Product Selection Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.searchIcon.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.searchIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Search Buton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.searchIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.searchIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for list to get loaded', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            });
            this.step('Mapping checkbox from Product Selection Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.selectCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.selectCheckbox.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.productSectionTablePSI, QuoteAddProductSectionsLayoutData.selectCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Performing check Interaction on select checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.selectCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.selectCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Select Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.selectButton.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.selectButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.selectButton.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.selectButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from Memory Cards Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.memoryCardsCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.memoryCardsCheckbox.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.newPageNewTablePSI, QuoteAddProductSectionsLayoutData.memoryCardsCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductSectionsLayoutData.memoryCardsCheckbox.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductSectionsLayoutData.memoryCardsCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Memory Cards Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.memoryCardsQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.memoryCardsQuantity.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.memoryCardsQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.memoryCardsQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.memoryCardsQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.memoryCardsQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from HeadPhones Table', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.headphonesCheckbox.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageNewTablePSI, QuoteAddProductSectionsLayoutData.headphonesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Check Interaction on checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId1, QuoteAddProductSectionsLayoutData.headphonesCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductSectionsLayoutData.headphonesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from HeadPhones Table', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.headphonesQuantity.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.headphonesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.headphonesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.headphonesQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.headphonesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add Options field from Mobile Cases Table', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.addOptions.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.addOptions.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Add Options field', async () => {
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
                await this.assertTestCaseXML(testItemId1, QuoteAddProductSectionsLayoutData.addOptions.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductSectionsLayoutData.addOptions.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox of first row from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.mobileCasesCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.mobileCasesCheckbox.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageNewTablePSI, QuoteAddProductSectionsLayoutData.mobileCasesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductSectionsLayoutData.mobileCasesCheckbox.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductSectionsLayoutData.mobileCasesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Add Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.addButton.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.addButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Add Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.addButton.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.addButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.mobileCasesQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.mobileCasesQuantity.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageNewTablePSI, QuoteAddProductSectionsLayoutData.mobileCasesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Quantity Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.mobileCasesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteAddProductSectionsLayoutData.mobileCasesQuantity.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductSectionsLayoutData.mobileCasesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.save.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Quote Edit Line Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductSectionsLayoutData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.productCode.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageNewTablePSI, QuoteAddProductSectionsLayoutData.productCode.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteAddProductSectionsLayoutData.productCode.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductSectionsLayoutData.productCode.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.productName.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.productName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.productName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.quantity.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.quantity.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.quantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping List Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.listUnitPrice.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.listUnitPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on List Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.listUnitPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Discount field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.addDiscount.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.addDiscount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Additional Discount field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.addDiscount.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.netPrice.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.netPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.netPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.netTotal.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductSectionsLayoutData.existingPageExistingTablePSI, QuoteAddProductSectionsLayoutData.netTotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.netTotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sub Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.subtotal.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.subtotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Sub total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                // const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                // const newValues: any = {
                //     'type': 'Icon-Successful',
                //     'executionStatus': 'Executed',
                //     'successfulCount': 1
                // };
                // this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                //const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
               //this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
               const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.subtotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quote Total Field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.quotetotal.xpath, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.quotetotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quote Total Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductSectionsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.quotetotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductSectionsLayoutData.save.xpath1, QuoteAddProductSectionsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductSectionsLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductSectionsLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductSectionsLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
