import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { join } from 'path';
import { Account } from '../../testdata/sfObjects/Account';
import { FlexiRPCPLS2RDetailsComponent } from './FlexiRPCPLS2RDetailsComponent';

export class FlexiRPCPLS2RDetailsSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
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
        this.zephyrTest('AutomationAPI', 'PROT-2183', 'FS_MAP_SF_STD_Details.RP.CPLS2R.CustomTab', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Account.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Standard.CurrentTabPsi, FlexiRPCPLS2RDetailsComponent.PSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
            	await this.endTestSession(done);
            });
            this.step('Mapping Approved field for blank value assertion', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const tab: WebElement = await this.findElement(remoteWebdriver, "//li//a[normalize-space()='Custom Detail']", 20 * 1000);
                remoteWebdriver.executeScript("arguments[0].click();", tab);
                await this.findElement(remoteWebdriver, FlexiRPCPLS2RDetailsComponent.approved.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.approved.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Approved field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiRPCPLS2RDetailsComponent.approved.testCaseXML);
                this.assertExecutionStatus("0", FlexiRPCPLS2RDetailsComponent.approved.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Account Name to Activate InlineEdit', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.interactionParameter.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.approved.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.approved.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.interactionParameter.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.customDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.customDate.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.customDate.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.phone.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.industry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.industry.interactionParameters.setbyIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.industry.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.industry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.description.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.description.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.billingStreet.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.billingStreet.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.billingStreet.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.shippingCountry.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.shippingCountry.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.shippingCountry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.parentAccount.interactionParameters.lookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.parentAccount.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.parentAccount.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiRPCPLS2RDetailsComponent.accountName.xpath2, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.xpath2);
                this.assertTestBuilderState([Standard.CurrentTabPsi, FlexiRPCPLS2RDetailsComponent.PSIlookup], Account.accountName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorLookup);
            });
            this.step('Click the Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.testCaseXML2);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.save.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.cancel.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.cancelEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel Button field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.accountName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.approved.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.customDate.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.phone.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.description.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.billingStreet.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.shippingCountry.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(FlexiRPCPLS2RDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.parentAccount.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiRPCPLS2RDetailsComponent.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiRPCPLS2RDetailsComponent.save.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiRPCPLS2RDetailsComponent.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};
