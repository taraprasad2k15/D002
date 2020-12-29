import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfCaseChangeOwner } from './SfCaseChangeOwner';
import { join } from 'path';

export class SfCaseChangeOwnerSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoView: any[] = [SfCaseChangeOwner.caseViewPSI];
        const pageStructureInfoChangeOwner: any[] = [SfCaseChangeOwner.changeOwnerPSI];
        const pageStructureInfoLookup: any[] = [SfCaseChangeOwner.userLookupPSI];

        let rowLocators = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": "Ravindra Yadav",
            },
            {
                "label": "CORE_USERS_TITLE (CORE_USERS_TITLE)",
                "selected": false,
                "value": "",
            },
            {
                "label": "CORE_USERS_PHONE (CORE_USERS_PHONE)",
                "selected": false,
                "value": "",
            },
            {
                "label": "CORE_USERS_EMAIL (CORE_USERS_EMAIL)",
                "selected": false,
                "value": /.*/,
            },
        ];

        this.zephyrTest('AutomationAPI', "PROT-1555", 'FS_MAP_SF_LAYOUT_LX_CHANGEOWNER', () => {
            beforeAll(async done => {
                const tcName = 'CaseChangeOwner.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Change Owner button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfCaseChangeOwner.changeOwnerButton.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfCaseChangeOwner.changeOwnerButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.changeOwnerButton.testCaseXML1); 
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.changeOwnerButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the User Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.userLookup.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.userLookup.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the User Lookup field', async () => {
                await this.modifyAddToTestCase(SfCaseChangeOwner.userLookup.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCaseChangeOwner.userLookup.testCaseXML.set);
                this.assertExecutionStatus("0", SfCaseChangeOwner.userLookup.executionStatus.set, response.runExecutionStatus.currentTestCase);
            });
            it('Removing value from lookup field', async done => {
                expect(true).toEqual(true);
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const deleteIcon: WebElement = await this.findElement(remoteWebdriver, "//span[@class='deleteIcon']");
                await remoteWebdriver.executeScript('arguments[0].click();', deleteIcon);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the User Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.userLookup.Xpath1);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.userLookup.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('SF Lookup the User Lookup field', async () => {
                await this.modifyAddToTestCase(SfCaseChangeOwner.userLookup.interactionParameters.sfLookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.userLookup.testCaseXML.sfLookup);
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.userLookup.executionStatus.sfLookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfCaseChangeOwner.ownerName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.ownerName.Xpath);
                this.assertTestBuilderState(pageStructureInfoLookup, SfCaseChangeOwner.ownerName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Name field', async () => {
                await this.modifyAddToTestCase(SfCaseChangeOwner.ownerName.parameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.ownerName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.ownerName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Send Notification Email Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Check the Send Notification Email Checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.checkbox.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.checkbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Send Notification Email checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfCaseChangeOwner.checkbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Uncheck the Send Notification Email checkbox', async () => {
                await this.modifyAddToTestCase(SfCaseChangeOwner.checkbox.interactionParameters.uncheck);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.checkbox.testCaseXML.uncheck);
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.checkbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Send Notification Email checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfCaseChangeOwner.checkbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Toggle the Send Notification Email checkbox', async () => {
                await this.modifyAddToTestCase(SfCaseChangeOwner.checkbox.interactionParameters.toggle);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.checkbox.testCaseXML.toggle);
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.checkbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCaseChangeOwner.submit.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfCaseChangeOwner.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New screen to expand', async done => {
                expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
            });
            this.step('Mapping the Change Owner button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const convert: WebElement = await this.findElement(remoteWebdriver, SfCaseChangeOwner.changeOwnerButton.Xpath, 10000);
                console.log(convert);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfCaseChangeOwner.changeOwnerButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCaseChangeOwner.changeOwnerButton.testCaseXML); 
                this.assertExecutionStatus("0", SfCaseChangeOwner.changeOwnerButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Cancel button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCaseChangeOwner.cancel.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfCaseChangeOwner.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Cancel button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfCaseChangeOwner.cancel.testCaseXML); 
                this.assertExecutionStatus("0", SfCaseChangeOwner.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}