import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { Account } from '../../testdata/sfObjects/Account';
import { access } from 'fs';
import { SplitModeLVData } from './SplitModeLVData';
import { Lead } from '../../testdata/sfObjects/Lead';

export class SplitModeLVSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoRecordType: any[];
        let rowLocatorLookup = [
            {
                "label": "Account Name (Name)",
                "selected": true,
                "value": /AutomationAccount.*/,
            },
            {
                "label": "Phone (ACCOUNT_PHONE1)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Account Owner Alias (CORE_USERS_ALIAS)",
                "selected": false,
                "value": /.*/,
            },
        ];
        this.zephyrTest('AutomationAPI', 'PROT-2656', 'FS_MAP_SF_CONSOLE_LX.LISTVIEW.STD.SPLIT', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Lead.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Standard.homeTabPsi, SplitModeLVData.PSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping New Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                let value1: string;
                const split: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]/..", 20 * 1000);
                await split.getAttribute("class").then((expand) => {
                    value1 = expand;
                });
                if (value1 == "main-content active fullRight") {
                    const button: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]", 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                } else {
                    console.log("The screen is already in split mode");
                }
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//li[@class='oneActionsDropDown']//a/*", 20 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click();", dropdown);
                await this.findElement(remoteWebdriver, SplitModeLVData.new.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeLVData.new.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.newButton, Standard.interaction.click, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Performing Click Interaction on New Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SplitModeLVData.new.testCaseXML);
                this.assertExecutionStatus("0", SplitModeLVData.new.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping List Search Field', async () => {
                await this.findElement(remoteWebdriver, SplitModeLVData.listSearch.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeLVData.listSearch.xpath);
                this.assertTestBuilderState(pageStructureInfo, SplitModeLVData.listSearch.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction in List Search Field', async () => {
                await this.modifyAddToTestCase(SplitModeLVData.listSearch.interactionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeLVData.listSearch.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeLVData.listSearch.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Name Field', async () => {
                await this.findElement(remoteWebdriver, SplitModeLVData.name.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeLVData.name.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.name, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState, SplitModeLVData.rowLocators);
            });
            this.step('Performing Value Assertion on Name Field', async () => {
                await this.modifyAddToTestCase(SplitModeLVData.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SplitModeLVData.name.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeLVData.name.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Company Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeLVData.company.xpath);
                this.assertTestBuilderState(pageStructureInfo, Lead.company2, Standard.interaction.readAssert, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState, SplitModeLVData.rowLocators);
            });
            this.step('Performing Value Assertion on Company Field', async () => {
                await this.modifyAddToTestCase(SplitModeLVData.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SplitModeLVData.company.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeLVData.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Search Type Field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeLVData.searchType.xpath);
                this.assertTestBuilderState(pageStructureInfo, SplitModeLVData.searchType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Performing Set Interaction on Search Type Field', async () => {
                await this.modifyAddToTestCase(SplitModeLVData.searchType.interactionParameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
                await this.assertTestCaseXML(testItemId, SplitModeLVData.searchType.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeLVData.searchType.executionStatus, response.runExecutionStatus.currentTestCase);
                let value1: string;
                const split: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]/..", 20 * 1000);
                await split.getAttribute("class").then((expand) => {
                    value1 = expand;
                });
                if (value1 !== "main-content active fullRight") {
                    const button: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]", 20 * 1000);
                    await remoteWebdriver.executeScript("arguments[0].click();", button);
                }
            });
        });
    }
};
