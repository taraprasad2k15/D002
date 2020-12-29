import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfConvertLeadNew } from './SfConvertLeadNew';
import { join } from 'path';

export class SfConvertLeadNewSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoView: any[] = [SfConvertLeadNew.leadViewPSI];
        const pageStructureInfoConvert: any[] = [SfConvertLeadNew.convertLeadPSI];

        this.zephyrTest('AutomationAPI', "PROT-1515", 'FS_MAP_SF_LAYOUT_LX_CONVERT LEAD.CREATE', () => {
            beforeAll(async done => {
                const tcName = 'ConvertLeadNew.testcase';
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
                const convert: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadNew.convert.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.convert.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfConvertLeadNew.convert.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Convert Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.convert.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.convert.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Account Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.accountName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.accountName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the Account Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.accountName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfConvertLeadNew.accountName.testCaseXML.set);
                this.assertExecutionStatus("0", SfConvertLeadNew.accountName.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Record Type field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.accountRecordType.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.accountRecordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Set By Index the Account Record Type field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.accountRecordType.interactionParameters.setByIndex);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.accountRecordType.testCaseXML.setByIndex);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.accountRecordType.executionStatus.setByIndex, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.accountName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.accountName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.accountName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.accountName.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.accountName.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.accountName.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Account Record Type field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.accountRecordType.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.accountRecordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Account Record Type field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.accountRecordType.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.accountRecordType.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.accountRecordType.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for Contact tab to expand', async done => {
                expect(true).toEqual(true);
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const contact: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadNew.contact.Xpath, 20000);
                await contact.click();
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Last Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.lastName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.lastName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the Last Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.lastName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.lastName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.lastName.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Record Type field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.contactRecordType.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.contactRecordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Set the Contact Record Type field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.contactRecordType.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.contactRecordType.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.contactRecordType.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Last Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.lastName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.lastName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.lastName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Last Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.lastName.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.lastName.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.lastName.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Contact Record Type field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.contactRecordType.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.contactRecordType.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Contact Record Type field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.contactRecordType.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.contactRecordType.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.contactRecordType.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for Opportunity tab to expand', async done => {
                expect(true).toEqual(true);
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const opportunity: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunity.Xpath, 20000);
                await opportunity.click();
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Opportunity Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityName.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Set the Opportunity Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityName.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityName.testCaseXML.set);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityName.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Check the Opportunity checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.assertCheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Uncheck the Opportunity checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityCheckbox.interactionParameters.uncheck);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.uncheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.assertUncheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Toggle the Opportunity checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityCheckbox.interactionParameters.toggle);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.toggle);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityCheckbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityCheckbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityCheckbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity checkbox', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityCheckbox.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityCheckbox.testCaseXML.assertCheck);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityCheckbox.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Opportunity Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.opportunityName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.opportunityName.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.opportunityName.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.opportunityName.interactionParameters.assert);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.opportunityName.testCaseXML.assert);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.opportunityName.executionStatus.assert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Record Owner field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.recordOwner.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.recordOwner.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.recordOwner.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Record Owner field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.recordOwner);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.recordOwner.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.recordOwner.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Converted Status field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfConvertLeadNew.convertedStatus.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.convertedStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.convertedStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Opportunity Name field', async () => {
                await this.modifyAddToTestCase(SfConvertLeadNew.convertedStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.convertedStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.convertedStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Convert Lead button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadNew.convertButton.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.convertButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.convertButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Convert Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.convertButton.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.convertButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New screen to expand', async done => {
                expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Go To Leads button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const goToLeads: WebElement = await this.findElement(remoteWebdriver, SfConvertLeadNew.goToLeads.Xpath, 10000);
                console.log(goToLeads);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfConvertLeadNew.goToLeads.Xpath);
                this.assertTestBuilderState(pageStructureInfoConvert, SfConvertLeadNew.goToLeads.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Go To Leads button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfConvertLeadNew.goToLeads.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfConvertLeadNew.goToLeads.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}