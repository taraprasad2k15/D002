import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Account } from '../../testdata/sfObjects/Account';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';
import { SfAccountTeamCX } from './SfAccountTeam';
import { SfAccountLogACall } from '../AccountQA/SfAccountLogACall';

export class SfAccountTeamCXSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfo1: any[];
        const whereColumns: any[] = [
            {
                "label": "Team Member Type (teamMemberType)",
                "selected": true,
            },
            {
                "label": "Team Member (teamMember)",
                "selected": false,
            },
            {
                "label": "Account Access (accountAccess)",
                "selected": false,
            },
            {
                "label": "Opportunity Access (opportunityAccess)",
                "selected": false,
            },
            {
                "label": "Case Access (caseAccess)",
                "selected": false,
            },
            {
                "label": "Team Role (teamRole)",
                "selected": false,
            },
        ];
        this.zephyrTest('AutomationAPI', 'PROT-1780', 'FS_MAP_SF_LAYOUT_CX_ACCOUNT TEAM', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'AccountTeam.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Account.accountViewPsiCX];
                pageStructureInfo1 = [Account.editTeamMemberPsiCX];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map Default Team Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamCX.addDefaultTeam.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.addDefaultTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.addDefaultTeam.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Default Team Button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.addDefaultTeam.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.addDefaultTeam.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.addDefaultTeam.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Team Members Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamCX.addTeamMembersBt.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.addTeamMembersBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.addTeamMembersBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ButtonCX, response.testbuilderState);
            });
            this.step('Add & Do Team Members Button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.addTeamMembersBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.addTeamMembersBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.addTeamMembersBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });

            this.step('Map Team Role field', async () => {
                pageStructureInfo = [Account.addTeamMemberPsiCX];
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamCX.teamRole.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.teamRole.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.teamRole.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Team Role field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.teamRole.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamCX.teamRole.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamCX.teamRole.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.accountAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.accountAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.accountAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Case Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.caseAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.caseAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Case Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.caseAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.caseAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.caseAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Opportunity Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.opportunityAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.opportunityAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Opportunity Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.opportunityAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.opportunityAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.opportunityAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamCX.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.LookupCX.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.user.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.user.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.user.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, {
                    disposition: 'Existing',
                    text: 'Save (save)',
                }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful' ,  testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed' ,  testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1 ,  testItemIdWithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId); 
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.saveBtOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.saveBtOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Scrolling down to Account Team Member RL', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                expect(true).toEqual(true);
                await remoteWebdriver.executeScript("window.scrollBy(0,250)");
                const element: WebElement = await this.findElement(remoteWebdriver, "//h3[normalize-space()='Account Team']", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
                await remoteWebdriver.executeScript("arguments[0].click();", element)
            });
            this.step('Mapping Edit action button', async () => {
                pageStructureInfo = [Account.accountViewPsiCX];
                await this.findElement(remoteWebdriver, SfAccountTeamCX.editbutton.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, {
                    disposition: 'Existing',
                    text: 'Team Edit (Edit)',
                }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Edit button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.editActionBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamCX.editActionBt.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamCX.editActionBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field on Edit', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamCX.userOnEdit.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.userOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamCX.userOnEdit.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do  field on Edit', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.userOnEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValuesWithRow: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValuesWithRow, testItemIdwithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamCX.userOnEdit.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamCX.userOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Team Role field on Edit', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamCX.teamRoleOnEdit.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamCX.teamRoleOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamCX.teamRoleOnEdit.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Team Role field on Edit', async () => {
                await this.modifyAddToTestCase(SfAccountTeamCX.teamRoleOnEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.teamRoleOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.teamRoleOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save button field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                await this.findElement(remoteWebdriver, SfAccountTeamCX.saveBtOnEdit.xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase( SfAccountTeamCX.saveBtOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamCX.saveBtOnEdit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save button field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamCX.saveBtOnEdit.testCaseXML1);
                this.assertExecutionStatus(testItemId, SfAccountTeamCX.saveBtOnEdit.executionStatus1, response.runExecutionStatus.currentTestCase);
            });
       });
    }
}