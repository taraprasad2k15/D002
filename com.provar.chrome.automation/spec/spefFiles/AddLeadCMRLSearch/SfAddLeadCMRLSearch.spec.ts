import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAddLeadCMRLSearch } from './SfAddLeadCMRLSearch';
import { join } from 'path';

export class SfAddLeadCMRLSearchSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfAddLeadCMRLSearch.campaignMemberPSI];
        const pageStructureInfoView: any[] = [SfAddLeadCMRLSearch.campaignViewPSI];
        const pageStructureInfoAdd: any[] = [SfAddLeadCMRLSearch.addToCampaignPSI];

        this.zephyrTest('AutomationAPI', "PROT-1125", 'FS_MAP_SF_LAYOUT_LX_CM_ADD LEADS.SEARCH', () => {
            beforeAll(async done => {
                const tcName = 'AddLeadCMRLSearch.testcase';
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
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, SfAddLeadCMRLSearch.relatedTab.Xpath, 10000);
                await relatedTab.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.addLead.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAddLeadCMRLSearch.addLead.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Add Lead button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.addLead.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.addLead.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the ByKeyword field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddLeadCMRLSearch.byKeyword.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.byKeyword.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddLeadCMRLSearch.byKeyword.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Set the ByKeyword field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSearch.byKeyword);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddLeadCMRLSearch.byKeyword.testCaseXML);
                this.assertExecutionStatus("0", SfAddLeadCMRLSearch.byKeyword.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.next.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddLeadCMRLSearch.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.next.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.next.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Campaign field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddLeadCMRLSearch.campaign.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.campaign.XpathC);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSearch.campaign.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Campaign field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSearch.campaign);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddLeadCMRLSearch.campaign.testCaseXML);
                this.assertExecutionStatus("0", SfAddLeadCMRLSearch.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Member Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.memberStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSearch.memberStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Member Status field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSearch.memberStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.memberStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.memberStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Exisitng Campaign Member field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.exisitngMember.Xpath1);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSearch.exisitngMember.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.RadioButton, response.testbuilderState);
            });
            this.step('Assert the Exisitng Campagin Member field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSearch.exisitngMember);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.exisitngMember.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.exisitngMember.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Selected Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.selectedNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSearch.selectedNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Selected Number field', async () => {
                await this.modifyAddToTestCase(SfAddLeadCMRLSearch.selectedNumber);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.selectedNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.selectedNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddLeadCMRLSearch.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddLeadCMRLSearch.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddLeadCMRLSearch.submit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddLeadCMRLSearch.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}