import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAccountChangeOwner } from './SfAccountChangeOwner';
import { join } from 'path';
import { Account } from '../../testdata/sfObjects/Account';

export class SfAccountChangeOwnerSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoView: any[] = [Account.accountViewPsi];
        const pageStructureInfoChangeOwner: any[] = [SfAccountChangeOwner.changeOwnerPSI];
        const pageStructureInfoLookup: any[] = [SfAccountChangeOwner.userLookupPSI];

        let rowLocators = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": "Provar Admin",
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
        this.zephyrTest('AutomationAPI', "PROT-2513", 'FS_MAP_SF_LAYOUT_LX_CHANGEOWNER.ACCOUNTS', () => {
            beforeAll(async done => {
                const tcName = 'Account.testcase';
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
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//ul[@class='slds-button-group-list']/li[last()]//button", 10 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click();", dropdown);
                const element: WebElement = await this.findElement(remoteWebdriver, SfAccountChangeOwner.changeOwnerButton.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAccountChangeOwner.changeOwnerButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
                await remoteWebdriver.executeScript("arguments[0].click();", dropdown);
            });
            this.step('Click the Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.changeOwnerButton.testCaseXML1);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.changeOwnerButton.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10000);
            });
            this.step('Mapping the User Lookup field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.userLookup.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.userLookup.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Reference.enterableMode, response.testbuilderState);
            });
            this.step('Set the User Lookup field', async () => {
                await this.modifyAddToTestCase(SfAccountChangeOwner.userLookup.interactionParameters.set);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAccountChangeOwner.userLookup.testCaseXML.set);
                this.assertExecutionStatus("0", SfAccountChangeOwner.userLookup.executionStatus.set, response.runExecutionStatus.currentTestCase);
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
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.userLookup.Xpath1);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.userLookup.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('SF Lookup the User Lookup field', async () => {
                await this.modifyAddToTestCase(SfAccountChangeOwner.userLookup.interactionParameters.sfLookup);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.userLookup.testCaseXML.sfLookup);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.userLookup.executionStatus.sfLookup, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Name field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountChangeOwner.ownerName.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.ownerName.Xpath);
                this.assertTestBuilderState(pageStructureInfoLookup, SfAccountChangeOwner.ownerName.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Click the Name field', async () => {
                await this.modifyAddToTestCase(SfAccountChangeOwner.ownerName.parameters);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.ownerName.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.ownerName.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Transfer open opportunities Checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Check the Transfer open opportunities Checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.checkbox.testCaseXML.check);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.checkbox.executionStatus.check, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Transfer open opportunities checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountChangeOwner.checkbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Uncheck the Transfer open opportunities checkbox', async () => {
                await this.modifyAddToTestCase(SfAccountChangeOwner.checkbox.interactionParameters.uncheck);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.checkbox.testCaseXML.uncheck);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.checkbox.executionStatus.uncheck, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Transfer open opportunities checkbox', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountChangeOwner.checkbox.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.checkbox.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.checkbox.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState);
            });
            this.step('Toggle the Transfer open opportunities checkbox', async () => {
                await this.modifyAddToTestCase(SfAccountChangeOwner.checkbox.interactionParameters.toggle);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.checkbox.testCaseXML.toggle);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.checkbox.executionStatus.toggle, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountChangeOwner.submit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountChangeOwner.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New screen to expand', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10000);
            });
            this.step('Mapping the Change Owner button', async () => {
                const dropdown: WebElement = await this.findElement(remoteWebdriver, "//ul[@class='slds-button-group-list']/li[last()]//button", 10 * 1000);
                await remoteWebdriver.executeScript("arguments[0].click();", dropdown);
                const element: WebElement = await this.findElement(remoteWebdriver, SfAccountChangeOwner.changeOwnerButton.Xpath, 10 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.changeOwnerButton.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAccountChangeOwner.changeOwnerButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
                await remoteWebdriver.executeScript("arguments[0].click();", dropdown);
            });
            this.step('Click the Change Owner button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAccountChangeOwner.changeOwnerButton.testCaseXML);
                this.assertExecutionStatus("0", SfAccountChangeOwner.changeOwnerButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 10000);
            });
            this.step('Mapping the Cancel button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountChangeOwner.cancel.Xpath);
                this.assertTestBuilderState(pageStructureInfoChangeOwner, SfAccountChangeOwner.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Cancel button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAccountChangeOwner.cancel.testCaseXML);
                this.assertExecutionStatus("0", SfAccountChangeOwner.cancel.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}