import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { addFavProd } from './AddFavoriteProduct.Data';

export class AddFavoriteProduct extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];

        this.zephyrTest('AutomationAPI', 'PROT-1999', 'FS_MAP_SF_CPQ_Quote_EditLine.AddToFavorites', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'AddFavoriteProduct.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [addFavProd.newPagePSI];
            }, 300 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping addFavIcon', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, addFavProd.iframexpath, 20 * 1000);
                await remoteWebdriver.switchTo().frame(element);
                await this.findElement(remoteWebdriver, addFavProd.addFavIcon.xpath, 20 * 1000);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.addFavIcon.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.addFavIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do addFavIcon', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", addFavProd.addFavIcon.testCaseXML);
                this.assertExecutionStatus("0", addFavProd.addFavIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping favName', async () => {
                pageStructureInfo = [addFavProd.existingPagePSI];
                await remoteWebdriver.switchTo().defaultContent();
                const element: WebElement = await this.findElement(remoteWebdriver, addFavProd.iframexpath, 20 * 1000);
                await remoteWebdriver.switchTo().frame(element);
                await this.findElement(remoteWebdriver, addFavProd.favName.xpath, 20 * 1000);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.favName.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.favName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do favName', async () => {
                await this.modifyAddToTestCase(addFavProd.favName.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                                    'type': 'Icon-Successful',
                                    'executionStatus': 'Executed',
                                    'successfulCount': 1
                                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, addFavProd.favName.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.favName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping cancelButton', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.cancelButton.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.cancelButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Mapping saveButton', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.saveButton.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.saveButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do saveButton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping addFavButton', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                await remoteWebdriver.switchTo().defaultContent();
                const element: WebElement = await this.findElement(remoteWebdriver, addFavProd.iframexpath, 20 * 1000);
                await remoteWebdriver.switchTo().frame(element);
                const dropdownWE = await this.findElement(remoteWebdriver, "//paper-button[contains(@class,'dropdown-trigger')]", 20 * 1000);
                await dropdownWE.sendKeys(" ");
                await this.findElement(remoteWebdriver, addFavProd.addFavButton.xpath);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.addFavButton.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.addFavButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do addFavButton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.addFavButton.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.addFavButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping selectCheckbox', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                await remoteWebdriver.switchTo().defaultContent();
                const element: WebElement = await this.findElement(remoteWebdriver, addFavProd.iframexpath, 20 * 1000);
                await remoteWebdriver.switchTo().frame(element);
                await this.findElement(remoteWebdriver, addFavProd.selectCheckbox.xpath, 20 * 1000);
                await remoteWebdriver.switchTo().defaultContent();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.selectCheckbox.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.selectCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do selectCheckbox', async () => {
                await this.modifyAddToTestCase(addFavProd.selectCheckbox.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, addFavProd.selectCheckbox.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.selectCheckbox.executionStatus, response.runExecutionStatus.currentTestCase);
            }, 150 * 1000);
            this.step('Mapping favNameField', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.favNameField.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.favNameField.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do favNameField', async () => {
                await this.modifyAddToTestCase(addFavProd.favNameField.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, addFavProd.favNameField.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.favNameField.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping description', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.description.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.description.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do description', async () => {
                await this.modifyAddToTestCase(addFavProd.description.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, addFavProd.description.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.description.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping owner', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.owner.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.owner.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnly, response.testbuilderState);
            });
            this.step('Add & Do owner', async () => {
                await this.modifyAddToTestCase(addFavProd.owner.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, addFavProd.owner.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.owner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping deleteButton', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.deleteButton.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.deleteButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do deleteButton', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdwithrow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                                    'type': 'Icon-Successful',
                                    'executionStatus': 'Executed',
                                    'successfulCount': 1
                                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithrow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, addFavProd.deleteButton.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.deleteButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping searchProdIcon', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.searchProdIcon.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.searchProdIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do searchProdIcon', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.searchProdIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.searchProdIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping favIcon', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.favIcon.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.favIcon.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do favIcon', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.favIcon.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.favIcon.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping selectMore', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.selectMore.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.selectMore.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do selectMore', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.selectMore.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.selectMore.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping cancel', async () => {
                await this.findElement(remoteWebdriver, "//sf-loading-spinner/div[@hidden]", 30 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.cancel.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Mapping select', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(addFavProd.select.xpath, [addFavProd.iframexpath]);
                this.assertTestBuilderState(pageStructureInfo, addFavProd.select.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do select', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, addFavProd.select.testCaseXML);
                this.assertExecutionStatus(testItemId, addFavProd.select.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
