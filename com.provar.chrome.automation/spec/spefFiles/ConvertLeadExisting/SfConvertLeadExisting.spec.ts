import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfConvertLeadExisting } from './SfConvertLeadExisting';
import { join } from 'path';

export class SfConvertLeadExistingSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoView: any[] = [SfConvertLeadExisting.leadViewPSI];
        const pageStructureInfoConvert: any[] = [SfConvertLeadExisting.convertLeadPSI];
        const pageStructureInfoLookup: any[] = [SfConvertLeadExisting.lookupPSI];
        let rowLocatorLookup = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationContact[a-zA-Z]{4}/,
            },
            {
                "label": "Account Name (ACCOUNT_NAME)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Phone (CONTACT_PHONE1)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Email (CONTACT_EMAIL)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Contact Owner Alias (CORE_USERS_ALIAS)",
                "selected": false,
                "value": /.*/,
            },
        ];
        let rowLocatorOpp = [
            {
                "label": "Opportunity Name (Opportunity_Name)",
                "selected": true,
                "value": /AutomationOpportunity[a-zA-Z]{4}/,
            },
            {
                "label": "Account Name (Opportunity_AccountId)",
                "selected": false,
                "value": /AutomationAccount[a-zA-Z]{4}/,
            },
            {
                "label": "Close Date (Opportunity_CloseDate)",
                "selected": false,
                "value": "31/10/2020",
            },
            {
                "label": "Amount (Opportunity_Amount)",
                "selected": false,
                "value": "",
            },
            {
                "label": "Opportunity Owner (Opportunity_OwnerId)",
                "selected": false,
                "value": /.*/,
            },
        ];
        this.zephyrTest('AutomationAPI', "PROT-1516", 'FS_MAP_SF_LAYOUT_LX_CONVERT LEAD.CE', () => {
            beforeAll(async done => {
                const tcName = 'ConvertLeadExisting.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Convert Lead button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadExisting.convert.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.convert.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfConvertLeadExisting.convert.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Convert Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.convert.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.convert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Chosen Contact field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.chosenContact.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.chosenContact.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.chosenContact.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Chosen Contact field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.chosenContact);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfConvertLeadExisting.chosenContact.testCaseXML.assertI);
                this.assertExecutionStatus("0", SfConvertLeadExisting.chosenContact.executionStatus.assertI, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Chosen Opportunity field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.chosenOpportunity.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.chosenOpportunity.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Chosen Opportunity field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.chosenOpportunity);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.chosenOpportunity.testCaseXML.assertI);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.chosenOpportunity.executionStatus.assertI, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account radio field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.accountRadio.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.accountRadio.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.accountRadio.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.RadioButton2, response.testbuilderState);
            });
            this.step('Check the Account radio field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.accountRadio.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.accountRadio.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Search field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.accountSearch.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.accountSearch.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Set the Account Search field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.accountSearch);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.accountSearch.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.accountSearch.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact radio field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactRadio.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactRadio.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactRadio.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.RadioButton2, response.testbuilderState);
            });
            this.step('Check the Contact radio field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactRadio.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactRadio.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Search field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactSearch.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactSearch.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('SF Lookup the Contact Search field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactSearch.interactionParameters.sfLookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactSearch.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactSearch.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactName.Xpath);
                this.assertTestBuilderState(pageStructureInfoLookup, SfConvertLeadExisting.contactName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorLookup);
            });
            this.step('Click the Name field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Check the Contact Checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Contact checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.assertCheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Uncheck the Contact checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactCheckbox.interactionParameters.uncheck);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.uncheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Contact checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.assertUncheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Toggle the Contact checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactCheckbox.interactionParameters.toggle);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.toggle);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactCheckbox.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Contact checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactCheckbox.testCaseXML.assertCheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity radio Field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.opportunityRadio.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityRadio.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityRadio.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.RadioButton2, response.testbuilderState);
            });
            this.step('Check the Opportunity radio Field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityRadio.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityRadio.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Acc Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.opportunityAccName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityAccName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityAccName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Opportunity Acc Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityAccName.interactionParameters.assertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityAccName.testCaseXML.assertRow);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityAccName.executionStatus.row, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Date field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.opportunityDate.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityDate.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityDate.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink,response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Opportunity Date field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityDate.interactionParameters.assertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityDate.testCaseXML.assertRow);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityDate.executionStatus.row, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Amount field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.opportunityAmount.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityAmount.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityAmount.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Opportunity Amount field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityAmount.interactionParameters.assertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityAmount.testCaseXML.assertRow);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityAmount.executionStatus.row, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Owner field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.opportunityOwner.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityOwner.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityOwner.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Opportunity Owner field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityOwner.interactionParameters.assertRow);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityOwner.testCaseXML.assertRow);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityOwner.executionStatus.row, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select Opportunity radio Field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.selectOpp.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.selectOpp.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.selectOpp.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.RadioButton2, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Check the Select Opportunity radio Field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.selectOpp.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.selectOpp.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityAccName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityAccName.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Account Name Column', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityAccName.interactionParameters.assertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityAccName.testCaseXML.assertColumn);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityAccName.executionStatus.column, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Close Date field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityDate.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityDate.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Close Date Column', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityDate.interactionParameters.assertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityDate.testCaseXML.assertColumn);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityDate.executionStatus.column, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Amount field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityAmount.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityAmount.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Amount Column', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityAmount.interactionParameters.assertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityAmount.testCaseXML.assertColumn);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityAmount.executionStatus.column, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Owner field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.opportunityOwner.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.opportunityOwner.fieldDetails, Standard.interaction.readAssert,Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocatorOpp);
            });
            this.step('Assert the Opportunity Owner Column', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.opportunityOwner.interactionParameters.assertColumn);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.opportunityOwner.testCaseXML.assertColumn);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.opportunityOwner.executionStatus.column, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Record Owner field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.recordOwner.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.recordOwner.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.recordOwner.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Record Owner field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.recordOwner);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.recordOwner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.recordOwner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Converted Status field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.convertedStatus.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.convertedStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.convertedStatus.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Converted Status field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.convertedStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.convertedStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.convertedStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Convert Lead button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadExisting.convertButton.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.convertButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.convertButton.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Convert Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.convertButton.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.convertButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Page Errors', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.pageErrors.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.pageErrors.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.pageErrors.fieldDetails, Standard.interaction.hover,Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Assert the Page Errors', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.pageErrors);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.pageErrors.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.pageErrors.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact radio field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadExisting.contactRadio.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactRadio.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactRadio.fieldDetails, Standard.interaction.check,Standard.applicableInteractions.RadioButton2, response.testbuilderState);
            });
            this.step('Check the Contact radio field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactRadio.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactRadio.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Search field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.contactSearch.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.contactSearch.fieldDetails, Standard.interaction.set,Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Set the Contact Search field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadExisting.contactSearch.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.contactSearch.testCaseXMLSet);
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.contactSearch.executionStatusSet, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Convert Lead button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadExisting.convertButton.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.convertButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.convertButton.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Convert Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.convertButton.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.convertButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New screen to expand', async done => {
                expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Go To Leads button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const goToLeads: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadExisting.goToLeads.Xpath, 10000);
                console.log(goToLeads);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadExisting.goToLeads.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadExisting.goToLeads.fieldDetails, Standard.interaction.click,Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go To Leads button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadExisting.goToLeads.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadExisting.goToLeads.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}