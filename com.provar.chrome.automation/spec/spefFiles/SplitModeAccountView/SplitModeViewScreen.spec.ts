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
import { SplitModeViewScreen } from './SplitModeViewScreenData';

export class SplitModeViewScreenSpec extends BaseSpec {
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
        this.zephyrTest('AutomationAPI', 'PROT-2602', 'FS_MAP_SF_CONSOLE_LX_VIEW.ILE.STD.SPLIT', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Account.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Standard.CurrentTabPsi, SplitModeViewScreen.PSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Mapping Approved field for blank value assertion', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                let value1:string;
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
                await this.findElement(remoteWebdriver, SplitModeViewScreen.approved.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.approved.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Approved field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SplitModeViewScreen.approved.testCaseXML);
                this.assertExecutionStatus("0", SplitModeViewScreen.approved.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Custom Date field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Custom Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customDate.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Type field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.type.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.type, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Type Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.type.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.description.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.description.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Address field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.billingAddress.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingAddress, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Address field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.billingAddress.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.parentAccount.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.parentAccount.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name to Activate InlineEdit', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.accountName.interactionParameter.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.approved.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.approved.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.accountName.interactionParameter.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.accountName.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.accountName.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.customDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customDate.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.customDate.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.phone.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.industry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.industry.interactionParameters.setbyIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.industry.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.industry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.description.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.description.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.billingStreet.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.billingStreet.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.billingStreet.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.shippingCountry.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.shippingCountry.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.shippingCountry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.parentAccount.interactionParameters.lookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.parentAccount.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.parentAccount.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SplitModeViewScreen.accountName.xpath2, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.accountName.xpath2);
                this.assertTestBuilderState([Standard.CurrentTabPsi, SplitModeViewScreen.PSIlookup], Account.accountName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorLookup);
            });
            this.step('Click the Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.accountName.testCaseXML2);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.accountName.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.save.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.cancel.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.cancelEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel Button field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.accountName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.approved.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customDate.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.phone.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.industry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.industry.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.description.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.billingStreet.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.shippingCountry.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.parentAccount.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.save.testCaseXML1);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', "PROT-2604", 'FS_MAP_SF_CONSOLE_LX_VIEW.STD.SPLIT', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });  
            this.step('Mapping Approved field for value assertion on view screen', async () => {
                await this.findElement(remoteWebdriver, SplitModeViewScreen.approved.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.approved.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Approved field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.approved.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Custom Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customDate.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.industry.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Industry Date field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.industry.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.description.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.description.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Address field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.billingAddress.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingAddress, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Address field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.billingAddress.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.parentAccount.xpath2);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.parentAccount.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.phone.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
            });
            this.step('Add & Do phone Account field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.phone.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.accountName.testCaseXML3);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Links field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customLinks.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customLinkGoogleSearch, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do Parent Custom links field', async () => {
                await this.modifyAddToTestCase(SplitModeViewScreen.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customLinks.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Links', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SplitModeViewScreen.customLinks.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customLinkGoogleSearch, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Performing Click on Custom Links', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SplitModeViewScreen.customLinks.testCaseXML);
                this.assertExecutionStatus(testItemId, SplitModeViewScreen.customLinks.executionStatus, response.runExecutionStatus.currentTestCase);
               // const button: WebElement = await this.findElement(remoteWebdriver, "//button[contains(@class,'split-toggle')]", 20 * 1000);
               // await remoteWebdriver.executeScript("arguments[0].click();", button);
            });
        });
    }
};
