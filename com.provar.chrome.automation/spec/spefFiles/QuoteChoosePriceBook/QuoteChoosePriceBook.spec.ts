import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { QuoteChoosePriceBookData } from './QuoteChoosePriceBookdata';

export class QuoteChoosePriceBookSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1961', 'FS_MAP_SF_CPQ_Quote_EditLine.ChoosePriceBook', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuoteChoosePriceBookData.Psi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map pricebook picklist on choose price book pop up', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuoteChoosePriceBookData.iframe, 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuoteChoosePriceBookData.pricebook.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteChoosePriceBookData.pricebook.xpath, [QuoteChoosePriceBookData.iframe]);
                this.assertTestBuilderState(pageStructureInfo, QuoteChoosePriceBookData.pricebook.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on pricebook picklist', async () => {
                await this.modifyAddToTestCase(QuoteChoosePriceBookData.pricebook.modificationParameter.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuoteChoosePriceBookData.pricebook.testCaseXML);
                this.assertExecutionStatus("0", QuoteChoosePriceBookData.pricebook.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map pricebook picklist on choose price book pop up', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteChoosePriceBookData.pricebook.xpath, [QuoteChoosePriceBookData.iframe]);
                this.assertTestBuilderState([QuoteChoosePriceBookData.existingPSI], QuoteChoosePriceBookData.pricebook.fieldDetails1, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Performing Assertion on pricebook picklist', async () => {
                await this.modifyAddToTestCase(QuoteChoosePriceBookData.pricebook.modificationParameter.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteChoosePriceBookData.pricebook.testCaseXML1);
                this.assertExecutionStatus(testItemId, QuoteChoosePriceBookData.pricebook.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel button on choose price book pop up', async () => {
                await this.findElement(remoteWebdriver, QuoteChoosePriceBookData.cancel.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteChoosePriceBookData.cancel.xpath, [QuoteChoosePriceBookData.iframe]);
                this.assertTestBuilderState([QuoteChoosePriceBookData.existingPSI], QuoteChoosePriceBookData.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Assertion on Cancel Button', async () => {
                await this.modifyAddToTestCase(QuoteChoosePriceBookData.cancel.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteChoosePriceBookData.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteChoosePriceBookData.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save button on choose price book pop up', async () => {
                await this.findElement(remoteWebdriver, QuoteChoosePriceBookData.save.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuoteChoosePriceBookData.save.xpath, [QuoteChoosePriceBookData.iframe]);
                this.assertTestBuilderState([QuoteChoosePriceBookData.existingPSI], QuoteChoosePriceBookData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuoteChoosePriceBookData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuoteChoosePriceBookData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}
