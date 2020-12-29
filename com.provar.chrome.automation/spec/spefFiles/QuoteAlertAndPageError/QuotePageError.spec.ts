import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { remote } from 'electron';
import { QuotePageErrorData } from './QuotePageErrorData';
import { TestBuilderState } from 'App/automationApi/messages/response/TestBuilderState';

export class QuotePageErrorSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoExisting: any[];
        this.zephyrTest('AutomationAPI', 'PROT-1989', 'FS_MAP_SF_CPQ_Quote_EditLine.PageErrors', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Quote.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [QuotePageErrorData.newPagePSI];
                pageStructureInfoExisting = [QuotePageErrorData.existingPagePSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Start Date Field on Edit Quote Screen', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, QuotePageErrorData.iframe[0], 20 * 1000);
                remoteWebdriver.switchTo().frame(element);
                remoteWebdriver.switchTo().defaultContent();
                await this.findElement(remoteWebdriver, QuotePageErrorData.startDate.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuotePageErrorData.startDate.xpath, QuotePageErrorData.iframe);
                this.assertTestBuilderState(pageStructureInfo, QuotePageErrorData.startDate.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Date.enterableMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Start Date Field', async () => {
                await this.modifyAddToTestCase(QuotePageErrorData.startDate.modificationParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", QuotePageErrorData.startDate.testCaseXML);
                this.assertExecutionStatus("0", QuotePageErrorData.startDate.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Quick Save Button',async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuotePageErrorData.save.xpath, QuotePageErrorData.iframe);
                this.assertTestBuilderState(pageStructureInfoExisting,QuotePageErrorData.save.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click Interaction on Quick Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, QuotePageErrorData.save.testCaseXML);
                this.assertExecutionStatus(testItemId, QuotePageErrorData.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for page error', async done => {
				expect(true).toEqual(true);
					setTimeout(async () => {
			 		done();
				 	}, 5*1000);
                 });
                 this.step('Mapping Page Error',async () => {
                    const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(QuotePageErrorData.pageError.xpath, QuotePageErrorData.iframe);
                    this.assertTestBuilderState(pageStructureInfoExisting,QuotePageErrorData.pageError.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.PageError, response.testbuilderState);
                });
                this.step('Performing Page Error Assertion', async () => {
                    const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                    const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                    await this.assertTestCaseXML(testItemId, QuotePageErrorData.pageError.testCaseXML);
                    this.assertExecutionStatus(testItemId, QuotePageErrorData.pageError.executionStatus, response.runExecutionStatus.currentTestCase);
                });
        });
    }
}
