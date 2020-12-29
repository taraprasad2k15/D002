import { WebDriver, WebElement } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { BaseSpec } from '../BaseSpec';
import { Account } from '../../testdata/sfObjects/Account';
import { Standard } from '../../testdata/sfObjects/Standard';
import { FlexiH1RAccountTeamRLData } from './FlexiH1RAccountTeamRLData';
import { SfCommonFIeld } from '../SfCommonField';
import { join } from 'path';

export class FlexiH1RAccountTeamRLSpec extends BaseSpec {
    public runTest() {
        const connectionName: string = 'Regmain';
        let remoteWebdriver: WebDriver;
        let pageStructureInfo: any[];
        let pageStructureInfoView = [Account.addTeamMemberPsi];
        let pageStructureInfo1 = [FlexiH1RAccountTeamRLData.accountViewPsi];
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
        this.zephyrTest('AutomationAPI', 'PROT-2274', 'FS_MAP_SF_STD_RL_ACCOUNTTEAM.RP.H1R', () => {
            beforeAll(async done => {
                const debug: boolean = false;
                const tcName = 'Account.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
                pageStructureInfo = [FlexiH1RAccountTeamRLData.accountViewPsi];
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
                // const casesRL: WebElement = await this.findElement(remoteWebdriver, "//h2/a/span[normalize-space()='Partners']", 20 * 1000);
                // remoteWebdriver.executeScript("arguments[0].scrollIntoView(true);", casesRL);
                remoteWebdriver.executeScript("scrollBy(0,300)");
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.addDefaultTeam.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.addDefaultTeam.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.addDefaultTeam.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Default Team Button', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.addDefaultTeam.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiH1RAccountTeamRLData.addDefaultTeam.testCaseXML);
                this.assertExecutionStatus("0", FlexiH1RAccountTeamRLData.addDefaultTeam.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Team Members Button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.addTeamMembersBt.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.addTeamMembersBt.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.addTeamMembersBt.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Team Members Button', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.addTeamMembersBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.addTeamMembersBt.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.addTeamMembersBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });

            this.step('Map Team Role field', async () => {
                pageStructureInfo = [Account.addTeamMemberPsi];
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.teamRole.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.teamRole.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.teamRole.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Team Role field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.teamRole.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiH1RAccountTeamRLData.teamRole.testCaseXML);
                this.assertExecutionStatus("0", FlexiH1RAccountTeamRLData.teamRole.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.accountAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.accountAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.accountAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Case Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.caseAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.caseAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Case Access field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.caseAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.caseAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.caseAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Opportunity Access field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.opportunityAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.opportunityAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Opportunity Access field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.opportunityAccess.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.opportunityAccess.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.opportunityAccess.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.user.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.user.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.user.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field for Value Assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.user.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field for Value Assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.accountAccess.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Add Row Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.addRowButton.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.addRowButton.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Add & Do Add Row Button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdWithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdWithRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdWithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.addRowButton.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.addRowButton.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field for Column Assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.user.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.user.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do User field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.user.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.user.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Account Access field for Column Assertion', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.accountAccess.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.accountAccess.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Account Access field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.accountAccess.columnAssertion);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.accountAccess.testCaseXMLColumn);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Delete Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.delete.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.delete.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState, whereColumns);
            });
            this.step('Add & Do Delete Button', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.delete.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.delete.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.delete.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Cancel Button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfCommonFIeld.cancelButton.Xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.cancel.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Performing Value Assertion on Cancel field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdwithRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdwithRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.cancel.testCaseXMLAssert);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
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
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.saveBtOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.saveBtOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
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
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.editActionBt.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                await this.assertTestCaseXML("0", FlexiH1RAccountTeamRLData.editActionBt.testCaseXML);
                this.assertExecutionStatus("0", FlexiH1RAccountTeamRLData.editActionBt.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map User field on Edit', async () => {
                pageStructureInfo = [Account.editTeamMemberPsi];
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.userOnEdit.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.userOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.userOnEdit.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do User field on Edit', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.userOnEdit.modificationParameter);
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
                await this.assertTestCaseXML("0", FlexiH1RAccountTeamRLData.userOnEdit.testCaseXML);
                this.assertExecutionStatus("0", FlexiH1RAccountTeamRLData.userOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Map Team Role field on Edit', async () => {
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.teamRoleOnEdit.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.teamRoleOnEdit.xpath);
                this.assertTestBuilderState(pageStructureInfo, FlexiH1RAccountTeamRLData.teamRoleOnEdit.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
            });
            this.step('Add & Do Team Role field on Edit', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.teamRoleOnEdit.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.teamRoleOnEdit.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.teamRoleOnEdit.executionStatus, response.runExecutionStatus.currentTestCase);
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
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.teamMemberOnView.xpath);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.teamMemberOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiH1RAccountTeamRLData.teamMemberOnView.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
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
                await this.assertTestCaseXML("0", FlexiH1RAccountTeamRLData.teamMemberOnView.testCaseXML);
                this.assertExecutionStatus("0", FlexiH1RAccountTeamRLData.teamMemberOnView.executionStatus, response.runExecutionStatus.currentTestCase);
                remoteWebdriver.navigate().back();
            });
            this.step('Mapping Team Role Field on View Screen for value assertion', async () => {
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiH1RAccountTeamRLData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.modificationParameter);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                const newValues: any = {
                    'type': 'Icon-Successful',
                    'executionStatus': 'Executed',
                    'successfulCount': 1
                };
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
                const testItemId1: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingChildPaused', testItemId1);
                await this.assertTestCaseXML(testItemId1, FlexiH1RAccountTeamRLData.teamRoleOnView.testCaseXML);
                this.assertExecutionStatus(testItemId1, FlexiH1RAccountTeamRLData.teamRoleOnView.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Team Role Field on View Screen for column assertion', async () => {
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.teamRoleOnView.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.teamRoleOnView.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiH1RAccountTeamRLData.teamRoleOnView.fieldDetails, Standard.interaction.readAssert, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
            });
            this.step('Add & Do Team Role Field ', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.teamRoleOnView.columnAssertion);
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
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.teamRoleOnView.testCaseXML1);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.executionStatusAssert, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping Heading on View Screen', async () => {
                await this.findElement(remoteWebdriver, FlexiH1RAccountTeamRLData.heading.xpath, 20 * 1000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.heading.xpath1);
                this.assertTestBuilderState(pageStructureInfo1, FlexiH1RAccountTeamRLData.heading.fieldDetails, Standard.interaction.hover, Standard.applicableInteractions.PageError, response.testbuilderState);
            });
            this.step('Add & Do Heading Field', async () => {
                await this.modifyAddToTestCase(FlexiH1RAccountTeamRLData.heading.rowCount);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.heading.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.heading.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping view all link', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(FlexiH1RAccountTeamRLData.viewAll.xpath);
                this.assertTestBuilderState(pageStructureInfo1, FlexiH1RAccountTeamRLData.viewAll.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState);
            });
            this.step('Add & Do view all link', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, FlexiH1RAccountTeamRLData.viewAll.testCaseXML);
                this.assertExecutionStatus(testItemId, FlexiH1RAccountTeamRLData.viewAll.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}