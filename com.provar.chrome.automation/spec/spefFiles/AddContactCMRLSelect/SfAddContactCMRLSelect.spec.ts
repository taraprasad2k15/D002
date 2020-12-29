import { WebDriver, WebElement} from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfAddContactCMRLSelect } from './SfAddContactCMRLSelect';
import { join } from 'path';

export class SfAddContactCMRLSelectSpec extends BaseSpec {
    public runTest() {
        const debug: boolean = false;
        const connectionName = 'Regmain';
        let remoteWebdriver: WebDriver;
        const pageStructureInfoQA: any[] = [SfAddContactCMRLSelect.campaignMemberPSI];
        const pageStructureInfoView: any[] = [SfAddContactCMRLSelect.campaignViewPSI];
        const pageStructureInfoAdd: any[] = [SfAddContactCMRLSelect.addToCampaignPSI];
    
        let rowLocators = [
            {
                "label": "Name (Name)",
                "selected": true,
                "value": /AutomationContact[a-zA-Z]{4}/,
            },
            {
                "label": "Account Name (Account_Name)",
                "selected": false,
                "value": /AutomationAccount[a-zA-Z]{4}/,
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
                "label": "Contact Owner Alias (Owner_Alias)",
                "selected": false,
                "value": /.*/,
            },
        ];

        this.zephyrTest('AutomationAPI', "PROT-1512", 'FS_MAP_SF_LAYOUT_LX_CM_ADD CONTACTS.SELECT', () => {
            beforeAll(async done => {
                const tcName = 'AddContactCMRLSelect.testcase';
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
                const relatedTab: WebElement = await this.findElement(remoteWebdriver, SfAddContactCMRLSelect.relatedTab.Xpath, 10000);
                //await relatedTab.click();
                await remoteWebdriver.executeScript("arguments[0].scrollIntoView(true)", relatedTab);
                await remoteWebdriver.executeScript("arguments[0].click()",relatedTab);
                await this.findElement(remoteWebdriver, SfAddContactCMRLSelect.addContact.Xpath, 10000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.addContact.Xpath);
                this.assertTestBuilderState(pageStructureInfoView, SfAddContactCMRLSelect.addContact.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Add Contact button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.addContact.testCaseXML); 
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.addContact.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the ByKeyword field', async () => {
                const remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddContactCMRLSelect.byKeyword.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.byKeyword.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddContactCMRLSelect.byKeyword.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('SF Lookup the ByKeyword field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSelect.byKeyword);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddContactCMRLSelect.byKeyword.testCaseXML);
                this.assertExecutionStatus("0", SfAddContactCMRLSelect.byKeyword.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Select Row checkbox', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.selectRow.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddContactCMRLSelect.selectRow.fieldDetails, Standard.interaction.check, Standard.applicableInteractions.Checkbox.enterableMode, response.testbuilderState, rowLocators);
            });
            this.step('Check the Select Row checkbox', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                const testItemIdLookup: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdLookup);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdLookup);
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.selectRow.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.selectRow.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Next button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.next.Xpath);
                this.assertTestBuilderState(pageStructureInfoQA, SfAddContactCMRLSelect.next.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Next button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemIdRow: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithRow', true);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemIdRow);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemIdRow);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.next.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.next.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            it('Waiting for New Screen to open', async done => {
				expect(true).toEqual(true);
				setTimeout(async () => {
					done();
				}, 10000);
			});
            this.step('Mapping the Campaign field', async () => {
                remoteWebdriver = await this.getRemoteWebDriver(connectionName);
                await this.findElement(remoteWebdriver, SfAddContactCMRLSelect.campaign.Xpath, 20000);
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.campaign.XpathC);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSelect.campaign.fieldDetails, Standard.interaction.sfLookup, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Campaign field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSelect.campaign);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-Successful', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'executionStatus', 'Executed', testItemId);
                this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'successfulCount', 1, testItemId);
                await this.assertTestCaseXML("0", SfAddContactCMRLSelect.campaign.testCaseXML);
                this.assertExecutionStatus("0", SfAddContactCMRLSelect.campaign.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Member Status field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.memberStatus.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSelect.memberStatus.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Member Status field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSelect.memberStatus);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.memberStatus.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.memberStatus.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Exisitng Campaign Member field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.exisitngMember.Xpath1);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSelect.exisitngMember.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.RadioButton, response.testbuilderState);
            });
            this.step('Assert the Exisitng Campagin Member field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSelect.exisitngMember);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.exisitngMember.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.exisitngMember.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Selected Number field', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.selectedNumber.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSelect.selectedNumber.fieldDetails, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
            });
            this.step('Assert the Selected Number field', async () => {
                await this.modifyAddToTestCase(SfAddContactCMRLSelect.selectedNumber);
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.selectedNumber.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.selectedNumber.executionStatus, response.runExecutionStatus.currentTestCase);
            });
            this.step('Mapping the Submit button', async () => {
                const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfAddContactCMRLSelect.submit.Xpath);
                this.assertTestBuilderState(pageStructureInfoAdd, SfAddContactCMRLSelect.submit.fieldDetails, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
            });
            this.step('Click the Submit button', async () => {
                const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
                const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
                await this.assertTestCaseXML(testItemId, SfAddContactCMRLSelect.submit.testCaseXML);
                this.assertExecutionStatus(testItemId, SfAddContactCMRLSelect.submit.executionStatus, response.runExecutionStatus.currentTestCase);
            });
        });
    }
}