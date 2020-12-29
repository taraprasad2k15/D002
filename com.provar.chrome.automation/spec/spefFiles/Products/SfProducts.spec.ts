import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { SfproductsData } from './SfProductsData'
import { Opportunity } from '../../testdata/sfObjects/Opportunity'
import { join } from 'path';


export class SfProductsSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1208', 'FS_MAP_SF_LAYOUT_LX_OP_CHOOSE PRICEBOOK.CHOOSE', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Products.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Opportunity.opportunityViewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map the Choose Pricebook Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfproductsData.choosePricebookBt.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.choosePricebookBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.choosePricebookBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Choose Pricebook Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.choosePricebookBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfproductsData.choosePricebookBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.choosePricebookBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Select Pricebook field', async () => {
                pageStructureInfo = [Opportunity.selectPricebookPsi];
                await this.findElement(remoteWebdriver, SfproductsData.selectPricebook.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.selectPricebook.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.selectPricebook.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Select Pricebook field', async () => {
                await this.modifyAddToTestCase(SfproductsData.selectPricebook.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.selectPricebook.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.selectPricebook.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.saveBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1209', 'FS_MAP_SF_LAYOUT_LX_OP_ADD PRODUCTS.ADD', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            it('wait for the show more action button to be enabled', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
            it('Click on show more actions button', async done => {
                expect(true).toEqual(true);
                const showmorebt: WebElement = await this.findElement(remoteWebdriver, SfproductsData.showmoreactionBt.xpath, 20 * 1000);
                remoteWebdriver.executeScript("arguments[0].click();", showmorebt);
                done();
            }, 25 * 1000);
            it('wait for the add products to be enabled', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 2 * 1000);
            }, 3 * 1000);
            this.step('Map the Add Products Button', async () => {
                pageStructureInfo = [Opportunity.opportunityViewPsi];
                await this.findElement(remoteWebdriver, SfproductsData.addProductsBt.xpath, 15000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.addProductsBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.addProductsBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Add Products Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.addProductsBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.addProductsBt.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.addProductsBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Search Product search box', async () => {
                pageStructureInfo = [Opportunity.selectProductPsi];
                await this.findElement(remoteWebdriver, SfproductsData.searchProduct.xpath, 15000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.searchProduct.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.searchProduct.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Search Product search box', async () => {
                await this.modifyAddToTestCase(SfproductsData.searchProduct.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.searchProduct.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.searchProduct.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the View All Link', async () => {
                pageStructureInfo = [Opportunity.selectProductPsi];
                await this.findElement(remoteWebdriver, SfproductsData.viewAllLink.xpath, 15000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.viewAllLink.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.viewAllLink.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do View All Link', async () => {
                await this.modifyAddToTestCase(SfproductsData.viewAllLink.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfproductsData.viewAllLink.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.viewAllLink.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Checkbox field', async () => {
                const addProductWhereCol = [
                    {
                        "label": "Product Name (Product2_Name)",
                        "selected": true,
                        "value": /.*/
                    },
                    {
                        "label": "Product Code (Product2_ProductCode)",
                        "selected": false,
                    },
                    {
                        "label": "List Price (Product2_UnitPrice)",
                        "selected": false,
                        "value": /.*/
                    },
                    {
                        "label": "Product Description (Product2_Description)",
                        "selected": false,
                    },
                    {
                        "label": "Product Family (Product2_Family)",
                        "selected": false,
                        "value": /.*/
                    }
                ]
                await this.findElement(remoteWebdriver, SfproductsData.checkbox.xpath, 15000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.checkbox.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, addProductWhereCol);
            });
            this.step('Add & Do Checkbox field', async () => {
                await this.modifyAddToTestCase(SfproductsData.checkbox.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfproductsData.checkbox.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.checkbox.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Product Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.productName.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.productName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly3, response.testbuilderState);
            });
            this.step('Add & Do Product Name field', async () => {
                await this.modifyAddToTestCase(SfproductsData.productName.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.productName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.productName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the List Price field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.listPrice.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.listPrice.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do List Price field', async () => {
                await this.modifyAddToTestCase(SfproductsData.listPrice.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.listPrice.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.listPrice.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Product Description field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.productDescription.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.productDescription.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Product Description field', async () => {
                await this.modifyAddToTestCase(SfproductsData.productDescription.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.productDescription.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.productDescription.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Next Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.nextBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.nextBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Next Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.nextBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfproductsData.nextBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.nextBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Sales Price Field', async () => {
                const editProductWhereCol = [
                    {
                        "label": "Product (Product2Id)",
                        "selected": true,
                        "value": /.*/
                    },
                    {
                        "label": "Sales Price (UnitPrice)",
                        "selected": false,
                        "value": /.*/
                    },
                    {
                        "label": "Quantity (Quantity)",
                        "selected": false,
                        "value": ""
                    },
                    {
                        "label": "Date (ServiceDate)",
                        "selected": false,
                        "value": ""
                    },
                    {
                        "label": "Line Description (Description)",
                        "selected": false,
                        "value": ""
                    }
                ]
                pageStructureInfo = [Opportunity.editProductPsi];
                await this.findElement(remoteWebdriver, SfproductsData.salesPrice.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.salesPrice.xpath);
                console.log("Where columns for Sales Price", JSON.stringify(response.testbuilderState.whereColumns, null, 4));
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.salesPrice.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState, editProductWhereCol);
            });
            this.step('Add & Do Sales Price Field', async () => {
                await this.modifyAddToTestCase(SfproductsData.salesPrice.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.salesPrice.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.salesPrice.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Quantity Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.quantity.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.quantity.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Quantity Field', async () => {
                await this.modifyAddToTestCase(SfproductsData.quantity.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.quantity.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.quantity.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Date Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.date.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.date.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Date Field', async () => {
                await this.modifyAddToTestCase(SfproductsData.date.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.date.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.date.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Line Description Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.lineDescription.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.lineDescription.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Line Description Field', async () => {
                await this.modifyAddToTestCase(SfproductsData.lineDescription.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfproductsData.lineDescription.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.lineDescription.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Back Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.backBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.backBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Back Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.backBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfproductsData.backBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.backBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.saveBt2.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.saveBt2.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.saveBt2.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfproductsData.saveBt2.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.saveBt2.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1210', 'FS_MAP_SF_LAYOUT_LX_OP_EDIT PRODUCTS.EDIT', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            it('wait for show more action button to be enabled', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
            it('Click on show more actions button', async done => {
                expect(true).toEqual(true);
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const showmorebt: WebElement = await this.findElement(remoteWebdriver, SfproductsData.showmoreactionBt.xpath, 20 * 1000);
                remoteWebdriver.executeScript("arguments[0].click();", showmorebt);
                done();
            }, 25 * 1000);
            it('wait for edit products button to be enabled', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 2 * 1000);
            }, 3 * 1000);
            this.step('Map the Edit Products Button', async () => {
                pageStructureInfo = [Opportunity.opportunityViewPsi];
                await this.findElement(remoteWebdriver, SfproductsData.editProductsBt.xpath, 15000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.editProductsBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.editProductsBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Edit Products Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.editProductsBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.editProductsBt.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.editProductsBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Product Field for Column Assertion', async () => {
                const editProductWhereCol2 =  [
                    {
                        "label": "Product (Product2Id)",
                        "selected": true,
                        "value": /.*/
                    },
                    {
                        "label": "Sales Price (UnitPrice)",
                        "selected": false,
                        "value": /.*/
                    },
                    {
                        "label": "Quantity (Quantity)",
                        "selected": false,
                        "value": /.*/
                    },
                    {
                        "label": "Date (ServiceDate)",
                        "selected": false,
                        "value": /.*/
                    },
                    {
                        "label": "Line Description (Description)",
                        "selected": false,
                        "value": "Product is added via Automation test script"
                    }
                ]
                pageStructureInfo = [Opportunity.editProductPsi];
                await this.findElement(remoteWebdriver, SfproductsData.productName2.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.productName2.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.productName2.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnly3, response.testbuilderState, editProductWhereCol2);
            });
            this.step('Add & Do Product Field for Column Assertion', async () => {
                await this.modifyAddToTestCase(SfproductsData.productName2.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfproductsData.productName2.testCaseXML);
                this.assertExecutionStatus("0", SfproductsData.productName2.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map the Cancel Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfproductsData.cancelBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfproductsData.cancelBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel Button', async () => {
                await this.modifyAddToTestCase(SfproductsData.cancelBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfproductsData.cancelBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfproductsData.cancelBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}