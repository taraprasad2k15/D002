import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAddLeadCMRLSelect } from './SfAddLeadCMRLSelect';
import { join } from 'path';

export class SfAddLeadCMRLSelectSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfAddLeadCMRLSelect.campaignMemberPSI];
        const pageStructureInfoView: any[] = [SfAddLeadCMRLSelect.campaignViewPSI];
        const pageStructureInfoAdd: any[] = [SfAddLeadCMRLSelect.addToCampaignPSI];
    
        let rowLocators = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationLead[a-zA-Z]{4}/,
            },
            {
                "label": "Title (Title)",
                "selected": false,
                "value": /AutomationTitle[a-zA-Z]{4}/,
            },
            {
                "label": "Company (Company)",
                "selected": false,
                "value": /AutomationCompany[a-zA-Z]{4}/,
            },
            {
                "label": "Phone (Phone)",
                "selected": false,
                "value": /99900[0-9]{5}/,
            },
            {
                "label": "Email (Email)",
                "selected": false,
                "value": /[a-zA-Z]{4}e@mail.com/,
            },
            {
                "label": "Lead Status (Status)",
                "selected": false,
                "value": "New",
            },
            {
                "label": "Owner Alias (Owner_Alias)",
                "selected": false,
                "value": /.*/,
            },
        ];

        this.zephyrTest('AutomationAPI', "PROT-1513", 'FS_MAP_SF_LAYOUT_LX_CM_ADD LEADS.SELECT', () => {
            beforeAll(async done => {
                const tcName = 'AddLeadCMRLSelect.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Add Lead button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, SfAddLeadCMRLSelect.relatedTab.Xpath, 10000);
                //await relatedTab.click();
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true)", relatedTab);
                await remoteWebdriver.executeScript("arguments[0].click()",relatedTab);
                await this.findElement(remoteWebdriver, SfAddLeadCMRLSelect.addLead.Xpath, 10000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.addLead.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAddLeadCMRLSelect.addLead.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Add Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.addLead.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.addLead.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the ByKeyword field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddLeadCMRLSelect.byKeyword.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.byKeyword.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddLeadCMRLSelect.byKeyword.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('SF Lookup the ByKeyword field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSelect.byKeyword);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddLeadCMRLSelect.byKeyword.testCaseXML);
                this.assertExecutionStatus("0", SfAddLeadCMRLSelect.byKeyword.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select Row checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.selectRow.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddLeadCMRLSelect.selectRow.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocators);
            });
            this.step('Check the Select Row checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.selectRow.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.next.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddLeadCMRLSelect.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.next.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.next.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Campaign field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddLeadCMRLSelect.campaign.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.campaign.XpathC);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSelect.campaign.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Campaign field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSelect.campaign);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddLeadCMRLSelect.campaign.testCaseXML);
                this.assertExecutionStatus("0", SfAddLeadCMRLSelect.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Member Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.memberStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSelect.memberStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Member Status field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSelect.memberStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.memberStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.memberStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Exisitng Campaign Member field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.exisitngMember.Xpath1);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSelect.exisitngMember.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.RadioButton, response.testbuilderState);
            });
            this.step('Assert the Exisitng Campagin Member field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSelect.exisitngMember);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.exisitngMember.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.exisitngMember.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Selected Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.selectedNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSelect.selectedNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Selected Number field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSelect.selectedNumber);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.selectedNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.selectedNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSelect.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSelect.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSelect.submit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSelect.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}