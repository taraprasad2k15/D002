import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Account } from '../../testdata/sfObjects/Account';
import { Standard } from '../../testdata/sfObjects/Standard';
import { FlexiHSLAccountTeamRLData } from './FlexiHSLAccountTeamRLData';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class FlexiHSLAccountTeamRLSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoView = [Account.addTeamMemberPsi];
        let pageStructureInfo1 = [FlexiHSLAccountTeamRLData.accountViewPsi];
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
        this.zephyrTest('AutomationAPI', 'PROT-2227', 'FS_MAP_SF_STD_RL_ACCOUNTTEAM.RP.HSL', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Account.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiHSLAccountTeamRLData.accountViewPsi];
            }, 200 * 1000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Map Default Team Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, "//li[@title='Related']/a", 20 * 1000);
                remoteWebdriver.executeScript("arguments[0].click();", relatedTab);
                const quickLinks: WebElement = await this.findElement(remoteWebdriver, "//h2[normalize-space()='Related List Quick Links']", 20 * 1000);
                remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", quickLinks);
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.addDefaultTeam.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.addDefaultTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.addDefaultTeam.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Default Team Button', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.addDefaultTeam.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHSLAccountTeamRLData.addDefaultTeam.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSLAccountTeamRLData.addDefaultTeam.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Team Members Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.addTeamMembersBt.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.addTeamMembersBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.addTeamMembersBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Team Members Button', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.addTeamMembersBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.addTeamMembersBt.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.addTeamMembersBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });

            this.step('Map Team Role field', async () => {
                pageStructureInfo = [Account.addTeamMemberPsi];
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.teamRole.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.teamRole.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.teamRole.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Team Role field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.teamRole.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHSLAccountTeamRLData.teamRole.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSLAccountTeamRLData.teamRole.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.accountAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.accountAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.accountAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Case Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.caseAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.caseAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Case Access field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.caseAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.caseAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.caseAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Opportunity Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.opportunityAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.opportunityAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Opportunity Access field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.opportunityAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.opportunityAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.opportunityAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.user.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.user.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.user.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Row Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.addRowButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.addRowButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Add Row Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdWithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.addRowButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.addRowButton.executionStatus, response.runExecutionStatus.currentTestCase);
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
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.saveBtOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.saveBtOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Click on Show more actions dropdown', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                expect(true).toEqual(true);
                await remoteWebdriver.executeScript("window.scrollBy(0,250)");
                const element: WebElement = await this.findElement(remoteWebdriver, "//a/span[normalize-space()='Account Team']/ancestor::article//td//lightning-icon", 10000);
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", element);
                await remoteWebdriver.executeScript("arguments[0].click();", element)
            });
            this.step('Mapping Edit action button', async () => {
                await this.findElement(remoteWebdriver, SfCommonFIeld.editActionButton.Xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.editActionButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo1, {
                    disposition: 'Existing',
                    text: 'Team Edit (Edit)',
                }, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Edit button', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.editActionBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiHSLAccountTeamRLData.editActionBt.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSLAccountTeamRLData.editActionBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field on Edit', async () => {
                pageStructureInfo = [Account.editTeamMemberPsi];
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.userOnEdit.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.userOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.userOnEdit.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do User field on Edit', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.userOnEdit.modificationParameter);
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
                await this.assertTestCaseXML("0", FlexiHSLAccountTeamRLData.userOnEdit.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSLAccountTeamRLData.userOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Team Role field on Edit', async () => {
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.teamRoleOnEdit.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.teamRoleOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiHSLAccountTeamRLData.teamRoleOnEdit.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Team Role field on Edit', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.teamRoleOnEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
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
            this.step('Mapping Team Member Field on View Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.teamMemberOnView.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.teamMemberOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiHSLAccountTeamRLData.teamMemberOnView.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
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
                await this.assertTestCaseXML("0", FlexiHSLAccountTeamRLData.teamMemberOnView.testCaseXML);
                this.assertExecutionStatus("0", FlexiHSLAccountTeamRLData.teamMemberOnView.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            this.step('Mapping Team Role Field on View Screen for value assertion', async () => {
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiHSLAccountTeamRLData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnView.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnView.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Team Role Field on View Screen for column assertion', async () => {
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiHSLAccountTeamRLData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.teamRoleOnView.columnAssertion);
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
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnView.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.teamRoleOnView.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Heading on View Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiHSLAccountTeamRLData.heading.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.heading.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiHSLAccountTeamRLData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Add & Do Heading Field', async () => {
                await this.modifyAddToTestCase(FlexiHSLAccountTeamRLData.heading.rowCount);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.heading.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.heading.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping view all link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiHSLAccountTeamRLData.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiHSLAccountTeamRLData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do view all link', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiHSLAccountTeamRLData.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiHSLAccountTeamRLData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}