import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Account } from '../../testdata/sfObjects/Account';
import { Standard } from '../../testdata/sfObjects/Standard';
import { SfAccountTeamData } from './SfAccountTeamData';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class SfAccountTeamSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoView = [Account.addTeamMemberPsi];
        let pageStructureInfo1 = [SfAccountTeamData.accountViewPsi];
        const whereColumns: any[] = [
            {
                "label": "User (user)",
                "selected": true,
            },
            {
                "label": "Team Role (teamRole)",
                "selected": false,
            },
            {
                "label": "Account Access (accountAccess)",
                "selected": false,
            },
            {
                "label": "Case Access (caseAccess)",
                "selected": false,
            },
            {
                "label": "Opportunity Access (opportunityAccess)",
                "selected": false,
            }
        ];
        const rowLocators: any[] = [
            {
                "label": "Team Member (MEMBER_NAME)",
                "selected": true,
                "value": "Provar Admin"
            },
            {
                "label": "Team Role (TEAM_MEMBER_ROLE)",
                "selected": false,
                "value": "Executive Sponsor"
            },
        ];
        this.zephyrTest('AutomationAPI', 'PROT-1135', 'FS_MAP_SF_LAYOUT_LX_AT_ADD DEFAULT TEAM.ADD', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'AccountTeam.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [Account.accountViewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map Default Team Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamData.addDefaultTeam.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.addDefaultTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.addDefaultTeam.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Default Team Button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.addDefaultTeam.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.addDefaultTeam.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.addDefaultTeam.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1136', 'FS_MAP_SF_LAYOUT_LX_AT_ADD TEAM MEMBERS.ADD', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Map Add Team Members Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamData.addTeamMembersBt.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.addTeamMembersBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.addTeamMembersBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Team Members Button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.addTeamMembersBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.addTeamMembersBt.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.addTeamMembersBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });

            this.step('Map Team Role field', async () => {
                pageStructureInfo = [Account.addTeamMemberPsi];
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAccountTeamData.teamRole.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.teamRole.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.teamRole.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Team Role field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.teamRole.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamData.teamRole.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamData.teamRole.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.accountAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.accountAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.accountAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Case Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.caseAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.caseAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Case Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.caseAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.caseAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.caseAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Opportunity Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.opportunityAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.opportunityAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Opportunity Access field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.opportunityAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.opportunityAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.opportunityAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.user.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.user.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.user.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Row Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.addRowButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.addRowButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Add Row Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdWithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.addRowButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.addRowButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Cancel Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.cancelButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel Button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.cancelButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Save Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, {
                    disposition: 'Existing',
                    text: 'Save Button (saveButton)',
                }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.saveBtOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.saveBtOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1137', 'FS_MAP_SF_LAYOUT_LX_AT_Edit TEAM MEMBERS.EDIT', () => {
            beforeEach(() => {
                this.beforeEach();
            });
            this.step('Click on Show more actions dropdown', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                expect(true).toEqual(true);
                await remoteWebdriver.executeScript("window.scrollBy(0,250)");
                const element: WebElement = await this.findElement(remoteWebdriver, "(//li[contains(@class,'teamRow')]//span[contains(normalize-space(.),'Show')])[1]", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
                await remoteWebdriver.executeScript("arguments[0].click();", element)
            });
            this.step('Mapping Edit action button', async () => {
                pageStructureInfo = [Account.accountViewPsi];
                await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, {
                    disposition: 'Existing',
                    text: 'Team Edit (Edit)',
                }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Edit button', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.editActionBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamData.editActionBt.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamData.editActionBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field on Edit', async () => {
                pageStructureInfo = [Account.editTeamMemberPsi];
                await this.findElement(remoteWebdriver, SfAccountTeamData.userOnEdit.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.userOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.userOnEdit.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do User field on Edit', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.userOnEdit.modificationParameter);
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
                await this.assertTestCaseXML("0", SfAccountTeamData.userOnEdit.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamData.userOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Team Role field on Edit', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamData.teamRoleOnEdit.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.teamRoleOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, SfAccountTeamData.teamRoleOnEdit.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Team Role field on Edit', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.teamRoleOnEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.teamRoleOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.teamRoleOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Save & New button field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveAndNewButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveAndNewButton2, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save & New button field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveAndNewButton2.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.saveAndNewButton2.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Sleep for 4 seconds', async done => {
                expect(true).toEqual(true);
                setTimeout(async () => {
                    done();
                }, 4 * 1000);
            }, 5 * 1000);
            this.step('Mapping Save button field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver('Regmain');
                await this.findElement(remoteWebdriver, SfCommonFIeld.saveButton.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.saveButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.saveButtonField, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Save button field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.saveButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.saveButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel button field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, Standard.cancelButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Cancel button field', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfCommonFIeld.cancelButton.testCaseXML);
                this.assertExecutionStatus(testItemId, SfCommonFIeld.cancelButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
        this.zephyrTest('AutomationAPI', 'PROT-1866', 'FS_MAP_SF_LAYOUT_LX_RL_AT_TEAM MEMBERS', () => {
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping Team Member Field on View Screen', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamData.teamMemberOnView.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.teamMemberOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamData.teamMemberOnView.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Member Field for click interaction', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", SfAccountTeamData.teamMemberOnView.testCaseXML);
                this.assertExecutionStatus("0", SfAccountTeamData.teamMemberOnView.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            this.step('Mapping Team Role Field on View Screen for value assertion', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.teamRoleOnView.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.teamRoleOnView.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Team Role Field on View Screen for column assertion', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.teamRoleOnView.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId1);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.teamRoleOnView.testCaseXML1);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.teamRoleOnView.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Heading on View Screen', async () => {
                await this.findElement(remoteWebdriver, SfAccountTeamData.heading.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.heading.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Add & Do Heading Field', async () => {
                await this.modifyAddToTestCase(SfAccountTeamData.heading.rowCount);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.heading.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.heading.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping view all link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAccountTeamData.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo1, SfAccountTeamData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do view all link', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAccountTeamData.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAccountTeamData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}