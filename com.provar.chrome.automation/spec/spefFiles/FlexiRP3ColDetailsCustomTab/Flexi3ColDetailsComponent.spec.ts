import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { Flexi3ColDetailsComponent } from './Flexi3ColDetailsComponent';
import { Account } from '../../testdata/sfObjects/Account';
import { access } from 'fs';

export class Flexi3ColDetailsComponentSpec extends BaseSpec {
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
        this.zephyrTest('AutomationAPI', 'PROT-1764', 'FS_MAP_SF_STD_Details.RP.ThreeCol', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'FlexiDetailsComponent.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Flexi3ColDetailsComponent.PSI];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
            	await this.endTestSession(done);
            });
            this.step('Mapping Approved field for blank value assertion', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const element: WebElement = await this.findElement(remoteWebdriver, "//a[normalize-space()='Custom Detail']", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
                await remoteWebdriver.executeScript("arguments[0].click();", element);
                await this.findElement(remoteWebdriver, Flexi3ColDetailsComponent.approved.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.approved.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Approved field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", Flexi3ColDetailsComponent.approved.testCaseXML);
                this.assertExecutionStatus("0", Flexi3ColDetailsComponent.approved.executionStatus, response.runExecutionStatus.currentTestCase);

            });
            this.step('Mapping Custom Date field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Custom Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customDate.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Type field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.type.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.type, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Type Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.type.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.description.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.description.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Address field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.billingAddress.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingAddress, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Address field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.billingAddress.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account field for blank value assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.parentAccount.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount , Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.parentAccount.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name to Activate InlineEdit', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName , Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.accountName.interactionParameter.inlineEdit);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.accountName.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.accountName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved , Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.approved.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.approved.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.accountName.interactionParameter.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.accountName.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.accountName.executionStatus1, response.runExecutionStatus.currentTestCase);
            }); 
            this.step('Mapping Custom Date on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.customDate.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customDate.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.customDate.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.phone.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.phone.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.phone.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.industry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.industry , Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.industry.interactionParameters.setbyIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.industry.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.industry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description , Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.description.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.description.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.description.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet , Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.billingStreet.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.billingStreet.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.billingStreet.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.shippingCountry.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.shippingCountry.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.shippingCountry.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount , Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.parentAccount.interactionParameters.lookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.parentAccount.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.parentAccount.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, Flexi3ColDetailsComponent.accountName.xpath2, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.accountName.xpath2);
                this.assertTestBuilderState([Flexi3ColDetailsComponent.PSIlookup], Account.accountName, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorLookup);
            });
            this.step('Click the Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.accountName.testCaseXML2);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.accountName.executionStatus2, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.save.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button for assertion on InlineEdit Screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.cancel.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.cancelEditButton , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel Button field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.cancel.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.accountName.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.accountName.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.approved.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.approved , Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Approved field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.approved.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customDate.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode2, response.testbuilderState);
            });
            this.step('Add & Do Custom Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customDate.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.phone.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.phone , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Phone field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.phone.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.industry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.industry , Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Industry field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.industry.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.description.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.description , Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.description.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Street Name on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.billingStreet.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingStreet , Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Street field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.billingStreet.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Shipping Country on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.shippingCountry.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.shippingCountry , Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do shipping Country field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.shippingCountry.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account on InlineEdit Screen for assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.parentAccount.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount , Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.parentAccount.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.save.xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveEditButton , Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Click on Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.save.testCaseXML1);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.save.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Approved field for value assertion on view screen', async () => {
                await this.findElement(remoteWebdriver, Flexi3ColDetailsComponent.approved.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.approved.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.approved, Standard.interaction.check, Standard.applicableInteractions.Checkbox.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Approved field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.approved.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Date field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customDate.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customDate, Standard.interaction.readAssert, Standard.applicableInteractions.Date.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Custom Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customDate.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Industry field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.industry.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.industry, Standard.interaction.readAssert, Standard.applicableInteractions.Picklist.readMode, response.testbuilderState);
            });
            this.step('Add & Do on Industry Date field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.industry.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Description field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.description.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.description, Standard.interaction.readAssert, Standard.applicableInteractions.Textarea.readMode, response.testbuilderState);
            });
            this.step('Add & Do Description field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.description.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Billing Address field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.billingAddress.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.billingAddress, Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Billing Address field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.billingAddress.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Parent Account field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.parentAccount.xpath2);
                this.assertTestBuilderState(pageStructureInfo, Account.parentAccount , Standard.interaction.click, Standard.applicableInteractions.Lookup.readMode1, response.testbuilderState);
            });
            this.step('Add & Do Parent Account field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.parentAccount.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Phone field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.phone.xpath1);
                this.assertTestBuilderState(pageStructureInfo, Account.phone , Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode1, response.testbuilderState);
            });
            this.step('Add & Do phone Account field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.phone.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Account Name field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.accountName.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.accountName , Standard.interaction.readAssert, Standard.applicableInteractions.Text.readMode, response.testbuilderState);
            });
            this.step('Add & Do Account Name field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.labelValueassertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.accountName.testCaseXML3);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Links field for value assertion on view screen', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customLinks.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customLinkGoogleSearch , Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do Parent Custom links field', async () => {
                await this.modifyAddToTestCase(Flexi3ColDetailsComponent.valueAssert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customLinks.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Custom Links', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(Flexi3ColDetailsComponent.customLinks.xpath);
                this.assertTestBuilderState(pageStructureInfo, Account.customLinkGoogleSearch , Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Performing Click on Custom Links', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, Flexi3ColDetailsComponent.customLinks.testCaseXML);
                this.assertExecutionStatus(testItemId, Flexi3ColDetailsComponent.customLinks.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
};
