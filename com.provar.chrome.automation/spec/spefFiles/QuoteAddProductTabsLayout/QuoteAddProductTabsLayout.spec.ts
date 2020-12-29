import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { QuoteAddProductTabsLayoutData } from './QuoteAddProductTabsLayoutData';

export class QuoteAddProductTabsLayoutSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoExisting: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1966', 'FS_MAP_SF_CPQ_Quote_EditLine.AddProduct.TabsLayout', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteAddProductTabsLayoutData.newPagePSI];
                pageStructureInfoExisting = [QuoteAddProductTabsLayoutData.existingPagePSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Add Products button on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.addProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.addProducts.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuoteAddProductTabsLayoutData.addProducts.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductTabsLayoutData.addProducts.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductTabsLayoutData.addProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Product field on Product Tab Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.searchProducts.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.searchProducts.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.searchProducts.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Search Product Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.searchProducts.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.searchProducts.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.searchProducts.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Button on Product Tab Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.searchIcon.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.searchIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Search Buton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.searchIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.searchIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for list to get loaded', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            });
            this.step('Mapping checkbox from Product Tab Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.selectCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.selectCheckbox.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageNewTablePSI, QuoteAddProductTabsLayoutData.selectCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Performing check Interaction on select checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.selectCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.selectCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Select Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.selectButton.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.selectButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.selectButton.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.selectButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox of first row from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.mobileCasesCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.mobileCasesCheckbox.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.newPageTabTablelePSI, QuoteAddProductTabsLayoutData.mobileCasesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML("0", QuoteAddProductTabsLayoutData.mobileCasesCheckbox.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductTabsLayoutData.mobileCasesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Mobile Cases Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.mobileCasesQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.mobileCasesQuantity.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTabTablelePSI, QuoteAddProductTabsLayoutData.mobileCasesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Quantity Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.mobileCasesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.mobileCasesQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.mobileCasesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from Memory Cards Table', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "//div[@id='tabsContent']//div[text()='Memory Cards Tab']", 10 * 1000);
                element.click();
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.memoryCardsCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.memoryCardsCheckbox.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageNewTabTablelePSI, QuoteAddProductTabsLayoutData.memoryCardsCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId1, QuoteAddProductTabsLayoutData.memoryCardsCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductTabsLayoutData.memoryCardsCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from Memory Cards Table', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.memoryCardsQuantity.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.memoryCardsQuantity.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTabTablelePSI, QuoteAddProductTabsLayoutData.memoryCardsQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.memoryCardsQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.memoryCardsQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.memoryCardsQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping checkbox from HeadPhones Table', async () => {
                const element: WebElement = await this.findElement(remoteWebdriver, "//div[@id='tabsContent']//div[text()='HeadPhones Tab']", 10 * 1000);
                element.click();
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.headphonesCheckbox.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.headphonesCheckbox.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageNewTabTablelePSI, QuoteAddProductTabsLayoutData.headphonesCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId1, QuoteAddProductTabsLayoutData.headphonesCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId1, QuoteAddProductTabsLayoutData.headphonesCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field from HeadPhones Table', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.headphonesQuantity.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTabTablelePSI, QuoteAddProductTabsLayoutData.headphonesQuantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Set Interaction on quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.headphonesQuantity.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.headphonesQuantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.headphonesQuantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.save.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
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
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Code field on Quote Edit Line Screen', async () => {
                await this.findElement(remoteWebdriver, QuoteAddProductTabsLayoutData.productCode.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.productCode.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageNewTablePSI, QuoteAddProductTabsLayoutData.productCode.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Code field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteAddProductTabsLayoutData.productCode.testCaseXML);
                this.assertExecutionStatus("0", QuoteAddProductTabsLayoutData.productCode.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Product Name field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.productName.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.productName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Product Name field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.productName.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quantity field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.quantity.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.quantity.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quantity field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.quantity.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping List Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.listUnitPrice.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.listUnitPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on List Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.listUnitPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Additional Discount field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.addDiscount.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.addDiscount.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Additional Discount field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.addDiscount.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Unit Price field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.netPrice.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.netPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net Unit Price field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.netPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Net Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.netTotal.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(QuoteAddProductTabsLayoutData.existingPageTablePSI, QuoteAddProductTabsLayoutData.netTotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Net total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.netTotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Sub Total field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.subtotal.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.subtotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Sub total field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                // const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                // const newValues: any = {
                //     'type': 'Icon-Successful',
                //     'executionStatus': 'Executed',
                //     'successfulCount': 1
                // };
                // this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdRow);
                // const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
               // this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
               const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow',true);
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.subtotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quote Total Field on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.quotetotal.xpath, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.quotetotal.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly2, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Quote Total Field', async () => {
                await this.modifyAddToTestCase(QuoteAddProductTabsLayoutData.assertionParameters);
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
              //  const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.quotetotal.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.executionStatusAssertion, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button on Quote Edit Line Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteAddProductTabsLayoutData.save.xpath1, QuoteAddProductTabsLayoutData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting, QuoteAddProductTabsLayoutData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteAddProductTabsLayoutData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteAddProductTabsLayoutData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
