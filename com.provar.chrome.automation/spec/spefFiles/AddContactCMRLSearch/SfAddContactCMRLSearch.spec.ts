import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAddContactCMRLSearch } from './SfAddContactCMRLSearch';
import { join } from 'path';

export class SfAddContactCMRLSearchSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfAddContactCMRLSearch.campaignMemberPSI];
        const pageStructureInfoView: any[] = [SfAddContactCMRLSearch.campaignViewPSI];
        const pageStructureInfoAdd: any[] = [SfAddContactCMRLSearch.addToCampaignPSI];

        this.zephyrTest('AutomationAPI', "PROT-1514", 'FS_MAP_SF_LAYOUT_LX_CM_ADD CONTACTS.SEARCH', () => {
            beforeAll(async done => {
                const tcName = 'AddContactCMRLSearch.testcase';
                const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
                await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
            }, 200000);
            beforeEach(() => {
                this.beforeEach();
            });
            afterAll(async done => {
                await this.endTestSession(done);
            });
            this.step('Mapping the Add Contact button', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, SfAddContactCMRLSearch.relatedTab.Xpath, 10000);
                await relatedTab.click();
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.addContact.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAddContactCMRLSearch.addContact.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Add Contact button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.addContact.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.addContact.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the ByKeyword field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddContactCMRLSearch.byKeyword.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.byKeyword.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddContactCMRLSearch.byKeyword.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Set the ByKeyword field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSearch.byKeyword);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddContactCMRLSearch.byKeyword.testCaseXML);
                this.assertExecutionStatus("0", SfAddContactCMRLSearch.byKeyword.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.next.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddContactCMRLSearch.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.next.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.next.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Campaign field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddContactCMRLSearch.campaign.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.campaign.XpathC);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSearch.campaign.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Campaign field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSearch.campaign);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddContactCMRLSearch.campaign.testCaseXML);
                this.assertExecutionStatus("0", SfAddContactCMRLSearch.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Member Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.memberStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSearch.memberStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Member Status field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSearch.memberStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.memberStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.memberStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Exisitng Campaign Member field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.exisitngMember.Xpath1);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSearch.exisitngMember.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.RadioButton, response.testbuilderState);
            });
            this.step('Assert the Exisitng Campagin Member field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSearch.exisitngMember);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.exisitngMember.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.exisitngMember.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Selected Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.selectedNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSearch.selectedNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Selected Number field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSearch.selectedNumber);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.selectedNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.selectedNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSearch.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSearch.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSearch.submit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSearch.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}