import { WebDriver, WebElement, TouchSequence } from 'selenium-webdriver';
import { CompleteAction } from '../../../App/automationApi/messages/enum/CompleteAction';
import { RunMode } from '../../../App/automationApi/messages/enum/RunMode';
import { BeginAddToTestCaseResponse } from '../../../App/automationApi/messages/response/BeginAddToTestCaseResponse';
import { CompleteAddToTestCaseResponse } from '../../../App/automationApi/messages/response/CompleteAddToTestCaseResponse';
import { Standard } from '../../testdata/sfObjects/Standard';
import { BaseSpec } from '../BaseSpec';
import { SfNewCaseOpp } from './SfNewCaseOpp';
import { join } from 'path';

export class SfNewCaseOppSpec extends BaseSpec {
	public runTest() {
		const debug: boolean = false;
		const pageStructureInfo: any[] = [SfNewCaseOpp.OppViewPSI];
		const pageStructureInfoQA: any[] = [SfNewCaseOpp.NewCaseViewPSI];
		const pageStructureInfoLookup: any[] = [SfNewCaseOpp.contactLookupPSI];
		this.zephyrTest('AutomationAPI', "PROT-1083", 'FS_MAP_SF_QA_B_LX_NEW CASE.CLICK', () => {
			beforeAll(async done => {
				const tcName = 'Opp NewCase.testcase';
				const absPathForTC = join(__dirname, tcName).replace(/\\/g, '/').replace('/target/build/', '/');
				await this.beforeAll(debug, absPathForTC, tcName, RunMode.TestAuthoring, done);
			}, 2000000);
			beforeEach(() => {
				this.beforeEach();
			});
			afterAll(async done => {
				await this.endTestSession(done);
			});
			this.step('Mapping the New Case button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.newCaseButton.Xpath);
				this.assertTestBuilderState(pageStructureInfo, SfNewCaseOpp.newCase, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the New Case button', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpp.newCaseButton.interactionParameters.click);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.newCaseButton.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.newCaseButton.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Contact Lookup', async () => {
				const remoteWebDriver = await this.getRemoteWebDriver('Regmain');
				await this.findElement(remoteWebDriver, SfNewCaseOpp.contactName.XpathInput);
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.contactName.XpathInput);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpp.contactLookup, Standard.interaction.set, Standard.applicableInteractions.Lookup.enterableMode, response.testbuilderState);
			});
			this.step('SfLookup the Contact Lookup', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpp.contactName.interactionParameters.lookup);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemId);
				this.assertExecutionStatus("0", SfNewCaseOpp.contactName.executionStatus.lookup, response.runExecutionStatus.currentTestCase);
				await this.assertTestCaseXML("0", SfNewCaseOpp.contactName.testCaseXML);				
			});
			this.step('Mapping the Contact Name', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.contactID.Xpath);
				const rowLocators = [
					{
						"label": "Name (Name)",
						"selected": true,
						"value": /AutomationC.*/,
					},
					{
						"label": "Account Name (ACCOUNT_NAME)",
						"selected": false,
					},
					{
						"label": "Phone (CONTACT_PHONE1)",
						"selected": false,
					},
					{
						"label": "Email (CONTACT_EMAIL)",
						"selected": false,
					},
					{
						"label": "Contact Owner Alias (CORE_USERS_ALIAS)",
						"selected": false,
						"value": /.*/,
					}
				];
				this.assertTestBuilderState(pageStructureInfoLookup, SfNewCaseOpp.contactNameField, Standard.interaction.click, Standard.applicableInteractions.ReadOnlyLink, response.testbuilderState, rowLocators);
			});
			this.step('Click the Contact Name', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.contactID.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.contactID.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Status picklist', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.status.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpp.statusField, Standard.interaction.set, Standard.applicableInteractions.Picklist.enterableMode, response.testbuilderState);
			});
			this.step('Set the Status picklist to Closed', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpp.status.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemIdLookupOnscreen: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen', true);
				const newValues: any = {
					'type': 'Icon-Successful',
					'executionStatus': 'Executed',
					'successfulCount': 1
				};
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase2(this.executionStatusTemplate, newValues, testItemIdLookupOnscreen);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				this.executionStatusTemplate = this.miscUtils.updateValueInTestCase(this.executionStatusTemplate, 'type', 'Icon-ExecutingPaused', testItemId);
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.status.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.status.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Subject field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.subject.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpp.subjectField, Standard.interaction.set, Standard.applicableInteractions.Text.enterableMode, response.testbuilderState);
			});
			this.step('Set the Subject field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpp.subject.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.subject.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.subject.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Description field', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.description.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpp.descriptionField, Standard.interaction.set, Standard.applicableInteractions.Textarea.enterableMode, response.testbuilderState);
			});
			this.step('Set the Description field', async () => {
				await this.modifyAddToTestCase(SfNewCaseOpp.description.interactionParameters.set);
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.description.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.description.executionStatus, response.runExecutionStatus.currentTestCase);
			});
			this.step('Mapping the Save button', async () => {
				const response: BeginAddToTestCaseResponse = await this.beginAddToTestCase(SfNewCaseOpp.save.Xpath);
				this.assertTestBuilderState(pageStructureInfoQA, SfNewCaseOpp.saveButton, Standard.interaction.click, Standard.applicableInteractions.Button, response.testbuilderState);
			});
			this.step('Click the Save Button', async () => {
				const response: CompleteAddToTestCaseResponse = await this.completeAddToTestCase(CompleteAction.AddAndDo);
				const testItemId: string = this.miscUtils.findTestItemIdForName(this.testCaseXMLStringTemplate, 'UiWithScreen');
				await this.assertTestCaseXML(testItemId, SfNewCaseOpp.save.testCaseXML);
				this.assertExecutionStatus(testItemId, SfNewCaseOpp.save.executionStatus, response.runExecutionStatus.currentTestCase);
			});
		});
	};
}